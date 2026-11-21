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
- [ ] Pilot with 2 people on a phone and a laptop: about 7 minutes?
- [ ] Test rows deleted from the sheet
- [ ] Open `?test` to try the site without sending anything

## Data handling

- Answers are anonymous.
- E-mails, only from people who ask for an interview, go to a separate "contacts" tab, with no link to their answers. Delete that tab after the interviews.
- Do not commit any export of the sheet to git.

## Earlier wording of changed questions (kept for reference)

Changed on 21 Nov 2026 after the review of the final question set (Daniel's version of 20 Nov, Teza commit `0203743`).
Full earlier versions are in git: 19 Nov `ead2b98` (11 questions) and 20–21 Nov `0203743` (23 questions).
Answer codes did not change, so answers stay comparable; removed questions keep their IDs free (no reuse).

| ID | Wording before 21 Nov (RO / EN / RU) | Now | Why |
|---|---|---|---|
| Q1 | În ce domeniu activați? / What field do you work in? / В какой сфере вы работаете? | În ce calitate răspundeți? | "Interes personal" and "Cercetare sau studii" are not fields of work; the 19 Nov wording fits every answer |
| Q7a | Vizualizarea contractelor filtrate după o companie/instituție / Viewing contracts filtered by a company/institution / Просмотр контрактов с фильтром по компании/учреждению | Contracts already linked to companies and institutions, however their names are written | Filtering is an interface feature (asked in QB11 "Filtre"); Part A needs the priority of linking (FR-A8, FR-A9) |
| Q7c | Istoricul datelor / Data history / История данных | A company's details on a past date (e.g. on the contract date) | Too vague to decide Must or Should for company history (FR-A11) |
| Q8 | Ce rată de actualizare a datelor ați prefera? / How often would you prefer the data to be updated? / Какую частоту обновления данных вы бы предпочли? | At minimum, how up to date must the data be for your work? | A preference pulls answers towards "daily"; the pass rule and constraint C3 need the minimum that is enough |
| QB4 | Ce platforme utilizați în prezent pentru a găsi informații despre achizițiile publice? (mai multe: date.gov.md · MTender · OpenMoney.md · Site-urile instituțiilor · Altele · Nu folosesc niciuna) / Which platforms do you currently use to find information about public procurement? | Removed | Same as Q3 ("Unde ați căutat?", same options); Part B reads Q3 |
| QB5 | Cât timp vă ia, în medie, să găsiți o informație concretă despre achiziții publice? (Sub 15 minute · 15–60 minute · 1–3 ore · Mai mult de 3 ore) / On average, how long does it take you to find a specific piece of information about public procurement? | Removed | Same as Q5 (with different time bands); Part B reads Q5 |
| QB8 | Care este cea mai mare dificultate în procesul de căutare a datelor necesare? (several answers) | Same question, one answer | "The biggest difficulty" with several answers does not rank anything; Q4 already rates each difficulty |

## Plain-language rewrite (21 Nov 2026)

Respondents are journalists, monitors and citizens, not IT people, so every question was rewritten in everyday words
(RO, RU, EN). Answer codes did not change. The full wording before this rewrite is in Teza commit `73b589a`
(`survey-site/questions.js`). The main changes:

| Where | Before (RO) | Now (RO) |
|---|---|---|
| Intro | Răspunsurile sunt folosite doar agregat. | Folosim doar totalurile, nu răspunsurile fiecărei persoane. |
| Q1 answers | Jurnalism · ONG sau monitorizare civică · Cercetare sau studii · Sector public · Mediul de afaceri · Interes personal | Lucrez în presă · Lucrez într-un ONG sau urmăresc cheltuielile publice · Studiez sau fac cercetare · Lucrez în sectorul public · Lucrez în mediul de afaceri · Ca cetățean, din interes personal |
| Q2 | …date despre contracte sau cheltuieli publice… | …informații despre cum se cheltuie banii publici… (+ an example) |
| Q3 | date.gov.md · MTender | date.gov.md (site-ul cu datele publice ale Guvernului) · MTender (site-ul licitațiilor publice) |
| Q4 | Cât de dificil a fost… să găsesc fișierul potrivit; să combin mai mulți ani…; să identific aceeași instituție…; …actuale | Cât de greu a fost… să găsesc informația…; să pun cap la cap date…; să recunosc aceeași instituție… când numele e scris diferit; …la zi |
| Q7 | Cât de utile ar fi următoarele funcționalități în cadrul unei platforme unificate? … Descărcare în Excel/CSV · Acces printr-un API | Cât de util ar fi pentru dvs. un site care… permite descărcarea datelor într-un tabel Excel · permite programatorilor să preia datele automat în aplicațiile lor (API) |
| Q8 | Cât de actuale trebuie să fie datele, cel puțin, pentru munca dvs.? Zilnic · Săptămânal · Lunar · Trimestrial sau mai rar | Cât de vechi pot fi datele, ca să vă fie încă de folos? Cel mult o zi · o săptămână · o lună · Pot fi și de acum câteva luni |
| QB1 | Care este nivelul dvs. actual de experiență în analiza datelor? Începător · Mediu · Avansat | Cât de ușor vă descurcați cu tabele și cifre (de ex. în Excel)? Mă descurc doar cu lucruri simple · Fac calcule și filtre fără probleme · Fac analize complexe |
| QB3 | Cu ce tip de date… Anunțuri și proceduri de achiziție · Date despre companii (furnizori) | Ce fel de informații… Anunțuri de licitații · Informații despre firme |
| QB6 | …pe platformele date.gov.md și MTender? | Ce informații despre achizițiile publice vă este greu să găsiți? |
| QB7 | …din cauza modului dezorganizat de stocare a datelor pe platformele actuale? | …pentru că datele erau împrăștiate sau greu de înțeles? |
| QB8 | …Găsirea fișierului sau a setului de date potrivit · Formatele diferite ale fișierelor | …Să găsesc unde sunt datele · Fișierele sunt în forme diferite (Excel, PDF etc.) |
| QB9 | …o platformă digitală care ar prezenta datele guvernamentale într-un format accesibil? | …un site care arată datele statului într-un mod ușor de înțeles? |
| QB10 | În ce formă vi se pare cel mai comod să analizați datele? | Cum vă este cel mai ușor să înțelegeți cifrele? |
| QB11 | Căutare avansată · Filtre · Export CSV/Excel · Grafice interactive · Alerte · API | Căutare după mai multe criterii deodată · Filtre (de ex. după an, raion sau instituție) · Descărcare în Excel · Grafice pe care le pot explora · Mesaje când apar date noi · Acces pentru programatori (API) |
| QB12 | Ce timp de încărcare/procesare a datelor ați considera acceptabil? | Cât ați aștepta, cel mult, până se încarcă o pagină cu rezultate? |
| Q11 | …un scurt interviu de 15–20 min? | …o scurtă discuție online (15–20 de minute) cu noi? |
| About, Q7b, thank-you (later the same day) | …și arată, lângă fiecare cifră, documentul oficial din care provine. | Orice cifră de pe site poate fi verificată în documentul oficial din care provine. (Q7b: vă permite să verificați orice cifră în documentul oficial din care provine) |

Note for the analysis: Q8 now asks how old the data may be ("cel mult o lună" = monthly is enough), the same thing
as before in plainer words; the pass rule "≥ 70% choose monthly or less often" reads the codes monthly and quarterly.
