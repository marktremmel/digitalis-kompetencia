// Domain 3: Algoritmizálás, programozás, robotika, MI (3.1–3.3.1)

export const domain3Questions = [
    // 3.1.1 Algoritmusok felismerése, elemzése
    {
        id: 'd3-1a', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.1', tag: 'practice',
        title: 'Algoritmus a hétköznapokban',
        task: 'Melyik a legjobb példa egy algoritmusra a hétköznapokból?',
        options: ['Egy sütemény receptje lépésről lépésre', 'Egy szép kép', 'Egy kedvenc dal', 'Egy szám'],
        correctAnswer: 'Egy sütemény receptje lépésről lépésre',
        explanation: 'Az algoritmus pontos lépések sorozata egy cél eléréséhez – pont mint egy recept!',
    },

    // 3.1.2 Folyamatábrák
    {
        id: 'd3-2a', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.2', tag: 'practice',
        title: 'Folyamatábra alakzatok',
        task: 'Mit jelölünk rombusz alakzattal egy folyamatábrában?',
        options: ['Kezdet/vége', 'Döntés (igen/nem)', 'Művelet/lépés', 'Bemenet/kimenet'],
        correctAnswer: 'Döntés (igen/nem)',
        explanation: 'Rombusz = döntés, téglalap = művelet, kerekített téglalap = kezdet/vége, parallelogramma = be/kimenet.',
    },
    {
        id: 'd3-2b', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.2', tag: 'practice',
        title: 'Folyamatábra értelmezés',
        task: '„Esik az eső?" → Ha IGEN → ___. Mi a logikus lépés?',
        options: ['Vidd az esernyőt!', 'Vegyél fel napszemüveget!', 'Menj el futni!', 'Nyisd ki az ablakot!'],
        correctAnswer: 'Vidd az esernyőt!',
        explanation: 'A folyamatábrák lépésről lépésre mutatják a döntési folyamatot. Eső → esernyő.',
    },

    // 3.1.3 Bemenet, kimenet, változók
    {
        id: 'd3-3a', grade: '7-8', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.1.3', tag: 'practice',
        title: 'Bemenet és kimenet',
        task: 'Töltsd ki a programozási fogalmakat!',
        sentences: [
            { text: 'A felhasználó által beírt adat a program ___.', options: ['bemenete (input)', 'kimenete (output)', 'változója'], correct: 'bemenete (input)' },
            { text: 'A program eredménye, amit megjelenít, a ___.', options: ['bemenet', 'kimenet (output)', 'ciklus'], correct: 'kimenet (output)' },
            { text: 'Az adat ideiglenes tárolója a programban: ___.', options: ['bemenet', 'kimenet', 'változó (variable)'], correct: 'változó (variable)' },
        ],
        explanation: 'Input = bemenő adat, output = eredmény/kimenet, változó = névvel ellátott tárolóhely.',
    },
    {
        id: 'd3-3b', grade: '9-11', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.3', tag: 'practice',
        title: 'Változó típusok',
        task: '"Kovács Anna" milyen típusú változó egy programban?',
        options: ['Integer (egész szám)', 'Boolean (logikai)', 'String (szöveg)', 'Float (tizedes)'],
        correctAnswer: 'String (szöveg)',
        explanation: 'String = szöveg, Integer = egész szám, Boolean = igaz/hamis, Float = tizedes szám.',
    },

    // 3.1.4 Vezérlési szerkezetek
    {
        id: 'd3-4a', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Ciklus felismerése',
        task: 'Melyik fogalom ismétli meg ugyanazt a lépést többször?',
        options: ['Elágazás (If/Else)', 'Ciklus (Loop)', 'Változó', 'Függvény'],
        correctAnswer: 'Ciklus (Loop)',
        explanation: 'A ciklus (loop) egy kódblokkot ismétel. Az elágazás döntést hoz.',
    },
    {
        id: 'd3-4b', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Elágazás értelmezése',
        task: 'Set Score = 5 → If Score > 4 Then Say "Szuper" → Else Say "Próbáld újra!" Mit ír ki?',
        options: ['Szuper', 'Próbáld újra!', '5', 'Hiba'],
        correctAnswer: 'Szuper',
        explanation: 'Score = 5, ami > 4, tehát az If feltétel igaz → "Szuper".',
    },
    {
        id: 'd3-4c', grade: '5-6', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Vezérlési szerkezetek',
        task: 'Párosítsd a fogalmakat!',
        sentences: [
            { text: 'Lépések egymás utáni végrehajtása: ___.', options: ['szekvencia', 'elágazás', 'ciklus'], correct: 'szekvencia' },
            { text: 'Feltétel alapján két különböző út: ___.', options: ['szekvencia', 'elágazás', 'ciklus'], correct: 'elágazás' },
            { text: 'Lépések ismétlése: ___.', options: ['szekvencia', 'elágazás', 'ciklus'], correct: 'ciklus' },
        ],
        explanation: 'Szekvencia = sorrend, elágazás = döntés, ciklus = ismétlés.',
    },

    // 3.1.4.1 Robot programozása
    {
        id: 'd3-5a', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.4.1', tag: 'practice',
        title: 'Robot célba vezetése',
        task: 'Egy robot a 3×3 rács bal alsó sarkában áll, jobbra néz. A cél a jobb felső sarok. Mi a legrövidebb út?',
        options: ['Előre 2, Balra fordulás, Előre 2', 'Előre 2, Jobbra fordulás, Előre 2', 'Balra 2, Előre 2', 'Hátra 2, Jobbra 2'],
        correctAnswer: 'Előre 2, Balra fordulás, Előre 2',
        explanation: 'Jobbra néz → 2-t előre (jobbra halad) → balra fordul (most felfelé néz) → 2-t előre.',
    },

    // 3.1.5 Blokkprogramozás
    {
        id: 'd3-6a', grade: '5-6', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.1.5', tag: 'practice',
        title: 'Blokkprogramozás',
        task: 'Melyek blokkprogramozási platformok?',
        options: ['Scratch', 'Microsoft Word', 'Code.org', 'Blockly', 'Excel'],
        correctAnswers: ['Scratch', 'Code.org', 'Blockly'],
        explanation: 'Scratch, Code.org és Blockly mind vizuális blokkprogramozási környezetek.',
    },
    {
        id: 'd3-6b', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.5', tag: 'practice',
        title: 'Típusalgoritmus: maximumkeresés',
        task: 'A [3, 7, 2, 9, 1] lista legnagyobb elemét keressük. Mi a "maximumkiválasztás" algoritmusa?',
        options: ['Az első elemet vesszük maximumnak, majd minden elemet összehasonlítunk vele', 'Rendezzük a listát', 'Véletlenszerűen választunk', 'Összegezzük az elemeket'],
        correctAnswer: 'Az első elemet vesszük maximumnak, majd minden elemet összehasonlítunk vele',
        explanation: 'Maximumkeresés: első elem = jelölt maximum, majd végigmegyünk és cseréljük ha nagyobbat találunk.',
    },

    // 3.1.6 Tesztelés, hibajavítás
    {
        id: 'd3-7a', grade: '9-11', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.6', tag: 'practice',
        title: 'Végtelen ciklus hibakeresés',
        task: 'i=1; while(i<=10) { print(i); } – Miért végtelen ciklus?',
        options: ['Hiányzik az i = i + 1 növelés', 'A feltétel rossz', 'A print hibás', 'Nincs hiba'],
        correctAnswer: 'Hiányzik az i = i + 1 növelés',
        explanation: 'Ha i soha nem nő, a while feltétel örökre igaz marad → végtelen ciklus.',
    },
    {
        id: 'd3-7b', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.6', tag: 'practice',
        title: 'Szintaktikai hiba',
        task: 'A programod hibát jelez és nem indul el. Mi lehet az oka?',
        options: ['Szintaktikai (elgépelési) hiba a kódban', 'Lassú internet', 'Túl nagy a képernyő', 'A szín nem tetszik neki'],
        correctAnswer: 'Szintaktikai (elgépelési) hiba a kódban',
        explanation: 'A szintaktikai (syntax) hiba a leggyakoribb: elgépelt kulcsszó, hiányzó zárójelek stb.',
    },

    // 3.2 Robotok, szenzorok
    {
        id: 'd3-8a', grade: '5-6', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.2', tag: 'practice',
        title: 'Szenzortípusok',
        task: 'Melyek szenzortípusok amelyeket robotokban használnak?',
        options: ['Távolságérzékelő', 'Fényérzékelő', 'Nyomtató', 'Hőmérséklet-érzékelő', 'Monitor'],
        correctAnswers: ['Távolságérzékelő', 'Fényérzékelő', 'Hőmérséklet-érzékelő'],
        explanation: 'A szenzorok érzékelnek: távolságot, fényt, hőt stb. A nyomtató és monitor kimeneti eszközök.',
    },
    {
        id: 'd3-8b', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.2', tag: 'practice',
        title: 'Eseményvezérlés',
        task: 'Mi az „eseményvezérlés" a programozásban?',
        options: ['A program véletlenül fut', 'A program egy eseményre (pl. gombnyomás) reagálva hajt végre kódot', 'A program magától leáll', 'Nincs ilyen fogalom'],
        correctAnswer: 'A program egy eseményre (pl. gombnyomás) reagálva hajt végre kódot',
        explanation: 'Eseményvezérlés: a kód akkor fut, amikor valami történik (kattintás, billentyű, szenzor jel).',
    },

    // 3.3 MI alapjai
    {
        id: 'd3-9a', grade: '7-8', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.3', tag: 'practice',
        title: 'Gépi tanulás alapjai',
        task: 'Melyek igazak a gépi tanulásra?',
        options: ['Nagy adathalmazokból tanul', 'Az MI érti az érzelmeket mint egy ember', 'A kimenet a bemeneti adat minőségétől függ', 'Az MI képes magát programozni beavatkozás nélkül'],
        correctAnswers: ['Nagy adathalmazokból tanul', 'A kimenet a bemeneti adat minőségétől függ'],
        explanation: 'ML: sok adatból tanul, „garbage in, garbage out". Nem érti az érzelmeket.',
    },
    {
        id: 'd3-9b', grade: '9-11', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.3', tag: 'practice',
        title: 'MI hallucináció',
        task: 'Mit jelent, hogy egy MI chatbot „hallucinál"?',
        options: ['Vizuális effekteket mutat', 'Magabiztosan valótlan információt állít', 'Lassabban válaszol', 'Leáll'],
        correctAnswer: 'Magabiztosan valótlan információt állít',
        explanation: 'MI hallucináció: a modell hamis adatokat generál magabiztosan, mintha igazak lennének.',
    },

    // 3.3.1 Nagy nyelvi modellek, chatbotok
    {
        id: 'd3-10a', grade: '7-8', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.3.1', tag: 'practice',
        title: 'MI prompt írás',
        task: 'Töltsd ki a jó MI-prompt szabályait!',
        sentences: [
            { text: 'A legjobb eredményhez add meg a ___ az MI-nek.', options: ['kontextust', 'jelszavad', 'e-mail címed'], correct: 'kontextust' },
            { text: 'Pontosítsd a formátumot: pl. ___ pontban foglald össze.', options: ['3 felsorolás', '500 oldal', 'rajz formában'], correct: '3 felsorolás' },
        ],
        explanation: 'Jó prompt: kontextus + szerep + pontos formátumigény.',
    },
    {
        id: 'd3-10b', grade: '9-11', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.3.1', tag: 'practice',
        title: 'MI bias és etika',
        task: 'Töltsd ki az MI etikáról szóló mondatokat!',
        sentences: [
            { text: 'Ha egy MI-t kizárólag angol adatokon tanítanak, az eredmény ___ lesz.', options: ['torzított (biased)', 'tökéletes', 'véletlenszerű'], correct: 'torzított (biased)' },
            { text: 'Az MI által generált szöveget mindig ___ kell.', options: ['ellenőrizni', 'elfogadni', 'törölni'], correct: 'ellenőrizni' },
        ],
        explanation: 'Torz adatokból torz eredmények (bias). MI kimenetét mindig ellenőrizni kell.',
    },

    {
        id: 'd3-11a', grade: '9-11', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.1', tag: 'practice',
        title: 'Logikai kapuk',
        task: 'Töltsd ki a logikai kapuk eredményeit!',
        sentences: [
            { text: 'AND: A=IGAZ, B=IGAZ → ___', options: ['IGAZ', 'HAMIS'], correct: 'IGAZ' },
            { text: 'OR: A=IGAZ, B=HAMIS → ___', options: ['IGAZ', 'HAMIS'], correct: 'IGAZ' },
            { text: 'NOT: A=IGAZ → ___', options: ['IGAZ', 'HAMIS'], correct: 'HAMIS' },
        ],
        explanation: 'AND: mindkettő kell; OR: legalább egy; NOT: megfordítja.',
    },

    // További feladatok
    {
        id: 'd3-ext-1', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.5', tag: 'practice',
        title: 'Scratch: Üzenet küldése',
        task: 'A Scratch-ben mi a célja az "üzenet küldése (broadcast)" blokknak?',
        options: ['E-mailt küld a játék készítőjének', 'Lehetővé teszi, hogy a különböző szereplők (sprite-ok) kommunikáljanak és elindítsák egymás kódját', 'Szöveget jelenít meg a képernyőn', 'Hangosabbra veszi a játék zenéjét'],
        correctAnswer: 'Lehetővé teszi, hogy a különböző szereplők (sprite-ok) kommunikáljanak és elindítsák egymás kódját',
        explanation: 'Az üzenetküldés egy rejtett jelzés a háttérben, amit más szereplők "meghallhatnak" a "Miközben ezt az üzenetet kapom" blokk segítségével.',
    },
    {
        id: 'd3-ext-2', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Függvények és alprogramok',
        task: 'Miért használnak a programozók "függvényeket" (functions) vagy "alprogramokat"?',
        options: ['Hogy a számítógép lassabban fusson', 'Hogy a kódot kisebb, újrahasználható és könnyebben átlátható blokkokra bontsák', 'Hogy átváltsák a programnyelvet binárisra', 'Hogy automatikusan kijavítsák az összes hibát'],
        correctAnswer: 'Hogy a kódot kisebb, újrahasználható és könnyebben átlátható blokkokra bontsák',
        explanation: 'A függvények lehetővé teszik, hogy egy kódrészletet egyszer megírj, majd a program különböző pontjain többször is meghívd anélkül, hogy másolgatnád.',
    },
    {
        id: 'd3-ext-3', grade: '9-11', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.1.6', tag: 'practice',
        title: 'Programozási hibák típusai',
        task: 'Melyek létező és megkülönböztetett programhibák (bug-ok)?',
        options: ['Szintaktikai hiba (Syntax Error)', 'Hardverhiba', 'Futásidejű hiba (Runtime Error)', 'Szemantikai (logikai) hiba', 'Elektromos hiba'],
        correctAnswers: ['Szintaktikai hiba (Syntax Error)', 'Futásidejű hiba (Runtime Error)', 'Szemantikai (logikai) hiba'],
        explanation: 'A szintaktikai az elgépelés, a futásidejű menet közben omlasztja össze a programot, a szemantikai pedig logikai hiba (lefut, de rossz eredményt ad).',
    },
    {
        id: 'd3-ext-4', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.3', tag: 'practice',
        title: 'Tömbök és Listák',
        task: 'Mire használják a programozásban az "adatstruktúrákat", mint például a tömböket (array) vagy listákat?',
        options: ['Egyetlen igaz/hamis érték tárolására', 'Több érték együttes, sorrendbe állított tárolására egyetlen változónév alatt', 'Fájlok törlésére a merevlemezről', 'Internetkapcsolat létrehozására'],
        correctAnswer: 'Több érték együttes, sorrendbe állított tárolására egyetlen változónév alatt',
        explanation: 'Egy lista vagy tömb egyszerre több elemet tárol. Pl.: bevasarlo_lista = ["tej", "kenyér", "tojás"].',
    },
    {
        id: 'd3-ext-5', grade: '9-11', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Ciklusok fajtái',
        task: 'Párosítsd a ciklus leírását a megnevezéséhez!',
        sentences: [
            { text: 'A ciklus pontosan meghatározott hányszor fut le (pl. számolj 1-től 10-ig): ___', options: ['For (számlálós) ciklus', 'While (elöltesztelős) ciklus', 'Végtelen ciklus'], correct: 'For (számlálós) ciklus' },
            { text: 'A ciklus addig ismétlődik újra és újra, AMÍG egy megadott feltétel igaz marad: ___', options: ['For (számlálós) ciklus', 'While (elöltesztelős) ciklus', 'Bázis ciklus'], correct: 'While (elöltesztelős) ciklus' },
        ],
        explanation: 'A For (számlálós) ciklus rögzített lépésszámú. A While (elöltesztelős/feltételes) ciklus egy feltétel teljesülésétől függ.',
    },
    {
        id: 'd3-ext-6', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.2', tag: 'practice',
        title: 'Aktorok a robotikában',
        task: 'Ha a szenzor a robot "szeme/füle" (bemenet), akkor minek számít egy motor?',
        options: ['Az agynak (processzor)', 'Aktornak, azaz beavatkozónak (kimenet)', 'Tápellátásnak', 'Hálózati kártyának'],
        correctAnswer: 'Aktornak, azaz beavatkozónak (kimenet)',
        explanation: 'A szenzor érzékel. Az aktor (motor, lámpa, hangszóró) fizikailag beavatkozik, ő szolgáltatja az eredményt vagy mozgást.',
    },
    {
        id: 'd3-ext-7', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.2', tag: 'practice',
        title: 'Folyamatábra szabályok',
        task: 'Egy szabványos folyamatábrán (flowchart) belül melyik alakzatot használjuk a felhasználótól érkező ADATBEVITEL (Input) vagy kimenet (Output) jelzésére?',
        options: ['Téglalap', 'Rombusz', 'Paralellogramma (dőlt téglalap)', 'Kör'],
        correctAnswer: 'Paralellogramma (dőlt téglalap)',
        explanation: 'A dőlt téglalap (paralellogramma) jelentése be/kimenet. A sima téglalap a művelet, a rombusz a döntés (If).',
    },
    {
        id: 'd3-ext-8', grade: '9-11', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Keresés és rendezés',
        task: 'Válaszd ki az igaz állításokat a számítógépes algoritmusokról!',
        options: ['A Bináris keresés általában sokkal gyorsabb egy Növekvő sorrendbe rendezett listán (telefonkönyv), mint a Lineáris keresés', 'A Lineáris kereséshez kötelező, hogy az elemek már előzőleg sorba legyenek rendezve', 'A Buborékrendezés (Bubble sort) a világ leggyorsabban futó rendezési algoritmusa', 'Az algoritmusok logikai lépéssorozatok, függetlenek attól, hogy Pythonban vagy Javában írjuk-e meg őket'],
        correctAnswers: ['A Bináris keresés általában sokkal gyorsabb egy Növekvő sorrendbe rendezett listán (telefonkönyv), mint a Lineáris keresés', 'Az algoritmusok logikai lépéssorozatok, függetlenek attól, hogy Pythonban vagy Javában írjuk-e meg őket'],
        explanation: 'A Bináris keresés (felező keresés) villámgyors, mert minden lépésben a fele adatot eldobja. Az algoritmus csak egy tervrajz, ami programnyelvfüggetlen.',
    },
    {
        id: 'd3-ext-9', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.3.1', tag: 'practice',
        title: 'Prompt Tervezés: Szerepkör (Persona)',
        task: 'Miért lehet hasznos egy MI (AI) promptot így kezdeni: "Viselkedj úgy, mint egy szakértő általános iskolai fizikatanár"?',
        options: ['Hogy feltörjük a mesterséges intelligencia rendszerét', 'Hogy rávegyük az MI-t a jelszavának kiadására', 'Hogy a MI egy konkrét "személyiséget" (szerepkört) vegyen fel, amely segít az életkornak megfelelő stílus és szókincs használatában', 'Hogy az MI számítógépe gyorsabban kezdjen dolgozni pörkölni'],
        correctAnswer: 'Hogy a MI egy konkrét "személyiséget" (szerepkört) vegyen fel, amely segít az életkornak megfelelő stílus és szókincs használatában',
        explanation: 'Egy persona/szerepkör kiosztása a promptban segít a Nagy Nyelvi Modellnek (LLM), hogy az adott célközönségre szabja a választ.',
    },
    {
        id: 'd3-ext-10', grade: '9-11', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.3', tag: 'practice',
        title: 'Generatív Mesterséges Intelligencia',
        task: 'Miben különbözik leginkább a "Generatív MI" (mint a Midjourney vagy a ChatGPT) a hagyományos MI rendszerektől?',
        options: ['Kizárólag fizikai robotokban található meg', 'Képes teljesen új, eredeti tartalmakat (szöveget, képet, hangot) létrehozni/generálni, nem csupán meglévő adatokat elemezni vagy kategorizálni', 'Egyáltalán nem használ gépi tanulást', 'Kizárólag programozott "Ha-Akkor" szabályok alapján működik, emberi gondolkodás nélkül'],
        correctAnswer: 'Képes teljesen új, eredeti tartalmakat (szöveget, képet, hangot) létrehozni/generálni, nem csupán meglévő adatokat elemezni vagy kategorizálni',
        explanation: 'A hagyományos MI felismer (ez egy cica a képen). A Generatív MI alkot (rajzolok egy cicát gördeszkán).',
    },
    {
        id: 'd3-ext-11', grade: '5-6', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.1.3', tag: 'practice',
        title: 'Változó elnevezési szabályok',
        task: 'Az alábbiak közül melyik általában HIBÁS (nem érvényes) név egy változó számára a programozásban?',
        options: ['jatekos_pontszam', '1_Jatekos_Pont', 'jatekos pontja', 'osszesErme', 'pont'],
        correctAnswers: ['1_Jatekos_Pont', 'jatekos pontja'],
        explanation: 'A változók neve általában nem kezdődhet számmal, és tilos bennük szóközöket tenni. A szóközök helyett alulvonást (_) vagy CamelCase írásmódot használnak.',
    },
    {
        id: 'd3-ext-12', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.6', tag: 'practice',
        title: 'Szemantikai Hiba',
        task: 'Épp játékot írsz. A kódod hibátlanul, összeomlás nélkül fut, azonban a karaktered a Szóköz megnyomásakor felfelé ugrás helyett LEFELÉ esik. Milyen típusú hiba ez?',
        options: ['Szintaktikai (Nyelvtani) hiba', 'Fordítói (Compiler) hiba', 'Szemantikai (Logikai) hiba', 'Hálózati (Network) hiba'],
        correctAnswer: 'Szemantikai (Logikai) hiba',
        explanation: 'Nyelvtanilag jó, a mondat érthető, de maga az utasítás logikája hibás. Te adtál rossz parancsot (pl. y koordináta növelés helyett csökkentés).',
    },
    {
        id: 'd3-ext-13', grade: '9-11', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.3', tag: 'practice',
        title: 'MI Terminológia',
        task: 'Párosítsd össze az MI kifejezéseket a jelentésükkel!',
        sentences: [
            { text: 'A hagyományos programozás (szabályok írása) helyett nagy adathalmazokból mintázatokat tanuló algoritmusok: ___', options: ['Gépi Tanulás (Machine Learning)', 'Turing Teszt', 'Mély Tanulás (Deep Learning)'], correct: 'Gépi Tanulás (Machine Learning)' },
            { text: 'A Gépi Tanulás egy nagyon fejlett ága, amelyet az emberi agy felépítése ihletett, és többrétegű "mesterséges neurális hálózatokat" használ: ___', options: ['Gépi Tanulás', 'Turing Teszt', 'Mély Tanulás (Deep Learning)'], correct: 'Mély Tanulás (Deep Learning)' },
        ],
        explanation: 'A Mesterséges Intelligencia (AI) a nagy ernyő, ezen belül áll a Gépi Tanulás (ML), aminek ismét egy szűkebb és komplexebb ága a Mély Tanulás (DL).',
    },
    {
        id: 'd3-ext-14', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1', tag: 'practice',
        title: 'Logikai kifejezések kiértékelése',
        task: 'Ha "A" változó értéke IGAZ, a "B" változó értéke HAMIS, akkor mi lesz az eredménye a következő kifejezésnek: (A VAGY B) ÉS A ?',
        options: ['IGAZ', 'HAMIS', 'Szintaktikai Hiba', '0'],
        correctAnswer: 'IGAZ',
        explanation: '(IGAZ VAGY HAMIS) kiértékelve: IGAZ (mert elég az egyiknek igaznak lennie). Ezután: IGAZ ÉS IGAZ (A) = IGAZ.',
    },
    {
        id: 'd3-ext-15', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1', tag: 'practice',
        title: 'Programozási Nyelvek',
        task: 'A felsoroltak közül melyik NEM számít klasszikus értelemben vett programozási nyelvnek?',
        options: ['Python', 'JavaScript', 'HTML', 'C++'],
        correctAnswer: 'HTML',
        explanation: 'A HTML egy jelölőnyelv (Markup Language). Weboldalak szerkezetét írja le (pl. ez egy gomb, az egy kép), de nincsenek benne algoritmikus elemek, ciklusok vagy if/else állítások.',
    },
    {
        id: 'd3-ext-16', grade: '9-11', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.3.1', tag: 'practice',
        title: 'MI Torzítás (Bias) a gyakorlatban',
        task: 'Ha egy repülőtéri arcfelismerő MI statisztikailag jól láthatóan gyakrabban hibázik bizonyos etnikai csoportok azonosításakor, mi ennek az alapvető oka?',
        options: ['Kosz cseppent a kamera lencséjére', 'A szoftver öntudatra ébredt és ellenséges szándékú lett', 'A modellt betanító adatkészletből (training data) hiányoztak a megfelelő mértékű, változatos, különböző etnikumokat tartalmazó arcok', 'A programozók szándékosan konkrét sorokat írtak a kódba a felismerés blokkolására'],
        correctAnswer: 'A modellt betanító adatkészletből (training data) hiányoztak a megfelelő mértékű, változatos, különböző etnikumokat tartalmazó arcok',
        explanation: 'Az MI a kapott betanító adatok alapján "látja a világot". Ha a fejlesztők főleg egy típusú arcot mutattak neki, a többit nem fogja megbízhatóan felismerni.',
    },
    {
        id: 'd3-ext-17', grade: '7-8', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.2', tag: 'practice',
        title: 'A Dolgok Internete (IoT)',
        task: 'Azonosítsd be a Dolgok Internete (IoT - Internet of Things) rendszer részeit!',
        sentences: [
            { text: 'Egy intelligens, okos hűtőszekrényben ténykedő hőmérséklet-rögzítő egység mint ___ működik.', options: ['Felhős Szerver (Cloud)', 'Szenzor', 'Okostelefon'], correct: 'Szenzor' },
            { text: 'Az összegyűjtött hőfokadatokat a rendszer valós időben felküldi az internetre, hogy azt egy ___ tárolja és egy applikáció számára elérhetővé tegye.', options: ['Felhős Szerver (Cloud)', 'Szenzor', 'Elem (Battery)'], correct: 'Felhős Szerver (Cloud)' },
        ],
        explanation: 'Az IoT koncepciójában fizikai eszközök (Dolgok) szenzorokkal vannak felszerelve, amelyek adatait központi, felhőalapú okos szerverek tartják karban az interneten keresztül.',
    },
    {
        id: 'd3-ext-18', grade: '9-11', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.3', tag: 'practice',
        title: 'A Turing-teszt',
        task: 'Mi volt Alan Turing híres elméleti tesztjének eredeti célja az 1950-es években?',
        options: ['Annak mérése, hogy vajon le tud-e győzni egy gép egy embert egy matematikai feladványban', 'A számítógépes processzorok gyorsaságának megállapítása Megahertzben', 'Annak eldöntése, hogy az egy szöveges beszélgetés alapján képes-e egy gép olyan szintű intelligens viselkedést mutatni, amelyről az emberi vizsgáló már nem bírja megkülönböztetni a valódi embertől', 'Egy robot tesztelése futás közben'],
        correctAnswers: ['Annak eldöntése, hogy az egy szöveges beszélgetés alapján képes-e egy gép olyan szintű intelligens viselkedést mutatni, amelyről az emberi vizsgáló már nem bírja megkülönböztetni a valódi embertől'],
        explanation: 'A vizsgálóember kérdéseket tesz fel egy embernek és egy számítógépnek (látatlanban). Ha nem tudja megmondani, melyikük volt a gép, a gép átment a "Turing-teszten".',
    },
    {
        id: 'd3-ext-19', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Moduláris Programozás',
        task: 'Mit értünk a "moduláris programozás" nyújtotta előnyön?',
        options: ['A program képes a maximális hűtés elérésére a szerverteremben', 'A programterv egymástól független, önálló funkcióval bíró kisebb egységekre (modulokra) van felbontva, így csapatmunkában is sokkal könnyebb fejleszteni, később javítani.', 'Automatikusan elhárít minden internetes vírust, ami valaha létezett', 'A program írása közben tilos az enterek (sortörések) alkalmazása'],
        correctAnswer: 'A programterv egymástól független, önálló funkcióval bíró kisebb egységekre (modulokra) van felbontva, így csapatmunkában is sokkal könnyebb fejleszteni, később javítani.',
        explanation: 'A modularitás (blokkosítás) célja a nagyméretű szoftverek olvashatóbb, tesztelhetőbb, Lego-kocka alapú tervezése.',
    },
    {
        id: 'd3-ext-20', grade: '5-6', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.1.6', tag: 'practice',
        title: 'Hibakeresési (Debugging) Lépések',
        task: 'Amikor nem úgy működik a megírt programod, mint amire számítottál, milyen módszerekkel érdemes reagálni?',
        options: ['Türelmesen elolvasod vagy lefordítod a számítógép által a konzolra kiírt konkrét hibaüzenetet', 'Minden lényeges elgondolás nélkül elkezdesz átírogatni mindenfélét, hátha valami pont jó lesz', 'Ideiglenes "kiíró" (print / say) parancsokat teszel a kódba, hogy figyeld a változók aktuális értékét gombnyomáskor', 'Kijelölöd az egész kódot, kitörlöd a fájlt és kezded a nulláról'],
        correctAnswers: ['Türelmesen elolvasod vagy lefordítod a számítógép által a konzolra kiírt konkrét hibaüzenetet', 'Ideiglenes "kiíró" (print / say) parancsokat teszel a kódba, hogy figyeld a változók aktuális értékét gombnyomáskor'],
        explanation: 'Egy okos programozó hibakeresése tudatos: kiindul az adott hibaüzenetből, és "print" kiíratásokkal figyeli, melyik lépésnél romlik el a számítás.',
    }
];
