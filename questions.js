// Survey questions. Same content as docs/survey-questions.md — change both together.
// Languages: ro (default), ru, en. Options and rows: [code, ro, en, ru].
// Types: single, multi, scale (rows rated 1–5, optional "na"), text, interview.
// Answer codes are stable; they become the column names and values in the Google Sheet.
// To add Daniel's / Daria's questions: fill in a QB/QC entry and set enabled: true.

window.SURVEY = {
  version: "2026-11-19b",
  intro: {
    ro: { title: "Datele publice despre achiziții: cât de ușor le folosim?",
          body: "Acest chestionar face parte din trei teze de licență la Universitatea Tehnică a Moldovei despre datele deschise privind achizițiile publice. Durează aproximativ 3 minute și este anonim: nu vă cerem numele. Răspunsurile sunt folosite doar agregat. Dacă acceptați un interviu, vă cerem un e-mail, păstrat separat de răspunsuri și șters după interviuri.",
          start: "Începe", time: "≈ 3 minute · anonim" },
    ru: { title: "Открытые данные о госзакупках: насколько легко ими пользоваться?",
          body: "Этот опрос — часть трёх дипломных работ в Техническом университете Молдовы об открытых данных о государственных закупках. Он займёт около 3 минут и анонимен: мы не спрашиваем ваше имя. Ответы используются только в обобщённом виде. Если вы согласитесь на интервью, мы попросим e-mail; он хранится отдельно от ответов и удаляется после интервью.",
          start: "Начать", time: "≈ 3 минуты · анонимно" },
    en: { title: "Public procurement data: how easy is it to use?",
          body: "This survey is part of three bachelor theses at the Technical University of Moldova on open public procurement data. It takes about 3 minutes and is anonymous: we do not ask for your name. Answers are used only in aggregate. If you agree to an interview, we ask for an e-mail address, kept separately from the answers and deleted after the interviews.",
          start: "Start", time: "≈ 3 minutes · anonymous" }
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
    { id: "Q1", type: "single", part: "A",
      ro: "În ce calitate răspundeți?", en: "In what capacity are you answering?", ru: "В каком качестве вы отвечаете?",
      options: [
        ["journalist", "Jurnalism", "Journalism", "Журналистика"],
        ["monitor", "ONG sau monitorizare civică", "NGO or civic monitoring", "НКО или гражданский мониторинг"],
        ["research", "Cercetare sau studii", "Research or studies", "Исследования или учёба"],
        ["public", "Sector public", "Public sector", "Государственный сектор"],
        ["business", "Mediul de afaceri", "Business", "Бизнес"],
        ["citizen", "Interes personal", "Personal interest", "Личный интерес"],
        ["other", "Altceva", "Other", "Другое"]
      ] },
    { id: "Q2", type: "single", part: "A",
      ro: "În ultimele 12 luni, ați căutat date despre contracte sau cheltuieli publice în Moldova?",
      en: "In the last 12 months, did you look for data on public contracts or public spending in Moldova?",
      ru: "За последние 12 месяцев искали ли вы данные о государственных контрактах или расходах в Молдове?",
      options: [
        ["never", "Nu, niciodată", "No, never", "Нет, ни разу"],
        ["1-2", "De 1–2 ori", "1–2 times", "1–2 раза"],
        ["several", "De mai multe ori", "Several times", "Несколько раз"],
        ["monthly", "Lunar sau mai des", "Monthly or more often", "Ежемесячно или чаще"]
      ] },
    { id: "Q3", type: "multi", part: "A", showIf: a => a.Q2 !== "never",
      ro: "Unde ați căutat?", en: "Where did you look?", ru: "Где вы искали?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["dategov", "date.gov.md", "date.gov.md", "date.gov.md"],
        ["mtender", "MTender", "MTender", "MTender"],
        ["openmoney", "OpenMoney.md", "OpenMoney.md", "OpenMoney.md"],
        ["sites", "Site-urile instituțiilor", "Institutions' websites", "Сайты учреждений"],
        ["reports", "Rapoarte ale presei sau ONG-urilor", "Media or NGO reports", "Отчёты СМИ или НКО"],
        ["other", "Altele", "Other", "Другое"]
      ] },
    { id: "Q4", type: "scale", part: "A", showIf: a => a.Q2 !== "never", na: true,
      ro: "Cât de dificil a fost…", en: "How hard was it to…", ru: "Насколько сложно было…",
      low: { ro: "ușor", en: "easy", ru: "легко" }, high: { ro: "foarte dificil", en: "very hard", ru: "очень сложно" },
      rows: [
        ["a", "să găsesc fișierul potrivit", "find the right file", "найти нужный файл"],
        ["b", "să combin mai mulți ani sau mai multe instituții", "combine several years or institutions", "объединить несколько лет или учреждений"],
        ["c", "să identific aceeași instituție sau companie în fișiere diferite", "match the same institution or company across files", "найти одно и то же учреждение или компанию в разных файлах"],
        ["d", "să știu dacă datele sunt actuale", "know whether the data is current", "понять, актуальны ли данные"],
        ["e", "să verific de unde provine o cifră", "check where a number comes from", "проверить, откуда взялась цифра"]
      ] },
    { id: "Q5", type: "single", part: "A", showIf: a => a.Q2 !== "never",
      ro: "Ultima dată, cât timp v-a luat de la fișiere până la un răspuns?",
      en: "Last time, how long did it take from the files to an answer?",
      ru: "В последний раз сколько времени ушло от файлов до ответа?",
      options: [
        ["lt15", "Sub 15 minute", "Under 15 minutes", "Меньше 15 минут"],
        ["15-60", "15–60 minute", "15–60 minutes", "15–60 минут"],
        ["1-4h", "1–4 ore", "1–4 hours", "1–4 часа"],
        ["gt4h", "Peste 4 ore", "More than 4 hours", "Больше 4 часов"],
        ["gaveup", "N-am ajuns la un răspuns", "I didn't get an answer", "Ответ найти не удалось"]
      ] },
    { id: "Q6", type: "single", part: "A", showIf: a => a.Q2 !== "never",
      ro: "Ați întâlnit aceeași instituție sau companie scrisă în moduri diferite în date?",
      en: "Have you seen the same institution or company written in different ways in the data?",
      ru: "Встречали ли вы одно и то же учреждение или компанию, записанные в данных по-разному?",
      options: [["yes", "Da", "Yes", "Да"], ["no", "Nu", "No", "Нет"], ["unsure", "Nu știu", "Not sure", "Не знаю"]] },
    { id: "Q7", type: "scale", part: "A",
      ro: "Cât de utile ar fi pentru dvs.?", en: "How useful would each be for you?", ru: "Насколько полезным было бы для вас…",
      low: { ro: "deloc util", en: "not useful", ru: "бесполезно" }, high: { ro: "foarte util", en: "very useful", ru: "очень полезно" },
      rows: [
        ["a", "contracte deja legate de companii și instituții", "contracts already linked to companies and institutions", "контракты, уже связанные с компаниями и учреждениями"],
        ["b", "un link de la fiecare cifră la fișierul oficial, rândul și data", "a link from every number to the official file, row and date", "ссылка от каждой цифры на официальный файл, строку и дату"],
        ["c", "datele unei companii la o dată din trecut", "a company's details on a past date", "данные компании на прошлую дату"],
        ["d", "o listă cu datele care lipsesc", "a list of what data is missing", "список недостающих данных"],
        ["e", "descărcare în Excel/CSV", "download in Excel/CSV", "скачивание в Excel/CSV"],
        ["f", "acces printr-un API", "access through an API", "доступ через API"]
      ] },
    { id: "Q8", type: "single", part: "A",
      ro: "Cât de actuale trebuie să fie datele pentru dvs.?", en: "How up to date must the data be for you?", ru: "Насколько свежими должны быть данные для вас?",
      options: [
        ["daily", "Actualizate zilnic", "Updated daily", "Обновление каждый день"],
        ["weekly", "Săptămânal", "Weekly", "Каждую неделю"],
        ["monthly", "Lunar", "Monthly", "Каждый месяц"],
        ["quarterly", "Trimestrial sau mai rar", "Quarterly or less often", "Раз в квартал или реже"]
      ] },
    { id: "Q9", type: "single", part: "A",
      ro: "Ați avea mai multă încredere într-o cifră dacă ați putea deschide rândul exact din fișierul oficial?",
      en: "Would you trust a number more if you could open the exact row in the official file?",
      ru: "Вы бы больше доверяли цифре, если бы могли открыть точную строку в официальном файле?",
      options: [["more", "Mai multă încredere", "More", "Больше"], ["same", "Nicio diferență", "No difference", "Без разницы"], ["unsure", "Nu știu", "Not sure", "Не знаю"]] },

    // ---- Part B (Daniel): fill in and set enabled: true ----
    { id: "QB1", type: "scale", part: "B", enabled: false, ro: "…", en: "…", ru: "…",
      low: { ro: "deloc util", en: "not useful", ru: "бесполезно" }, high: { ro: "foarte util", en: "very useful", ru: "очень полезно" },
      rows: [["a", "…", "…", "…"]] },
    { id: "QB2", type: "single", part: "B", enabled: false, ro: "…", en: "…", ru: "…", options: [["x", "…", "…", "…"]] },
    // ---- Part C (Daria): fill in and set enabled: true ----
    { id: "QC1", type: "single", part: "C", enabled: false, ro: "…", en: "…", ru: "…", options: [["x", "…", "…", "…"]] },
    { id: "QC2", type: "single", part: "C", enabled: false, ro: "…", en: "…", ru: "…", options: [["x", "…", "…", "…"]] },

    { id: "Q10", type: "text", part: "A", optional: true,
      ro: "Opțional: o întrebare despre achizițiile publice din Moldova la care nu ați găsit răspuns.",
      en: "Optional: one question about public procurement in Moldova that you could not answer.",
      ru: "Необязательно: вопрос о госзакупках в Молдове, на который вы не нашли ответа." },
    { id: "Q11", type: "interview", part: "A",
      ro: "Ați accepta un scurt interviu online (15–20 minute)?", en: "Would you agree to a short online interview (15–20 minutes)?",
      ru: "Согласились бы вы на короткое онлайн-интервью (15–20 минут)?",
      options: [["no", "Nu", "No", "Нет"], ["yes", "Da", "Yes", "Да"]],
      email: { ro: "E-mail (opțional). Îl folosim doar pentru a vă contacta despre interviu și îl păstrăm separat de răspunsuri.",
               en: "E-mail (optional). We use it only to contact you about the interview and keep it separate from your answers.",
               ru: "E-mail (необязательно). Мы используем его только чтобы связаться с вами по поводу интервью и храним отдельно от ответов." } }
  ]
};
