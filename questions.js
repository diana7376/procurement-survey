// Survey questions. Same content as docs/survey-questions.md — change both together.
// Plain language: respondents are journalists, monitors and citizens, not IT people. Avoid technical words
// (API, CSV, platform, format, dataset); when one is needed, explain it in everyday words.
// Languages: ro (default), ru, en. Options and rows: [code, ro, en, ru].
// Types: single, multi (optional exclusive: codes that cannot be combined with others), scale (rows rated 1–5, optional "na"), text, interview.
// Answer codes are stable; they become the column names and values in the Google Sheet.
// To add Daria's questions: fill in a QC entry and set enabled: true.

window.SURVEY = {
  version: "2026-11-21e",
  intro: {
    ro: { title: "Datele publice despre achiziții: cât de ușor le folosim?",
          body: "Acest chestionar face parte din trei lucrări de licență la Universitatea Tehnică a Moldovei. Vrem să aflăm cât de ușor găsesc oamenii informații despre banii publici: cine cumpără, ce cumpără, de la cine și cu cât. Durează aproximativ 7 minute și este anonim: nu vă cerem numele. Folosim doar totalurile, nu răspunsurile fiecărei persoane. Dacă acceptați o discuție scurtă, vă cerem un e-mail, păstrat separat și șters după aceea.",
          start: "Începe", time: "≈ 7 minute · anonim" },
    ru: { title: "Открытые данные о госзакупках: насколько легко ими пользоваться?",
          body: "Этот опрос — часть трёх дипломных работ в Техническом университете Молдовы. Мы хотим понять, насколько легко людям находить информацию о государственных деньгах: кто покупает, что покупает, у кого и за сколько. Опрос займёт около 7 минут и анонимен: мы не спрашиваем ваше имя. Мы используем только общие итоги, а не ответы отдельных людей. Если вы согласитесь на короткую беседу, мы попросим e-mail; он хранится отдельно и потом удаляется.",
          start: "Начать", time: "≈ 7 минут · анонимно" },
    en: { title: "Public procurement data: how easy is it to use?",
          body: "This survey is part of three bachelor theses at the Technical University of Moldova. We want to know how easily people find information about public money: who buys, what, from whom and for how much. It takes about 7 minutes and is anonymous: we do not ask for your name. We only use totals, never one person's answers. If you agree to a short talk, we ask for an e-mail address, kept separately and deleted afterwards.",
          start: "Start", time: "≈ 7 minutes · anonymous" }
  },
  about: {
    ro: { label: "Despre proiect", text: "Construim un site care adună într-un singur loc datele publice despre achiziții. Orice cifră de pe site poate fi verificată în documentul oficial din care provine." },
    ru: { label: "О проекте", text: "Мы создаём сайт, который собирает в одном месте открытые данные о закупках. Любую цифру на сайте можно проверить по официальному документу, из которого она взята." },
    en: { label: "About the project", text: "We are building a website that brings public procurement data together in one place. Any number on the site can be checked against the official document it comes from." }
  },
  done: {
    ro: { title: "Mulțumim!", body: "Răspunsurile au fost trimise. Ne ajută să construim un site în care orice cifră poate fi verificată în documentul oficial." },
    ru: { title: "Спасибо!", body: "Ваши ответы отправлены. Они помогают нам создать сайт, где любую цифру можно проверить по официальному документу." },
    en: { title: "Thank you!", body: "Your answers were sent. They help us build a website where any number can be checked against the official document." }
  },
  questions: [
    { id: "Q1", type: "single",
      ro: "În ce calitate răspundeți?", en: "In what capacity are you answering?", ru: "В каком качестве вы отвечаете?",
      options: [
        ["journalist", "Lucrez în presă", "I work in the media", "Работаю в СМИ"],
        ["monitor", "Lucrez într-un ONG sau urmăresc cheltuielile publice", "I work in an NGO or follow public spending", "Работаю в НКО или слежу за государственными расходами"],
        ["research", "Studiez sau fac cercetare", "I study or do research", "Учусь или занимаюсь исследованиями"],
        ["public", "Lucrez în sectorul public", "I work in the public sector", "Работаю в государственном секторе"],
        ["business", "Lucrez în mediul de afaceri", "I work in business", "Работаю в бизнесе"],
        ["citizen", "Ca cetățean, din interes personal", "As a citizen, out of personal interest", "Как гражданин, из личного интереса"],
        ["other", "Altceva", "Other", "Другое"]
      ] },
    { id: "Q2", type: "single",
      ro: "În ultimele 12 luni, ați căutat informații despre cum se cheltuie banii publici în Moldova?",
      en: "In the last 12 months, did you look for information on how public money is spent in Moldova?",
      ru: "За последние 12 месяцев искали ли вы информацию о том, как тратятся государственные деньги в Молдове?",
      hint: { ro: "De exemplu: ce a cumpărat o primărie sau un spital, de la ce firmă și cu cât.",
              en: "For example: what a town hall or a hospital bought, from which company and for how much.",
              ru: "Например: что купила примэрия или больница, у какой фирмы и за сколько." },
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
        ["dategov", "date.gov.md (site-ul cu datele publice ale Guvernului)", "date.gov.md (the Government's public data website)", "date.gov.md (сайт открытых данных Правительства)"],
        ["mtender", "MTender (site-ul licitațiilor publice)", "MTender (the public tenders website)", "MTender (сайт государственных тендеров)"],
        ["openmoney", "OpenMoney.md", "OpenMoney.md", "OpenMoney.md"],
        ["sites", "Site-urile instituțiilor", "Institutions' websites", "Сайты учреждений"],
        ["reports", "Articole de presă sau rapoarte ale ONG-urilor", "News articles or NGO reports", "Статьи в СМИ или отчёты НКО"],
        ["other", "În altă parte", "Somewhere else", "В другом месте"],
        ["none", "Nu am căutat", "I didn't look", "Не искали"]
      ], exclusive: ["none"] },
    { id: "Q4", type: "scale", part: "A", na: true,
      ro: "Cât de greu a fost…", en: "How hard was it to…", ru: "Насколько трудно было…",
      low: { ro: "ușor", en: "easy", ru: "легко" }, high: { ro: "foarte greu", en: "very hard", ru: "очень трудно" },
      rows: [
        ["a", "să găsesc informația de care aveam nevoie", "find the information I needed", "найти нужную информацию"],
        ["b", "să pun cap la cap date din mai mulți ani sau de la mai multe instituții", "put together data from several years or institutions", "свести вместе данные за несколько лет или по нескольким учреждениям"],
        ["c", "să recunosc aceeași instituție sau firmă când numele e scris diferit", "recognise the same institution or company when its name is written differently", "узнать одно и то же учреждение или фирму, когда название написано по-разному"],
        ["d", "să știu dacă datele sunt la zi", "know whether the data is up to date", "понять, актуальны ли данные"],
        ["e", "să verific de unde provine o cifră", "check where a number comes from", "проверить, откуда взялась цифра"]
      ] },
    { id: "Q5", type: "single", part: "A",
      ro: "Ultima dată când ați căutat, cât timp v-a luat până ați găsit răspunsul?",
      en: "The last time you looked, how long did it take to find the answer?",
      ru: "Когда вы искали в последний раз, сколько времени ушло, чтобы найти ответ?",
      options: [
        ["lt15", "Sub 15 minute", "Under 15 minutes", "Меньше 15 минут"],
        ["15-60", "15–60 minute", "15–60 minutes", "15–60 минут"],
        ["1-4h", "1–4 ore", "1–4 hours", "1–4 часа"],
        ["gt4h", "Peste 4 ore", "More than 4 hours", "Больше 4 часов"],
        ["gaveup", "Nu am găsit răspunsul", "I didn't find the answer", "Ответ найти не удалось"],
        ["notsearched", "Nu am căutat astfel de informații", "I haven't looked for such information", "Такую информацию не искали"]
      ] },
    { id: "Q6", type: "single", part: "A",
      ro: "Ați observat că aceeași instituție sau firmă apare scrisă în moduri diferite (de ex. „Primăria X” și „Primaria satului X”)?",
      en: "Have you noticed the same institution or company written in different ways (e.g. \"Town Hall X\" and \"X village town hall\")?",
      ru: "Замечали ли вы, что одно и то же учреждение или фирма записаны по-разному (например, «Примэрия X» и «Примэрия села X»)?",
      options: [["yes", "Da", "Yes", "Да"], ["no", "Nu", "No", "Нет"], ["unsure", "Nu știu", "Not sure", "Не знаю"]] },
    { id: "Q7", type: "scale",
      ro: "Cât de util ar fi pentru dvs. un site care…",
      en: "How useful would a website be for you that…",
      ru: "Насколько полезным был бы для вас сайт, который…",
      low: { ro: "deloc util", en: "not useful", ru: "бесполезно" }, high: { ro: "foarte util", en: "very useful", ru: "очень полезно" },
      rows: [
        ["a", "arată toate contractele unei firme sau instituții la un loc, chiar dacă numele e scris diferit", "shows all contracts of a company or institution together, even when the name is written differently", "показывает все контракты фирмы или учреждения вместе, даже если название написано по-разному"],
        ["b", "vă permite să verificați orice cifră în documentul oficial din care provine", "lets you check any number against the official document it comes from", "позволяет проверить любую цифру по официальному документу, из которого она взята"],
        ["c", "arată datele unei firme așa cum erau la o anumită dată (de ex. la semnarea contractului)", "shows a company's details as they were on a given date (e.g. when the contract was signed)", "показывает данные фирмы такими, какими они были на определённую дату (например, при подписании контракта)"],
        ["d", "spune clar ce date lipsesc", "says clearly which data is missing", "чётко говорит, каких данных не хватает"],
        ["e", "permite descărcarea datelor într-un tabel Excel", "lets you download the data as an Excel table", "позволяет скачать данные в таблицу Excel"],
        ["f", "permite programatorilor să preia datele automat în aplicațiile lor (API)", "lets programmers take the data automatically into their own apps (API)", "позволяет программистам автоматически получать данные в свои приложения (API)"]
      ] },
    { id: "Q8", type: "single",
      ro: "Cât de vechi pot fi datele, ca să vă fie încă de folos?",
      en: "How old can the data be and still be useful to you?",
      ru: "Насколько старыми могут быть данные, чтобы всё ещё быть вам полезными?",
      options: [
        ["daily", "Cel mult o zi", "At most a day", "Не старше одного дня"],
        ["weekly", "Cel mult o săptămână", "At most a week", "Не старше недели"],
        ["monthly", "Cel mult o lună", "At most a month", "Не старше месяца"],
        ["quarterly", "Pot fi și de acum câteva luni", "They can be a few months old", "Могут быть и несколькомесячной давности"]
      ] },
    { id: "Q9", type: "single",
      ro: "Ați avea mai multă încredere într-o cifră dacă ați putea deschide documentul oficial din care provine?",
      en: "Would you trust a number more if you could open the official document it comes from?",
      ru: "Вы бы больше доверяли цифре, если бы могли открыть официальный документ, из которого она взята?",
      options: [["more", "Da, mai multă încredere", "Yes, more", "Да, больше"], ["same", "Nicio diferență", "No difference", "Без разницы"], ["unsure", "Nu știu", "Not sure", "Не знаю"]] },

    // ---- Part B (Daniel) ----
    { id: "QB1", type: "single", part: "B",
      ro: "Cât de ușor vă descurcați cu tabele și cifre (de ex. în Excel)?",
      en: "How comfortable are you with tables and numbers (e.g. in Excel)?",
      ru: "Насколько уверенно вы работаете с таблицами и цифрами (например, в Excel)?",
      options: [
        ["beginner", "Mă descurc doar cu lucruri simple", "I manage only simple things", "Справляюсь только с простыми вещами"],
        ["intermediate", "Fac calcule și filtre fără probleme", "I do calculations and filters without trouble", "Без проблем делаю расчёты и фильтры"],
        ["advanced", "Fac analize complexe", "I do complex analyses", "Делаю сложный анализ"]
      ] },
    { id: "QB2", type: "multi", part: "B",
      ro: "Pentru ce ați folosi informațiile despre achizițiile publice?",
      en: "What would you use public procurement information for?",
      ru: "Для чего вы бы использовали информацию о государственных закупках?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["research", "Cercetare", "Research", "Исследования"],
        ["journalism", "Articole de presă", "News stories", "Журналистские материалы"],
        ["monitoring", "Urmărirea modului în care se cheltuie banii publici", "Following how public money is spent", "Следить за тем, как тратятся государственные деньги"],
        ["bidding", "Participarea firmei mele la licitații", "My company taking part in tenders", "Участие моей фирмы в тендерах"],
        ["academic", "Studii sau lucrări universitare", "Studies or university papers", "Учёба или университетские работы"],
        ["other", "Altceva", "Something else", "Другое"]
      ] },
    { id: "QB3", type: "multi", part: "B",
      ro: "Ce fel de informații despre achiziții publice folosiți acum?",
      en: "What kind of public procurement information do you use now?",
      ru: "Какую информацию о государственных закупках вы используете сейчас?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["contracts", "Contracte semnate", "Signed contracts", "Подписанные контракты"],
        ["tenders", "Anunțuri de licitații", "Tender announcements", "Объявления о тендерах"],
        ["companies", "Informații despre firme", "Information about companies", "Информация о фирмах"],
        ["budget", "Bugete și cheltuieli publice", "Budgets and public spending", "Бюджеты и государственные расходы"],
        ["none", "Nu folosesc astfel de informații acum", "I don't use such information now", "Сейчас такую информацию не использую"],
        ["other", "Altceva", "Something else", "Другое"]
      ], exclusive: ["none"] },
    { id: "QB6", type: "text", part: "B", optional: true,
      ro: "Ce informații despre achizițiile publice vă este greu să găsiți?",
      en: "What information about public procurement is hard for you to find?",
      ru: "Какую информацию о государственных закупках вам трудно найти?" },
    { id: "QB7", type: "single", part: "B",
      ro: "Vi s-a întâmplat să nu găsiți o informație pentru că datele erau împrăștiate sau greu de înțeles?",
      en: "Has it happened that you could not find some information because the data was scattered or hard to understand?",
      ru: "Случалось ли, что вы не могли найти информацию, потому что данные были разбросаны или непонятны?",
      options: [["yes", "Da", "Yes", "Да"], ["no", "Nu", "No", "Нет"]],
      followUp: { on: "yes",
                  ro: "Dacă da, povestiți pe scurt ce căutați (opțional).",
                  en: "If yes, briefly tell us what you were looking for (optional).",
                  ru: "Если да, кратко расскажите, что вы искали (необязательно)." } },
    { id: "QB8", type: "single", part: "B",
      ro: "Care este cea mai mare greutate când căutați astfel de informații?",
      en: "What is the biggest difficulty when you look for such information?",
      ru: "Что труднее всего, когда вы ищете такую информацию?",
      options: [
        ["find", "Să găsesc unde sunt datele", "Finding where the data is", "Найти, где находятся данные"],
        ["split", "Datele sunt împărțite în multe fișiere", "The data is split across many files", "Данные разбиты на много файлов"],
        ["formats", "Fișierele sunt în forme diferite (Excel, PDF etc.)", "Files come in different forms (Excel, PDF, etc.)", "Файлы в разных форматах (Excel, PDF и т. д.)"],
        ["names", "Aceeași instituție sau firmă apare cu nume diferite", "The same institution or company appears under different names", "Одно и то же учреждение или фирма встречается под разными названиями"],
        ["current", "Nu știu dacă datele sunt la zi", "I don't know whether the data is up to date", "Непонятно, актуальны ли данные"],
        ["source", "Nu pot verifica de unde provine o cifră", "I can't check where a number comes from", "Нельзя проверить, откуда взялась цифра"],
        ["other", "Altceva", "Something else", "Другое"]
      ] },
    { id: "QB9", type: "single", part: "B",
      ro: "Ați folosi un site care arată datele statului într-un mod ușor de înțeles?",
      en: "Would you use a website that shows the state's data in an easy-to-understand way?",
      ru: "Пользовались бы вы сайтом, который показывает государственные данные в понятном виде?",
      options: [["yes", "Da", "Yes", "Да"], ["probably", "Probabil", "Probably", "Возможно"], ["no", "Nu", "No", "Нет"]] },
    { id: "QB10", type: "multi", part: "B",
      ro: "Cum vă este cel mai ușor să înțelegeți cifrele?",
      en: "How do you find numbers easiest to understand?",
      ru: "В каком виде вам легче всего понимать цифры?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["charts", "Grafice", "Charts", "Графики"],
        ["tables", "Tabele", "Tables", "Таблицы"],
        ["text", "Explicații în cuvinte", "Explanations in words", "Объяснения словами"],
        ["maps", "Hărți", "Maps", "Карты"],
        ["combined", "Toate la un loc", "All of them together", "Всё вместе"],
        ["other", "Altceva", "Something else", "Другое"]
      ] },
    { id: "QB11", type: "multi", part: "B",
      ro: "Ce v-ar ajuta pe un astfel de site?",
      en: "What would help you on such a website?",
      ru: "Что помогло бы вам на таком сайте?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["search", "Căutare după mai multe criterii deodată", "Searching by several criteria at once", "Поиск сразу по нескольким критериям"],
        ["filters", "Filtre (de ex. după an, raion sau instituție)", "Filters (e.g. by year, district or institution)", "Фильтры (например, по году, району или учреждению)"],
        ["export", "Descărcare în Excel", "Download to Excel", "Скачивание в Excel"],
        ["charts", "Grafice pe care le pot explora", "Charts I can explore", "Графики, которые можно изучать"],
        ["alerts", "Mesaje când apar date noi", "Messages when new data appears", "Сообщения о новых данных"],
        ["api", "Acces pentru programatori (API)", "Access for programmers (API)", "Доступ для программистов (API)"],
        ["other", "Altceva", "Something else", "Другое"]
      ] },
    { id: "QB12", type: "single", part: "B",
      ro: "Cât ați aștepta, cel mult, până se încarcă o pagină cu rezultate?",
      en: "At most, how long would you wait for a page of results to load?",
      ru: "Сколько максимум вы бы ждали, пока загрузится страница с результатами?",
      options: [
        ["lt3s", "Cel mult 3 secunde", "Up to 3 seconds", "До 3 секунд"],
        ["3-10s", "3–10 secunde", "3–10 seconds", "3–10 секунд"],
        ["lt30s", "Până la 30 de secunde", "Up to 30 seconds", "До 30 секунд"],
        ["longer", "Mai mult, dacă primesc toate rezultatele", "Longer, if I get all the results", "Дольше, если получу все результаты"]
      ] },
    // ---- Part C (Daria): hidden until filled in and set enabled: true ----
    { id: "QC1", type: "single", part: "C", enabled: false, ro: "…", en: "…", ru: "…", options: [["x", "…", "…", "…"]] },
    { id: "QC2", type: "single", part: "C", enabled: false, ro: "…", en: "…", ru: "…", options: [["x", "…", "…", "…"]] },

    { id: "Q10", type: "text", optional: true,
      ro: "Ce ați vrea să aflați despre achizițiile publice din Moldova?",
      en: "What would you like to find out about public procurement in Moldova?",
      ru: "Что бы вы хотели узнать о государственных закупках в Молдове?" },
    { id: "Q11", type: "interview",
      ro: "Ați accepta o scurtă discuție online (15–20 de minute) cu noi?", en: "Would you agree to a short online talk (15–20 minutes) with us?",
      ru: "Согласились бы вы на короткую онлайн-беседу с нами (15–20 минут)?",
      options: [["yes", "Da", "Yes", "Да"], ["no", "Nu", "No", "Нет"]],
      email: { ro: "E-mail (opțional). Îl folosim doar ca să vă contactăm pentru discuție și îl păstrăm separat de răspunsuri.",
               en: "E-mail (optional). We use it only to contact you about the talk and keep it separate from your answers.",
               ru: "E-mail (необязательно). Мы используем его только чтобы связаться с вами по поводу беседы и храним отдельно от ответов." } }
  ]
};
