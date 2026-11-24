# Survey site

A static survey (HTML, CSS, JavaScript; no build step) for the team's validation survey. Answers go to a Google Sheet through Google Apps Script.
Questions: `questions.js` (same content as `shared/survey/questions.md`).

| File | What it is |
|---|---|
| `index.html`, `style.css` | Page (design "Focus card"): a thin project banner, one centred card with one question at a time |
| `questions.js` | All questions in Romanian, Russian and English; the one-sentence project description on the start screen |
| `app.js` | Survey engine: one question per screen, keys 1–9 and Enter, progress, a question shown only after a given answer (`showIf`), "at most n" answers (`max`), sending |
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

To update the live site: change the files here in `Teza/shared/survey/site/`, change `?v=…` on the four files in `index.html` (and `version` in `questions.js`) so browsers do not keep the old copy, commit, then copy them into the `procurement-survey` repository (keep its `.nojekyll`) and push; Pages rebuilds in about a minute.

How it was set up:

The `Teza` repository is **private**, and GitHub Pages on a free account works only for public repositories. Use a separate public repository with only this folder:

1. On GitHub: New repository, e.g. `procurement-survey`, **Public**.
2. Copy the contents of `shared/survey/site/` into it (not the parent folder) and push.
3. Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.
4. After about a minute the site is at `https://<user>.github.io/procurement-survey/`.

Nothing in this folder is private: no answers are stored in the repository. The Apps Script URL is public by design (it only accepts new answers; it cannot read the sheet).

## 3. Before launch

- [x] Daniel's and Daria's questions added (final team version, 23 Nov 2026) in `questions.js` and `shared/survey/questions.md`
- [ ] Romanian proofread
- [ ] Pass rules fixed in `shared/survey/questions.md`
- [ ] Pilot with 2 people on a phone and a laptop: about 10 minutes?
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
(`shared/survey/site/questions.js`). The main changes:

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

Start screen (21 Nov 2026): the three audit numbers (25 kinds of records in one file, 217 institutions written in several
ways, 84% of the money found by a name search) were removed; they meant little to someone who has never used this data.
They are in Teza commit `73397da` and in `part-a-data/analysis/outputs/questions_and_facts.md`.

## Final team version (23 Nov 2026)

Daria's proposal of 22 Nov 2026 (4 parts, 31 questions; file `Chestionar_RO_propunere_final.md`, made after the team's
suggestions) replaced the 21 Nov version (`2026-11-21g`). Answers sent before carry version `2026-11-21g` in the sheet;
analyse the two versions apart. New IDs: Q6a (shown only if Q6 = „Da”), Q12 (replaces Q9), QC1–QC5, QB13–QB17.
QB3 and Q9 were removed; their IDs are not reused. The full 21 Nov text is in Teza commit `185ac8f` (`shared/survey/site/questions.js`).

Fixes made when the proposal was added (the rest is word for word):

| Where | Proposal | On the site | Why |
|---|---|---|---|
| QB13 (24) | „…semnale de risc… Un semnal nu dovedește o încălcare…” | „…fapte neobișnuite, găsite automat de platformă? Un fapt neobișnuit nu înseamnă că ceva este greșit; arată doar ce iese din comun și ar putea merita o privire.” | Team rule (13 Oct 2026): neutral words, never risk, violation or suspicion |
| QB14 (25) | „…chiar dacă unele sunt false alarme” | „…chiar dacă unele se dovedesc obișnuite la verificare” | Same rule |
| QB15 (27) | „…semnale noi…” | „…contracte neobișnuite noi…” | Same rule; clearer for respondents |
| Q6a (11) | „Nu am fost sigur(ă)…” | „Nu era clar dacă este vorba de aceeași instituție sau firmă” | No gendered brackets |
| QB16 (28) | CSV · JSON | CSV (tabel simplu, se deschide și în Excel) · JSON (format pentru programatori) | Plain words for non-technical respondents |
| Q12 (12) | – | „De obicei nu le verific” and „Nu folosesc astfel de date” cannot be combined with other answers | Same as „Nu am căutat” in Q3 |

Wording on 21 Nov of every question that changed:

| ID | Wording on 21 Nov (RO question — answers) | Now |
|---|---|---|
| Q1 | În ce calitate răspundeți? — Lucrez în presă · Lucrez într-un ONG sau urmăresc cheltuielile publice · Studiez sau fac cercetare · Lucrez în sectorul public · Lucrez în mediul de afaceri · Ca cetățean, din interes personal · Altceva | Question 1 |
| Q2 | În ultimele 12 luni, ați căutat informații despre cum se cheltuie banii publici în Moldova? — Nu, niciodată · De 1–2 ori · De mai multe ori · Lunar sau mai des | Question 2 |
| Q3 | Unde ați căutat? — date.gov.md (site-ul cu datele publice ale Guvernului) · MTender (site-ul licitațiilor publice) · OpenMoney.md · Site-urile instituțiilor · Articole de presă sau rapoarte ale ONG-urilor · În altă parte · Nu am căutat | Question 5 |
| Q4 | Cât de greu a fost… — a) să găsesc informația de care aveam nevoie; b) să pun cap la cap date din mai mulți ani sau de la mai multe instituții; c) să recunosc aceeași instituție sau firmă când numele e scris diferit; d) să știu dacă datele sunt la zi; e) să verific de unde provine o cifră | Question 7 |
| Q5 | Ultima dată când ați căutat, cât timp v-a luat până ați găsit răspunsul? — Sub 15 minute · 15–60 minute · 1–4 ore · Peste 4 ore · Nu am găsit răspunsul · Nu am căutat astfel de informații | Question 9 |
| Q6 | Ați observat că aceeași instituție sau firmă apare scrisă în moduri diferite (de ex. „Primăria X” și „Primaria satului X”)? — Da · Nu · Nu știu | Question 10 |
| Q7 | Cât de util ar fi pentru dvs. un site care… — a) arată toate contractele unei firme sau instituții la un loc, chiar dacă numele e scris diferit; b) vă permite să verificați orice cifră în documentul oficial din care provine; c) arată datele unei firme așa cum erau la o anumită dată (de ex. la semnarea contractului); d) spune clar ce date lipsesc; e) permite descărcarea datelor într-un tabel Excel; f) permite programatorilor să preia datele automat în aplicațiile lor (API) | Question 16 |
| Q8 | Cât de vechi pot fi datele, ca să vă fie încă de folos? — Cel mult o zi · Cel mult o săptămână · Cel mult o lună · Pot fi și de acum câteva luni | Question 18 |
| Q9 | Ați avea mai multă încredere într-o cifră dacă ați putea deschide documentul oficial din care provine? — Da, mai multă încredere · Nicio diferență · Nu știu | Removed |
| QB1 | Cât de ușor vă descurcați cu tabele și cifre (de ex. în Excel)? — Mă descurc doar cu lucruri simple · Fac calcule și filtre fără probleme · Fac analize complexe | Question 3 |
| QB2 | Pentru ce ați folosi informațiile despre achizițiile publice? — Cercetare · Articole de presă · Urmărirea modului în care se cheltuie banii publici · Participarea firmei mele la licitații · Studii sau lucrări universitare · Altceva | Question 4 |
| QB3 | Ce fel de informații despre achiziții publice folosiți acum? — Contracte semnate · Anunțuri de licitații · Informații despre firme · Bugete și cheltuieli publice · Nu folosesc astfel de informații acum · Altceva | Removed |
| QB6 | Ce informații despre achizițiile publice vă este greu să găsiți? — text | Question 13 |
| QB7 | Vi s-a întâmplat să nu găsiți o informație pentru că datele erau împrăștiate sau greu de înțeles? — Da · Nu | Question 6 |
| QB8 | Care este cea mai mare greutate când căutați astfel de informații? — Să găsesc unde sunt datele · Datele sunt împărțite în multe fișiere · Fișierele sunt în forme diferite (Excel, PDF etc.) · Aceeași instituție sau firmă apare cu nume diferite · Nu știu dacă datele sunt la zi · Nu pot verifica de unde provine o cifră · Altceva | Question 8 |
| QB9 | Ați folosi un site care arată datele statului într-un mod ușor de înțeles? — Da · Probabil · Nu | Question 14 |
| QB10 | Cum vă este cel mai ușor să înțelegeți cifrele? — Grafice · Tabele · Explicații în cuvinte · Hărți · Toate la un loc · Altceva | Question 19 |
| QB11 | Ce v-ar ajuta pe un astfel de site? — Căutare după mai multe criterii deodată · Filtre (de ex. după an, raion sau instituție) · Descărcare în Excel · Grafice pe care le pot explora · Mesaje când apar date noi · Acces pentru programatori (API) · Altceva | Question 21 |
| QB12 | Cât ați aștepta, cel mult, până se încarcă o pagină cu rezultate? — Cel mult 3 secunde · 3–10 secunde · Până la 30 de secunde · Mai mult, dacă primesc toate rezultatele | Question 23 |
| Q10 | Ce ați vrea să aflați despre achizițiile publice din Moldova? — text | Question 30 |
| Q11 | Ați accepta o scurtă discuție online (15–20 de minute) cu noi? — Da · Nu | Question 31 |

## Questions 24, 25 and 27 reworded (24 Nov 2026, version `2026-11-24a`)

| Where | Before (`2026-11-23a`) | Now |
|---|---|---|
| QB13 (24) | 6 rows: a) Un singur furnizor primește peste jumătate din valoarea achizițiilor unei instituții într-un an; b) Valoarea contractului a crescut cu peste 15% după semnare, prin acte adiționale; c) Contractul a fost semnat cu o firmă care era deja lichidată la data semnării; d) Licitație cu o singură ofertă; e) Termen de depunere a ofertelor mai scurt de 10 zile; f) Valoare neobișnuit de mare sau de mică față de contractele similare | 10 rows in plainer words; new: g) same address, h) company founded less than 3 months earlier, i) November–December, j) direct purchase without a public announcement |
| QB14 (25) | „…aproape toate justificate, chiar dacă unele cazuri ar fi ratate”; „…chiar dacă unele se dovedesc obișnuite la verificare” | „…aproape toate corecte, chiar dacă unele cazuri neobișnuite nu vor fi semnalate”; „…chiar dacă unele nu vor fi probleme reale” |
| QB15 (27) | Cum ați dori să aflați despre contracte neobișnuite noi sau date noi? | Cum ați dori să primiți notificări despre contracte neobișnuite noi sau date noi? (asked as „să fiți notificat(ă)”; no gendered brackets) |

QB13 row codes are sheet columns, not the order on the screen. The codes a–f keep their meaning, so old and new answers
do not mix; the new rows are g–j. Order on the screen: a, b, c, g, h, i, j, d, e, f. QB14 and QB15 answer codes did not change.
Row b no longer says „prin acte adiționale”.

**Later on 24 Nov (version `2026-11-24b`):** QB13 (24) went back to its 6 rows of `2026-11-23a`, word for word; QB14 and QB15
keep the new wording. Answers with version `2026-11-24a` may have values in QB13g–j; these codes are not reused. Full text
of the 10 rows: Teza commit `831651c`.

**Version `2026-11-24c`:** Q6 („Ați avut dificultăți în găsirea sau utilizarea datelor pentru că aceeași instituție sau firmă
apare cu denumiri diferite…”) was taken out, and with it Q6a („Ce probleme ați întâmpinat?”), which was shown only after „Da”
in Q6. Both are kept in `questions.js` with `enabled: false`. The survey has 29 questions, the same for everyone; question
numbers above 9 in the sections above are those of the 31-question version. The pass rule for P2 now uses Q4c only.

**Version `2026-11-24d`:** QC5 („Platforma va marca automat unele contracte ca neobișnuite… Ce v-ar ajuta să aveți încredere că
un astfel de contract merită verificat?”) was taken out (`enabled: false`); QB14, the question just before it, stays in its
place. The survey has 28 questions.

**Version `2026-11-24e`:** QB15 („Cum ați dori să primiți notificări…”) was taken out (`enabled: false`): 27 questions. A question
with one answer no longer moves on by itself; people press „Continuă”. The sentence about the e-mail („Dacă acceptați o
discuție scurtă, vă cerem un e-mail, păstrat separat și șters după aceea.”) was taken out of the start screen in all three
languages; Q11 still says what the e-mail is used for and that it is kept apart from the answers. The Q2 code `1-2` became
`1to2`, because Google Sheets and Excel can turn `1-2` into a date; in older rows, `1-2` or a date in Q2 means „De 1–2 ori”.
