// Comprehensive question bank for OKM Digital Competency practice
// Each question maps to one of 4 domains: 'IT Eszközök', 'Információ', 'Tartalomalkotás', 'Kommunikáció & Biztonság'
// Types: 'multiple-choice', 'multiple-select', 'dropdown'
// tag: 'practice' | 'exam' — exam-only questions won't appear in practice mode

export const questions = [

    // ╔══════════════════════════════════════════════╗
    // ║            GRADES 5–6 (Foundations)          ║
    // ╚══════════════════════════════════════════════╝

    // --- IT Eszközök ---
    {
        id: 'q56-01', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', tag: 'practice',
        title: 'Bemeneti eszközök',
        task: 'Melyik eszköz számít bemeneti (input) eszköznek? Jelöld be az összeset!',
        options: ['Billentyűzet', 'Monitor', 'Egér', 'Nyomtató', 'Szkenner', 'Mikrofon'],
        correctAnswers: ['Billentyűzet', 'Egér', 'Szkenner', 'Mikrofon'],
        explanation: 'Az input eszközök adatot visznek a számítógépbe. A monitor és a nyomtató kimeneti (output) eszközök.',
    },
    {
        id: 'q56-02', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', tag: 'practice',
        title: 'Okos eszközök (IoT)',
        task: 'Az alábbiak közül melyek számítanak „okos eszköznek", amelyek képesek csatlakozni az internethez?',
        options: ['Wi-Fi-s hűtőszekrény', 'Hagyományos kenyérpirító', 'Okosóra', 'Hagyományos fali óra', 'Okos hangszóró', 'Hagyományos kerékpár'],
        correctAnswers: ['Wi-Fi-s hűtőszekrény', 'Okosóra', 'Okos hangszóró'],
        explanation: 'Az IoT (Internet of Things) eszközök internetkapcsolattal rendelkeznek és adatot cserélnek.',
    },
    {
        id: 'q56-03', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Fájlkiterjesztések',
        task: 'Melyik kiterjesztés tartozik egy képfájlhoz?',
        options: ['.docx', '.jpg', '.xlsx', '.mp3'],
        correctAnswer: '.jpg',
        explanation: 'A .jpg (JPEG) képformátum. A .docx szöveges dokumentum, .xlsx táblázat, .mp3 hangfájl.',
    },
    {
        id: 'q56-04', grade: '5-6', type: 'dropdown', domain: 'IT Eszközök', tag: 'practice',
        title: 'Számítógép részei',
        task: 'Töltsd ki a mondatokat a számítógép részeivel!',
        sentences: [
            { text: 'A számítógép „agya", ami elvégzi a számításokat, a ___.', options: ['RAM', 'CPU (processzor)', 'Monitor', 'Merevlemez'], correct: 'CPU (processzor)' },
            { text: 'Az adatok ideiglenes tárolására szolgál a ___.', options: ['RAM', 'CPU', 'Pendrive', 'Nyomtató'], correct: 'RAM' },
            { text: 'A fájlokat tartósan a ___ tárolja.', options: ['RAM', 'Merevlemez/SSD', 'Billentyűzet', 'Monitor'], correct: 'Merevlemez/SSD' },
        ],
        explanation: 'A CPU végzi a számításokat, a RAM átmeneti memória, a merevlemez (HDD) vagy SSD a tartós tároló.',
    },
    {
        id: 'q56-05', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'exam',
        title: 'Kimeneti eszközök',
        task: 'Az alábbiak közül melyik NEM kimeneti (output) eszköz?',
        options: ['Monitor', 'Projektor', 'Billentyűzet', 'Hangszóró'],
        correctAnswer: 'Billentyűzet',
        explanation: 'A billentyűzet bemeneti (input) eszköz, míg a monitor, projektor és hangszóró kimeneti (output) eszközök.',
    },
    {
        id: 'q56-06', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Ergonómia',
        task: 'Melyik helyes tanács a számítógép előtti üléshez?',
        options: ['Görbítsük a hátunkat kényelmesen', 'A monitor legyen szemmagasságban', 'Üljünk minél közelebb a monitorhoz', 'Egy kézzel gépeljünk'],
        correctAnswer: 'A monitor legyen szemmagasságban',
        explanation: 'A helyes testtartás és a monitortávolság védi a szemünket, hátunkat és nyakunkat.',
    },

    // --- Információ ---
    {
        id: 'q56-07', grade: '5-6', type: 'multiple-choice', domain: 'Információ', tag: 'practice',
        title: 'Adatméretek',
        task: 'Melyik a helyes sorrend a legkisebbtől a legnagyobbig?',
        options: ['Byte < KB < MB < GB', 'KB < Byte < GB < MB', 'GB < MB < KB < Byte', 'MB < KB < Byte < GB'],
        correctAnswer: 'Byte < KB < MB < GB',
        explanation: '1 KB = 1024 Byte, 1 MB = 1024 KB, 1 GB = 1024 MB.',
    },
    {
        id: 'q56-08', grade: '5-6', type: 'multiple-choice', domain: 'Információ', tag: 'practice',
        title: 'Megbízható információ',
        task: 'Egy weboldal valószínűleg megbízhatóbb, ha...',
        options: ['Sok felugró reklámot tartalmaz', 'Nincs rajta szerző neve', 'Hivatalos intézmény (.gov, .edu) üzemelteti', 'Névtelen blogbejegyzés'],
        correctAnswer: 'Hivatalos intézmény (.gov, .edu) üzemelteti',
        explanation: 'A hivatalos intézmények (.gov, .edu) általában ellenőrzött és megbízható forrást jelentenek.',
    },
    {
        id: 'q56-09', grade: '5-6', type: 'multiple-select', domain: 'Információ', tag: 'practice',
        title: 'Jó keresési szokások',
        task: 'Melyek a jó szokások online kereséskor? Jelöld be az összeset!',
        options: ['Több forrásból ellenőrzöm az információt', 'Az első találatot mindig elhiszem', 'Megvizsgálom a weboldal szerzőjét', 'Csak a címet olvasom el', 'Ellenőrzöm a dátumot'],
        correctAnswers: ['Több forrásból ellenőrzöm az információt', 'Megvizsgálom a weboldal szerzőjét', 'Ellenőrzöm a dátumot'],
        explanation: 'Mindig ellenőrizd több forrásból, ki írta, és mikor! Az első találat nem mindig a legjobb.',
    },
    {
        id: 'q56-10', grade: '5-6', type: 'multiple-choice', domain: 'Információ', tag: 'exam',
        title: 'Keresőmotor',
        task: 'Mit jelent a keresőmotorban az idézőjeles keresés (pl. "digitális kompetencia")?',
        options: ['Kizárja ezt a kifejezést', 'Pontosan ezt a kifejezést keresi', 'Csak képeket keres', 'Több nyelven keres'],
        correctAnswer: 'Pontosan ezt a kifejezést keresi',
        explanation: 'Az idézőjeles keresés arra utasítja a keresőmotort, hogy pontosan ezt a szókapcsolatot keresse.',
    },

    // --- Tartalomalkotás ---
    {
        id: 'q56-11', grade: '5-6', type: 'multiple-select', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Fényképek digitalizálása',
        task: 'Hogyan digitalizálhatsz régi papír fényképeket? Jelöld az összes helyes választ!',
        options: ['Szkennerrel beolvasom', 'Digitális fényképezőgéppel lefotózom', 'Kinyomtatom', 'Lefénymásolom', 'Telefonnal lefotózom'],
        correctAnswers: ['Szkennerrel beolvasom', 'Digitális fényképezőgéppel lefotózom', 'Telefonnal lefotózom'],
        explanation: 'A szkennelés és a fotózás (kamerával vagy telefonnal) mind digitalizálási módszerek.',
    },
    {
        id: 'q56-12', grade: '5-6', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Szövegformázás',
        task: 'Melyik billentyűkombináció teszi félkövérré a kijelölt szöveget?',
        options: ['Ctrl + I', 'Ctrl + B', 'Ctrl + U', 'Ctrl + S'],
        correctAnswer: 'Ctrl + B',
        explanation: 'Ctrl+B = Bold (félkövér), Ctrl+I = Italic (dőlt), Ctrl+U = Underline (aláhúzott), Ctrl+S = Mentés.',
    },
    {
        id: 'q56-13', grade: '5-6', type: 'dropdown', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Rajzolóprogram eszközök',
        task: 'Párosítsd az eszközök nevét a funkciójukkal!',
        sentences: [
            { text: 'A „Festékes vödör" eszköz funkciója: ___.', options: ['Szabad kézi rajzolás', 'Terület kitöltése színnel', 'Szöveg beszúrása'], correct: 'Terület kitöltése színnel' },
            { text: 'Az „A" betű ikon funkciója: ___.', options: ['Vonal rajzolása', 'Szöveg beszúrása', 'Terület kitöltése színnel'], correct: 'Szöveg beszúrása' },
        ],
        explanation: 'A festékes vödör kitölti a zárt területet, az „A" ikon szövegdobozt szúr be.',
    },
    {
        id: 'q56-14', grade: '5-6', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'exam',
        title: 'Fájlformátumok',
        task: 'Melyik fájlformátum használatos általában prezentációkhoz?',
        options: ['.xlsx', '.pptx', '.docx', '.pdf'],
        correctAnswer: '.pptx',
        explanation: 'A .pptx a PowerPoint prezentáció formátuma. Az .xlsx táblázat, a .docx szöveges, a .pdf platformfüggetlen.',
    },

    // --- Kommunikáció & Biztonság ---
    {
        id: 'q56-15', grade: '5-6', type: 'dropdown', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Biztonságos jelszó',
        task: 'Töltsd ki a mondatot a legmegfelelőbb válasszal!',
        sentences: [
            { text: 'Egy erős jelszó legalább ___ karakterből áll.', options: ['4', '8', '12'], correct: '12' },
            { text: 'A jelszavainkat ___ tároljuk a legbiztonságosabban.', options: ['egy cetlin a monitoron', 'egy jelszókezelő alkalmazásban', 'egy e-mailben magunknak'], correct: 'egy jelszókezelő alkalmazásban' },
        ],
        explanation: 'A hosszú, összetett jelszó és a jelszókezelő alkalmazás használata a legbiztonságosabb.',
    },
    {
        id: 'q56-16', grade: '5-6', type: 'multiple-choice', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Megosztási jogok',
        task: 'Megosztanád az iskolai projektet úgy, hogy a társad olvashassa de ne módosíthassa. Mit adsz?',
        options: ['Szerkesztő jogot', 'Megtekintő jogot', 'Tulajdonosi jogot', 'Letöltési jogot'],
        correctAnswer: 'Megtekintő jogot',
        explanation: 'A „Megtekintő" (Viewer) jog csak olvasást engedélyez, módosítást nem.',
    },
    {
        id: 'q56-17', grade: '5-6', type: 'dropdown', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Digitális jóllét',
        task: 'Töltsd ki a mondatokat!',
        sentences: [
            { text: 'A folyamatos görgetés egy ___ hurkot hoz létre az agyban.', options: ['dopamin', 'adrenalin', 'oxigén'], correct: 'dopamin' },
            { text: 'Alvás előtt a kék fényt csökkenthetjük a ___ funkcióval.', options: ['Night Shift / Kékfényszűrő', 'Repülő mód', 'Bluetooth'], correct: 'Night Shift / Kékfényszűrő' },
            { text: 'Az alkalmazáshasználatot korlátozhatjuk a telefon ___ beállításaival.', options: ['Képernyőidő', 'Hangerő', 'Háttérkép'], correct: 'Képernyőidő' },
        ],
        explanation: 'A tudatos képernyőhasználat fontos a digitális jólléthez. A kékfényszűrő segít az alvásban.',
    },
    {
        id: 'q56-18', grade: '5-6', type: 'multiple-select', domain: 'Kommunikáció & Biztonság', tag: 'exam',
        title: 'Személyes adatok védelme',
        task: 'Melyik adatot NE osszad meg idegenekkel az interneten? Jelöld az összeset!',
        options: ['Lakcímed', 'Kedvenc színed', 'Telefonszámod', 'Iskolád pontos neve és címe', 'Kedvenc filmjeid'],
        correctAnswers: ['Lakcímed', 'Telefonszámod', 'Iskolád pontos neve és címe'],
        explanation: 'A lakcím, telefonszám és iskola pontos adatai személyes információk, amelyeket nem szabad megosztani idegenekkel.',
    },
    {
        id: 'q56-19', grade: '5-6', type: 'multiple-choice', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Online illemtan',
        task: 'Mi a „netikett" (netikett)?',
        options: ['Egy vírusirtó program', 'Az internetes viselkedés illemszabályai', 'Egy közösségi média oldal', 'Egy e-mail szolgáltató'],
        correctAnswer: 'Az internetes viselkedés illemszabályai',
        explanation: 'A netikett (netiquette) az online kommunikáció íratlan illemszabályait jelenti.',
    },
    {
        id: 'q56-20', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'exam',
        title: 'Operációs rendszerek',
        task: 'Melyik NEM operációs rendszer?',
        options: ['Windows', 'macOS', 'Google Chrome', 'Linux'],
        correctAnswer: 'Google Chrome',
        explanation: 'A Google Chrome egy webböngésző, nem operációs rendszer. A Windows, macOS és Linux operációs rendszerek.',
    },


    // ╔══════════════════════════════════════════════╗
    // ║            GRADES 7–8 (Intermediate)         ║
    // ╚══════════════════════════════════════════════╝

    // --- IT Eszközök ---
    {
        id: 'q78-01', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Folyamatábra értelmezés',
        task: 'Egy folyamatábra: „Esik az eső?" → Ha IGEN → ___. Mi a logikus lépés?',
        options: ['Vidd az esernyőt!', 'Vegyél fel napszemüveget!', 'Menj el futni!', 'Nyisd ki az ablakot!'],
        correctAnswer: 'Vidd az esernyőt!',
        explanation: 'A folyamatábrák lépésről lépésre mutatják a döntési folyamatot. Eső → esernyő logikus.',
    },
    {
        id: 'q78-02', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Blokk-kód kimenete',
        task: 'Mit ír ki? Set Score = 5 → If Score > 4 Then Say "Szuper" → Else Say "Próbáld újra!"',
        options: ['Szuper', 'Próbáld újra!', '5', 'Hiba'],
        correctAnswer: 'Szuper',
        explanation: 'A Score = 5, ami > 4, tehát az If feltétel igaz → "Szuper" jelenik meg.',
    },
    {
        id: 'q78-03', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', tag: 'practice',
        title: 'Portok és csatlakozók',
        task: 'Párosítsd a portot a funkciójával!',
        sentences: [
            { text: 'Az HDMI port fő funkciója: ___.', options: ['Internetkapcsolat', 'Videó kimenet', 'Hangkimenet', 'Töltés'], correct: 'Videó kimenet' },
            { text: 'Az Ethernet port fő funkciója: ___.', options: ['Videó kimenet', 'Vezetékes internetkapcsolat', 'USB adatátvitel', 'Hangkimenet'], correct: 'Vezetékes internetkapcsolat' },
            { text: 'Az USB port fő funkciója: ___.', options: ['Általános adatátvitel és töltés', 'Csak töltés', 'Csak videó', 'Csak hang'], correct: 'Általános adatátvitel és töltés' },
        ],
        explanation: 'HDMI = videó/hang kimenet, Ethernet = vezetékes internet, USB = univerzális adatátvitel/töltés.',
    },
    {
        id: 'q78-04', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Ciklus felismerése',
        task: 'Melyik programozási fogalom ismétli meg ugyanazt a lépést többször?',
        options: ['Elágazás (If/Else)', 'Ciklus (Loop)', 'Változó (Variable)', 'Függvény (Function)'],
        correctAnswer: 'Ciklus (Loop)',
        explanation: 'A ciklus (loop) egy kódblokkot ismétel adott feltétel szerint. Az elágazás döntést hoz.',
    },
    {
        id: 'q78-05', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'exam',
        title: 'Hálózati fogalmak',
        task: 'Mi a Wi-Fi?',
        options: ['Egy operációs rendszer', 'Vezeték nélküli hálózati kapcsolat', 'Egy programozási nyelv', 'Egy tárhelyszolgáltatás'],
        correctAnswer: 'Vezeték nélküli hálózati kapcsolat',
        explanation: 'A Wi-Fi vezeték nélküli hálózati szabvány, amely lehetővé teszi az internetkapcsolatot kábel nélkül.',
    },
    {
        id: 'q78-06', grade: '7-8', type: 'multiple-select', domain: 'IT Eszközök', tag: 'practice',
        title: 'Adatátviteli módszerek',
        task: 'Melyek vezeték nélküli adatátviteli módszerek? Jelöld az összeset!',
        options: ['Bluetooth', 'USB kábel', 'Wi-Fi', 'Ethernet kábel', 'NFC', 'HDMI kábel'],
        correctAnswers: ['Bluetooth', 'Wi-Fi', 'NFC'],
        explanation: 'A Bluetooth, Wi-Fi és NFC vezeték nélküli technológiák. A kábeles megoldások (USB, Ethernet, HDMI) nem azok.',
    },

    // --- Információ ---
    {
        id: 'q78-07', grade: '7-8', type: 'multiple-choice', domain: 'Információ', tag: 'practice',
        title: 'Álhírek felismerése',
        task: 'Melyik a legerősebb jel, hogy egy hír hamis lehet?',
        options: ['Hivatalos hírportálon jelent meg', 'Túlzottan érzelmes, felkiáltójeles címet használ', 'Megnevezi a szerzőt', 'Tudományos hivatkozásokat tartalmaz'],
        correctAnswer: 'Túlzottan érzelmes, felkiáltójeles címet használ',
        explanation: 'Az álhírek gyakran erős érzelmekre apellálnak. A hiteles hírek tényszerű nyelvezetet használnak.',
    },
    {
        id: 'q78-08', grade: '7-8', type: 'multiple-select', domain: 'Információ', tag: 'practice',
        title: 'Digitális lábnyom típusai',
        task: 'Melyek hagynak NEGATÍV digitális lábnyomot? Jelöld az összeset!',
        options: ['Iskolai projekt megosztása', 'Osztálytárs nyilvános bántása', 'Hírolvasás', 'Személyes adatok megosztása nyilvánosan', 'Szabálysértő tartalom posztolása'],
        correctAnswers: ['Osztálytárs nyilvános bántása', 'Személyes adatok megosztása nyilvánosan', 'Szabálysértő tartalom posztolása'],
        explanation: 'A bántó megjegyzések, személyes adatok megosztása és szabálysértő tartalmak maradandó negatív nyomot hagynak.',
    },
    {
        id: 'q78-09', grade: '7-8', type: 'multiple-choice', domain: 'Információ', tag: 'exam',
        title: 'Szponzorált tartalom',
        task: 'Mi jelzi, hogy egy közösségi médiás poszt fizetett reklám?',
        options: ['Sok lájkot kapott', 'A #ad vagy #sponsored jelölést tartalmazza', 'Érdekesnek tűnik', 'Egy ismerős osztotta meg'],
        correctAnswer: 'A #ad vagy #sponsored jelölést tartalmazza',
        explanation: 'A jogszabályok szerint a fizetett tartalmakat jelölni kell (pl. #ad, #sponsored, „fizetett együttműködés").',
    },
    {
        id: 'q78-10', grade: '7-8', type: 'dropdown', domain: 'Információ', tag: 'practice',
        title: 'Szűrőbuborék',
        task: 'Töltsd ki az algoritmusokról szóló mondatokat!',
        sentences: [
            { text: 'A közösségi média ___ alapján mutatja a tartalmakat.', options: ['véletlenszerűen', 'algoritmus', 'ábécérendben'], correct: 'algoritmus' },
            { text: 'Ha csak hasonló tartalmakat látunk, az ún. ___ alakul ki.', options: ['szűrőbuborék', 'vírusvédelem', 'titkosítás'], correct: 'szűrőbuborék' },
        ],
        explanation: 'Az algoritmusok a korábbi viselkedés alapján szűrik a látható tartalmakat, ami szűrőbuborékot (filter bubble) hoz létre.',
    },

    // --- Tartalomalkotás ---
    {
        id: 'q78-11', grade: '7-8', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'E-mail – BCC használata',
        task: 'Péter 30 osztálytársnak küld meghívót e-mailben úgy, hogy ne lássák egymás címeit. Melyik mezőt használja?',
        options: ['Címzett (To)', 'Másolat (CC)', 'Titkos másolat (BCC)', 'Tárgy (Subject)'],
        correctAnswer: 'Titkos másolat (BCC)',
        explanation: 'A BCC (Blind Carbon Copy) elrejti a címzetteket egymás elől.',
    },
    {
        id: 'q78-12', grade: '7-8', type: 'dropdown', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Táblázatkezelő függvények',
        task: 'Válaszd ki a helyes függvényt!',
        sentences: [
            { text: 'Az összes érték összege: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'COUNT'], correct: 'SUM' },
            { text: 'A legnagyobb érték: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'MIN'], correct: 'MAX' },
            { text: 'Az értékek átlaga: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'COUNT'], correct: 'AVERAGE' },
        ],
        explanation: 'SUM = összeg, MAX = legnagyobb, AVERAGE = átlag. Ezek a legalapvetőbb táblázatkezelő függvények.',
    },
    {
        id: 'q78-13', grade: '7-8', type: 'multiple-select', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Feltételes formázás',
        task: 'Melyik eszköz állítja automatikusan egy cella háttérszínét pirosra, ha a pontszám 50 alatt van?',
        options: ['Feltételes formázás', 'Rendezés A-Z', 'Keresés és csere', 'Cellastílusok'],
        correctAnswers: ['Feltételes formázás'],
        explanation: 'A "Feltételes formázás" (Conditional Formatting) automatikusan formáz cellákat szabályok alapján.',
    },
    {
        id: 'q78-14', grade: '7-8', type: 'dropdown', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Felhős együttműködés',
        task: 'Töltsd ki a felhős együttműködésről szóló szöveget!',
        sentences: [
            { text: 'A csoportprojekthez először egy megosztott ___ hozunk létre a felhőben.', options: ['mappát', 'e-mailt', 'vírusirtót'], correct: 'mappát' },
            { text: 'A csoporttagoknak ___ jogot adunk.', options: ['szerkesztő', 'megtekintő', 'blokkolt'], correct: 'szerkesztő' },
            { text: 'A megosztáshoz elküldjük nekik a ___ a dokumentumhoz.', options: ['jelszót', 'linket', 'sorszámot'], correct: 'linket' },
        ],
        explanation: 'A felhős együttműködés alapja: megosztott mappa, szerkesztési jog, és hivatkozás küldése.',
    },
    {
        id: 'q78-15', grade: '7-8', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Rossz prezentációs szokások',
        task: 'Melyik NEM jó szokás egy prezentációban?',
        options: ['Kevés szöveg diánként', 'Jól olvasható betűméret', 'Sárga szöveg fehér háttéren', 'Képek használata a szöveg mellett'],
        correctAnswer: 'Sárga szöveg fehér háttéren',
        explanation: 'A sárga szöveg fehér háttéren szinte olvashatatlan. Mindig használj jó kontrasztot!',
    },
    {
        id: 'q78-16', grade: '7-8', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'exam',
        title: 'Diagramtípusok',
        task: 'Melyik diagramtípus a legalkalmasabb arányok (%) megjelenítésére?',
        options: ['Oszlopdiagram', 'Vonaldiagram', 'Kördiagram', 'Pontdiagram'],
        correctAnswer: 'Kördiagram',
        explanation: 'A kördiagram (pie chart) ideális százalékos arányok vizualizálására, mert az egész 100%-ot jelenti.',
    },

    // --- Kommunikáció & Biztonság ---
    {
        id: 'q78-17', grade: '7-8', type: 'multiple-select', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Online zaklatás kezelése',
        task: 'Osztálytársad bántó megjegyzéseket ír rólad online. Melyek a helyes lépések?',
        options: ['Törlöm a profilomat', 'Törlöm a bántó üzeneteket, ha lehet', 'Azonnal visszaszidom', 'Jelentem az adminisztrátornak', 'Segítséget kérek felnőttől'],
        correctAnswers: ['Törlöm a bántó üzeneteket, ha lehet', 'Jelentem az adminisztrátornak', 'Segítséget kérek felnőttől'],
        explanation: 'Soha ne válaszolj indulatból! Törlés, jelentés és felnőtt segítségkérés a helyes.',
    },
    {
        id: 'q78-18', grade: '7-8', type: 'dropdown', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'MI-alapú prompt írás',
        task: 'Töltsd ki a promptot a legjobb eredményért!',
        sentences: [
            { text: 'A legjobb eredményhez add meg a ___ (szerepet) az MI-nek.', options: ['kontextust', 'jelszavad', 'e-mail címed'], correct: 'kontextust' },
            { text: 'A válaszformátumot is pontosítsd: pl. ___ pontban foglald össze.', options: ['3 felsorolás', '500 oldal', 'rajz formában'], correct: '3 felsorolás' },
        ],
        explanation: 'A jó MI prompt tartalmaz kontextust, szerepet és pontos formátumigényt.',
    },
    {
        id: 'q78-19', grade: '7-8', type: 'multiple-choice', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Creative Commons',
        task: 'Mit jelent a Creative Commons (CC) licenc egy képnél?',
        options: ['Szabadon felhasználható, de a feltételek változhatnak', 'Nem szabad letölteni', 'Csak vásárlás után használható', 'Vírust tartalmaz'],
        correctAnswer: 'Szabadon felhasználható, de a feltételek változhatnak',
        explanation: 'A CC licenc lehetővé teszi a szabad felhasználást, de a szerző feltételeit (pl. névjelölés) be kell tartani.',
    },
    {
        id: 'q78-20', grade: '7-8', type: 'multiple-choice', domain: 'Kommunikáció & Biztonság', tag: 'exam',
        title: 'Adatátvitel biztonsága',
        task: 'Mi biztosítja, hogy a weboldalon küldött adataid titkosítva vannak?',
        options: ['Az oldal sok reklámot tartalmaz', 'A cím http://-vel kezdődik', 'A cím https://-vel kezdődik és lakat ikon van', 'Az oldal szép designnal rendelkezik'],
        correctAnswer: 'A cím https://-vel kezdődik és lakat ikon van',
        explanation: 'A HTTPS és a lakat ikon titkosított kapcsolatot jelent. A HTTP nem titkosított.',
    },

    // ╔══════════════════════════════════════════════╗
    // ║         GRADES 9–11 (Advanced)               ║
    // ╚══════════════════════════════════════════════╝

    // --- IT Eszközök ---
    {
        id: 'q911-01', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', tag: 'practice',
        title: 'SQL lekérdezés',
        task: 'Egy könyv-adatbázisból kérdezd le a 2000 utáni könyveket!',
        sentences: [
            { text: '___ title, author FROM books', options: ['SELECT', 'INSERT', 'DELETE', 'UPDATE'], correct: 'SELECT' },
            { text: '___ year > 2000', options: ['WHERE', 'HAVING', 'GROUP BY', 'JOIN'], correct: 'WHERE' },
            { text: '___ title ASC', options: ['ORDER BY', 'SORT BY', 'GROUP BY', 'FILTER BY'], correct: 'ORDER BY' },
        ],
        explanation: 'SELECT kiválaszt, WHERE szűr, ORDER BY rendez. Ez az alapvető SQL lekérdezés.',
    },
    {
        id: 'q911-02', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Végtelen ciklus hibakeresés',
        task: 'A kód célja 1-10-ig számolni, de végtelen ciklusba kerül: i=1; while(i<=10) { print(i); }. Mi a hiba?',
        options: ['Hiányzik az i = i + 1 növelés', 'A feltétel rossz', 'A print hibás', 'Nincs hiba'],
        correctAnswer: 'Hiányzik az i = i + 1 növelés',
        explanation: 'Ha i soha nem nő, a while feltétel örökre igaz marad → végtelen ciklus.',
    },
    {
        id: 'q911-03', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', tag: 'practice',
        title: 'Relációs adatbázis kulcsok',
        task: 'Töltsd ki az adatbázis fogalmakat!',
        sentences: [
            { text: 'A „Tanulók" ___ -ban minden tanulónak egyedi azonosítója van.', options: ['táblában', 'programban', 'böngészőben'], correct: 'táblában' },
            { text: 'Az egyedi azonosító neve: ___.', options: ['Elsődleges kulcs', 'Idegen kulcs', 'Táblanév'], correct: 'Elsődleges kulcs' },
            { text: 'Amikor ez az ID a „Jegyek" táblában is megjelenik, azt ___-nak nevezzük.', options: ['Elsődleges kulcsnak', 'Idegen kulcsnak', 'Indexnek'], correct: 'Idegen kulcsnak' },
        ],
        explanation: 'Primary Key = egyedi azonosító, Foreign Key = másik tábla elsődleges kulcsára hivatkozó mező.',
    },
    {
        id: 'q911-04', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Hálózati topológia',
        task: '5 számítógép körben összekötve – milyen topológia ez?',
        options: ['Csillag', 'Gyűrű', 'Busz', 'Fa'],
        correctAnswer: 'Gyűrű',
        explanation: 'A gyűrű topológiában az eszközök körbe vannak kötve. A csillagban egy központi elosztó van.',
    },
    {
        id: 'q911-05', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'exam',
        title: 'LAN vs WAN',
        task: 'Mi a különbség a LAN és a WAN között?',
        options: ['A LAN vezeték nélküli, a WAN nem', 'A LAN helyi, a WAN nagyobb területet fed le', 'A LAN gyorsabb mint az internet', 'Nincs különbség'],
        correctAnswer: 'A LAN helyi, a WAN nagyobb területet fed le',
        explanation: 'LAN = Local Area Network (helyi hálózat, pl. iskolai). WAN = Wide Area Network (nagy kiterjedésű, pl. internet).',
    },
    {
        id: 'q911-06', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Változó típusok',
        task: 'Milyen típusú változó a "Kovács Anna" szöveg egy programban?',
        options: ['Integer (egész szám)', 'Boolean (logikai)', 'String (szöveg)', 'Float (tizedes szám)'],
        correctAnswer: 'String (szöveg)',
        explanation: 'A String szöveges adatot tárol, az Integer egész számot, a Boolean igaz/hamis értéket, a Float tizedes számot.',
    },
    {
        id: 'q911-07', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', tag: 'practice',
        title: 'Logikai kapuk',
        task: 'Töltsd ki a logikai kapuk eredményeit!',
        sentences: [
            { text: 'AND kapu: Ha A=IGAZ és B=IGAZ, az eredmény: ___.', options: ['IGAZ', 'HAMIS'], correct: 'IGAZ' },
            { text: 'OR kapu: Ha A=IGAZ és B=HAMIS, az eredmény: ___.', options: ['IGAZ', 'HAMIS'], correct: 'IGAZ' },
            { text: 'NOT kapu: Ha A=IGAZ, az eredmény: ___.', options: ['IGAZ', 'HAMIS'], correct: 'HAMIS' },
        ],
        explanation: 'AND: mindkettő kell; OR: legalább egy kell; NOT: megfordítja az értéket.',
    },

    // --- Információ ---
    {
        id: 'q911-08', grade: '9-11', type: 'multiple-select', domain: 'Információ', tag: 'practice',
        title: 'Gépi tanulás alapjai',
        task: 'Mely állítások igazak a gépi tanulásra (ML)? Jelöld az összeset!',
        options: [
            'Nagy adathalmazok szükségesek a minták felismeréséhez',
            'Az MI pontosan úgy érti az érzelmeket, mint egy ember',
            'A kimenet minősége a bemeneti adatok minőségétől függ',
            'Az MI képes magát programozni emberi beavatkozás nélkül',
        ],
        correctAnswers: ['Nagy adathalmazok szükségesek a minták felismeréséhez', 'A kimenet minősége a bemeneti adatok minőségétől függ'],
        explanation: 'ML: sok adatból tanul, „garbage in, garbage out". Nem érti az érzelmeket és nem programozza magát.',
    },
    {
        id: 'q911-09', grade: '9-11', type: 'multiple-select', domain: 'Információ', tag: 'practice',
        title: 'Deepfake felismerés',
        task: 'Hogyan ellenőrizheted, hogy egy videó deepfake-e?',
        options: [
            'Természetellenes pislogást keresek',
            'Elhiszem, mert látom a videón',
            'Megbízható hírforrásban keresek visszaigazolást',
            'Ellenőrzöm a hangszinkront az ajkakkal',
        ],
        correctAnswers: ['Természetellenes pislogást keresek', 'Megbízható hírforrásban keresek visszaigazolást', 'Ellenőrzöm a hangszinkront az ajkakkal'],
        explanation: 'A deepfake-ek vizuális és hangi hibákat mutathatnak. Mindig ellenőrizd független forrásból!',
    },
    {
        id: 'q911-10', grade: '9-11', type: 'multiple-choice', domain: 'Információ', tag: 'practice',
        title: 'MI hallucinációk',
        task: 'Mit jelent, hogy egy MI chatbot „hallucinál"?',
        options: ['Vizuális effekteket mutat', 'Magabiztosan valótlan információt állít', 'Lassabban válaszol', 'A válasza túl rövid'],
        correctAnswer: 'Magabiztosan valótlan információt állít',
        explanation: 'Az MI hallucináció: a modell magabiztosan generál hamis adatokat, mintha igazak lennének.',
    },
    {
        id: 'q911-11', grade: '9-11', type: 'dropdown', domain: 'Információ', tag: 'exam',
        title: 'MI bias és etika',
        task: 'Töltsd ki az MI etikáról szóló mondatokat!',
        sentences: [
            { text: 'Ha egy MI modellt kizárólag angol nyelvű adatokon tanítják, az eredmény ___ lesz.', options: ['torzított (biased)', 'tökéletes', 'véletlenszerű'], correct: 'torzított (biased)' },
            { text: 'Az MI által generált szöveget mindig ___ kell az eredeti forrásokkal.', options: ['ellenőrizni', 'elfogadni', 'törölni'], correct: 'ellenőrizni' },
        ],
        explanation: 'A torz adatokból torz eredmények születnek (bias). Az MI kimenetét mindig ellenőrizni kell.',
    },

    // --- Tartalomalkotás ---
    {
        id: 'q911-12', grade: '9-11', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'VLOOKUP',
        task: '500 termékünk van. Az 1. lapról a 2.-ra kell az árat lehívni ID alapján. Mi a VLOOKUP utolsó paramétere pontos egyezéshez?',
        options: ['TRUE', 'FALSE', '0 és FALSE egyenértékű', '1'],
        correctAnswer: '0 és FALSE egyenértékű',
        explanation: 'VLOOKUP pontos egyezés: utolsó paraméter = FALSE vagy 0.',
    },
    {
        id: 'q911-13', grade: '9-11', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'IF függvény',
        task: 'Melyik formula ad 10% kedvezményt, ha az összeg > 10000? A2 cella tartalmazza az összeget.',
        options: ['=IF(A2>10000; A2*0.9; A2)', '=IF(A2<10000; A2*0.1; A2)', '=SUM(A2*0.9)', '=AVERAGE(A2; 0.9)'],
        correctAnswer: '=IF(A2>10000; A2*0.9; A2)',
        explanation: 'Az IF logikai feltételt vizsgál. Ha igaz (összeg > 10000), 10%-os engedményt ad (×0.9), különben az eredeti árat.',
    },
    {
        id: 'q911-14', grade: '9-11', type: 'dropdown', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'HTML alapok',
        task: 'Töltsd ki a HTML kódrészleteket!',
        sentences: [
            { text: 'A fő címsor tag-je: ___.', options: ['<h1>', '<p>', '<div>', '<span>'], correct: '<h1>' },
            { text: 'Egy bekezdés tag-je: ___.', options: ['<h1>', '<p>', '<img>', '<a>'], correct: '<p>' },
            { text: 'Egy kép beszúrásához a ___ tag-et használjuk.', options: ['<p>', '<h1>', '<img>', '<link>'], correct: '<img>' },
        ],
        explanation: '<h1> = fő címsor, <p> = bekezdés, <img> = kép. Ezek az alapvető HTML elemek.',
    },
    {
        id: 'q911-15', grade: '9-11', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'exam',
        title: 'COUNTIF',
        task: 'Melyik függvény számolja meg, hányszor fordul elő az „5" jegy az A1:A30 tartományban?',
        options: ['=SUM(A1:A30)', '=COUNTIF(A1:A30; 5)', '=AVERAGE(A1:A30)', '=MAX(A1:A30)'],
        correctAnswer: '=COUNTIF(A1:A30; 5)',
        explanation: 'A COUNTIF megszámolja, hányszor teljesül egy feltétel egy tartományban.',
    },

    // --- Kommunikáció & Biztonság ---
    {
        id: 'q911-16', grade: '9-11', type: 'dropdown', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Kiberbiztonság',
        task: 'Töltsd ki a kiberbiztonsági mondatokat!',
        sentences: [
            { text: 'A jelszó mellé be kell kapcsolnod a ___ funkciót.', options: ['MFA/2FA', 'VPN', 'Tűzfal'], correct: 'MFA/2FA' },
            { text: 'Az SMS-ben érkező jelszókérős üzenet neve: ___.', options: ['Phishing', 'Smishing', 'Spamming'], correct: 'Smishing' },
            { text: 'Soha ne bankolj ___ hálózaton.', options: ['otthoni Wi-Fi', 'nyilvános Wi-Fi', 'mobilnet'], correct: 'nyilvános Wi-Fi' },
        ],
        explanation: 'MFA = többfaktoros hitelesítés, Smishing = SMS-alapú adathalászat, nyilvános Wi-Fi = nem biztonságos.',
    },
    {
        id: 'q911-17', grade: '9-11', type: 'multiple-select', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'GDPR alapelvek',
        task: 'Melyek a GDPR (Általános Adatvédelmi Rendelet) alapelvei? Jelöld az összeset!',
        options: [
            'Személyes adatot csak célhoz kötötten szabad gyűjteni',
            'Bárki szabadon elérheti mások adatait',
            'Az érintettnek joga van az adatai törléséhez',
            'A cégek korlátlanul tárolhatják az adatokat',
            'Adatkezeléshez hozzájárulás szükséges',
        ],
        correctAnswers: ['Személyes adatot csak célhoz kötötten szabad gyűjteni', 'Az érintettnek joga van az adatai törléséhez', 'Adatkezeléshez hozzájárulás szükséges'],
        explanation: 'A GDPR védi a személyes adatokat: célhoz kötöttség, törléshez való jog és hozzájárulás alapelvei.',
    },
    {
        id: 'q911-18', grade: '9-11', type: 'dropdown', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Kiberfenyegetések',
        task: 'Párosítsd a kiberfenyegetést a leírásával!',
        sentences: [
            { text: 'A fájljaidat titkosítja és váltságdíjat kér: ___.', options: ['Ransomware', 'Phishing', 'DDoS'], correct: 'Ransomware' },
            { text: 'Hamis e-maillel próbálja megszerezni a jelszavad: ___.', options: ['Ransomware', 'Phishing', 'Malware'], correct: 'Phishing' },
            { text: 'Egy weboldalt túlterhel, hogy elérhetetlenné tegye: ___.', options: ['Ransomware', 'Phishing', 'DDoS'], correct: 'DDoS' },
        ],
        explanation: 'Ransomware = váltságdíjas vírus, Phishing = adathalászat, DDoS = szolgáltatás megbénítása terheléssel.',
    },
    {
        id: 'q911-19', grade: '9-11', type: 'multiple-choice', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'VPN',
        task: 'Mire szolgál a VPN (Virtual Private Network)?',
        options: ['Gyorsítja az internetet', 'Titkosított csatornát hoz létre a böngészéshez', 'Vírusokat töröl', 'Reklámokat blokkol'],
        correctAnswer: 'Titkosított csatornát hoz létre a böngészéshez',
        explanation: 'A VPN titkosítja az internetforgalmat és elrejti az IP-címet, növelve a biztonságot.',
    },
    {
        id: 'q911-20', grade: '9-11', type: 'multiple-select', domain: 'Kommunikáció & Biztonság', tag: 'exam',
        title: 'Biztonsági mentés – 3-2-1 szabály',
        task: 'Mit jelent a 3-2-1 biztonsági mentés szabály? Jelöld az összeset!',
        options: [
            '3 másolat az adatokról',
            '2 különböző tárolóeszközön',
            '1 másolat más helyszínen',
            '3 különböző jelszó',
            '2 vírusirtó program',
        ],
        correctAnswers: ['3 másolat az adatokról', '2 különböző tárolóeszközön', '1 másolat más helyszínen'],
        explanation: '3-2-1: 3 példány, 2 különböző médián (pl. HDD + felhő), 1 offsite (távoli helyen).',
    },
];
