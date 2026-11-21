# Survey site

A static survey (HTML, CSS, JavaScript; no build step) for the team's validation survey. Answers go to a Google Sheet through Google Apps Script.
Questions: `questions.js` (same content as `docs/survey-questions.md`).

| File | What it is |
|---|---|
| `index.html`, `style.css` | Page (design "Focus card"): a thin project banner, one centred card with one question at a time |
| `questions.js` | All questions in Romanian, Russian and English, with skip logic; the start-screen facts |
| `app.js` | Survey engine: one question per screen, keys 1–9 and Enter, progress, sending |
| `config.js` | The Google Apps Script URL (empty = test mode) |
| `apps-script/Code.gs` | Receives answers and writes them to the sheet |

## 1. Connect the Google Sheet (10 minutes)

1. Create a Google Sheet, e.g. "Survey – open procurement data".
2. Extensions → Apps Script. Delete the sample code, paste `apps-script/Code.gs`, save.
3. Deploy → New deployment → type **Web app**. Execute as: **Me**. Who has access: **Anyone**. Deploy, and allow the permissions.
4. Copy the **Web app URL** (ends in `/exec`) into `config.js`: `window.SURVEY_ENDPOINT = "https://script.google.com/macros/s/…/exec";`
5. Open the site, answer once and check that a row appears in the "responses" tab. Delete the test rows before launch.

If you change `Code.gs` later: Deploy → Manage deployments → edit → New version (the URL stays the same).

## 2. Publish with GitHub Pages

**Live since 19 Nov 2026:** https://diana7376.github.io/procurement-survey/ (public repository `diana7376/procurement-survey`, branch `main`, root folder). Until `config.js` has the Apps Script URL, the live site runs in **test mode**: answers are not saved, so do not share the link before step 1 is done.

To update the live site: change the files here in `Teza/survey-site/`, commit, then copy them into the `procurement-survey` repository (keep its `.nojekyll`) and push; Pages rebuilds in about a minute.

How it was set up:

The `Teza` repository is **private**, and GitHub Pages on a free account works only for public repositories. Use a separate public repository with only this folder:

1. On GitHub: New repository, e.g. `procurement-survey`, **Public**.
2. Copy the contents of `survey-site/` into it (not the parent folder) and push.
3. Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.
4. After about a minute the site is at `https://<user>.github.io/procurement-survey/`.

Nothing in this folder is private: no answers are stored in the repository. The Apps Script URL is public by design (it only accepts new answers; it cannot read the sheet).

## 3. Before launch

- [ ] Daniel's and Daria's questions added in `questions.js` (set `enabled: true`) and in `docs/survey-questions.md`
- [ ] Romanian proofread
- [ ] Pass rules fixed in `docs/survey-questions.md`
- [ ] Pilot with 2 people on a phone and a laptop: about 8 minutes?
- [ ] Test rows deleted from the sheet
- [ ] Open `?test` to try the site without sending anything

## Data handling

- Answers are anonymous.
- E-mails, only from people who ask for an interview, go to a separate "contacts" tab, with no link to their answers. Delete that tab after the interviews.
- Do not commit any export of the sheet to git.
