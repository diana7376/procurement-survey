// Survey engine: one question per screen, RO/EN, skip logic, sends one JSON row to Google Sheets.
(function () {
  const S = window.SURVEY, END = (window.SURVEY_ENDPOINT || "").trim();
  const TEST = !END || new URLSearchParams(location.search).has("test");
  const UI = {
    ro: { next: "Continuă", back: "Înapoi", send: "Trimite", sending: "Se trimite…", of: "din", choose: "Alegeți un răspuns.",
          rows: "Răspundeți la fiecare rând.", na: "n-am încercat", email: "Adresa de e-mail nu pare corectă.",
          fail: "Nu am putut trimite. Verificați conexiunea și încercați din nou.", optional: "opțional", keys: "Puteți folosi tastele 1–9 și Enter." },
    en: { next: "Continue", back: "Back", send: "Send", sending: "Sending…", of: "of", choose: "Choose an answer.",
          rows: "Answer every row.", na: "didn't try", email: "This e-mail address doesn't look right.",
          fail: "We couldn't send it. Check your connection and try again.", optional: "optional", keys: "You can use keys 1–9 and Enter." },
    ru: { next: "Далее", back: "Назад", send: "Отправить", sending: "Отправка…", of: "из", choose: "Выберите ответ.",
          rows: "Ответьте на каждую строку.", na: "нет опыта", email: "Адрес e-mail выглядит неправильно.",
          fail: "Не удалось отправить. Проверьте подключение и попробуйте снова.", optional: "необязательно", keys: "Можно использовать клавиши 1–9 и Enter." }
  };
  const COL = { ro: 1, en: 2, ru: 3 };
  const L = o => o[COL[lang]] || o[1];          // label of an option or row in the current language
  let lang = "ro", step = 0, answers = {}, email = "", t0 = 0, sent = false;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]));

  { const p = new URLSearchParams(location.search).get("lang"); if (p === "en" || p === "ru") lang = p; }   // Romanian by default; ?lang=ru or ?lang=en
  if (TEST) $("testBadge").hidden = false;

  const flow = () => ["intro", ...S.questions.filter(q => q.enabled !== false && (!q.showIf || q.showIf(answers))), "done"];
  const t = x => x[lang];

  function answered(q) {
    const a = answers[q.id];
    if (q.optional) return true;
    if (q.type === "scale") return q.rows.every(r => answers[q.id + r[0]] !== undefined);
    if (q.type === "multi") return Array.isArray(a) && a.length > 0;
    return a !== undefined && a !== "";
  }

  function render() {
    const f = flow(), cur = f[step], sc = $("screen"), qs = f.length - 2;
    sc.classList.remove("enter"); void sc.offsetWidth; sc.classList.add("enter");
    const pct = cur === "intro" ? 0 : cur === "done" ? 100 : Math.round(step / (qs + 1) * 100);
    $("progress").firstElementChild.style.width = pct + "%"; $("progress").setAttribute("aria-valuenow", pct);
    $("back").hidden = step === 0 || cur === "done"; $("back").textContent = UI[lang].back;
    $("count").textContent = cur === "intro" || cur === "done" ? "" : `${step} ${UI[lang].of} ${qs}`;
    $("next").hidden = cur === "done";
    if (cur === "intro") {
      const x = S.intro[lang];
      const ab = S.about[lang];
      sc.innerHTML = `<h1>${esc(x.title)}</h1><p class="body">${esc(x.body)}</p>`
        + `<section class="about"><h2>${esc(ab.label)}</h2><p class="body">${esc(ab.text)}</p>`
        + `<div class="facts">${ab.facts.map(([n, t]) => `<div class="fact"><b>${esc(n)}</b><span>${esc(t)}</span></div>`).join("")}</div>`
        + `<small>${esc(ab.note)}</small></section>`;
      $("next").textContent = x.start; $("next").disabled = false; return;
    }
    if (cur === "done") {
      const x = S.done[lang];
      sc.innerHTML = `<div class="done-mark" aria-hidden="true">✓</div><h1>${esc(x.title)}</h1><p class="body">${esc(x.body)}</p>`; return;
    }
    const q = cur, last = step === f.length - 2;
    let h = `<h1 id="qt">${esc(q[lang])}</h1>`;
    if (q.optional) h += `<p class="hint">${esc(UI[lang].optional)}</p>`;
    if (q.hint) h += `<p class="hint">${esc(q.hint[lang])}</p>`;
    if (q.type === "single" || q.type === "multi" || q.type === "interview") {
      const multi = q.type === "multi";
      h += `<div class="opts" role="${multi ? "group" : "radiogroup"}" aria-labelledby="qt">` + q.options.map((o, i) => {
        const on = multi ? (answers[q.id] || []).includes(o[0]) : answers[q.id] === o[0];
        return `<button type="button" class="opt" role="${multi ? "checkbox" : "radio"}" aria-checked="${on}" data-v="${esc(o[0])}"><span class="key">${i + 1}</span><span>${esc(L(o))}</span></button>`;
      }).join("") + `</div>`;
      if (q.type === "interview" && answers[q.id] === "yes")
        h += `<label class="email"><small>${esc(q.email[lang])}</small><input type="email" id="email" inputmode="email" value="${esc(email)}" placeholder="nume@exemplu.md"></label>`;
    }
    if (q.type === "scale") {
      h += `<div class="ends" aria-hidden="true"><span>1 · ${esc(q.low[lang])}</span><span>5 · ${esc(q.high[lang])}</span></div><div class="scale">` + q.rows.map(r => {
        const key = q.id + r[0], v = answers[key];
        const btn = (val, label, cls = "") => `<button type="button" class="${cls}" role="radio" aria-checked="${v === val}" data-k="${key}" data-v="${val}">${label}</button>`;
        return `<div class="srow" role="radiogroup" aria-label="${esc(L(r))}"><span class="lbl">${esc(L(r))}</span><div class="dots">${[1, 2, 3, 4, 5].map(n => btn(n, n)).join("")}${q.na ? btn("na", UI[lang].na, "na") : ""}</div></div>`;
      }).join("") + `</div>`;
    }
    if (q.type === "text") h += `<textarea id="txt" maxlength="1000" aria-labelledby="qt">${esc(answers[q.id] || "")}</textarea>`;
    h += `<p class="err" id="err" hidden></p>`;
    sc.innerHTML = h;
    $("next").textContent = last ? UI[lang].send : UI[lang].next;
    bind(q);
    refresh(q);
  }

  function refresh(q) { $("next").disabled = !answered(q); }

  function bind(q) {
    const sc = $("screen");
    sc.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const v = b.dataset.v;
      if (q.type === "multi") {
        const a = new Set(answers[q.id] || []); a.has(v) ? a.delete(v) : a.add(v); answers[q.id] = [...a];
        b.setAttribute("aria-checked", a.has(v)); refresh(q);
      } else {
        answers[q.id] = v;
        if (q.type === "interview") { render(); if (v === "yes") $("email")?.focus(); return; }
        sc.querySelectorAll(".opt").forEach(x => x.setAttribute("aria-checked", x === b)); refresh(q);
        if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setTimeout(() => { if (answers[q.id] === v) go(1); }, 280);
      }
    });
    sc.querySelectorAll(".dots button").forEach(b => b.onclick = () => {
      const k = b.dataset.k; answers[k] = b.dataset.v === "na" ? "na" : +b.dataset.v;
      b.parentElement.querySelectorAll("button").forEach(x => x.setAttribute("aria-checked", x === b)); refresh(q);
    });
    const ta = $("txt"); if (ta) ta.oninput = () => { answers[q.id] = ta.value.slice(0, 1000); };
    const em = $("email"); if (em) em.oninput = () => { email = em.value.trim(); };
  }

  function go(d) {
    const f = flow(), cur = f[step];
    if (d > 0 && cur !== "intro" && cur !== "done") {
      if (!answered(cur)) { const e = $("err"); e.textContent = cur.type === "scale" ? UI[lang].rows : UI[lang].choose; e.hidden = false; return; }
      if (cur.type === "interview" && answers[cur.id] === "yes" && email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { const e = $("err"); e.textContent = UI[lang].email; e.hidden = false; return; }
      if (step === f.length - 2) return submit();
    }
    if (cur === "intro" && d > 0 && !t0) t0 = Date.now();
    step = Math.max(0, Math.min(flow().length - 1, step + d));
    render(); window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function payload() {
    const keep = new Set(flow().filter(x => typeof x === "object").flatMap(q => q.type === "scale" ? q.rows.map(r => q.id + r[0]) : [q.id]));
    const out = {};
    for (const [k, v] of Object.entries(answers)) if (keep.has(k)) out[k] = Array.isArray(v) ? v.join(";") : v;
    return { v: S.version, lang, duration_s: t0 ? Math.round((Date.now() - t0) / 1000) : null, answers: out,
             contact: answers.Q11 === "yes" && email ? { email, role: answers.Q1 || "" } : null, website: $("website").value };
  }

  async function submit() {
    if (sent) return;
    const btn = $("next"); btn.disabled = true; btn.textContent = UI[lang].sending;
    const body = payload();
    try {
      if (TEST) { console.log("[test mode] payload", body); await new Promise(r => setTimeout(r, 500)); }
      else await fetch(END, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(body) });
      sent = true; try { localStorage.setItem("survey-sent", S.version); } catch (e) {}
      step = flow().length - 1; render();
    } catch (e) {
      const er = $("err"); er.textContent = UI[lang].fail; er.hidden = false; btn.disabled = false; btn.textContent = UI[lang].send;
    }
  }

  function setLang(l) {
    lang = l; document.documentElement.lang = l;
    document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === l));
    document.querySelectorAll("[data-ro]").forEach(el => el.textContent = el.dataset[l] || el.dataset.ro);
    document.title = { ro: "Date publice, legate · Chestionar", ru: "Открытые данные, связанные · Опрос", en: "Public data, linked · Survey" }[l];
    render();
  }

  document.querySelectorAll(".lang button").forEach(b => b.onclick = () => setLang(b.dataset.lang));
  $("survey").onsubmit = e => { e.preventDefault(); go(1); };
  $("back").onclick = () => go(-1);
  document.addEventListener("keydown", e => {
    if (e.target.closest("textarea, input")) return;
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= 9) { const o = document.querySelectorAll("#screen .opt")[n - 1]; if (o) { o.click(); e.preventDefault(); } }
  });
  setLang(lang);
})();
