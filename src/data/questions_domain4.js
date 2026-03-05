// Domain 4: Információs technológiák, okoseszközök és -rendszerek (4.1–4.13)

export const domain4Questions = [
    // 4.1 IT és IKT fogalma
    {
        id: 'd4-1a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.1', tag: 'practice',
        title: 'IKT fogalma',
        task: 'Mit jelent az IKT (Információs és Kommunikációs Technológia)?',
        options: ['Csak a számítógépeket', 'Minden digitális eszköz és rendszer, ami információ feldolgozásra és kommunikációra szolgál', 'Csak az internetet', 'Csak a telefonokat'],
        correctAnswer: 'Minden digitális eszköz és rendszer, ami információ feldolgozásra és kommunikációra szolgál',
        explanation: 'IKT = számítógépek, hálózatok, szoftverek, telefonok – minden ami digitális feldolgozást és kommunikációt tesz lehetővé.',
    },

    // 4.2 Hardver és szoftver
    {
        id: 'd4-2a', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Input eszközök',
        task: 'Melyik eszköz bemeneti (input) eszköz?',
        options: ['Billentyűzet', 'Monitor', 'Egér', 'Nyomtató', 'Szkenner', 'Mikrofon'],
        correctAnswers: ['Billentyűzet', 'Egér', 'Szkenner', 'Mikrofon'],
        explanation: 'Input eszközök adatot visznek a számítógépbe. Monitor és nyomtató = output.',
    },
    {
        id: 'd4-2b', grade: '5-6', type: 'dropdown', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Számítógép részei',
        task: 'Töltsd ki!',
        sentences: [
            { text: 'A számítógép „agya": ___.', options: ['RAM', 'CPU (processzor)', 'Monitor', 'Merevlemez'], correct: 'CPU (processzor)' },
            { text: 'Ideiglenes memória: ___.', options: ['RAM', 'CPU', 'Pendrive', 'Nyomtató'], correct: 'RAM' },
            { text: 'Tartós tároló: ___.', options: ['RAM', 'Merevlemez/SSD', 'Billentyűzet', 'Monitor'], correct: 'Merevlemez/SSD' },
        ],
        explanation: 'CPU = számítás, RAM = átmeneti memória, HDD/SSD = tartós tároló.',
    },
    {
        id: 'd4-2c', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Szoftver típusok',
        task: 'Melyik NEM szoftver?',
        options: ['Windows 11', 'Google Chrome', 'Merevlemez', 'Microsoft Excel'],
        correctAnswer: 'Merevlemez',
        explanation: 'A merevlemez hardver (fizikai alkatrész). A többi szoftver (program).',
    },

    // 4.3 Bit és bájt, számrendszerek
    {
        id: 'd4-3a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.3', tag: 'practice',
        title: 'Adatméretek sorrendje',
        task: 'Melyik a helyes sorrend a legkisebbtől?',
        options: ['Byte < KB < MB < GB', 'KB < Byte < GB < MB', 'GB < MB < KB < Byte', 'MB < KB < Byte < GB'],
        correctAnswer: 'Byte < KB < MB < GB',
        explanation: '1 KB = 1024 Byte, 1 MB = 1024 KB, 1 GB = 1024 MB.',
    },
    {
        id: 'd4-3b', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.3', tag: 'practice',
        title: 'Kettes számrendszer',
        task: 'Mi a 13-as szám kettes (bináris) számrendszerben?',
        options: ['1101', '1011', '1110', '1001'],
        correctAnswer: '1101',
        explanation: '13 = 8+4+1 = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 1101.',
    },

    // 4.4 Operációs rendszerek
    {
        id: 'd4-4a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.4', tag: 'practice',
        title: 'Operációs rendszerek',
        task: 'Melyik NEM operációs rendszer?',
        options: ['Windows', 'macOS', 'Google Chrome', 'Linux'],
        correctAnswer: 'Google Chrome',
        explanation: 'Chrome böngésző. Windows, macOS, Linux operációs rendszerek.',
    },
    {
        id: 'd4-4b', grade: '7-8', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.4', tag: 'practice',
        title: 'Mobil operációs rendszerek',
        task: 'Melyek mobil operációs rendszerek?',
        options: ['Android', 'iOS', 'Windows 11', 'Linux Mint', 'HarmonyOS'],
        correctAnswers: ['Android', 'iOS', 'HarmonyOS'],
        explanation: 'Android, iOS és HarmonyOS mobil operációs rendszerek. Windows (desktop), Linux Mint (desktop).',
    },

    // 4.5 Hangátvitel, képátvitel, adatátvitel
    {
        id: 'd4-5a', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', topic: '4.5', tag: 'practice',
        title: 'Portok és csatlakozók',
        task: 'Párosítsd a portot a funkciójával!',
        sentences: [
            { text: 'HDMI port: ___.', options: ['Internetkapcsolat', 'Videó+hang kimenet', 'USB adatátvitel'], correct: 'Videó+hang kimenet' },
            { text: 'Ethernet port: ___.', options: ['Videó kimenet', 'Vezetékes internet', 'Hangkimenet'], correct: 'Vezetékes internet' },
            { text: 'USB-C port: ___.', options: ['Általános adatátvitel és töltés', 'Csak hang', 'Csak videó'], correct: 'Általános adatátvitel és töltés' },
        ],
        explanation: 'HDMI = videó+hang, Ethernet = vezetékes internet, USB-C = univerzális.',
    },

    // 4.6 Hálózatok (PAN, LAN, MAN, WAN)
    {
        id: 'd4-6a', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Wi-Fi',
        task: 'Mi a Wi-Fi?',
        options: ['Operációs rendszer', 'Vezeték nélküli hálózati kapcsolat', 'Programozási nyelv', 'Tárhelyszolgáltatás'],
        correctAnswer: 'Vezeték nélküli hálózati kapcsolat',
        explanation: 'Wi-Fi = vezeték nélküli hálózat kábel nélküli internetkapcsolathoz.',
    },
    {
        id: 'd4-6b', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'LAN vs WAN',
        task: 'Mi a különbség LAN és WAN között?',
        options: ['A LAN vezeték nélküli', 'A LAN helyi, a WAN nagyobb területet fed le', 'Nincs különbség', 'A WAN lassabb'],
        correctAnswer: 'A LAN helyi, a WAN nagyobb területet fed le',
        explanation: 'LAN = Local Area Network (helyi, pl. iskolai). WAN = Wide Area Network (pl. internet).',
    },
    {
        id: 'd4-6c', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Hálózati topológia',
        task: '5 számítógép körben összekötve – milyen topológia?',
        options: ['Csillag', 'Gyűrű', 'Busz', 'Fa'],
        correctAnswer: 'Gyűrű',
        explanation: 'Gyűrű: körbe kötve. Csillag: központi elosztó.',
    },

    // 4.7 Mobiltechnológia
    {
        id: 'd4-7a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.7', tag: 'practice',
        title: 'Mobil eszközök',
        task: 'Melyik NEM mobil eszköz?',
        options: ['Okostelefon', 'Tablet', 'Asztali számítógép', 'Okosóra'],
        correctAnswer: 'Asztali számítógép',
        explanation: 'Az asztali (desktop) számítógép nem hordozható, nem mobil eszköz.',
    },

    // 4.8 Közösségi média, applikációk
    {
        id: 'd4-8a', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Szponzorált tartalom',
        task: 'Mi jelzi, hogy egy poszt fizetett reklám?',
        options: ['Sok lájkot kapott', '#ad vagy #sponsored jelölés', 'Érdekesnek tűnik', 'Ismerős osztotta meg'],
        correctAnswer: '#ad vagy #sponsored jelölés',
        explanation: 'Fizetett tartalmakat jelölni kell: #ad, #sponsored, „fizetett együttműködés".',
    },
    {
        id: 'd4-8b', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Szűrőbuborék',
        task: 'Töltsd ki!',
        sentences: [
            { text: 'A közösségi média ___ alapján mutatja a tartalmakat.', options: ['véletlenszerűen', 'algoritmus', 'ábécérendben'], correct: 'algoritmus' },
            { text: 'Ha csak hasonló tartalmakat látunk, az ___ alakul ki.', options: ['szűrőbuborék', 'vírusvédelem', 'titkosítás'], correct: 'szűrőbuborék' },
        ],
        explanation: 'Algoritmus szűri amit látsz → szűrőbuborék (filter bubble) alakul ki.',
    },

    // 4.9 Felhőszolgáltatások
    {
        id: 'd4-9a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.9', tag: 'practice',
        title: 'Mi a felhő?',
        task: 'Mit jelent a „felhőtárhely" (cloud storage)?',
        options: ['Adatok az égen', 'Adatok távoli szervereken, interneten elérhető', 'Adatok a pendrive-on', 'Adatok a nyomtatón'],
        correctAnswer: 'Adatok távoli szervereken, interneten elérhető',
        explanation: 'A felhő = távoli szerverek, amik interneten elérhetők. Pl. Google Drive, OneDrive.',
    },
    {
        id: 'd4-9b', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', topic: '4.9', tag: 'practice',
        title: 'Felhős együttműködés',
        task: 'Töltsd ki!',
        sentences: [
            { text: 'Csoportprojekthez megosztott ___ hozunk létre.', options: ['mappát', 'e-mailt', 'vírusirtót'], correct: 'mappát' },
            { text: 'Csoporttagoknak ___ jogot adunk.', options: ['szerkesztő', 'megtekintő', 'blokkolt'], correct: 'szerkesztő' },
            { text: 'A megosztáshoz elküldjük a ___.', options: ['jelszót', 'linket', 'sorszámot'], correct: 'linket' },
        ],
        explanation: 'Felhős együttműködés: megosztott mappa + szerkesztési jog + link küldése.',
    },

    // 4.10 Szenzorok, vezérlők, beavatkozók
    {
        id: 'd4-10a', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.10', tag: 'practice',
        title: 'Szenzor vs. beavatkozó',
        task: 'Mi a különbség a szenzor és a beavatkozó (aktuátor) között?',
        options: ['Nincs különbség', 'A szenzor mér/érzékel, a beavatkozó cselekszik/mozgat', 'Mindkettő mér', 'Mindkettő mozgat'],
        correctAnswer: 'A szenzor mér/érzékel, a beavatkozó cselekszik/mozgat',
        explanation: 'Szenzor = érzékelő (pl. hőmérő). Beavatkozó/aktuátor = végrehajtó (pl. motor, szelep).',
    },

    // 4.11 IoT (Dolgok internete)
    {
        id: 'd4-11a', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.11', tag: 'practice',
        title: 'IoT eszközök',
        task: 'Melyek IoT (Dolgok Internete) eszközök?',
        options: ['Wi-Fi-s hűtőszekrény', 'Hagyományos kenyérpirító', 'Okosóra', 'Hagyományos fali óra', 'Okos hangszóró'],
        correctAnswers: ['Wi-Fi-s hűtőszekrény', 'Okosóra', 'Okos hangszóró'],
        explanation: 'IoT eszközök internetkapcsolattal rendelkeznek és adatot cserélnek.',
    },

    // 4.12 Okoseszközök
    {
        id: 'd4-12a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.12', tag: 'practice',
        title: 'Okosotthon',
        task: 'Melyik példa az okosotthonra?',
        options: ['Hagyományos villanykapcsoló', 'Telefonról vezérelhető redőny és fűtés', 'Falra felírt bevásárlólista', 'Kézzel tekert óra'],
        correctAnswer: 'Telefonról vezérelhető redőny és fűtés',
        explanation: 'Az okosotthon eszközei távolról vezérelhetők (pl. telefonról) és automatizálhatók.',
    },
    {
        id: 'd4-12b', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.12', tag: 'exam',
        title: 'Okosváros',
        task: 'Melyik NEM jellemző egy okosvárosra?',
        options: ['Szenzorokkal figyeli a forgalmat', 'Okos parkolási rendszert használ', 'Kézzel írott közlekedési táblák', 'Energiatakarékos közvilágítás'],
        correctAnswer: 'Kézzel írott közlekedési táblák',
        explanation: 'Az okosváros digitális rendszereket használ: szenzorok, automatizálás, energia-optimalizálás.',
    },

    // 4.13 Információs társadalom
    {
        id: 'd4-13a', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'E-szolgáltatások',
        task: 'Töltsd ki az e-szolgáltatásokról szóló mondatokat!',
        sentences: [
            { text: 'Online banki utalás neve: ___.', options: ['e-bankolás', 'e-tanulás', 'e-ügyintézés'], correct: 'e-bankolás' },
            { text: 'Online tanfolyam elvégzése: ___.', options: ['e-bankolás', 'e-tanulás', 'e-ügyintézés'], correct: 'e-tanulás' },
            { text: 'Ügyfélkapun keresztüli hivatali ügyintézés: ___.', options: ['e-bankolás', 'e-tanulás', 'e-ügyintézés'], correct: 'e-ügyintézés' },
        ],
        explanation: 'E-bankolás = online bank, e-tanulás = online képzés, e-ügyintézés = digitális hivatali ügyintézés.',
    },
    {
        id: 'd4-13b', grade: '9-11', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Digitális személyazonosság',
        task: 'Melyek a digitális személyazonosítás módszerei?',
        options: ['Ügyfélkapu+ belépés', 'Személyi igazolvány mutatása a kameránál', 'E-mail cím beírása regisztráció nélkül', 'Elektronikus aláírás', 'QR kódos belépő'],
        correctAnswers: ['Ügyfélkapu+ belépés', 'Elektronikus aláírás', 'QR kódos belépő'],
        explanation: 'Ügyfélkapu+, elektronikus aláírás és QR kód digitális azonosítási módok.',
    },

    // 4.6 extra – Biztonság
    {
        id: 'd4-biz1', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Kiberbiztonság',
        task: 'Töltsd ki!',
        sentences: [
            { text: 'Jelszó mellé be kell kapcsolni: ___.', options: ['MFA/2FA', 'VPN', 'Tűzfal'], correct: 'MFA/2FA' },
            { text: 'SMS-es jelszókérős üzenet a: ___.', options: ['Phishing', 'Smishing', 'Spamming'], correct: 'Smishing' },
            { text: 'Ne bankolj ___ hálózaton.', options: ['otthoni Wi-Fi', 'nyilvános Wi-Fi', 'mobilnet'], correct: 'nyilvános Wi-Fi' },
        ],
        explanation: 'MFA = többfaktoros hitelesítés, Smishing = SMS adathalászat, nyilvános Wi-Fi nem biztonságos.',
    },
    {
        id: 'd4-biz2', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Kiberfenyegetések',
        task: 'Párosítsd!',
        sentences: [
            { text: 'Fájlokat titkosít, váltságdíjat kér: ___.', options: ['Ransomware', 'Phishing', 'DDoS'], correct: 'Ransomware' },
            { text: 'Hamis e-maillel lopja a jelszót: ___.', options: ['Ransomware', 'Phishing', 'Malware'], correct: 'Phishing' },
            { text: 'Weboldalt túlterhel: ___.', options: ['Ransomware', 'Phishing', 'DDoS'], correct: 'DDoS' },
        ],
        explanation: 'Ransomware = váltságdíjas, Phishing = adathalász, DDoS = túlterheléses támadás.',
    },
    {
        id: 'd4-biz3', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'HTTPS biztonság',
        task: 'Mi biztosítja, hogy az adataid titkosítva vannak?',
        options: ['Az oldal szép', 'A cím http://', 'A cím https:// és lakat ikon', 'Sok reklám van az oldalon'],
        correctAnswer: 'A cím https:// és lakat ikon',
        explanation: 'HTTPS + lakat = titkosított kapcsolat. HTTP nem titkosított.',
    },
    {
        id: 'd4-biz4', grade: '5-6', type: 'dropdown', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Biztonságos jelszó',
        task: 'Töltsd ki!',
        sentences: [
            { text: 'Erős jelszó legalább ___ karakterből áll.', options: ['4', '8', '12'], correct: '12' },
            { text: 'Jelszavainkat ___ tároljuk legbiztonságosabban.', options: ['cetlin a monitoron', 'jelszókezelő alkalmazásban', 'e-mailben magunknak'], correct: 'jelszókezelő alkalmazásban' },
        ],
        explanation: 'Hosszú, összetett jelszó + jelszókezelő alkalmazás = legbiztonságosabb.',
    },
    {
        id: 'd4-biz5', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Személyes adatok online',
        task: 'Melyiket NE oszd meg idegenekkel?',
        options: ['Lakcímed', 'Kedvenc színed', 'Telefonszámod', 'Iskolád pontos címe', 'Kedvenc filmjeid'],
        correctAnswers: ['Lakcímed', 'Telefonszámod', 'Iskolád pontos címe'],
        explanation: 'Lakcím, telefonszám, iskola címe = személyes, nem idegeneknek való.',
    },

    // 4.5 extra – Ergonómia
    {
        id: 'd4-erg1', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Ergonómia',
        task: 'Melyik helyes tanács a számítógép előtti üléshez?',
        options: ['Görbítsük a hátunkat', 'Monitor szemmagasságban', 'Üljünk minél közelebb', 'Egy kézzel gépeljünk'],
        correctAnswer: 'Monitor szemmagasságban',
        explanation: 'Helyes testtartás és monitortávolság védi a szemet, hátat, nyakat.',
    },

    // Digitális jóllét (kiegészítő)
    {
        id: 'd4-well1', grade: '5-6', type: 'dropdown', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Digitális jóllét',
        task: 'Töltsd ki!',
        sentences: [
            { text: 'Folyamatos görgetés ___ hurkot hoz létre.', options: ['dopamin', 'adrenalin', 'oxigén'], correct: 'dopamin' },
            { text: 'Kék fényt csökkenti a ___ funkció.', options: ['Night Shift / Kékfényszűrő', 'Repülő mód', 'Bluetooth'], correct: 'Night Shift / Kékfényszűrő' },
            { text: 'App-használatot korlátozza: ___.', options: ['Képernyőidő', 'Hangerő', 'Háttérkép'], correct: 'Képernyőidő' },
        ],
        explanation: 'Tudatos képernyőhasználat fontos. Kékfényszűrő segíti az alvást.',
    },

    // Vezeték nélküli adatátvitel
    {
        id: 'd4-wl1', grade: '7-8', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.5', tag: 'practice',
        title: 'Vezeték nélküli adatátvitel',
        task: 'Melyek vezeték nélküli módszerek?',
        options: ['Bluetooth', 'USB kábel', 'Wi-Fi', 'Ethernet', 'NFC', 'HDMI'],
        correctAnswers: ['Bluetooth', 'Wi-Fi', 'NFC'],
        explanation: 'Bluetooth, Wi-Fi, NFC = vezeték nélküli. Kábeles = USB, Ethernet, HDMI.',
    },

    // 3-2-1 mentés
    {
        id: 'd4-321', grade: '9-11', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.9', tag: 'practice',
        title: '3-2-1 biztonsági mentés',
        task: 'Mit jelent a 3-2-1 szabály?',
        options: ['3 másolat', '2 különböző tárolón', '1 másolat más helyszínen', '3 jelszó', '2 vírusirtó'],
        correctAnswers: ['3 másolat', '2 különböző tárolón', '1 másolat más helyszínen'],
        explanation: '3-2-1: 3 példány, 2 médián (pl. HDD + felhő), 1 offsite helyen.',
    },

    // VPN
    {
        id: 'd4-vpn1', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'VPN',
        task: 'Mire szolgál a VPN?',
        options: ['Gyorsítja az internetet', 'Titkosított csatornát hoz létre', 'Vírusokat töröl', 'Reklámokat blokkol'],
        correctAnswer: 'Titkosított csatornát hoz létre',
        explanation: 'VPN titkosítja a forgalmat és elrejti az IP-címet.',
    },

    // Online zaklatás
    {
        id: 'd4-zak1', grade: '7-8', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Online zaklatás kezelése',
        task: 'Osztálytárs bántóan ír rólad online. Helyes lépések?',
        options: ['Törlöm a profilomat', 'Képernyőképet mentek', 'Visszaszidom', 'Jelentem az adminnak', 'Felnőttet kérek segítségül'],
        correctAnswers: ['Képernyőképet mentek', 'Jelentem az adminnak', 'Felnőttet kérek segítségül'],
        explanation: 'Ne szidd vissza! Mentsd a bizonyítékot, jelents, kérj segítséget.',
    },
];
