// Domain 1: Digitális írástudás (1.1–1.13)
// Each question tagged with its tartalmi keret subtopic

export const domain1Questions = [
    // 1.1 Fájlok és könyvtárak, műveletek
    {
        id: 'd1-1a', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.1', tag: 'practice',
        title: 'Fájlok és könyvtárak',
        task: 'Melyik állítás IGAZ a fájlokról és mappákról?',
        options: ['A mappák más mappákat is tartalmazhatnak', 'Egy fájlnak nincs kiterjesztése', 'A fájl méretét byte-ban mérjük', 'A mappa és a könyvtár ugyanazt jelenti', 'A fájl neve tartalmazhat szóközt'],
        correctAnswers: ['A mappák más mappákat is tartalmazhatnak', 'A fájl méretét byte-ban mérjük', 'A mappa és a könyvtár ugyanazt jelenti', 'A fájl neve tartalmazhat szóközt'],
        explanation: 'A fájloknak mindig van kiterjesztésük (pl. .docx, .jpg). A mappa = könyvtár. Mappák egymásba ágyazhatók.',
    },
    {
        id: 'd1-1b', grade: '7-8', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.1', tag: 'practice',
        title: 'Fájlkiterjesztések párosítása',
        task: 'Párosítsd a kiterjesztéseket a fájltípusokkal!',
        sentences: [
            { text: 'A .pdf kiterjesztés ___ típusú fájlt jelöl.', options: ['szöveges dokumentum', 'platformfüggetlen dokumentum', 'kép', 'hang'], correct: 'platformfüggetlen dokumentum' },
            { text: 'A .mp3 kiterjesztés ___ típusú fájlt jelöl.', options: ['szöveges', 'kép', 'hang', 'videó'], correct: 'hang' },
            { text: 'A .xlsx kiterjesztés ___ típusú fájlt jelöl.', options: ['szöveges', 'táblázat', 'kép', 'prezentáció'], correct: 'táblázat' },
        ],
        explanation: 'PDF = platformfüggetlen, MP3 = hangfájl, XLSX = Excel táblázat.',
    },
    {
        id: 'd1-1c', grade: '9-11', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.1', tag: 'exam',
        title: 'Fájlrendszer-hierarchia',
        task: 'Mi az abszolút elérési útja egy fájlnak Windows rendszeren?',
        options: ['C:\\Users\\Gábor\\Dokumentumok\\dolgozat.docx', 'dolgozat.docx', '../Dokumentumok/dolgozat', 'Dokumentumok/dolgozat.docx'],
        correctAnswer: 'C:\\Users\\Gábor\\Dokumentumok\\dolgozat.docx',
        explanation: 'Az abszolút út a gyökérkönyvtártól (pl. C:\\) indul és pontosan megadja a fájl helyét.',
    },

    // 1.2 Internethasználat, böngészők és keresők
    {
        id: 'd1-2a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.2', tag: 'practice',
        title: 'Böngészők',
        task: 'Melyik NEM internetböngésző?',
        options: ['Google Chrome', 'Mozilla Firefox', 'Microsoft Word', 'Safari'],
        correctAnswer: 'Microsoft Word',
        explanation: 'A Microsoft Word szövegszerkesztő program, nem böngésző.',
    },
    {
        id: 'd1-2b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.2', tag: 'practice',
        title: 'Keresési operátorok',
        task: 'Hogyan keresel a Google-ben PONTOSAN a "digitális kultúra" kifejezésre?',
        options: ['digitális kultúra', '"digitális kultúra"', 'digitális OR kultúra', '-digitális kultúra'],
        correctAnswer: '"digitális kultúra"',
        explanation: 'Az idézőjelek pontos egyezést keresnek. Idézőjel nélkül a szavak külön is kereshetők.',
    },
    {
        id: 'd1-2c', grade: '9-11', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.2', tag: 'practice',
        title: 'URL felépítése',
        task: 'Töltsd ki az URL részeit!',
        sentences: [
            { text: 'A https:// az URL ___ része.', options: ['protokoll', 'domain', 'útvonal'], correct: 'protokoll' },
            { text: 'A www.pelda.hu az URL ___ része.', options: ['protokoll', 'domainnév', 'paraméter'], correct: 'domainnév' },
            { text: 'A .hu a ___ szintű domaint jelöli.', options: ['első (TLD)', 'második', 'harmadik'], correct: 'első (TLD)' },
        ],
        explanation: 'Protokoll = https://, domain = weboldal neve, TLD = felső szintű domain (.hu, .com).',
    },

    // 1.3 Ingyenes és fizetős szolgáltatások, űrlapok
    {
        id: 'd1-3a', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.3', tag: 'practice',
        title: 'Ingyenes online szolgáltatások',
        task: 'Melyek általában ingyenes online szolgáltatások?',
        options: ['Google Docs', 'E-mail (Gmail)', 'Adobe Photoshop teljes verzió', 'Wikipedia', 'Netflix'],
        correctAnswers: ['Google Docs', 'E-mail (Gmail)', 'Wikipedia'],
        explanation: 'A Google Docs, Gmail és Wikipedia ingyenesek. A Photoshop és Netflix előfizetős.',
    },
    {
        id: 'd1-3b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.3', tag: 'practice',
        title: 'Online űrlapkitöltés',
        task: 'Online űrlap kitöltésekor mit jelent a piros csillag (*) egy mező mellett?',
        options: ['Opcionális mező', 'Kötelezően kitöltendő mező', 'Felhasználónév mező', 'Hibás mező'],
        correctAnswer: 'Kötelezően kitöltendő mező',
        explanation: 'A * (csillag) jelzi a kötelező mezőket, amelyeket ki kell tölteni a beküldéshez.',
    },

    // 1.4 Szövegszerkesztés
    {
        id: 'd1-4a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.4', tag: 'practice',
        title: 'Billentyűkombinációk',
        task: 'Melyik billentyűkombináció teszi félkövérré a szöveget?',
        options: ['Ctrl + I', 'Ctrl + B', 'Ctrl + U', 'Ctrl + S'],
        correctAnswer: 'Ctrl + B',
        explanation: 'Ctrl+B = Bold (félkövér), Ctrl+I = dőlt, Ctrl+U = aláhúzott, Ctrl+S = mentés.',
    },
    {
        id: 'd1-4b', grade: '7-8', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.4', tag: 'practice',
        title: 'Szövegszerkesztő elemek',
        task: 'Töltsd ki a szövegszerkesztési fogalmakat!',
        sentences: [
            { text: 'Az oldalak alján ismétlődő szöveget az ___ tartalmazza.', options: ['élőfej', 'élőláb', 'lábjegyzet'], correct: 'élőláb' },
            { text: 'Az oldalak tetején ismétlődő szöveg neve: ___.', options: ['élőfej', 'élőláb', 'tartalomjegyzék'], correct: 'élőfej' },
            { text: 'A szöveg aljára tett magyarázó megjegyzés a ___.', options: ['élőláb', 'lábjegyzet', 'stílus'], correct: 'lábjegyzet' },
        ],
        explanation: 'Élőfej = fejléc (header), élőláb = lábléc (footer), lábjegyzet = oldal alji megjegyzés.',
    },
    {
        id: 'd1-4c', grade: '9-11', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.4', tag: 'practice',
        title: 'Körlevél és tartalomjegyzék',
        task: 'Melyek igazak a körlevélre? Jelöld az összeset!',
        options: ['Személyre szabott levelet generál adatforrásból', 'Kézzel kell minden nevet beírni', 'Adatforrás lehet táblázat vagy adatbázis', 'Csak e-mailre használható'],
        correctAnswers: ['Személyre szabott levelet generál adatforrásból', 'Adatforrás lehet táblázat vagy adatbázis'],
        explanation: 'A körlevél (mail merge) automatikusan személyre szabja a levelet adatforrás alapján.',
    },

    // 1.5 Prezentációkészítés
    {
        id: 'd1-5a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.5', tag: 'practice',
        title: 'Prezentáció készítés alapjai',
        task: 'Melyik NEM jó szokás egy prezentációban?',
        options: ['Kevés szöveg diánként', 'Jól olvasható betűméret', 'Sárga szöveg fehér háttéren', 'Képek használata a szöveg mellett'],
        correctAnswer: 'Sárga szöveg fehér háttéren',
        explanation: 'A sárga szöveg fehér háttéren szinte olvashatatlan. Mindig jó kontrasztot használj!',
    },
    {
        id: 'd1-5b', grade: '7-8', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.5', tag: 'practice',
        title: 'Prezentáció elemei',
        task: 'Töltsd ki a prezentációs fogalmakat!',
        sentences: [
            { text: 'A diák közötti vizuális váltás neve: ___.', options: ['animáció', 'áttűnés', 'háttér'], correct: 'áttűnés' },
            { text: 'Egy elem mozgása a dián belül: ___.', options: ['animáció', 'áttűnés', 'elrendezés'], correct: 'animáció' },
        ],
        explanation: 'Áttűnés (transition) = diák közötti átmenet, animáció = elemek mozgása dián belül.',
    },

    // 1.6 Grafika, képszerkesztés
    {
        id: 'd1-6a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.6', tag: 'practice',
        title: 'Raszter vs. vektor',
        task: 'Mi történik egy rasztergrafikus képpel (pl. .jpg), ha nagyon felnagyítjuk?',
        options: ['Éles marad', 'Pixeles, kockás lesz', 'Eltűnik', 'Automatikusan javul'],
        correctAnswer: 'Pixeles, kockás lesz',
        explanation: 'A rasztergrafika pixelekből áll, nagyítva kockás lesz. A vektorgrafika nagyítva is éles marad.',
    },
    {
        id: 'd1-6b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.6', tag: 'practice',
        title: 'Vektorgrafika előnyei',
        task: 'Melyik formátum vektorgrafikus?',
        options: ['.jpg', '.png', '.svg', '.bmp'],
        correctAnswer: '.svg',
        explanation: 'Az SVG (Scalable Vector Graphics) vektorgrafikus formátum, a többi rasztergrafikus.',
    },

    // 1.7 Multimédiás tartalmak
    {
        id: 'd1-7a', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.7', tag: 'practice',
        title: 'Multimédiás elemek',
        task: 'Melyek számítanak multimédiás tartalomnak?',
        options: ['Szöveg', 'Kép', 'Hangfájl', 'Videó', 'Animáció'],
        correctAnswers: ['Szöveg', 'Kép', 'Hangfájl', 'Videó', 'Animáció'],
        explanation: 'A „multi-média" több típusú médiaelemet jelent: szöveg, kép, hang, videó, animáció.',
    },
    {
        id: 'd1-7b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.7', tag: 'practice',
        title: 'Videóformátumok',
        task: 'Melyik a legelterjedtebb videóformátum az interneten?',
        options: ['.avi', '.mp4', '.wmv', '.flv'],
        correctAnswer: '.mp4',
        explanation: 'Az MP4 a legelterjedtebb, mert jó minőséget ad kis fájlmérettel. Szinte minden eszköz lejátssza.',
    },

    // 1.8 Weblapszerkesztés
    {
        id: 'd1-8a', grade: '7-8', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.8', tag: 'practice',
        title: 'HTML alapok',
        task: 'Töltsd ki a HTML-kódrészleteket!',
        sentences: [
            { text: 'A fő címsor tagje: ___.', options: ['<h1>', '<p>', '<div>', '<span>'], correct: '<h1>' },
            { text: 'Egy bekezdés tagje: ___.', options: ['<h1>', '<p>', '<img>', '<a>'], correct: '<p>' },
            { text: 'Kép beszúrásához a ___ taget használjuk.', options: ['<p>', '<h1>', '<img>', '<link>'], correct: '<img>' },
        ],
        explanation: '<h1> = fő címsor, <p> = bekezdés, <img> = kép.',
    },
    {
        id: 'd1-8b', grade: '9-11', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.8', tag: 'practice',
        title: 'HTML hivatkozás',
        task: 'Melyik HTML-tag hoz létre hivatkozást (linket)?',
        options: ['<link>', '<a href="...">', '<url>', '<ref>'],
        correctAnswer: '<a href="...">',
        explanation: 'Az <a> (anchor) tag a href attribútummal hivatkozást hoz létre.',
    },

    // 1.9 Információ kritikus értelmezése
    {
        id: 'd1-9a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.9', tag: 'practice',
        title: 'Megbízható információ',
        task: 'Egy weboldal valószínűleg megbízhatóbb, ha...',
        options: ['Sok felugró reklámot tartalmaz', 'Nincs rajta szerző neve', 'Hivatalos intézmény (.gov, .edu) üzemelteti', 'Névtelen blogbejegyzés'],
        correctAnswer: 'Hivatalos intézmény (.gov, .edu) üzemelteti',
        explanation: 'Hivatalos intézmények (.gov, .edu) általában ellenőrzött forrást jelentenek.',
    },
    {
        id: 'd1-9b', grade: '7-8', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.9', tag: 'practice',
        title: 'Forrásellenőrzés',
        task: 'Hogyan ellenőrzöd, hogy egy online információ igaz-e?',
        options: ['Több független forrásban utánanézek', 'Ha sok lájkot kapott, igaz', 'Megnézem ki a szerző', 'Ellenőrzöm a megjelenés dátumát', 'Ha szép az oldal, megbízom benne'],
        correctAnswers: ['Több független forrásban utánanézek', 'Megnézem ki a szerző', 'Ellenőrzöm a megjelenés dátumát'],
        explanation: 'Mindig több forrásból, szerzőt és dátumot ellenőrizve fogadj el információt.',
    },

    // 1.10 Álhírek
    {
        id: 'd1-10a', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.10', tag: 'practice',
        title: 'Álhírek felismerése',
        task: 'Melyik jel utal arra, hogy egy hír valószínűleg hamis?',
        options: ['Tudományos hivatkozásokat tartalmaz', 'Túlzottan érzelmes, felkiáltójeles címet használ', 'Megnevezi a szerzőt és a dátumot', 'Több hírportál is hozza'],
        correctAnswer: 'Túlzottan érzelmes, felkiáltójeles címet használ',
        explanation: 'Az álhírek erős érzelmekre apellálnak. A hiteles hírek tényszerű nyelvezetet használnak.',
    },
    {
        id: 'd1-10b', grade: '9-11', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.10', tag: 'practice',
        title: 'Deepfake felismerés',
        task: 'Hogyan ellenőrizheted, hogy egy videó deepfake-e?',
        options: ['Természetellenes pislogást keresek', 'Elhiszem, mert látom a videón', 'Megbízható hírforrásban keresek visszaigazolást', 'Ellenőrzöm a hangszinkront az ajkakkal'],
        correctAnswers: ['Természetellenes pislogást keresek', 'Megbízható hírforrásban keresek visszaigazolást', 'Ellenőrzöm a hangszinkront az ajkakkal'],
        explanation: 'Deepfake-ek vizuális és hangi hibákat mutathatnak. Mindig ellenőrizd független forrásból!',
    },

    // 1.11 Etikus online viselkedés
    {
        id: 'd1-11a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.11', tag: 'practice',
        title: 'Netikett',
        task: 'Mi a „netikett"?',
        options: ['Egy vírusirtó', 'Az internetes viselkedés illemszabályai', 'Egy közösségi média oldal', 'Egy e-mail szolgáltató'],
        correctAnswer: 'Az internetes viselkedés illemszabályai',
        explanation: 'A netikett az online kommunikáció íratlan illemszabályait jelenti.',
    },
    {
        id: 'd1-11b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.11', tag: 'practice',
        title: 'Creative Commons',
        task: 'Mit jelent a Creative Commons (CC) licenc egy képnél?',
        options: ['Szabadon felhasználható, de a feltételek változhatnak', 'Nem szabad letölteni', 'Csak vásárlás után használható', 'Vírust tartalmaz'],
        correctAnswer: 'Szabadon felhasználható, de a feltételek változhatnak',
        explanation: 'A CC licenc szabad felhasználást engedélyez, de a szerző feltételeit be kell tartani.',
    },

    // 1.12 Digitális lábnyom
    {
        id: 'd1-12a', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.12', tag: 'practice',
        title: 'Digitális lábnyom',
        task: 'Melyek hagynak digitális lábnyomot? Jelöld az összeset!',
        options: ['Közösségi médiás poszt', 'Online vásárlás', 'Könyvolvasás papíron', 'Weboldal böngészése', 'Online játék'],
        correctAnswers: ['Közösségi médiás poszt', 'Online vásárlás', 'Weboldal böngészése', 'Online játék'],
        explanation: 'Minden online tevékenység lábnyomot hagy. A papíron olvasás nem digitális.',
    },
    {
        id: 'd1-12b', grade: '7-8', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.12', tag: 'exam',
        title: 'Negatív digitális lábnyom',
        task: 'Melyek hagynak NEGATÍV digitális lábnyomot?',
        options: ['Iskolai projekt megosztása', 'Osztálytárs nyilvános bántása', 'Személyes adatok nyilvános megosztása', 'Szabálysértő tartalom posztolása'],
        correctAnswers: ['Osztálytárs nyilvános bántása', 'Személyes adatok nyilvános megosztása', 'Szabálysértő tartalom posztolása'],
        explanation: 'Bántás, személyes adatok és szabálysértő tartalmak maradandó negatív nyomot hagynak.',
    },

    // 1.13 Online kommunikáció
    {
        id: 'd1-13a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.13', tag: 'practice',
        title: 'E-mail részei',
        task: 'Melyik NEM része egy e-mailnek?',
        options: ['Címzett', 'Tárgy', 'Jelszó mező', 'Melléklet'],
        correctAnswer: 'Jelszó mező',
        explanation: 'Az e-mail részei: címzett, tárgy, szövegtörzs, melléklet. A jelszó a bejelentkezéshez kell.',
    },
    {
        id: 'd1-13b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.13', tag: 'practice',
        title: 'BCC használata',
        task: 'Péter 30 fős csoportnak küld e-mailt, de nem akarja, hogy lássák egymás címét. Mit használ?',
        options: ['Címzett (To)', 'Másolat (CC)', 'Titkos másolat (BCC)', 'Tárgy (Subject)'],
        correctAnswer: 'Titkos másolat (BCC)',
        explanation: 'A BCC (Blind Carbon Copy) elrejti a címzetteket egymás elől.',
    },
    {
        id: 'd1-13c', grade: '9-11', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.13', tag: 'practice',
        title: 'Kollaboratív eszközök',
        task: 'Melyek valós idejű együttműködésre alkalmas eszközök?',
        options: ['Google Docs', 'Microsoft Teams', 'Nyomtatott papír', 'Notion', 'Fax'],
        correctAnswers: ['Google Docs', 'Microsoft Teams', 'Notion'],
        explanation: 'A Google Docs, Teams és Notion valós idejű online együttműködést tesznek lehetővé.',
    },

    // További feladatok
    {
        id: 'd1-ext-1', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.1', tag: 'practice',
        title: 'Fájltömörítés',
        task: 'Mi a .zip kiterjesztésű fájlok fő célja?',
        options: ['A számítógép gyorsítása', 'Fájlok méretének csökkentése tömörítéssel', 'Vírusok keresése', 'Az operációs rendszer biztonsági mentése'],
        correctAnswer: 'Fájlok méretének csökkentése tömörítéssel',
        explanation: 'A ZIP fájlok egy vagy több fájlt tömörítenek össze, így kevesebb helyet foglalnak és könnyebb megosztani őket.',
    },
    {
        id: 'd1-ext-2', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.2', tag: 'practice',
        title: 'Fordított képkeresés',
        task: 'Hogyan találhatod meg egy letöltött kép eredeti forrását?',
        options: ['A fájl átnevezésével', 'Fordított képkereső használatával (pl. Google Képek)', 'A kép megnyitásával Microsoft Wordben', 'A kép kinyomtatásával'],
        correctAnswer: 'Fordított képkereső használatával (pl. Google Képek)',
        explanation: 'A fordított képkeresés lehetővé teszi a kép feltöltését, hogy megtaláld, hol szerepel még a weben.',
    },
    {
        id: 'd1-ext-3', grade: '9-11', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.3', tag: 'practice',
        title: 'Felhőtárhely',
        task: 'Melyek a következő szolgáltatások közül felhőtárhelyek? Jelöld be az összes helyeset!',
        options: ['Google Drive', 'Microsoft Word', 'Dropbox', 'OneDrive', 'Mozilla Firefox'],
        correctAnswers: ['Google Drive', 'Dropbox', 'OneDrive'],
        explanation: 'A Google Drive, a Dropbox és a OneDrive népszerű felhőalapú tárhelyszolgáltatások.',
    },
    {
        id: 'd1-ext-4', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.4', tag: 'practice',
        title: 'Dokumentum exportálása',
        task: 'Miért érdemes egy kész Word-dokumentumot PDF-ként elmenteni elküldés előtt?',
        options: ['Hogy mindenki számára szerkeszthető legyen', 'Hogy a formázás minden eszközön ugyanúgy jelenjen meg', 'Hogy animációt adjunk a szöveghez', 'Hogy automatikusan lefordítsa más nyelvekre'],
        correctAnswer: 'Hogy a formázás minden eszközön ugyanúgy jelenjen meg',
        explanation: 'A PDF rögzíti az elrendezést, így független attól, milyen programmal vagy eszközön nyitják meg.',
    },
    {
        id: 'd1-ext-5', grade: '9-11', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.5', tag: 'practice',
        title: 'Minta dia',
        task: 'Mire való a "Minta dia" (Slide Master) a prezentációkészítő programokban?',
        options: ['Jelszó beállítására', 'Időzített előadás gyakorlására', 'Egységes megjelenés (háttér, logó, betűtípus) beállítására az összes dián', 'Az összes kép tömörítésére'],
        correctAnswer: 'Egységes megjelenés (háttér, logó, betűtípus) beállítására az összes dián',
        explanation: 'A Minta dia (Slide Master) központilag szabályozza a teljes prezentáció dizájnját.',
    },
    {
        id: 'd1-ext-6', grade: '7-8', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.6', tag: 'practice',
        title: 'Átlátszó hátterű képek',
        task: 'Mely képformátumok támogatják az átlátszó hátteret?',
        options: ['.jpg', '.png', '.bmp', '.gif'],
        correctAnswers: ['.png', '.gif'],
        explanation: 'A PNG és a GIF támogatja az átlátszóságot, míg a JPG és BMP háttere mindig tömör (általában fehér).',
    },
    {
        id: 'd1-ext-7', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.7', tag: 'practice',
        title: 'Streaming',
        task: 'Mit jelent egy videó "streamelése"?',
        options: ['A videó teljes letöltése megtekintés előtt', 'Videó megtekintése valós időben az internetről, anélkül hogy véglegesen letöltenénk', 'A videó kiírása DVD-re', 'A videó színeinek szerkesztése'],
        correctAnswer: 'Videó megtekintése valós időben az internetről, anélkül hogy véglegesen letöltenénk',
        explanation: 'A streamelés folyamatos adatátvitelt jelent, így nem kell a fájlt a saját eszközön tárolni.',
    },
    {
        id: 'd1-ext-8', grade: '9-11', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.8', tag: 'practice',
        title: 'HTML táblázatok',
        task: 'Töltsd ki egy HTML táblázat címkéit!',
        sentences: [
            { text: 'A táblázat sorát létrehozó tag a(z) ___.', options: ['<table>', '<tr>', '<td>', '<th>'], correct: '<tr>' },
            { text: 'Egy normál azadcella tagje a(z) ___.', options: ['<tr>', '<td>', '<th>', '<tbody>'], correct: '<td>' },
            { text: 'Egy fejléccella tagje a(z) ___.', options: ['<head>', '<th>', '<td>', '<tr>'], correct: '<th>' }
        ],
        explanation: 'tr = table row (sor), td = table data (cella), th = table header (fejléc).',
    },
    {
        id: 'd1-ext-9', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.9', tag: 'practice',
        title: 'Clickbait (Kattintásvadászat)',
        task: 'Milyen célt szolgál egy "clickbait" (kattintásvadász) cím?',
        options: ['Pontos tudományos információ átadása', 'A felhasználó rávétele a kattintásra szenzációhajhász és megtévesztő szöveggel', 'Figyelmeztetés számítógépes vírusokra', 'Digitális írástudás tanítása'],
        correctAnswer: 'A felhasználó rávétele a kattintásra szenzációhajhász és megtévesztő szöveggel',
        explanation: 'A clickbait kíváncsiságkeltéssel és túlzásokkal éri el az oldalmegtekintéseket (így növelve a reklámbevételt).',
    },
    {
        id: 'd1-ext-10', grade: '9-11', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.10', tag: 'practice',
        title: 'Tényellenőrzés (Fact-checking)',
        task: 'Mire használnak egy "tényellenőrző" (fact-checking) weboldalt?',
        options: ['Jelszavak generálására', 'Az interneten terjedő állítások, hírek és pletykák valóságtartalmának ellenőrzésére', 'Helyesírási hibák javítására', 'A napi képernyőidő mérésére'],
        correctAnswer: 'Az interneten terjedő állítások, hírek és pletykák valóságtartalmának ellenőrzésére',
        explanation: 'A független oldalak megvizsgálják az internetes szenzációk valóságtartalmát.',
    },
    {
        id: 'd1-ext-11', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.11', tag: 'practice',
        title: 'CSUPA NAGYBETŰ',
        task: 'Az online kommunikációban a csupa nagybetűvel írt üzenet általában milyennek számít?',
        options: ['Suttogásnak', 'Nagyon udvariasnak', 'Kiabálásnak', 'Éneklésnek'],
        correctAnswer: 'Kiabálásnak',
        explanation: 'A netikett szerint a csupa nagybetűs írás agresszív, kiabálást jelent.',
    },
    {
        id: 'd1-ext-12', grade: '7-8', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.12', tag: 'practice',
        title: 'Inkognitó mód',
        task: 'Mit csinál valójában az "Inkognitó" vagy "Privát böngészés" mód? Jelöld az összeset!',
        options: ['Teljesen láthatatlanná tesz a weboldalak számára', 'Megakadályozza, hogy a böngésző helyileg mentse az előzményeket és a sütiket', 'Elrejti a tevékenységedet az internetszolgáltatód (ISP) elől', 'Zárolja az összes vírust'],
        correctAnswers: ['Megakadályozza, hogy a böngésző helyileg mentse az előzményeket és a sütiket'],
        explanation: 'A privát mód csak a te eszközödön nem ment előzményt. Az internetszolgáltató és a weboldalak továbbra is látják a tevékenységedet.',
    },
    {
        id: 'd1-ext-13', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.13', tag: 'practice',
        title: 'Adathalászat (Phishing)',
        task: 'Kapsz egy e-mailt, miszerint a bankszámládat zárolták, és egy linkre kell kattintanod adategyeztetéshez. Mi ez valószínűleg?',
        options: ['Spam (kéretlen levél)', 'Hírlevél', 'Adathalászat (Phishing)', 'Internetes zaklatás'],
        correctAnswer: 'Adathalászat (Phishing)',
        explanation: 'Az adathalászat során csalók hitelesnek tűnő üzenetekkel próbálnak jelszavakat vagy bankkártyaadatokat ellopni.',
    },
    {
        id: 'd1-ext-14', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.1', tag: 'practice',
        title: 'Adatmentés (Backup)',
        task: 'Melyek a jó módszerek a fontos fájljaid biztonsági mentésére?',
        options: ['Mentés külső merevlemezre', 'Az összes fájl kinyomtatása', 'Felmásolás egy felhőalapú tárhelyre', 'Azonnali törlésük', 'Áthelyezés a Lomtárba'],
        correctAnswers: ['Mentés külső merevlemezre', 'Felmásolás egy felhőalapú tárhelyre'],
        explanation: 'A biztonsági mentést (backup) külön fizikai adathordozón vagy biztonságos felhőben kell tárolni az adatvesztés elkerülése végett.',
    },
    {
        id: 'd1-ext-15', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.2', tag: 'practice',
        title: 'Könyvjelzők',
        task: 'Mi a "Könyvjelzők" (Bookmarks/Kedvencek) célja a böngészőkben?',
        options: ['Könyvek online olvasása', 'Webcímek elmentése, hogy később könnyen megtaláljuk őket', 'Idegesítő hirdetések blokkolása', 'Weboldalak lefordítása'],
        correctAnswer: 'Webcímek elmentése, hogy később könnyen megtaláljuk őket',
        explanation: 'A könyvjelzők tárolják az URL-eket, így nem kell újra és újra gépelni vagy keresni őket.',
    },
    {
        id: 'd1-ext-16', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.4', tag: 'practice',
        title: 'Szövegigazítás',
        task: 'Mit csinál a "Sorkizárt" (Justified) szövegigazítás?',
        options: ['Csak a bal margóhoz igazítja a szöveget', 'Középre igazít minden sort', 'Egyenletesen a bal és a jobb margóhoz igazítja a szöveget', 'Félkövérré teszi a szöveget'],
        correctAnswer: 'Egyenletesen a bal és a jobb margóhoz igazítja a szöveget',
        explanation: 'Sorkizárt rendezésnél a program a szóközök méretének változtatásával eléri, hogy a sorok a bal és a jobb margónál is egy vonalban végződjenek (pl. újságoknál).',
    },
    {
        id: 'd1-ext-17', grade: '9-11', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.6', tag: 'practice',
        title: 'Kép körbevágása',
        task: 'Képszerkesztésnél mit csinál a "Körbevágás" (Crop) eszköz?',
        options: ['Fekete-fehérre változtatja a színeket', 'Eltávolítja a felesleges külső részeket, módosítja a képkivágást', 'Növeli a fájlméretet', 'Vektorgrafikává alakítja a fotót'],
        correctAnswer: 'Eltávolítja a felesleges külső részeket, módosítja a képkivágást',
        explanation: 'A körbevágás levágja a kép széleit, hogy egy adott részre fókuszáljon vagy illeszkedjen egy képarányhoz.',
    },
    {
        id: 'd1-ext-18', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.7', tag: 'practice',
        title: 'Podcast',
        task: 'Mi az a podcast?',
        options: ['Számítógépes vírus', 'Digitális, gyakran sorozatszerű hanganyag, mely letölthető vagy streamelhető', 'Csak képeket tartalmazó weboldal', 'Játékkonzol kiegészítő'],
        correctAnswer: 'Digitális, gyakran sorozatszerű hanganyag, mely letölthető vagy streamelhető',
        explanation: 'A podcast általában egy rádióműsorhoz hasonló internetes audiosorozat.',
    },
    {
        id: 'd1-ext-19', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.11', tag: 'practice',
        title: 'Internetes zaklatás (Cyberbullying)',
        task: 'Mit tegyél, ha egy barátod vagy te internetes zaklatás áldozata leszel?',
        options: ['Vágj vissza és zaklasd te is', 'Készíts bizonyítékot (pl. képernyőmentést)', 'Töröld az appot és soha többé ne netezz', 'Mondd el egy megbízható felnőttnek, tanárnak', 'Blokkold és jelentsd a felhasználót'],
        correctAnswers: ['Készíts bizonyítékot (pl. képernyőmentést)', 'Mondd el egy megbízható felnőttnek, tanárnak', 'Blokkold és jelentsd a felhasználót'],
        explanation: 'Ne állj bosszút! Ments bizonyítékot, blokkold az elkövetőt, és kérj segítséget felnőttektől.',
    },
    {
        id: 'd1-ext-20', grade: '7-8', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.13', tag: 'practice',
        title: 'Videóhívás illemszabályai',
        task: 'Melyek számítanak jó gyakorlatnak oktatási vagy szakmai videóhívás során?',
        options: ['Mikrofon némítása, amikor nem beszélsz', 'Folyamatos járkálás a lakásban', 'Zavaró, rendetlen háttér', 'Megfelelő megvilágítás az arcon', 'A kamerába nézés beszéd közben'],
        correctAnswers: ['Mikrofon némítása, amikor nem beszélsz', 'Megfelelő megvilágítás az arcon', 'A kamerába nézés beszéd közben'],
        explanation: 'A némítás megelőzi a háttérzajokat. A jó fényviszonyok és a kamerába nézés segíti a hatékony kommunikációt.',
    }
];
