/**
 * Receives one survey answer (JSON, sent as text/plain) and appends it to the bound Google Sheet.
 * Tab "responses": one row per answer; new question IDs become new columns automatically.
 * Tab "contacts":  e-mails of people who agreed to an interview, with the date and role only.
 *                  No link to the "responses" row. Delete this tab after the interviews.
 * Deploy: Extensions → Apps Script → paste this file → Deploy → New deployment → Web app,
 *         Execute as: Me, Who has access: Anyone. Copy the Web app URL into config.js.
 */
const FIXED = ["received_at", "version", "lang", "duration_s"];
const MAX_LEN = 1000;

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.website) return out({ ok: true });                 // honeypot filled: ignore bots
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("responses") || ss.insertSheet("responses");

    const answers = data.answers || {};
    let header = sheet.getLastRow() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
    if (!header.length) { header = FIXED.slice(); }
    Object.keys(answers).forEach(k => { if (header.indexOf(k) === -1) header.push(k); });   // the order the questions were answered = question order
    sheet.getRange(1, 1, 1, header.length).setValues([header]).setFontWeight("bold");
    sheet.setFrozenRows(1);

    const row = header.map(h => {
      if (h === "received_at") return new Date();
      if (h === "version") return clean(data.v);
      if (h === "lang") return clean(data.lang);
      if (h === "duration_s") return typeof data.duration_s === "number" ? data.duration_s : "";
      return h in answers ? clean(answers[h]) : "";
    });
    sheet.appendRow(row);

    if (data.contact && data.contact.email) {
      const c = ss.getSheetByName("contacts") || ss.insertSheet("contacts");
      if (!c.getLastRow()) c.appendRow(["date", "email", "role"]);
      c.appendRow([Utilities.formatDate(new Date(), "Europe/Chisinau", "yyyy-MM-dd"), clean(data.contact.email), clean(data.contact.role)]);
    }
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function clean(v) {
  if (typeof v === "number") return v;
  let s = String(v == null ? "" : v).slice(0, MAX_LEN);
  if (/^[=+\-@]/.test(s)) s = "'" + s;                           // stop formulas typed into free text
  return s;
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
