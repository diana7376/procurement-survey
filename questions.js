// Survey questions. Same content as docs/survey-questions.md — change both together.
// Languages: ro (default), ru, en. Options and rows: [code, ro, en, ru].
// Types: single, multi (optional exclusive: codes that cannot be combined with others), scale (rows rated 1–5, optional "na"), text, interview.
// Answer codes are stable; they become the column names and values in the Google Sheet.
// To add Daniel's / Daria's questions: fill in a QB/QC entry and set enabled: true.

window.SURVEY = {
  version: "2026-11-21",
  intro: {
    ro: { title: "Datele publice despre achiziții: cât de ușor le folosim?",
          body: "Acest chestionar face parte din trei teze de licență la Universitatea Tehnică a Moldovei despre datele deschise privind achizițiile publice. Durează aproximativ 8 minute și este anonim: nu vă cerem numele. Răspunsurile sunt folosite doar agregat. Dacă acceptați un interviu, vă cerem un e-mail, păstrat separat de răspunsuri și șters după interviuri.",
          start: "Începe", time: "≈ 8 minute · anonim" },
    ru: { title: "Открытые данные о госзакупках: насколько легко ими пользоваться?",
          body: "Этот опрос — часть трёх дипломных работ в Техническом университете Молдовы об открытых данных о государственных закупках. Он займёт около 8 минут и анонимен: мы не спрашиваем ваше имя. Ответы используются только в обобщённом виде. Если вы согласитесь на интервью, мы попросим e-mail; он хранится отдельно от ответов и удаляется после интервью.",
          start: "Начать", time: "≈ 8 минут · анонимно" },
    en: { title: "Public procurement data: how easy is it to use?",
          body: "This survey is part of three bachelor theses at the Technical University of Moldova on open public procurement data. It takes about 8 minutes and is anonymous: we do not ask for your name. Answers are used only in aggregate. If you agree to an interview, we ask for an e-mail address, kept separately from the answers and deleted after the interviews.",
          start: "Start", time: "≈ 8 minutes · anonymous" }
  },
  about: {
    ro: { label: "Despre proiect", text: "Construim o platformă care adună fișierele publice despre achiziții, le leagă între ele și arată, pentru fiecare cifră, fișierul oficial, rândul și data.",
          facts: [["25", "tipuri de rânduri într-un singur fișier anual de contracte"], ["217", "instituții scrise în mai multe feluri"], ["84%", "din valoare găsită, în medie, la o căutare după nume"]],
          note: "Măsurat pe fișierul de contracte 2024, date.gov.md." },
    ru: { label: "О проекте", text: "Мы создаём платформу, которая собирает открытые файлы о закупках, связывает их между собой и показывает для каждой цифры официальный файл, строку и дату.",
          facts: [["25", "типов строк в одном годовом файле контрактов"], ["217", "учреждений записаны по-разному"], ["84%", "стоимости в среднем находит поиск по названию"]],
          note: "Измерено на файле контрактов 2024 года, date.gov.md." },
    en: { label: "About the project", text: "We are building a platform that collects the public procurement files, links them together and shows, for every number, the official file, row and date.",
          facts: [["25", "row types in one yearly contracts file"], ["217", "institutions written in several ways"], ["84%", "of the value found, on average, by a name search"]],
          note: "Measured on the 2024 contracts file, date.gov.md." }
  },
  done: {
    ro: { title: "Mulțumim!", body: "Răspunsurile au fost trimise. Ne ajută să construim o platformă în care fiecare cifră duce înapoi la fișierul oficial." },
    ru: { title: "Спасибо!", body: "Ваши ответы отправлены. Они помогают нам создать платформу, где каждая цифра ведёт к официальному файлу." },
    en: { title: "Thank you!", body: "Your answers were sent. They help us build a platform where every number leads back to the official file." }
  },
  questions: [
    { id: "Q1", type: "single",
      ro: "În ce domeniu activați?", en: "What field do you work in?", ru: "В какой сфере вы работаете?",
      options: [
        ["journalist", "Jurnalism", "Journalism", "Журналистика"],
        ["monitor", "ONG sau monitorizare civică", "NGO or civic monitoring", "НКО или гражданский мониторинг"],
        ["research", "Cercetare sau studii", "Research or studies", "Исследования или учёба"],
        ["public", "Sector public", "Public sector", "Государственный сектор"],
        ["business", "Mediul de afaceri", "Business", "Бизнес"],
        ["citizen", "Interes personal", "Personal interest", "Личный интерес"],
        ["other", "Altceva", "Other", "Другое"]
      ] },
    { id: "Q2", type: "single",
      ro: "În ultimele 12 luni, ați căutat date despre contracte sau cheltuieli publice în Moldova?",
      en: "In the last 12 months, did you look for data on public contracts or public spending in Moldova?",
      ru: "За последние 12 месяцев искали ли вы данные о государственных контрактах или расходах в Молдове?",
      options: [
        ["never", "Nu, niciodată", "No, never", "Нет, ни разу"],
        ["1-2", "De 1–2 ori", "1–2 times", "1–2 раза"],
        ["several", "De mai multe ori", "Several times", "Несколько раз"],
        ["monthly", "Lunar sau mai des", "Monthly or more often", "Ежемесячно или чаще"]
      ] },
    { id: "Q3", type: "multi", part: "A",
      ro: "Unde ați căutat?", en: "Where did you look?", ru: "Где вы искали?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["dategov", "date.gov.md", "date.gov.md", "date.gov.md"],
        ["mtender", "MTender", "MTender", "MTender"],
        ["openmoney", "OpenMoney.md", "OpenMoney.md", "OpenMoney.md"],
        ["sites", "Site-urile instituțiilor", "Institutions' websites", "Сайты учреждений"],
        ["reports", "Rapoarte ale presei sau ONG-urilor", "Media or NGO reports", "Отчёты СМИ или НКО"],
        ["other", "Altele", "Other", "Другое"],
        ["none", "Nu am căutat", "I didn't look", "Не искали"]
      ], exclusive: ["none"] },
    { id: "Q4", type: "scale", part: "A", na: true,
      ro: "Cât de dificil a fost…", en: "How hard was it to…", ru: "Насколько сложно было…",
      low: { ro: "ușor", en: "easy", ru: "легко" }, high: { ro: "foarte dificil", en: "very hard", ru: "очень сложно" },
      rows: [
        ["a", "să găsesc fișierul potrivit", "find the right file", "найти нужный файл"],
        ["b", "să combin mai mulți ani sau mai multe instituții", "combine several years or institutions", "объединить несколько лет или учреждений"],
        ["c", "să identific aceeași instituție sau companie în fișiere diferite", "match the same institution or company across files", "найти одно и то же учреждение или компанию в разных файлах"],
        ["d", "să știu dacă datele sunt actuale", "know whether the data is current", "понять, актуальны ли данные"],
        ["e", "să verific de unde provine o cifră", "check where a number comes from", "проверить, откуда взялась цифра"]
      ] },
    { id: "Q5", type: "single", part: "A",
      ro: "Ultima dată, cât timp v-a luat de la fișiere până la un răspuns?",
      en: "Last time, how long did it take from the files to an answer?",
      ru: "В последний раз сколько времени ушло от файлов до ответа?",
      options: [
        ["lt15", "Sub 15 minute", "Under 15 minutes", "Меньше 15 минут"],
        ["15-60", "15–60 minute", "15–60 minutes", "15–60 минут"],
        ["1-4h", "1–4 ore", "1–4 hours", "1–4 часа"],
        ["gt4h", "Peste 4 ore", "More than 4 hours", "Больше 4 часов"],
        ["gaveup", "N-am ajuns la un răspuns", "I didn't get an answer", "Ответ найти не удалось"],
        ["notsearched", "Nu am căutat astfel de date", "I haven't looked for such data", "Такие данные не искали"]
      ] },
    { id: "Q6", type: "single", part: "A",
      ro: "Ați întâlnit aceeași instituție sau companie scrisă în moduri diferite în date?",
      en: "Have you seen the same institution or company written in different ways in the data?",
      ru: "Встречали ли вы одно и то же учреждение или компанию, записанные в данных по-разному?",
      options: [["yes", "Da", "Yes", "Да"], ["no", "Nu", "No", "Нет"], ["unsure", "Nu știu", "Not sure", "Не знаю"]] },
    { id: "Q7", type: "scale",
      ro: "Cât de utile ar fi următoarele funcționalități în cadrul unei platforme unificate?",
      en: "How useful would the following features be in a unified platform?",
      ru: "Насколько полезными были бы следующие функции в единой платформе?",
      low: { ro: "deloc util", en: "not useful", ru: "бесполезно" }, high: { ro: "foarte util", en: "very useful", ru: "очень полезно" },
      rows: [
        ["a", "Vizualizarea contractelor filtrate după o companie/instituție", "Viewing contracts filtered by a company/institution", "Просмотр контрактов с фильтром по компании/учреждению"],
        ["b", "Un link de la fiecare cifră la fișierul oficial, rândul și data", "A link from every number to the official file, row and date", "Ссылка от каждой цифры на официальный файл, строку и дату"],
        ["c", "Istoricul datelor", "Data history", "История данных"],
        ["d", "O listă cu datele care lipsesc", "A list of what data is missing", "Список недостающих данных"],
        ["e", "Descărcare în Excel/CSV", "Download in Excel/CSV", "Скачивание в Excel/CSV"],
        ["f", "Acces printr-un API", "Access through an API", "Доступ через API"]
      ] },
    { id: "Q8", type: "single",
      ro: "Ce rată de actualizare a datelor ați prefera?", en: "How often would you prefer the data to be updated?", ru: "Какую частоту обновления данных вы бы предпочли?",
      options: [
        ["daily", "Zilnic", "Daily", "Каждый день"],
        ["weekly", "Săptămânal", "Weekly", "Каждую неделю"],
        ["monthly", "Lunar", "Monthly", "Каждый месяц"],
        ["quarterly", "Trimestrial sau mai rar", "Quarterly or less often", "Раз в квартал или реже"]
      ] },
    { id: "Q9", type: "single",
      ro: "Ați avea mai multă încredere într-o cifră dacă ați putea deschide rândul exact din fișierul oficial?",
      en: "Would you trust a number more if you could open the exact row in the official file?",
      ru: "Вы бы больше доверяли цифре, если бы могли открыть точную строку в официальном файле?",
      options: [["more", "Mai multă încredere", "More", "Больше"], ["same", "Nicio diferență", "No difference", "Без разницы"], ["unsure", "Nu știu", "Not sure", "Не знаю"]] },

    // ---- Part B (Daniel) ----
    { id: "QB1", type: "single", part: "B",
      ro: "Care este nivelul dvs. actual de experiență în analiza datelor?",
      en: "What is your current level of experience in data analysis?",
      ru: "Каков ваш текущий уровень опыта в анализе данных?",
      options: [
        ["beginner", "Începător", "Beginner", "Начальный"],
        ["intermediate", "Mediu", "Intermediate", "Средний"],
        ["advanced", "Avansat", "Advanced", "Продвинутый"]
      ] },
    { id: "QB2", type: "multi", part: "B",
      ro: "În ce scop ați utiliza datele despre achiziții publice?",
      en: "For what purpose would you use public procurement data?",
      ru: "Для каких целей вы бы использовали данные о государственных закупках?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["research", "Cercetare", "Research", "Исследования"],
        ["journalism", "Jurnalism", "Journalism", "Журналистика"],
        ["monitoring", "Monitorizare", "Monitoring", "Мониторинг"],
        ["bidding", "Participare la licitații", "Taking part in tenders", "Участие в тендерах"],
        ["academic", "Analiză academică", "Academic analysis", "Академический анализ"],
        ["other", "Altele", "Other", "Другое"]
      ] },
    { id: "QB3", type: "multi", part: "B",
      ro: "Cu ce tip de date despre achiziții publice lucrați în prezent?",
      en: "What type of public procurement data do you currently work with?",
      ru: "С какими данными о государственных закупках вы сейчас работаете?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["contracts", "Contracte încheiate", "Signed contracts", "Заключённые контракты"],
        ["tenders", "Anunțuri și proceduri de achiziție", "Tender notices and procedures", "Объявления и процедуры закупок"],
        ["companies", "Date despre companii (furnizori)", "Company (supplier) data", "Данные о компаниях (поставщиках)"],
        ["budget", "Bugete și cheltuieli publice", "Budgets and public spending", "Бюджеты и государственные расходы"],
        ["none", "Nu lucrez în prezent cu astfel de date", "I don't work with such data at the moment", "Сейчас не работаю с такими данными"],
        ["other", "Altele", "Other", "Другое"]
      ], exclusive: ["none"] },
    { id: "QB4", type: "multi", part: "B",
      ro: "Ce platforme utilizați în prezent pentru a găsi informații despre achizițiile publice?",
      en: "Which platforms do you currently use to find information about public procurement?",
      ru: "Какие платформы вы сейчас используете, чтобы найти информацию о государственных закупках?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["dategov", "date.gov.md", "date.gov.md", "date.gov.md"],
        ["mtender", "MTender", "MTender", "MTender"],
        ["openmoney", "OpenMoney.md", "OpenMoney.md", "OpenMoney.md"],
        ["sites", "Site-urile instituțiilor", "Institutions' websites", "Сайты учреждений"],
        ["other", "Altele", "Other", "Другое"],
        ["none", "Nu folosesc niciuna", "I don't use any", "Не пользуюсь ни одной"]
      ], exclusive: ["none"] },
    { id: "QB5", type: "single", part: "B",
      ro: "Cât timp vă ia, în medie, să găsiți o informație concretă despre achiziții publice?",
      en: "On average, how long does it take you to find a specific piece of information about public procurement?",
      ru: "Сколько времени в среднем у вас уходит, чтобы найти конкретную информацию о государственных закупках?",
      options: [
        ["lt15", "Sub 15 minute", "Under 15 minutes", "Меньше 15 минут"],
        ["15-60", "15–60 minute", "15–60 minutes", "15–60 минут"],
        ["1-3h", "1–3 ore", "1–3 hours", "1–3 часа"],
        ["gt3h", "Mai mult de 3 ore", "More than 3 hours", "Больше 3 часов"]
      ] },
    { id: "QB6", type: "text", part: "B", optional: true,
      ro: "Ce informații vă este dificil să găsiți pe platformele date.gov.md și MTender?",
      en: "What information is hard for you to find on date.gov.md and MTender?",
      ru: "Какую информацию вам трудно найти на платформах date.gov.md и MTender?" },
    { id: "QB7", type: "single", part: "B",
      ro: "V-ați confruntat vreodată cu situația în care nu ați putut găsi informația necesară din cauza modului dezorganizat de stocare a datelor pe platformele actuale?",
      en: "Have you ever been unable to find the information you needed because of the disorganised way data is stored on the current platforms?",
      ru: "Сталкивались ли вы с ситуацией, когда не могли найти нужную информацию из-за неупорядоченного хранения данных на нынешних платформах?",
      options: [["yes", "Da", "Yes", "Да"], ["no", "Nu", "No", "Нет"]],
      followUp: { on: "yes",
                  ro: "Dacă da, descrieți pe scurt cazul (opțional).",
                  en: "If yes, briefly describe the case (optional).",
                  ru: "Если да, кратко опишите случай (необязательно)." } },
    { id: "QB8", type: "multi", part: "B",
      ro: "Care este cea mai mare dificultate în procesul de căutare a datelor necesare?",
      en: "What is the biggest difficulty when searching for the data you need?",
      ru: "Какая самая большая трудность при поиске нужных данных?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["find", "Găsirea fișierului sau a setului de date potrivit", "Finding the right file or dataset", "Найти нужный файл или набор данных"],
        ["split", "Datele sunt împărțite în multe fișiere", "The data is split across many files", "Данные разбиты на много файлов"],
        ["formats", "Formatele diferite ale fișierelor", "Different file formats", "Разные форматы файлов"],
        ["names", "Aceeași instituție sau companie apare cu nume diferite", "The same institution or company appears under different names", "Одно и то же учреждение или компания встречается под разными названиями"],
        ["current", "Nu știu dacă datele sunt actuale", "Not knowing whether the data is current", "Непонятно, актуальны ли данные"],
        ["source", "Nu pot verifica de unde provine o cifră", "Not being able to check where a number comes from", "Нельзя проверить, откуда взялась цифра"],
        ["other", "Altceva", "Something else", "Другое"]
      ] },
    { id: "QB9", type: "single", part: "B",
      ro: "Ați utiliza o platformă digitală care ar prezenta datele guvernamentale într-un format accesibil?",
      en: "Would you use a digital platform that presented government data in an accessible format?",
      ru: "Пользовались бы вы цифровой платформой, которая представляла бы государственные данные в доступном формате?",
      options: [["yes", "Da", "Yes", "Да"], ["probably", "Probabil", "Probably", "Возможно"], ["no", "Nu", "No", "Нет"]] },
    { id: "QB10", type: "multi", part: "B",
      ro: "În ce formă vi se pare cel mai comod să analizați datele?",
      en: "In what form do you find it most convenient to analyse data?",
      ru: "В какой форме вам удобнее всего анализировать данные?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["charts", "Grafice", "Charts", "Графики"],
        ["tables", "Tabele", "Tables", "Таблицы"],
        ["text", "Text", "Text", "Текст"],
        ["maps", "Hărți", "Maps", "Карты"],
        ["combined", "Combinat", "A combination", "Комбинированно"],
        ["other", "Altele", "Other", "Другое"]
      ] },
    { id: "QB11", type: "multi", part: "B",
      ro: "Ce funcționalități ați dori să fie disponibile pe platformă?",
      en: "Which features would you like the platform to have?",
      ru: "Какие функции вы хотели бы видеть на платформе?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["search", "Căutare avansată", "Advanced search", "Расширенный поиск"],
        ["filters", "Filtre", "Filters", "Фильтры"],
        ["export", "Export CSV/Excel", "CSV/Excel export", "Экспорт в CSV/Excel"],
        ["charts", "Grafice interactive", "Interactive charts", "Интерактивные графики"],
        ["alerts", "Alerte", "Alerts", "Уведомления"],
        ["api", "API", "API", "API"],
        ["other", "Altele", "Other", "Другое"]
      ] },
    { id: "QB12", type: "single", part: "B",
      ro: "Ce timp de încărcare/procesare a datelor ați considera acceptabil?",
      en: "What data loading/processing time would you consider acceptable?",
      ru: "Какое время загрузки/обработки данных вы считаете приемлемым?",
      options: [
        ["lt3s", "Până la 3 secunde", "Up to 3 seconds", "До 3 секунд"],
        ["3-10s", "3–10 secunde", "3–10 seconds", "3–10 секунд"],
        ["lt30s", "Până la 30 de secunde", "Up to 30 seconds", "До 30 секунд"],
        ["longer", "Mai mult, dacă rezultatul este complet", "Longer, if the result is complete", "Дольше, если результат полный"]
      ] },

    // ---- Part C (Daria): extra questions, hidden until filled in and set enabled: true ----
    { id: "QC1", type: "single", part: "C", enabled: false, ro: "…", en: "…", ru: "…", options: [["x", "…", "…", "…"]] },
    { id: "QC2", type: "single", part: "C", enabled: false, ro: "…", en: "…", ru: "…", options: [["x", "…", "…", "…"]] },

    { id: "Q10", type: "text", optional: true,
      ro: "Ce întrebări despre achizițiile publice v-ar interesa?",
      en: "What questions about public procurement would interest you?",
      ru: "Какие вопросы о государственных закупках вас бы интересовали?" },
    { id: "Q11", type: "interview",
      ro: "Ați fi de acord să participați la un scurt interviu de 15–20 min?", en: "Would you agree to take part in a short 15–20 min interview?",
      ru: "Согласились бы вы принять участие в коротком интервью на 15–20 минут?",
      options: [["yes", "Da", "Yes", "Да"], ["no", "Nu", "No", "Нет"]],
      email: { ro: "E-mail (opțional). Îl folosim doar pentru a vă contacta despre interviu și îl păstrăm separat de răspunsuri.",
               en: "E-mail (optional). We use it only to contact you about the interview and keep it separate from your answers.",
               ru: "E-mail (необязательно). Мы используем его только чтобы связаться с вами по поводу интервью и храним отдельно от ответов." } }
  ]
};
