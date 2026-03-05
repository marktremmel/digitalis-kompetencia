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

    // 3.3 Logikai kapuk
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
];
