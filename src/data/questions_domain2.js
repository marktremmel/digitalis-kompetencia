// Domain 2: Adat- és adatbázis-kezelés (2.1–2.13)

export const domain2Questions = [
    // 2.1 Adat és információ fogalma
    {
        id: 'd2-1a', grade: '5-6', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.1', tag: 'practice',
        title: 'Adat vs. információ',
        task: 'Mi a különbség az adat és az információ között?',
        options: ['Nincs különbség', 'Az adat nyers tény, az információ feldolgozott, értelmes adat', 'Az információ mindig szám', 'Az adat mindig szöveges'],
        correctAnswer: 'Az adat nyers tény, az információ feldolgozott, értelmes adat',
        explanation: 'Az adat önmagában nyers tény (pl. 37°C). Ha kontextusba helyezzük (testhőmérséklet), információ lesz.',
    },

    // 2.2 Adatvédelem, adatbiztonság, GDPR
    {
        id: 'd2-2a', grade: '7-8', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.2', tag: 'practice',
        title: 'GDPR alapelvek',
        task: 'Melyek a GDPR alapelvei?',
        options: ['Személyes adatot csak célhoz kötötten szabad gyűjteni', 'Bárki szabadon elérheti mások adatait', 'Jog van az adatok törléséhez', 'Cégek korlátlanul tárolhatják az adatokat', 'Hozzájárulás szükséges az adatkezeléshez'],
        correctAnswers: ['Személyes adatot csak célhoz kötötten szabad gyűjteni', 'Jog van az adatok törléséhez', 'Hozzájárulás szükséges az adatkezeléshez'],
        explanation: 'GDPR: célhoz kötöttség, törléshez való jog, hozzájárulás szükséges.',
    },

    // 2.3 Személyes adat, érzékeny adat, nyilvános adat
    {
        id: 'd2-3a', grade: '5-6', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.3', tag: 'practice',
        title: 'Személyes adatok',
        task: 'Melyek személyes adatok? Jelöld az összeset!',
        options: ['Születési dátum', 'Kedvenc évszak', 'TAJ-szám', 'Lakcím', 'Az időjárás ma'],
        correctAnswers: ['Születési dátum', 'TAJ-szám', 'Lakcím'],
        explanation: 'A személyes adatok azonosíthatóvá teszik az embert: név, születési dátum, TAJ-szám, lakcím.',
    },
    {
        id: 'd2-3b', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.3', tag: 'practice',
        title: 'Érzékeny adat',
        task: 'Melyik számít „különleges" (érzékeny) adatnak a GDPR szerint?',
        options: ['E-mail cím', 'Egészségügyi adatok', 'Telefonszám', 'Munkahely neve'],
        correctAnswer: 'Egészségügyi adatok',
        explanation: 'Különleges adatok: egészségügyi, biometrikus, etnikai, vallási, politikai nézetek – fokozott védelem alá esnek.',
    },

    // 2.4 Táblázatkezelés
    {
        id: 'd2-4a', grade: '7-8', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Táblázatkezelő függvények',
        task: 'Válaszd ki a helyes függvényt!',
        sentences: [
            { text: 'Értékek összege: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'COUNT'], correct: 'SUM' },
            { text: 'Legnagyobb érték: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'MIN'], correct: 'MAX' },
            { text: 'Értékek átlaga: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'COUNT'], correct: 'AVERAGE' },
        ],
        explanation: 'SUM = összeg, MAX = legnagyobb, AVERAGE = átlag.',
    },
    {
        id: 'd2-4b', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'IF függvény',
        task: '10% kedvezményt adunk ha összeg > 10000. A2 tartalmazza az összeget. Melyik a helyes formula?',
        options: ['=IF(A2>10000; A2*0.9; A2)', '=IF(A2<10000; A2*0.1; A2)', '=SUM(A2*0.9)', '=AVERAGE(A2; 0.9)'],
        correctAnswer: '=IF(A2>10000; A2*0.9; A2)',
        explanation: 'IF: ha összeg > 10000 → ×0.9 (10% kedvezmény), különben az eredeti ár.',
    },
    {
        id: 'd2-4c', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'COUNTIF',
        task: 'Hányszor fordul elő az 5-ös jegy? Melyik a helyes?',
        options: ['=SUM(A1:A30)', '=COUNTIF(A1:A30; 5)', '=AVERAGE(A1:A30)', '=MAX(A1:A30)'],
        correctAnswer: '=COUNTIF(A1:A30; 5)',
        explanation: 'COUNTIF számol egy feltétel teljesülését egy tartományban.',
    },
    {
        id: 'd2-4d', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Diagramtípusok',
        task: 'Melyik diagram a legalkalmasabb arányok (%) megjelenítésére?',
        options: ['Oszlopdiagram', 'Vonaldiagram', 'Kördiagram', 'Pontdiagram'],
        correctAnswer: 'Kördiagram',
        explanation: 'A kördiagram (pie chart) ideális százalékos arányokra, mert az egész = 100%.',
    },

    // 2.5 Adatkezelés, adatkezelők használata
    {
        id: 'd2-5a', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.5', tag: 'practice',
        title: 'Adatkezelés',
        task: 'Mi az „adatkezelő" fogalma?',
        options: ['Egy személy aki kezeli a nyomtatót', 'Az a szervezet/személy, aki meghatározza az adatkezelés célját', 'Egy vírusirtó program', 'A RAM memória'],
        correctAnswer: 'Az a szervezet/személy, aki meghatározza az adatkezelés célját',
        explanation: 'Az adatkezelő dönt az adatok gyűjtéséről, céljáról és felhasználásáról (pl. iskola, cég).',
    },

    // 2.6 Adattípusok, adatbázis, adatmodellezés, relációk
    {
        id: 'd2-6a', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.6', tag: 'practice',
        title: 'Adattípusok',
        task: 'Párosítsd az adatot a típusával!',
        sentences: [
            { text: '"Kovács Anna" → ___ típusú.', options: ['szöveges (TEXT)', 'szám (INTEGER)', 'logikai (BOOLEAN)'], correct: 'szöveges (TEXT)' },
            { text: '42 → ___ típusú.', options: ['szöveges', 'egész szám (INTEGER)', 'logikai'], correct: 'egész szám (INTEGER)' },
            { text: 'IGAZ/HAMIS → ___ típusú.', options: ['szöveges', 'szám', 'logikai (BOOLEAN)'], correct: 'logikai (BOOLEAN)' },
        ],
        explanation: 'TEXT = szöveg, INTEGER = egész szám, BOOLEAN = igaz/hamis (logikai).',
    },

    // 2.7 Egyed, kapcsolat, attribútum
    {
        id: 'd2-7a', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.7', tag: 'practice',
        title: 'ER modell fogalmai',
        task: 'Töltsd ki az adatbázis-modellezési fogalmakat!',
        sentences: [
            { text: 'A „Tanuló" az adatbázisban egy ___.', options: ['egyed (entitás)', 'attribútum', 'kapcsolat'], correct: 'egyed (entitás)' },
            { text: 'A tanuló „neve" egy ___.', options: ['egyed', 'attribútum (tulajdonság)', 'kapcsolat'], correct: 'attribútum (tulajdonság)' },
            { text: 'A „Tanuló OSZTÁLYBA jár" egy ___.', options: ['egyed', 'attribútum', 'kapcsolat (reláció)'], correct: 'kapcsolat (reláció)' },
        ],
        explanation: 'Egyed = tábla (pl. Tanuló), attribútum = oszlop/tulajdonság (pl. név), kapcsolat = táblák közötti viszony.',
    },

    // 2.8 Táblák, kapcsolatok, kapcsolattípusok
    {
        id: 'd2-8a', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.8', tag: 'practice',
        title: 'Kapcsolattípusok',
        task: 'Egy tanuló több tárgyat tanulhat, és egy tárgyat több tanuló is tanulhat. Milyen kapcsolat ez?',
        options: ['1:1 (egy-egy)', '1:N (egy-több)', 'N:M (több-több)', '0:1 (nulla-egy)'],
        correctAnswer: 'N:M (több-több)',
        explanation: 'N:M (több-több) kapcsolat: mindkét oldalon több elem kapcsolódhat egymáshoz.',
    },

    // 2.9 Elsődleges és idegen kulcs
    {
        id: 'd2-9a', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.9', tag: 'practice',
        title: 'Kulcsok az adatbázisban',
        task: 'Töltsd ki az adatbázis-kulcsokról szóló mondatokat!',
        sentences: [
            { text: 'Minden tanulónak egyedi azonosítója van, ez az ___.', options: ['elsődleges kulcs', 'idegen kulcs', 'index'], correct: 'elsődleges kulcs' },
            { text: 'A Jegyek táblában a tanuló_id a Tanulók táblára hivatkozik, ez az ___.', options: ['elsődleges kulcs', 'idegen kulcs', 'attribútum'], correct: 'idegen kulcs' },
        ],
        explanation: 'Elsődleges kulcs (PK) = egyedi azonosító. Idegen kulcs (FK) = másik tábla PK-jára hivatkozik.',
    },

    // 2.10 Lekérdezések, SQL
    {
        id: 'd2-10a', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.10', tag: 'practice',
        title: 'SQL lekérdezés',
        task: '2000 utáni könyveket keresünk ABC sorrendben!',
        sentences: [
            { text: '___ title, author FROM books', options: ['SELECT', 'INSERT', 'DELETE', 'UPDATE'], correct: 'SELECT' },
            { text: '___ year > 2000', options: ['WHERE', 'HAVING', 'GROUP BY', 'JOIN'], correct: 'WHERE' },
            { text: '___ title ASC', options: ['ORDER BY', 'SORT BY', 'GROUP BY', 'FILTER BY'], correct: 'ORDER BY' },
        ],
        explanation: 'SELECT kiválaszt, WHERE szűr, ORDER BY rendez.',
    },
    {
        id: 'd2-10b', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.10', tag: 'exam',
        title: 'Szelekció és projekció',
        task: 'Mi a projekció az adatbázis-kezelésben?',
        options: ['Sorok szűrése feltétel alapján', 'Oszlopok kiválasztása', 'Táblák összekapcsolása', 'Adatok törlése'],
        correctAnswer: 'Oszlopok kiválasztása',
        explanation: 'Projekció = oszlopok kiválasztása. Szelekció = sorok szűrése feltétel alapján.',
    },

    // 2.11 Online adatbázisok
    {
        id: 'd2-11a', grade: '5-6', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.11', tag: 'practice',
        title: 'Online adatbázisok hétköznapokban',
        task: 'Melyek online adatbázisok a hétköznapokban?',
        options: ['Spotify lejátszási lista', 'Webáruház termékkatalógus', 'MÁV menetrend online', 'Papíros telefonkönyv', 'Digitális könyvtárkatalógus'],
        correctAnswers: ['Spotify lejátszási lista', 'Webáruház termékkatalógus', 'MÁV menetrend online', 'Digitális könyvtárkatalógus'],
        explanation: 'A Spotify, webáruházak, MÁV online és a digitális könyvtár mind online adatbázisok.',
    },

    // 2.12 Big data, crowdsourcing
    {
        id: 'd2-12a', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.12', tag: 'practice',
        title: 'Big Data',
        task: 'Melyik jellemző a Big Data-ra?',
        options: ['Kis mennyiségű, gyorsan feldolgozható adat', 'Hatalmas mennyiségű, változatos, gyorsan keletkező adat', 'Csak szöveges adatok', 'Kizárólag bankoknak szükséges'],
        correctAnswer: 'Hatalmas mennyiségű, változatos, gyorsan keletkező adat',
        explanation: 'Big Data: 3V – Volume (mennyiség), Variety (változatosság), Velocity (sebesség).',
    },
    {
        id: 'd2-12b', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.12', tag: 'practice',
        title: 'Crowdsourcing',
        task: 'Mi a crowdsourcing?',
        options: ['Egy vírus típusa', 'Nagyobb csoport önkéntes hozzájárulása egy projekthez', 'Egyetlen ember munkája', 'Felhőben tárolt adatok'],
        correctAnswer: 'Nagyobb csoport önkéntes hozzájárulása egy projekthez',
        explanation: 'Crowdsourcing = a „tömeg ereje" – sok ember kis hozzájárulásából áll össze (pl. Wikipedia).',
    },

    // 2.13 Adatbányászat
    {
        id: 'd2-13a', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.13', tag: 'practice',
        title: 'Adatbányászat',
        task: 'Mi az adatbányászat (data mining) célja?',
        options: ['Adatok fizikai tárolása', 'Rejtett minták és összefüggések feltárása nagy adathalmazokból', 'Adatok törlése', 'Weboldalak készítése'],
        correctAnswer: 'Rejtett minták és összefüggések feltárása nagy adathalmazokból',
        explanation: 'Az adatbányászat statisztikai módszerekkel keres mintákat és trendeket nagy adatokban.',
    },
];
