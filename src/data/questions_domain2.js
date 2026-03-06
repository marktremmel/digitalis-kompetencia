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

    // További feladatok
    {
        id: 'd2-ext-1', grade: '5-6', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Cellahivatkozások',
        task: 'Egy táblázatkezelőben mit csinál a dollárjel ($) egy hivatkozásban, például: $A$1?',
        options: ['Pénznemmé alakítja a számot', 'Abszolút hivatkozást hoz létre, amely másoláskor nem változik meg', 'Zöldre színezi a cellát', 'Megszorozza az értéket 100-zal'],
        correctAnswer: 'Abszolút hivatkozást hoz létre, amely másoláskor nem változik meg',
        explanation: 'A $ jel lerögzíti az oszlopot és/vagy a sort, így a képlet húzásakor a hivatkozott cella nem tolódik el.',
    },
    {
        id: 'd2-ext-2', grade: '7-8', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.2', tag: 'practice',
        title: 'Adatvédelmi incidens',
        task: 'A GDPR szerint mit kell tennie egy cégnek, ha súlyos adatvédelmi incidens (adatszivárgás) történik?',
        options: ['Azonnal törölniük kell a teljes adatbázist', 'Be kell jelenteniük a felügyeleti hatóságnak általában 72 órán belül', 'Értesíteniük kell az érintett felhasználókat', 'Titokban kell tartaniuk a pánik elkerülése végett'],
        correctAnswers: ['Be kell jelenteniük a felügyeleti hatóságnak általában 72 órán belül', 'Értesíteniük kell az érintett felhasználókat'],
        explanation: 'Az adatvédelmi incidenst jelenteni kell a Nemzeti Adatvédelmi és Információszabadság Hatóságnak (NAIH), és ha magas kockázatú, a felhasználókat is tájékoztatni kell.',
    },
    {
        id: 'd2-ext-3', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.10', tag: 'practice',
        title: 'SQL INSERT',
        task: 'Melyik SQL parancs szolgál új adatsor hozzáadására egy táblába?',
        options: ['ADD ROW', 'INSERT INTO', 'UPDATE TABLE', 'NEW RECORD'],
        correctAnswer: 'INSERT INTO',
        explanation: 'Az INSERT INTO utasítással lehet új rekordokat (sorokat) felvinni egy táblába.',
    },
    {
        id: 'd2-ext-4', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Táblázatos szűrés',
        task: 'Mi a célja a "Szűrő" (Filter) eszköznek a táblázatkezelőkben?',
        options: ['Véglegesen törli a nem kívánt adatokat', 'Ideiglenesen elrejti azokat a sorokat, amelyek nem felelnek meg egy feltételnek', 'Minden cella betűszínét megváltoztatja', 'Automatikusan lefordítja a szöveget'],
        correctAnswer: 'Ideiglenesen elrejti azokat a sorokat, amelyek nem felelnek meg egy feltételnek',
        explanation: 'A szűrés segítségével gyorsan csak a releváns adatokat láthatod anélkül, hogy a többit törölnéd.',
    },
    {
        id: 'd2-ext-5', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.8', tag: 'practice',
        title: 'Adatbázis normalizálás',
        task: 'Töltsd ki az adatbázisok normalizálásával kapcsolatos mondatokat!',
        sentences: [
            { text: 'A normalizálás fő célja az adatok ___ (ismétlődésének) csökkentése.', options: ['sebességének', 'biztonságának', 'redundanciájának'], correct: 'redundanciájának' },
            { text: 'Ennek eléréséhez a nagy táblákat kisebbekre bontják, és ___ (kulcsok) segítségével kapcsolják össze.', options: ['jelszavak', 'kapcsolatok', 'makrók'], correct: 'kapcsolatok' },
        ],
        explanation: 'A normalizálás megszünteti a felesleges ismétlődéseket, ezáltal csökkenti az inkonzisztencia esélyét.',
    },
    {
        id: 'd2-ext-6', grade: '5-6', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.3', tag: 'practice',
        title: 'Nyílt adatok (Open Data)',
        task: 'Mit jelentenek a "Nyílt adatok" (Open Data)?',
        options: ['Olyan adatok, amelyekhez csak magas szintű jelszóval lehet hozzáférni', 'Emberi egészségügyi nyilvántartások', 'Bárki által szabadon hozzáférhető, felhasználható és megosztható adatok (pl. menetrendek, időjárás)', 'Titkosított kormányzati fájlok'],
        correctAnswer: 'Bárki által szabadon hozzáférhető, felhasználható és megosztható adatok (pl. menetrendek, időjárás)',
        explanation: 'A nyílt adatok bárki számára elérhetők korlátozások nélkül, gyakran géppel olvasható formában.',
    },
    {
        id: 'd2-ext-7', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.13', tag: 'practice',
        title: 'Adatbányászat példa',
        task: 'Hogyan használhatja egy szupermarket az adatbányászatot?',
        options: ['Nyugták fizikai kinyomtatására', 'A vásárlási szokások elemzésére, például rájönni, hogy pénteken a pelenkát vevők gyakran sört is vesznek, ami célozott eladásokat tesz lehetővé', 'A padló tisztítására robotokkal', 'Az ajtók éjszakai bezárására'],
        correctAnswer: 'A vásárlási szokások elemzésére, például rájönni, hogy pénteken a pelenkát vevők gyakran sört is vesznek, ami célozott eladásokat tesz lehetővé',
        explanation: 'Az adatbányászat nem egyértelmű mintázatokra és korrelációkra derít fényt óriási adathalmazokban.',
    },
    {
        id: 'd2-ext-8', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.7', tag: 'practice',
        title: 'ER Diagram Alakzatok',
        task: 'Melyik alakzat mit jelent a szabványos Egyed-Kapcsolat (ER) diagramon?',
        sentences: [
            { text: 'A téglalap jelentése: ___.', options: ['attribútum', 'egyed (entitás)', 'kapcsolat'], correct: 'egyed (entitás)' },
            { text: 'Az ellipszis (ovális) jelentése: ___.', options: ['attribútum', 'egyed (entitás)', 'kapcsolat'], correct: 'attribútum' },
            { text: 'A rombusz jelentése: ___.', options: ['attribútum', 'egyed (entitás)', 'kapcsolat'], correct: 'kapcsolat' }
        ],
        explanation: 'Téglalap = tábla/egyed, Ellipszis = oszlop/attribútum, Rombusz = kapcsolat a táblák közt.',
    },
    {
        id: 'd2-ext-9', grade: '7-8', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Táblázatkezelő hibák',
        task: 'Melyek gyakori hibaüzenetek a táblázatkezelőkben (pl. Excel)?',
        options: ['#ZÉRÓOSZTÓ! (#DIV/0!)', '#NÉV? (#NAME?)', 'ERROR_404', '#ÉRTÉK! (#VALUE!)'],
        correctAnswers: ['#ZÉRÓOSZTÓ! (#DIV/0!)', '#NÉV? (#NAME?)', '#ÉRTÉK! (#VALUE!)'],
        explanation: 'A nullával való osztás, az elírt függvénynevek (#NÉV) és a hibás adattípusok (szöveggel való számolás: #ÉRTÉK) jellegzetes hibák.',
    },
    {
        id: 'd2-ext-10', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.10', tag: 'practice',
        title: 'SQL UPDATE',
        task: 'Mit csinál az SQL UPDATE parancs?',
        options: ['Új táblát hoz létre', 'Törli a teljes adatbázist', 'Módosítja egy tábla már meglévő rekordjait', 'Újraindítja az adatbázisszervert'],
        correctAnswer: 'Módosítja egy tábla már meglévő rekordjait',
        explanation: 'Az UPDATE utasítás a meglévő adatok felülírására szolgál, általában egy WHERE feltétellel együtt.',
    },
    {
        id: 'd2-ext-11', grade: '5-6', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.1', tag: 'practice',
        title: 'Digitális adatok',
        task: 'Miként tárolják a számítógépek az adatokat?',
        options: ['Bináris kódban (1-esek és 0-k)', 'Analóg hanghullámokként', 'Megabájtokban és Gigabájtokban mérve', 'Kézzel írt jegyzetekként'],
        correctAnswers: ['Bináris kódban (1-esek és 0-k)', 'Megabájtokban és Gigabájtokban mérve'],
        explanation: 'A gépek mindent (kép, hang, szöveg) digitális bináris adathalmazként tárolnak, aminek a mértékegysége a byte.',
    },
    {
        id: 'd2-ext-12', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.5', tag: 'practice',
        title: 'Adatfeldolgozó',
        task: 'Mi a szerepe az "Adatfeldolgozónak" (Data Processor)?',
        options: ['Ő dönti el, milyen adatokat kell gyűjteni', 'Az Adatkezelő megbízásából technikai műveleteket végez az adatokkal (pl. felhőszolgáltató cég)', 'Ő az a személy, akinek az adatait kezelik', 'Ő a hardveres szerver tulajdonosa'],
        correctAnswer: 'Az Adatkezelő megbízásából technikai műveleteket végez az adatokkal (pl. felhőszolgáltató cég)',
        explanation: 'Az Adatkezelő a felelős "főnök", az Adatfeldolgozó a végrehajtó technikai partner.',
    },
    {
        id: 'd2-ext-13', grade: '9-11', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.12', tag: 'practice',
        title: 'NoSQL Adatbázisok',
        task: 'Mely jellemzők igazak a NoSQL adatbázisokra a hagyományos relációs (SQL) adatbázisokhoz képest?',
        options: ['Szigorú táblákat és és kapcsolatokat használnak kötelező sémával', 'Gyakran jobban megfelelnek strukturálatlan Big Data tárolására', 'Az adatokat például JSON dokumentumokként tárolhatják', 'Nem lehet őket interneten keresztül elérni'],
        correctAnswers: ['Gyakran jobban megfelelnek strukturálatlan Big Data tárolására', 'Az adatokat például JSON dokumentumokként tárolhatják'],
        explanation: 'A NoSQL (pl. MongoDB) rugalmas, dokumentumalapú, ami hatalmas és nem egységes adathalmazoknál obb skálázhatóságot nyújt.',
    },
    {
        id: 'd2-ext-14', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.9', tag: 'practice',
        title: 'Auto-increment',
        task: 'Mi az "Auto-increment" (automatikusan növekvő) elsődleges kulcs előnye egy adatbázisban?',
        options: ['Automatikusan titkosítja az adatokat', 'Minden új sornak automatikusan generál egy egyedi sorszámot (ID-t)', 'Kijavítja az elütéseket', 'Törli a régi sorokat'],
        correctAnswer: 'Minden új sornak automatikusan generál egy egyedi sorszámot (ID-t)',
        explanation: 'Az Auto-increment garantálja, hogy minden új rekord egyedi azonosítót kapjon, anélkül hogy azt manuálisan kéne megadni.',
    },
    {
        id: 'd2-ext-15', grade: '5-6', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.11', tag: 'practice',
        title: 'Adatbázis keresés',
        task: 'Valójában mit csinálsz, amikor egy könyvtár online katalógusában keresel?',
        options: ['Egy új könyvet írsz', 'Lekérdezel egy online adatbázist, hogy rátalálj egy adott rekordra', 'Meghackeled az iskola szerverét', 'Operációs rendszert telepítesz'],
        correctAnswer: 'Lekérdezel egy online adatbázist, hogy rátalálj egy adott rekordra',
        explanation: 'A katalógus nem más, mint egy adatbázis. A keresés (szerző, cím) pedig egy SQL lekérdezés futtatását eredményezi a háttérben.',
    },
    {
        id: 'd2-ext-16', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.8', tag: 'practice',
        title: '1:N Kapcsolat',
        task: 'Melyik egy reális példa egy-több (1:N) kapcsolatra?',
        options: ['Egy diáknak pontosan egyujjlenyomata van a rendszerben', 'Egy diák több könyvet is kikölcsönözhet, de egy adott fizikai könyv egyszerre csak egy diáknál lehet', 'Sok diák sok különböző tantárgyat tanul', 'Egy tanár mindig csak egy diákot tanít'],
        correctAnswer: 'Egy diák több könyvet is kikölcsönözhet, de egy adott fizikai könyv egyszerre csak egy diáknál lehet',
        explanation: 'Egy ember (1) -> Több könyv (N). Ez a klasszikus egy-a-többhöz kapcsolat.',
    },
    {
        id: 'd2-ext-17', grade: '7-8', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.6', tag: 'practice',
        title: 'Adattípusok kiválasztása',
        task: 'Válaszd ki a megfelelő adatbázis adattípust az információhoz!',
        sentences: [
            { text: 'A felhasználó születési dátuma (pl. 2005-04-12): ___.', options: ['TEXT', 'DATE', 'BOOLEAN'], correct: 'DATE' },
            { text: 'A felhasználó profilképe: ___.', options: ['BLOB / BINARY', 'INTEGER', 'BOOLEAN'], correct: 'BLOB / BINARY' },
            { text: 'Van-e a felhasználónak prémium előfizetése?: ___.', options: ['TEXT', 'INTEGER', 'BOOLEAN'], correct: 'BOOLEAN' }
        ],
        explanation: 'DATE = idő, BLOB = fájlok/képek, BOOLEAN = Igen/Nem kérdések.',
    },
    {
        id: 'd2-ext-18', grade: '9-11', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.10', tag: 'practice',
        title: 'SQL DELETE vs DROP',
        task: 'Mi a különbség a DELETE és a DROP utasítás között SQL-ben?',
        options: ['Nincs különbség', 'A DELETE eltávolít adott sorokat egy táblából', 'A DROP megszünteti/törli magát a tábla vagy adatbázis szerkezetét', 'A DROP csak elrejti az adatokat'],
        correctAnswers: ['A DELETE eltávolít adott sorokat egy táblából', 'A DROP megszünteti/törli magát a tábla vagy adatbázis szerkezetét'],
        explanation: 'A DELETE üresre törölheti a táblát, de a tábla "váza" megmarad. A DROP az asztalt is kidobja a házból.',
    },
    {
        id: 'd2-ext-19', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.2', tag: 'practice',
        title: 'Adathordozhatóság',
        task: 'Mit jelent a GDPR szerint az "Adathordozhatósághoz való jog"?',
        options: ['Bárhová magaddal viheted a laptopomat', 'Jogod van kikérni a rólad tárolt adatokat géppel olvasható formátumban, hogy átvidd egy másik szolgáltatóhoz', 'Az adataidat kötelező pendrive-on tárolni', 'A cégek eladhatják az adataidat pendrive-on'],
        correctAnswer: 'Jogod van kikérni a rólad tárolt adatokat géppel olvasható formátumban, hogy átvidd egy másik szolgáltatóhoz',
        explanation: 'Ez a jog lehetővé teszi, hogy ha például szolgáltatót váltasz, az eddigi adataidat (pl. Facebook posztok, lejátszási listák) magaddal vihesd.',
    },
    {
        id: 'd2-ext-20', grade: '5-6', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Táblázatkezelő funkciói',
        task: 'Mely műveletek végezhetők el a legtöbb táblázatkezelőben (pl. Excel)?',
        options: ['Cellák háttérszínének megváltoztatása', '3D-s videojátékok futtatása', 'Két vagy több cella egyesítése', 'Adatok sorba rendezése ábécé szerint'],
        correctAnswers: ['Cellák háttérszínének megváltoztatása', 'Két vagy több cella egyesítése', 'Adatok sorba rendezése ábécé szerint'],
        explanation: 'Az Excellike programok formázásra, egyesítésre, rendezésre vannak kitalálva, 3D játékra nem.',
    }
];
