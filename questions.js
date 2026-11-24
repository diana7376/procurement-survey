// Survey questions. Same content as shared/survey/questions.md — change both together.
// Final team version of 23 Nov 2026 (Daria's proposal of 22 Nov, "Chestionar_RO_propunere_final.md", with small fixes:
// neutral wording in QB13/QB14, no gendered "(ă)" in Q6a, plain words for CSV/JSON in QB16, "none" answers exclusive in Q12).
// QB14 and QB15 reworded on 24 Nov 2026.
// Plain language: respondents are journalists, monitors and citizens, not IT people. When a technical word is needed
// (API, CSV), explain it in everyday words.
// Languages: ro (default), ru, en. Options and rows: [code, ro, en, ru].
// Types: single, multi (optional exclusive: codes that cannot be combined with others; optional max: at most n answers),
// scale (rows rated 1–5, optional "na" with optional naLabel), text, interview. showIf(answers) hides a question.
// Answer codes are stable; they become the column names and values in the Google Sheet. The "version" column tells
// answers to earlier wordings (2026-11-21g, 2026-11-23a, 2026-11-24a/b) apart from this one.

window.SURVEY = {
  version: "2026-11-24c",
  intro: {
    ro: { title: "Datele publice despre achiziții: cât de ușor le folosim?",
          body: "Acest chestionar face parte din trei lucrări de licență la Universitatea Tehnică a Moldovei. Vrem să aflăm cât de ușor găsesc oamenii informații despre banii publici: cine cumpără, ce cumpără, de la cine și cu cât. Durează aproximativ 10 minute și este anonim: nu vă cerem numele. Folosim doar totalurile, nu răspunsurile fiecărei persoane. Dacă acceptați o discuție scurtă, vă cerem un e-mail, păstrat separat și șters după aceea.",
          start: "Începe" },
    ru: { title: "Открытые данные о госзакупках: насколько легко ими пользоваться?",
          body: "Этот опрос — часть трёх дипломных работ в Техническом университете Молдовы. Мы хотим понять, насколько легко людям находить информацию о государственных деньгах: кто покупает, что покупает, у кого и за сколько. Опрос займёт около 10 минут и анонимен: мы не спрашиваем ваше имя. Мы используем только общие итоги, а не ответы отдельных людей. Если вы согласитесь на короткую беседу, мы попросим e-mail; он хранится отдельно и потом удаляется.",
          start: "Начать" },
    en: { title: "Public procurement data: how easy is it to use?",
          body: "This survey is part of three bachelor theses at the Technical University of Moldova. We want to know how easily people find information about public money: who buys, what, from whom and for how much. It takes about 10 minutes and is anonymous: we do not ask for your name. We only use totals, never one person's answers. If you agree to a short talk, we ask for an e-mail address, kept separately and deleted afterwards.",
          start: "Start" }
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
    // ---- A. Despre dumneavoastră ----
    { id: "Q1", type: "single",
      ro: "În ce domeniu activați?", en: "What field do you work in?", ru: "В какой сфере вы работаете?",
      options: [
        ["journalist", "Presă și jurnalism", "Media and journalism", "СМИ и журналистика"],
        ["monitor", "ONG sau monitorizarea cheltuielilor publice", "NGO or monitoring of public spending", "НКО или мониторинг государственных расходов"],
        ["research", "Educație și cercetare (student, cadru didactic, cercetător)", "Education and research (student, teacher, researcher)", "Образование и наука (студент, преподаватель, исследователь)"],
        ["public", "Sector public", "Public sector", "Государственный сектор"],
        ["business", "Mediul de afaceri", "Business", "Бизнес"],
        ["citizen", "Nu activez în aceste domenii, mă interesez ca cetățean", "None of these, I am interested as a citizen", "Ни одна из этих сфер, интересуюсь как гражданин"],
        ["other", "Altul", "Other", "Другое"]
      ] },
    { id: "Q2", type: "single",
      ro: "În ultimele 12 luni, ați căutat sau ați urmărit informații despre modul în care sunt cheltuiți banii publici în Republica Moldova?",
      en: "In the last 12 months, did you look for or follow information on how public money is spent in the Republic of Moldova?",
      ru: "За последние 12 месяцев искали ли вы или отслеживали информацию о том, как тратятся государственные деньги в Республике Молдова?",
      hint: { ro: "De exemplu: ce a cumpărat o primărie sau un spital, de la ce firmă și la ce preț.",
              en: "For example: what a town hall or a hospital bought, from which company and at what price.",
              ru: "Например: что купила примэрия или больница, у какой фирмы и по какой цене." },
      options: [
        ["never", "Nu, niciodată", "No, never", "Нет, ни разу"],
        ["1-2", "De 1–2 ori", "1–2 times", "1–2 раза"],
        ["several", "De mai multe ori", "Several times", "Несколько раз"],
        ["monthly", "Lunar sau mai des", "Monthly or more often", "Ежемесячно или чаще"]
      ] },
    { id: "QB1", type: "single", part: "B",
      ro: "Ce nivel de cunoștințe în analiza datelor aveți?",
      en: "What is your level of knowledge in data analysis?",
      ru: "Каков ваш уровень знаний в анализе данных?",
      options: [
        ["pro", "Lucrez profesional în analiza datelor (de ex. SQL, Power BI, Python, data science)", "I work professionally in data analysis (e.g. SQL, Power BI, Python, data science)", "Профессионально занимаюсь анализом данных (например, SQL, Power BI, Python, data science)"],
        ["basics", "Cunosc bazele analizei datelor (de ex. interogări SQL simple, tabele pivot, formule în Excel)", "I know the basics of data analysis (e.g. simple SQL queries, pivot tables, Excel formulas)", "Знаю основы анализа данных (например, простые SQL-запросы, сводные таблицы, формулы в Excel)"],
        ["excel", "Pot face operații de bază în Excel (sortare, filtrare, sume)", "I can do basic operations in Excel (sorting, filtering, sums)", "Умею выполнять простые операции в Excel (сортировка, фильтры, суммы)"],
        ["none", "Nu am cunoștințe în analiza datelor", "I have no knowledge of data analysis", "Не разбираюсь в анализе данных"]
      ] },
    { id: "QB2", type: "multi", part: "B",
      ro: "În prezent, în ce scop folosiți informațiile despre achizițiile publice?",
      en: "At present, what do you use public procurement information for?",
      ru: "Для чего вы сейчас используете информацию о государственных закупках?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["journalism", "Articole sau investigații jurnalistice", "News stories or investigations", "Журналистские материалы или расследования"],
        ["monitoring", "Monitorizarea cheltuielilor publice (ONG, societate civilă)", "Monitoring public spending (NGO, civil society)", "Мониторинг государственных расходов (НКО, гражданское общество)"],
        ["research", "Cercetare științifică", "Scientific research", "Научные исследования"],
        ["academic", "Studii sau lucrări universitare", "Studies or university papers", "Учёба или университетские работы"],
        ["bidding", "Participarea firmei mele la licitații publice", "My company taking part in public tenders", "Участие моей фирмы в государственных тендерах"],
        ["market", "Analiza pieței sau a concurenței", "Market or competitor analysis", "Анализ рынка или конкурентов"],
        ["public", "Activitatea mea profesională în sectorul public", "My work in the public sector", "Моя работа в государственном секторе"],
        ["citizen", "Interes personal, ca cetățean", "Personal interest, as a citizen", "Личный интерес, как гражданин"],
        ["none", "Nu folosesc astfel de informații în prezent", "I don't use such information at present", "Сейчас такую информацию не использую"],
        ["other", "Altul", "Other", "Другое"]
      ], exclusive: ["none"] },

    // ---- B. Experiența actuală ----
    { id: "Q3", type: "multi", part: "A",
      ro: "Unde ați căutat date despre achizițiile publice sau despre cheltuirea banilor publici?",
      en: "Where did you look for data on public procurement or on how public money is spent?",
      ru: "Где вы искали данные о государственных закупках или о расходовании государственных денег?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["dategov", "date.gov.md (portalul datelor deschise al Guvernului)", "date.gov.md (the Government's open data portal)", "date.gov.md (портал открытых данных Правительства)"],
        ["mtender", "MTender (sistemul achizițiilor publice)", "MTender (the public procurement system)", "MTender (система государственных закупок)"],
        ["openmoney", "OpenMoney.md", "OpenMoney.md", "OpenMoney.md"],
        ["sites", "Site-urile instituțiilor", "Institutions' websites", "Сайты учреждений"],
        ["reports", "Articole de presă sau rapoarte ale ONG-urilor", "News articles or NGO reports", "Статьи в СМИ или отчёты НКО"],
        ["other", "În altă parte", "Somewhere else", "В другом месте"],
        ["none", "Nu am căutat", "I didn't look", "Не искали"]
      ], exclusive: ["none"] },
    { id: "QB7", type: "single", part: "B",
      ro: "Vi s-a întâmplat să renunțați la căutarea unei informații pentru că datele erau împrăștiate în mai multe surse sau greu de înțeles?",
      en: "Have you ever given up looking for some information because the data was scattered across several sources or hard to understand?",
      ru: "Случалось ли вам бросать поиск информации, потому что данные были разбросаны по разным источникам или непонятны?",
      options: [["yes", "Da", "Yes", "Да"], ["no", "Nu", "No", "Нет"]],
      followUp: { on: "yes",
                  ro: "Descrieți pe scurt ce informație căutați (opțional).",
                  en: "Briefly describe what information you were looking for (optional).",
                  ru: "Кратко опишите, какую информацию вы искали (необязательно)." } },
    { id: "Q4", type: "scale", part: "A", na: true,
      ro: "Cât de complex a fost să realizați următoarele pe platformele publice existente (de ex. MTender, date.gov.md)?",
      en: "How complex was it to do the following on the existing public platforms (e.g. MTender, date.gov.md)?",
      ru: "Насколько сложно было сделать следующее на существующих государственных платформах (например, MTender, date.gov.md)?",
      low: { ro: "foarte simplu", en: "very simple", ru: "очень просто" }, high: { ro: "foarte complex", en: "very complex", ru: "очень сложно" },
      naLabel: { ro: "Nu am încercat", en: "Didn't try", ru: "Не пробовали" },
      rows: [
        ["a", "Identificarea informației de care aveam nevoie", "Finding the information I needed", "Найти нужную информацию"],
        ["b", "Combinarea datelor din mai mulți ani sau de la mai multe instituții", "Combining data from several years or several institutions", "Объединить данные за несколько лет или по нескольким учреждениям"],
        ["c", "Identificarea aceleiași instituții sau firme scrise în moduri diferite", "Recognising the same institution or company written in different ways", "Распознать одно и то же учреждение или фирму, записанные по-разному"],
        ["d", "Stabilirea datei la care informația a fost actualizată ultima dată", "Finding out when the information was last updated", "Узнать, когда информация обновлялась в последний раз"],
        ["e", "Verificarea sursei din care provine o cifră", "Checking the source a number comes from", "Проверить источник, из которого взята цифра"]
      ] },
    { id: "QB8", type: "single", part: "B",
      ro: "Care dintre aceste dificultăți vă afectează cel mai mult?",
      en: "Which of these difficulties affects you most?",
      ru: "Какая из этих трудностей мешает вам больше всего?",
      options: [
        ["find", "Obținerea datelor (nu știu unde se află sau cum să le accesez)", "Getting the data (I don't know where it is or how to access it)", "Получить данные (не знаю, где они или как к ним получить доступ)"],
        ["split", "Datele sunt împărțite în multe fișiere", "The data is split across many files", "Данные разбиты на много файлов"],
        ["formats", "Fișierele sunt în formate diferite (Excel, PDF etc.)", "Files come in different formats (Excel, PDF, etc.)", "Файлы в разных форматах (Excel, PDF и т. д.)"],
        ["names", "Aceeași instituție sau firmă apare cu denumiri diferite", "The same institution or company appears under different names", "Одно и то же учреждение или фирма встречается под разными названиями"],
        ["current", "Nu este clar când au fost actualizate datele ultima dată", "It is not clear when the data was last updated", "Непонятно, когда данные обновлялись в последний раз"],
        ["source", "Nu pot verifica de unde provine o cifră", "I can't check where a number comes from", "Нельзя проверить, откуда взялась цифра"],
        ["other", "Altceva", "Something else", "Другое"]
      ] },
    { id: "Q5", type: "single", part: "A",
      ro: "În medie, cât timp vă ia să găsiți răspunsul la o întrebare despre achizițiile publice?",
      en: "On average, how long does it take you to find the answer to a question about public procurement?",
      ru: "Сколько времени в среднем у вас уходит, чтобы найти ответ на вопрос о государственных закупках?",
      options: [
        ["lt15", "Sub 15 minute", "Under 15 minutes", "Меньше 15 минут"],
        ["15-60", "15–60 de minute", "15–60 minutes", "15–60 минут"],
        ["1-4h", "1–4 ore", "1–4 hours", "1–4 часа"],
        ["gt4h", "Peste 4 ore", "More than 4 hours", "Больше 4 часов"],
        ["gaveup", "De obicei nu găsesc răspunsul", "I usually don't find the answer", "Обычно не нахожу ответ"],
        ["notsearched", "Nu am căutat astfel de informații", "I haven't looked for such information", "Такую информацию не искали"]
      ] },
    // Q6 taken out on 24 Nov 2026 (Diana); Q6a goes with it, it was shown only after Q6 = "yes". Codes kept, not reused.
    { id: "Q6", type: "single", part: "A", enabled: false,
      ro: "Ați avut dificultăți în găsirea sau utilizarea datelor pentru că aceeași instituție sau firmă apare cu denumiri diferite (de ex. „Primăria X” și „Primaria satului X”)?",
      en: "Have you had difficulty finding or using data because the same institution or company appears under different names (e.g. \"Town Hall X\" and \"X village town hall\")?",
      ru: "Были ли у вас трудности с поиском или использованием данных из-за того, что одно и то же учреждение или фирма встречается под разными названиями (например, «Примэрия X» и «Примэрия села X»)?",
      options: [["yes", "Da", "Yes", "Да"], ["no", "Nu", "No", "Нет"], ["unsure", "Nu știu", "Not sure", "Не знаю"]] },
    { id: "Q6a", type: "multi", part: "A", enabled: false, showIf: a => a.Q6 === "yes",
      ro: "Ce probleme ați întâmpinat?", en: "What problems did you run into?", ru: "С какими проблемами вы столкнулись?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["missed", "Nu am găsit toate contractele instituției sau ale firmei", "I didn't find all the contracts of the institution or company", "Не нашлись все контракты учреждения или фирмы"],
        ["totals", "Totalurile calculate au fost incomplete sau greșite", "The totals I calculated were incomplete or wrong", "Подсчитанные итоги оказались неполными или неверными"],
        ["manual", "A trebuit să unesc manual denumirile diferite", "I had to merge the different names by hand", "Пришлось вручную объединять разные названия"],
        ["unsure", "Nu era clar dacă este vorba de aceeași instituție sau firmă", "It was not clear whether it was the same institution or company", "Было непонятно, одно ли это учреждение или одна ли фирма"],
        ["other", "Altceva", "Something else", "Другое"]
      ] },
    { id: "Q12", type: "multi", part: "A",
      ro: "Când folosiți date despre achizițiile publice în activitatea dvs., cum verificați că sunt corecte și actuale?",
      en: "When you use public procurement data in your work, how do you check that it is correct and up to date?",
      ru: "Когда вы используете данные о госзакупках в своей работе, как вы проверяете, что они верны и актуальны?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["official", "Le compar cu documentul oficial (contractul, anunțul din MTender)", "I compare them with the official document (the contract, the MTender notice)", "Сравниваю с официальным документом (контрактом, объявлением в MTender)"],
        ["date", "Verific data publicării sau a ultimei actualizări", "I check the publication date or the date of the last update", "Проверяю дату публикации или последнего обновления"],
        ["other_sources", "Le compar cu alte surse (presă, rapoarte)", "I compare them with other sources (media, reports)", "Сравниваю с другими источниками (СМИ, отчёты)"],
        ["ask", "Solicit confirmare de la instituție", "I ask the institution to confirm", "Запрашиваю подтверждение у учреждения"],
        ["noverify", "De obicei nu le verific", "I usually don't check them", "Обычно не проверяю"],
        ["nouse", "Nu folosesc astfel de date", "I don't use such data", "Не использую такие данные"],
        ["other", "Altfel", "Another way", "Иначе"]
      ], exclusive: ["noverify", "nouse"] },
    { id: "QB6", type: "text", part: "B", optional: true,
      ro: "Ce informații despre achizițiile publice vă sunt necesare, dar sunt greu de găsit sau nu le găsiți deloc?",
      en: "What information about public procurement do you need but find hard to find, or cannot find at all?",
      ru: "Какая информация о госзакупках вам нужна, но её трудно найти или не удаётся найти вовсе?" },

    // ---- C. Platforma propusă ----
    { id: "QB9", type: "single", part: "B",
      ro: "Cât de probabil este să folosiți o platformă care prezintă clar și vizual datele despre achizițiile publice, prelucrate din sursele deschise (MTender, date.gov.md)?",
      en: "How likely are you to use a platform that shows public procurement data clearly and visually, processed from the open sources (MTender, date.gov.md)?",
      ru: "Насколько вероятно, что вы будете пользоваться платформой, которая понятно и наглядно показывает данные о госзакупках, обработанные из открытых источников (MTender, date.gov.md)?",
      options: [
        ["very", "Foarte probabil", "Very likely", "Очень вероятно"],
        ["likely", "Probabil", "Likely", "Вероятно"],
        ["unlikely", "Puțin probabil", "Unlikely", "Маловероятно"],
        ["notatall", "Deloc probabil", "Not at all likely", "Совсем маловероятно"]
      ] },
    { id: "QC1", type: "single", part: "C",
      ro: "Pe ce dispozitiv ați folosi cel mai des platforma?", en: "On which device would you use the platform most often?",
      ru: "На каком устройстве вы бы чаще всего пользовались платформой?",
      options: [
        ["desktop", "Calculator sau laptop", "Computer or laptop", "Компьютер или ноутбук"],
        ["phone", "Telefon", "Phone", "Телефон"],
        ["tablet", "Tabletă", "Tablet", "Планшет"],
        ["several", "Pe mai multe dispozitive, la fel de des", "Several devices, equally often", "На нескольких устройствах одинаково часто"]
      ] },
    { id: "Q7", type: "scale",
      ro: "Cât de utile v-ar fi următoarele posibilități ale unei astfel de platforme?",
      en: "How useful would the following features of such a platform be to you?",
      ru: "Насколько полезными были бы для вас следующие возможности такой платформы?",
      low: { ro: "deloc util", en: "not useful", ru: "бесполезно" }, high: { ro: "foarte util", en: "very useful", ru: "очень полезно" },
      rows: [
        ["a", "Afișarea tuturor contractelor unei firme sau instituții într-un singur loc, chiar dacă denumirea este scrisă diferit", "All contracts of a company or institution in one place, even when the name is written differently", "Все контракты фирмы или учреждения в одном месте, даже если название написано по-разному"],
        ["b", "Verificarea provenienței oricărei cifre, cu link spre documentul oficial", "Checking where any number comes from, with a link to the official document", "Проверка происхождения любой цифры со ссылкой на официальный документ"],
        ["c", "Afișarea situației unei firme într-o perioadă din trecut (de ex. acum un an sau în trimestrul în care a semnat contractul)", "A company's situation at a past time (e.g. a year ago, or in the quarter it signed the contract)", "Положение фирмы в прошлом (например, год назад или в квартале, когда был подписан контракт)"],
        ["d", "Indicarea datelor care nu au fost găsite în sursele publice (de ex. contracte nepublicate)", "Pointing out data that was not found in the public sources (e.g. unpublished contracts)", "Указание данных, которые не найдены в открытых источниках (например, неопубликованные контракты)"],
        ["e", "Descărcarea datelor într-un tabel Excel", "Downloading the data as an Excel table", "Скачивание данных в таблицу Excel"],
        ["f", "Preluarea automată a datelor de către programatori (API)", "Programmers taking the data automatically (API)", "Автоматическое получение данных программистами (API)"]
      ] },
    { id: "QC2", type: "scale", part: "C",
      ro: "Cât de importante sunt pentru dvs. următoarele calități ale platformei?",
      en: "How important are the following qualities of the platform to you?",
      ru: "Насколько важны для вас следующие качества платформы?",
      low: { ro: "deloc important", en: "not important", ru: "совсем не важно" }, high: { ro: "foarte important", en: "very important", ru: "очень важно" },
      rows: [
        ["a", "Interfață simplă, fără elemente inutile", "A simple interface, nothing unnecessary", "Простой интерфейс без лишних элементов"],
        ["b", "Explicații care ajută la citirea graficelor", "Explanations that help read the charts", "Пояснения, помогающие читать графики"],
        ["c", "Sursa afișată lângă fiecare cifră", "The source shown next to every number", "Источник рядом с каждой цифрой"],
        ["d", "Funcționare rapidă și pe o conexiune lentă", "Works fast even on a slow connection", "Быстрая работа даже при медленном соединении"],
        ["e", "Accesibilitate pentru persoanele cu dizabilități (de ex. cititor de ecran, contrast)", "Accessible to people with disabilities (e.g. screen reader, contrast)", "Доступность для людей с инвалидностью (например, экранный диктор, контраст)"],
        ["f", "Salvarea căutărilor sau filtrelor preferate", "Saving favourite searches or filters", "Сохранение избранных поисков или фильтров"]
      ] },
    { id: "Q8", type: "single",
      ro: "Cât de actualizate trebuie să fie datele pentru activitatea dvs.?",
      en: "How up to date must the data be for your work?",
      ru: "Насколько свежими должны быть данные для вашей работы?",
      options: [
        ["daily", "Actualizate zilnic", "Updated daily", "Обновляться ежедневно"],
        ["weekly", "Actualizate săptămânal", "Updated weekly", "Обновляться еженедельно"],
        ["monthly", "Actualizate lunar", "Updated monthly", "Обновляться ежемесячно"],
        ["quarterly", "Actualizările trimestriale sau mai rare sunt suficiente", "Quarterly or less frequent updates are enough", "Достаточно обновлений раз в квартал или реже"]
      ] },
    { id: "QB10", type: "multi", part: "B",
      ro: "În ce formă v-ar fi cel mai comod să vizualizați datele despre achizițiile publice?",
      en: "In what form would it be most convenient for you to view public procurement data?",
      ru: "В каком виде вам было бы удобнее всего смотреть данные о госзакупках?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["charts", "Grafice", "Charts", "Графики"],
        ["tables", "Tabele", "Tables", "Таблицы"],
        ["text", "Explicații în text", "Explanations in text", "Текстовые пояснения"],
        ["maps", "Hărți", "Maps", "Карты"],
        ["summary", "Rezumat cu cifrele principale", "A summary with the key figures", "Сводка с главными цифрами"],
        ["combined", "O combinație a acestora", "A combination of these", "Сочетание всего этого"],
        ["other", "Altceva", "Something else", "Другое"]
      ] },
    { id: "QC3", type: "multi", part: "C", max: 3,
      ro: "Ce tipuri de grafice vă sunt cel mai ușor de înțeles?", en: "Which types of chart are easiest for you to understand?",
      ru: "Какие типы графиков вам легче всего понять?",
      hint: { ro: "Alegeți cel mult 3.", en: "Choose up to 3.", ru: "Выберите не больше 3." },
      options: [
        ["line", "Grafic în timp (linie)", "A chart over time (line)", "График во времени (линия)"],
        ["bars", "Grafic cu bare", "Bar chart", "Столбчатая диаграмма"],
        ["ranking", "Clasament (de ex. primii 10 furnizori)", "Ranking (e.g. top 10 suppliers)", "Рейтинг (например, 10 крупнейших поставщиков)"],
        ["cards", "Carduri cu cifrele principale", "Cards with the key figures", "Карточки с главными цифрами"],
        ["table", "Tabel care poate fi sortat", "A table you can sort", "Таблица с сортировкой"],
        ["pie", "Grafic circular", "Pie chart", "Круговая диаграмма"],
        ["timeline", "Cronologia unui contract (de la anunț la plată)", "A contract's timeline (from notice to payment)", "Хронология контракта (от объявления до оплаты)"]
      ] },
    { id: "QB11", type: "multi", part: "B",
      ro: "Dacă ați folosi o platformă de analiză și filtrare a datelor despre achizițiile publice, ce funcționalități v-ar ajuta cel mai mult în activitatea zilnică?",
      en: "If you used a platform for analysing and filtering public procurement data, which features would help you most in your daily work?",
      ru: "Если бы вы пользовались платформой для анализа и фильтрации данных о госзакупках, какие функции больше всего помогли бы вам в повседневной работе?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["search", "Căutare după mai multe criterii simultan", "Searching by several criteria at once", "Поиск сразу по нескольким критериям"],
        ["filters", "Filtre (după an, instituție, firmă, tip de bun sau serviciu)", "Filters (by year, institution, company, type of goods or service)", "Фильтры (по году, учреждению, фирме, виду товара или услуги)"],
        ["compare", "Compararea a două instituții, firme sau perioade", "Comparing two institutions, companies or periods", "Сравнение двух учреждений, фирм или периодов"],
        ["charts", "Grafice interactive", "Interactive charts", "Интерактивные графики"],
        ["export", "Descărcarea datelor în Excel", "Downloading the data to Excel", "Скачивание данных в Excel"],
        ["share", "Link care poate fi distribuit către rezultatul căutării", "A shareable link to the search result", "Ссылка на результат поиска, которой можно поделиться"],
        ["alerts", "Notificări când apar date noi", "Notifications when new data appears", "Уведомления о новых данных"],
        ["api", "Acces pentru programatori (API)", "Access for programmers (API)", "Доступ для программистов (API)"],
        ["other", "Altceva", "Something else", "Другое"]
      ] },
    { id: "QC4", type: "multi", part: "C", max: 3,
      ro: "După ce criterii ați vrea să filtrați contractele pe platformă?", en: "By which criteria would you like to filter contracts on the platform?",
      ru: "По каким критериям вы хотели бы фильтровать контракты на платформе?",
      hint: { ro: "Alegeți cel mult 3.", en: "Choose up to 3.", ru: "Выберите не больше 3." },
      options: [
        ["period", "An sau perioadă", "Year or period", "Год или период"],
        ["buyer", "Instituția care cumpără", "The buying institution", "Учреждение-покупатель"],
        ["supplier", "Firma care vinde", "The selling company", "Фирма-продавец"],
        ["item", "Tipul de produs sau serviciu", "Type of product or service", "Вид товара или услуги"],
        ["value", "Valoarea contractului", "Contract value", "Сумма контракта"],
        ["procedure", "Tipul procedurii (de ex. licitație deschisă, achiziție de valoare mică)", "Type of procedure (e.g. open tender, low-value purchase)", "Тип процедуры (например, открытый тендер, закупка малой стоимости)"],
        ["unusual", "Doar contractele marcate ca neobișnuite", "Only contracts marked as unusual", "Только контракты, отмеченные как необычные"],
        ["other", "Altceva", "Something else", "Другое"]
      ] },
    { id: "QB12", type: "single", part: "B",
      ro: "Cât timp ați considera acceptabil să așteptați până când platforma prelucrează datele și afișează rezultatele (grafice, tabele)?",
      en: "How long would you consider acceptable to wait while the platform processes the data and shows the results (charts, tables)?",
      ru: "Сколько, по-вашему, допустимо ждать, пока платформа обрабатывает данные и показывает результаты (графики, таблицы)?",
      options: [
        ["lt3s", "Cel mult 3 secunde", "Up to 3 seconds", "До 3 секунд"],
        ["3-10s", "3–10 secunde", "3–10 seconds", "3–10 секунд"],
        ["10-30s", "10–30 de secunde", "10–30 seconds", "10–30 секунд"],
        ["complex", "Mai mult, dacă analiza este complexă", "Longer, if the analysis is complex", "Дольше, если анализ сложный"]
      ] },
    { id: "QB13", type: "scale", part: "B", na: true,
      ro: "Cât de utile v-ar fi următoarele fapte neobișnuite, găsite automat de platformă?",
      en: "How useful would the following unusual facts, found automatically by the platform, be to you?",
      ru: "Насколько полезными были бы для вас следующие необычные факты, которые платформа находит автоматически?",
      hint: { ro: "Un fapt neobișnuit nu înseamnă că ceva este greșit; arată doar ce iese din comun și ar putea merita o privire.",
              en: "An unusual fact does not mean something is wrong; it only shows what stands out and may be worth a look.",
              ru: "Необычный факт не означает, что что-то не так; он лишь показывает, что выделяется и может заслуживать внимания." },
      low: { ro: "deloc util", en: "not useful", ru: "бесполезно" }, high: { ro: "foarte util", en: "very useful", ru: "очень полезно" },
      naLabel: { ro: "Nu știu", en: "Not sure", ru: "Не знаю" },
      // Codes g–j were used for rows shown only in version 2026-11-24a; do not reuse them.
      rows: [
        ["a", "Un singur furnizor primește peste jumătate din valoarea achizițiilor unei instituții într-un an", "One supplier receives more than half of an institution's purchase value in a year", "Один поставщик получает больше половины стоимости закупок учреждения за год"],
        ["b", "Valoarea contractului a crescut cu peste 15% după semnare, prin acte adiționale", "The contract value rose by more than 15% after signing, through amendments", "Сумма контракта выросла более чем на 15% после подписания через дополнительные соглашения"],
        ["c", "Contractul a fost semnat cu o firmă care era deja lichidată la data semnării", "The contract was signed with a company already liquidated on the signing date", "Контракт подписан с фирмой, уже ликвидированной на дату подписания"],
        ["d", "Licitație cu o singură ofertă", "A tender with only one bid", "Тендер с одним предложением"],
        ["e", "Termen de depunere a ofertelor mai scurt de 10 zile", "Less than 10 days to submit bids", "Срок подачи предложений меньше 10 дней"],
        ["f", "Valoare neobișnuit de mare sau de mică față de contractele similare (același tip de produs sau serviciu)", "A value unusually high or low compared with similar contracts (same type of product or service)", "Необычно большая или маленькая сумма по сравнению с похожими контрактами (тот же вид товара или услуги)"]
      ] },
    { id: "QB14", type: "single", part: "B",
      ro: "Dacă platforma ar semnala automat contracte neobișnuite, ce ați prefera?",
      en: "If the platform pointed out unusual contracts automatically, what would you prefer?",
      ru: "Если бы платформа автоматически отмечала необычные контракты, что бы вы предпочли?",
      options: [
        ["few", "Puține semnale, dar aproape toate corecte, chiar dacă unele cazuri neobișnuite nu vor fi semnalate", "Few marks, but almost all correct, even if some unusual cases are not marked", "Мало отметок, но почти все верные, даже если некоторые необычные случаи не будут отмечены"],
        ["balance", "Un echilibru între numărul de semnale și corectitudinea lor", "A balance between the number of marks and how accurate they are", "Баланс между количеством отметок и их точностью"],
        ["many", "Cât mai multe semnale, chiar dacă unele nu vor fi probleme reale", "As many marks as possible, even if some will not be real problems", "Как можно больше отметок, даже если некоторые не окажутся реальными проблемами"],
        ["nopref", "Nu am o preferință", "No preference", "Нет предпочтения"]
      ] },
    { id: "QC5", type: "multi", part: "C", max: 3,
      ro: "Platforma va marca automat unele contracte ca neobișnuite, de exemplu un contract mult mai scump decât contractele similare. Ce v-ar ajuta să aveți încredere că un astfel de contract merită verificat?",
      en: "The platform will automatically mark some contracts as unusual, for example a contract much more expensive than similar ones. What would help you trust that such a contract is worth checking?",
      ru: "Платформа будет автоматически отмечать некоторые контракты как необычные, например контракт намного дороже похожих. Что помогло бы вам поверить, что такой контракт стоит проверить?",
      hint: { ro: "Alegeți cel mult 3.", en: "Choose up to 3.", ru: "Выберите не больше 3." },
      options: [
        ["reason", "O explicație scurtă a motivului pentru care contractul a fost marcat", "A short explanation of why the contract was marked", "Короткое объяснение, почему контракт отмечен"],
        ["link", "Link spre documentul oficial (contractul, anunțul din MTender)", "A link to the official document (the contract, the MTender notice)", "Ссылка на официальный документ (контракт, объявление в MTender)"],
        ["chart", "Un grafic care arată valoarea contractului față de contractele similare", "A chart showing the contract's value against similar contracts", "График, сравнивающий сумму контракта с похожими контрактами"],
        ["peers", "Lista contractelor similare cu care a fost comparat", "The list of similar contracts it was compared with", "Список похожих контрактов, с которыми он сравнивался"],
        ["updated", "Data ultimei actualizări a datelor", "The date the data was last updated", "Дата последнего обновления данных"],
        ["report", "Posibilitatea de a raporta o eroare în date", "A way to report an error in the data", "Возможность сообщить об ошибке в данных"],
        ["other", "Altceva", "Something else", "Другое"]
      ] },
    { id: "QB15", type: "multi", part: "B",
      ro: "Cum ați dori să primiți notificări despre contracte neobișnuite noi sau date noi?",
      en: "How would you like to be notified about new unusual contracts or new data?",
      ru: "Как бы вы хотели получать уведомления о новых необычных контрактах или новых данных?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["platform", "Direct în platformă", "Directly on the platform", "Прямо на платформе"],
        ["email", "Prin e-mail", "By e-mail", "По e-mail"],
        ["telegram", "Prin Telegram", "On Telegram", "В Telegram"],
        ["none", "Nu am nevoie de notificări", "I don't need notifications", "Уведомления не нужны"],
        ["other", "Altfel", "Another way", "Иначе"]
      ], exclusive: ["none"] },
    { id: "QB16", type: "multi", part: "B",
      ro: "În ce format ați descărca datele?", en: "In what format would you download the data?", ru: "В каком формате вы бы скачивали данные?",
      hint: { ro: "Puteți alege mai multe.", en: "You can choose several.", ru: "Можно выбрать несколько." },
      options: [
        ["csv", "CSV (tabel simplu, se deschide și în Excel)", "CSV (a plain table that also opens in Excel)", "CSV (простая таблица, открывается и в Excel)"],
        ["xlsx", "Excel (XLSX)", "Excel (XLSX)", "Excel (XLSX)"],
        ["json", "JSON (format pentru programatori)", "JSON (a format for programmers)", "JSON (формат для программистов)"],
        ["pdf", "PDF (raport)", "PDF (report)", "PDF (отчёт)"],
        ["none", "Nu descarc date", "I don't download data", "Не скачиваю данные"],
        ["other", "Altul", "Other", "Другой"]
      ], exclusive: ["none"] },
    { id: "QB17", type: "single", part: "B",
      ro: "Pentru ce perioadă aveți nevoie de date, de obicei?", en: "What period do you usually need data for?",
      ru: "За какой период вам обычно нужны данные?",
      options: [
        ["1y", "Ultimul an", "The last year", "Последний год"],
        ["2-3y", "Ultimii 2–3 ani", "The last 2–3 years", "Последние 2–3 года"],
        ["4-7y", "Ultimii 4–7 ani", "The last 4–7 years", "Последние 4–7 лет"],
        ["gt7y", "Mai mult de 7 ani", "More than 7 years", "Больше 7 лет"],
        ["depends", "Depinde de caz", "It depends", "Зависит от случая"]
      ] },

    // ---- D. Încheiere ----
    { id: "Q10", type: "text", optional: true,
      ro: "Ce informații despre achizițiile publice din Moldova sunt cele mai importante pentru dvs.?",
      en: "What information about public procurement in Moldova matters most to you?",
      ru: "Какая информация о госзакупках в Молдове для вас самая важная?" },
    { id: "Q11", type: "interview",
      ro: "Ați accepta o scurtă discuție online (15–20 de minute) cu echipa noastră?", en: "Would you agree to a short online talk (15–20 minutes) with our team?",
      ru: "Согласились бы вы на короткую онлайн-беседу (15–20 минут) с нашей командой?",
      options: [["yes", "Da", "Yes", "Да"], ["no", "Nu", "No", "Нет"]],
      email: { ro: "E-mail (opțional). Îl folosim doar pentru a vă contacta în legătură cu discuția și îl păstrăm separat de răspunsuri.",
               en: "E-mail (optional). We use it only to contact you about the talk and keep it separate from your answers.",
               ru: "E-mail (необязательно). Мы используем его только чтобы связаться с вами по поводу беседы и храним отдельно от ответов." } }
  ]
};
