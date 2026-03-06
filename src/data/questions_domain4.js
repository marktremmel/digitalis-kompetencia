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

    {
        id: 'd4-zak1', grade: '7-8', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Online zaklatás kezelése',
        task: 'Osztálytárs bántóan ír rólad online. Helyes lépések?',
        options: ['Törlöm a profilomat', 'Képernyőképet mentek', 'Visszaszidom', 'Jelentem az adminnak', 'Felnőttet kérek segítségül'],
        correctAnswers: ['Képernyőképet mentek', 'Jelentem az adminnak', 'Felnőttet kérek segítségül'],
        explanation: 'Ne szidd vissza! Mentsd a bizonyítékot, jelents, kérj segítséget.',
    },

    // További feladatok
    {
        id: 'd4-ext-1', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Hardver komponensek (GPU)',
        task: 'Mi az elsődleges feladata a GPU-nak (Videókártya/Grafikus processzor)?',
        options: ['Fájlok végleges tárolása', 'Minden, ami a képek, videók és 3D grafikák megjelenítésével/kiszámításával kapcsolatos', 'A számítógép internethez csatlakoztatása', 'Dokumentumok kinyomtatása'],
        correctAnswer: 'Minden, ami a képek, videók és 3D grafikák megjelenítésével/kiszámításával kapcsolatos',
        explanation: 'Míg a CPU az általános "agy", a GPU egy speciális processzor, amit a grafikai műveletek gyorsítására terveztek.',
    },
    {
        id: 'd4-ext-2', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Adattárolók (SSD vs HDD)',
        task: 'Miért részesítik manapság előnyben az SSD (Solid State Drive) meghajtókat a hagyományos HDD (merevlemez) meghajtókkal szemben?',
        options: ['Az SSD-k sokkal olcsóbbak gigabájtonként', 'Az SSD-k nem tartalmaznak mozgó alkatrészeket, így jelentősen gyorsabbak és strapabíróbbak', 'Az SSD-k sokkal nehezebbek', 'A HDD-ken nem lehet fényképeket tárolni'],
        correctAnswer: 'Az SSD-k nem tartalmaznak mozgó alkatrészeket, így jelentősen gyorsabbak és strapabíróbbak',
        explanation: 'A HDD forgó mágneses lemezeket használ, míg az SSD memóriachipeket (mint egy gigantikus pendrive), ami megbízhatóbb és gyorsabb.',
    },
    {
        id: 'd4-ext-3', grade: '9-11', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Szűrőbuborék és Visszhangkamra (Echo Chamber)',
        task: 'Melyik állítás írja le a "Visszhangkamra" (Echo chamber) jelenségét a közösségi médiában?',
        options: ['Olyan digitális környezet, ahol a felhasználó csak a saját nézeteit visszatükröző és azokat megerősítő információkkal találkozik', 'A mikrofon hangerejét tesztelő beállítás', 'Az "ajánló" algoritmusok eredménye, amelyek a magas aktivitást kiváltó (hasonló) tartalmakat részesítik előnyben', 'Egy chatszoba, ahol a résztvevők tiszteletteljesen vitatják meg az ellenkező álláspontokat'],
        correctAnswers: ['Olyan digitális környezet, ahol a felhasználó csak a saját nézeteit visszatükröző és azokat megerősítő információkkal találkozik', 'Az "ajánló" algoritmusok eredménye, amelyek a magas aktivitást kiváltó (hasonló) tartalmakat részesítik előnyben'],
        explanation: 'A visszhangkamrákat a közösségi média hírfolyamot generáló algoritmusai okozzák: elszigetelik a felhasználót a másként gondolkodók véleményétől.',
    },
    {
        id: 'd4-ext-4', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Deepfake',
        task: 'Mi az a "Deepfake"?',
        options: ['Egy feltörhetetlen jelszó', 'Olyan képi vagy hanganyag, amelyet mesterséges intelligencia segítségével manipuláltak, hogy meggyőzően kicseréljék valakinek az arcát vagy a hangját', 'Egy nagyon mélyre fektetett internetes tengerkábel', 'Rendszerfájlok között bujkáló számítógépes vírus'],
        correctAnswer: 'Olyan képi vagy hanganyag, amelyet mesterséges intelligencia segítségével manipuláltak, hogy meggyőzően kicseréljék valakinek az arcát vagy a hangját',
        explanation: 'A Deepfake technológia mélytanulást (Deep Learning) használ hamis, de teljesen valódinak tűnő videók vagy hangfelvételek generálására.',
    },
    {
        id: 'd4-ext-5', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Kártékony kódok (Malware)',
        task: 'Párosítsd a kiberfenyegetést a leírásával!',
        sentences: [
            { text: 'Hasznosnak vagy ártalmatlannak tűnő, de rosszindulatú program, ami átveri a felhasználót, hogy telepítse: ___', options: ['Trójai faló (Trojan)', 'Kémprogram (Spyware)', 'Féreg (Worm)'], correct: 'Trójai faló (Trojan)' },
            { text: 'Önsokszorosító kártevő, amely emberi beavatkozás nélkül képes terjedni a hálózatokon keresztül: ___', options: ['Trójai faló (Trojan)', 'Kémprogram (Spyware)', 'Féreg (Worm)'], correct: 'Féreg (Worm)' },
        ],
        explanation: 'A Trójai faló álcázza magát, míg a Féregvírus önállóan képes hálózatról hálózatra másolni magát (mint a fertőzés).',
    },
    {
        id: 'd4-ext-6', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Digitális lábnyom',
        task: 'Mi tartozik a "passzív digitális lábnyomodba"?',
        options: ['Egy általad szándékosan feltöltött Instagram vagy TikTok videó', 'Rólad gyűjtött adatok, amelyeket tudtodon kívül rögzítenek profilozáshoz (pl. a sütik által követett böngészési előzményeid és IP címeid)', 'Egy YouTube videó alá írt kommented', 'Egy általad elküldött e-mail'],
        correctAnswer: 'Rólad gyűjtött adatok, amelyeket tudtodon kívül rögzítenek profilozáshoz (pl. a sütik által követett böngészési előzményeid és IP címeid)',
        explanation: 'Az aktív lábnyomot te hagyod magad után szándékosan (posztok). A passzívot a háttérben gyűjtik az alkalmazások a viselkedésedről.',
    },
    {
        id: 'd4-ext-7', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Creative Commons (CC) Licenc',
        task: 'Mi a célja a "Creative Commons (CC)" licencnek (felhasználási engedélynek)?',
        options: ['Hogy örökre megtiltsa bárkinek a kép felhasználását', 'Hogy magas díjat szabjon ki a fájlok letöltéséért', 'Lehetővé teszi az alkotóknak, hogy rugalmasan engedélyt adjanak másoknak a művük felhasználására bizonyos feltételekkel (pl. forrásmegjelölés)', 'Hogy a kormány tulajdonába vegye az összes feltöltött videót'],
        correctAnswer: 'Lehetővé teszi az alkotóknak, hogy rugalmasan engedélyt adjanak másoknak a művük felhasználására bizonyos feltételekkel (pl. forrásmegjelölés)',
        explanation: 'A hagyományos "Minden jog fenntartva" (Copyright) helyett a CC a szabad, mégis szabályozott megosztást teszi lehetővé.',
    },
    {
        id: 'd4-ext-8', grade: '9-11', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Hálózatbiztonság: Tűzfal',
        task: 'Mit csinál egy hálózati tűzfal (Firewall)?',
        options: ['Eloltja az elektromos tüzeket a szerverszobában', 'Megadott biztonsági szabályok alapján figyeli és ellenőrzi a bejövő és kimenő hálózati forgalmat (adatcsomagokat)', 'Kínai nagy falként elválasztja az országot a külföldi internettől', 'Védőgátként szolgál a megbízható belső hálózatod és a megbízhatatlan külső internet között'],
        correctAnswers: ['Megadott biztonsági szabályok alapján figyeli és ellenőrzi a bejövő és kimenő hálózati forgalmat (adatcsomagokat)', 'Védőgátként szolgál a megbízható belső hálózatod és a megbízhatatlan külső internet között'],
        explanation: 'A tűzfal olyan, mint a "biztonsági őr" a hálózat ajtajában: ha a csomagnak nincs engedélye belépni (vagy kimenni), eldobja azt.',
    },
    {
        id: 'd4-ext-9', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Adathalászat (Phishing) felismerése',
        task: 'Az alábbiak közül melyik erős jele egy adathalász (vagyis átverős, scames) e-mailnek?',
        options: ['Helyesen szerepel benne a keresztneved', 'Erős sürgetés, pánikkeltés érhető tetten benne ("A fiókodat 24 óra múlva töröljük! Kattints ide azonnal!")', 'Munkaidőben küldték el', 'Egy ismert barátodtól érkezett normális üzenettel'],
        correctAnswer: 'Erős sürgetés, pánikkeltés érhető tetten benne ("A fiókodat 24 óra múlva töröljük! Kattints ide azonnal!")',
        explanation: 'A csalók pánikot akarnak kelteni, hogy a félelem miatt gondolkodás nélkül kattints a rosszindulatú linkre.',
    },
    {
        id: 'd4-ext-10', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.9', tag: 'practice',
        title: 'Felhőalapú modellek',
        task: 'A böngészőből közvetlenül futtatott Google Dokumentumok (Docs) és Gmail melyik Felhő (Cloud) kategóriába tartoznak?',
        options: ['IaaS (Infrastruktúra mint Szolgáltatás)', 'PaaS (Platform mint Szolgáltatás)', 'SaaS (Szoftver mint Szolgáltatás)', 'HaaS (Hardver mint Szolgáltatás)'],
        correctAnswer: 'SaaS (Szoftver mint Szolgáltatás)',
        explanation: 'Amikor egy kész, működő alkalmazást használsz az interneten keresztül letöltés nélkül, az a Szoftver mint Szolgáltatás (Software-as-a-Service).',
    },
    {
        id: 'd4-ext-11', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Kimeneti (Output) Eszközök',
        task: 'Keresd meg az összes kimeneti (Output) perifériát a felsorolásból!',
        options: ['Hangszóró', 'Webkamera', 'Projektor', 'Billentyűzet', 'Fejhallgató'],
        correctAnswers: ['Hangszóró', 'Projektor', 'Fejhallgató'],
        explanation: 'A kimeneti eszközök kihozzák feléd az információt (hang, kép, papír). A billentyűzet és webkamera beviszik az adatot a gépbe.',
    },
    {
        id: 'd4-ext-12', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.4', tag: 'practice',
        title: 'Operációs rendszer feladata',
        task: 'Melyik tartozik az Operációs Rendszer (OS - pl. Windows) alapvető, legfontosabb feladatai közé?',
        options: ['Weboldalak tervezése', 'A számítógép hardveres erőforrásainak (memória, processzor) egyenletes elosztása, és platform biztosítása a futó programok számára', '3D-s játékok automatikus leprogramozása', 'A CPU ventillátorának vízhűtéses szabályzása'],
        correctAnswer: 'A számítógép hardveres erőforrásainak (memória, processzor) egyenletes elosztása, és platform biztosítása a futó programok számára',
        explanation: 'Az OS az a karmester, aki összeköti a fizikai alkatrészeket (hardver) az általad indított játékokkal, böngészőkkel (szoftver).',
    },
    {
        id: 'd4-ext-13', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Jelszótörési (Hacking) támadások',
        task: 'Párosítsd a jelszótörő támadásokat leírásukkal!',
        sentences: [
            { text: 'A betűk és számok összes létező variációjának puszta végigpróbálása (A, B, C... AA, AB): ___', options: ['Nyers erő (Brute-force) támadás', 'Szótár (Dictionary) támadás', 'Adathalászat'], correct: 'Nyers erő (Brute-force) támadás' },
            { text: 'Egy gyakori szavakat, népszerű jelszavakat (pl. admin123, qwerty) tartalmazó lista automatikus végigpróbálása: ___', options: ['Nyers erő (Brute-force) támadás', 'Szótár (Dictionary) támadás', 'Adathalászat'], correct: 'Szótár (Dictionary) támadás' },
        ],
        explanation: 'A Brute-force időigényes, de biztos (esetleg évek). A Szótár a lustaságot használja ki (gyakori vagy kiszivárgott jelszavak).',
    },
    {
        id: 'd4-ext-14', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Böngésző Sütik (Cookies)',
        task: 'Mik azok a "sütik" (cookies) az internetezés során?',
        options: ['A weboldalak által a gépedre lementett pici szöveges fájlok, amik megjegyzik a beállításaidat, vagy követik, merre jársz', 'A gép memóriáját felemésztő apró vírusok', 'Jutalmak, amiket sűrű látogatásért ad egy weboldal', 'A sötét weben árult programok'],
        correctAnswer: 'A weboldalak által a gépedre lementett pici szöveges fájlok, amik megjegyzik a beállításaidat, vagy követik, merre jársz',
        explanation: 'A süti jó arra, hogy ne kelljen naponta bejelentkezned Facebookra. Viszont rossz arra (vagyis adatvédelmileg aggályos), hogy a hirdetők cégek kövessék, melyik webshopokat látogattad meg tegnap.',
    },
    {
        id: 'd4-ext-15', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.12', tag: 'practice',
        title: 'Okoseszközök és Magánszféra',
        task: 'Milyen adatvédelmi (privacy) kockázata van a lakásba szerelt "Okos Hangszóróknak" (Intelligens asszisztenseknek, pl. Alexa, Siri)?',
        options: ['Sok áramot fogyasztanak éjszaka is', 'Folyamatosan "hallgatózniuk" kell a hívószóra (pl. "Hey Siri"), emiatt felmerül a véletlen hangrögzítés és lehallgatás kockázata', 'Csak internetes rádiót tudnak játszani', 'Nem hajlandók segíteni a házi feladatban'],
        correctAnswer: 'Folyamatosan "hallgatózniuk" kell a hívószóra (pl. "Hey Siri"), emiatt felmerül a véletlen hangrögzítés és lehallgatás kockázata',
        explanation: 'Ahhoz, hogy az asszisztens reagáljon a parancsodra a kanapéról, a mikrofonnak mindig aktívnak kell lennie a szobában.',
    },
    {
        id: 'd4-ext-16', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Nulladik napi sérülékenység (Zero-Day Exploit)',
        task: 'Mit jelent a "Zero-Day Exploit" fogalma a kiberbiztonságban?',
        options: ['Olyan támadás, ami éjfélkor nullázza le a bankszámládat', 'Olyan új, ismeretlen szoftverhiba vagy biztonsági "lyuk", amelyet a hackerek kihasználnak MÉG AZELŐTT, hogy a gyártó cég készíthetne hozzá javítást (patch-et)', 'Amikor kifutottál a vírusirtó próbaidejéből', 'Ártalmatlan kis hibák, elírások a weboldalon'],
        correctAnswer: 'Olyan új, ismeretlen szoftverhiba vagy biztonsági "lyuk", amelyet a hackerek kihasználnak MÉG AZELŐTT, hogy a gyártó cég készíthetne hozzá javítást (patch-et)',
        explanation: 'Azért "Nulladik napi", mert a szoftver fejlesztőinek eddig nulla napjuk volt orvosolni a sebezhetőséget. Rendkívül veszélyes.',
    },
    {
        id: 'd4-ext-17', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Kijelző technológia (Pixel vs Felbontás)',
        task: 'Határozd meg a képernyők fogalmait!',
        sentences: [
            { text: 'A kijelzők legkisebb önállóan vezérelhető színes pöttyét ___ hívjuk.', options: ['Pixelnek', 'Felbontásnak', 'Bájtnak'], correct: 'Pixelnek' },
            { text: 'Hogy hány ilyen pontból áll a kijelző függőlegesen és vízszintesen (pl. 1920x1080), azt a képernyő ___ nevezzük.', options: ['Képfrissítésének (Hz)', 'Felbontásának (Resolution)'], correct: 'Felbontásának (Resolution)' },
        ],
        explanation: 'Egy kép sok millió pixelből (picture element - képpont) áll. A felbontás ezen pixelek mennyiségét jelöli az oszlopok és sorok számával.',
    },
    {
        id: 'd4-ext-18', grade: '9-11', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.5', tag: 'practice',
        title: 'Egészségmegőrzés (RSI megelőzése)',
        task: 'Melyek ajánlott módszerek az ínhüvelygyulladás és a kézügyet érintő "Ismétlődő terheléses sérülések" (RSI) megelőzésére hosszú géphasználat esetén?',
        options: ['Fizikai, ergonómiai eszközök, például kettéosztott billentyűzet vagy merőlegesen álló "vertikális" egér használata', 'Gyakori, rövid szünetek tartása a kezek lenyújtására és pihentetésére', 'Odafigyelés arra, hogy gépelés közben erősebben üssük a billentyűket', '8 óra egybefüggő ülés megszakítás nélkül'],
        correctAnswers: ['Fizikai, ergonómiai eszközök, például kettéosztott billentyűzet vagy merőlegesen álló "vertikális" egér használata', 'Gyakori, rövid szünetek tartása a kezek lenyújtására és pihentetésére'],
        explanation: 'Az RSI-t az állandóan ismétlődő, természetellenes csukló- és ujjmozdulatok okozzák. Speciális ergonomikus forma és pihenés oldja meg.',
    },
    {
        id: 'd4-ext-19', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Anonimitás és Álnevesítés (Pseudonymity)',
        task: 'Mi a különbség az online Anonimitás (névtelenség) és a Pszichológiai/Digitális Álnevek (Pseudonymity) használata között?',
        options: ['Nincs különbség', 'Az Anonim azt jelenti, hogy semmilyen azonosítód/profilod nincs; az Álnevesítés során következetesen egy fedőnevet használsz (pl. Gamer tag/fórum nicknév), aminek van online hírneve', 'A névtelenséghez le kell adni az útlevelet; az álnévhez nem', 'Álnév alatt azt értjük, amikor kötelező a polgári neved megadni a Facebookon'],
        correctAnswer: 'Az Anonim azt jelenti, hogy semmilyen azonosítód/profilod nincs; az Álnevesítés során következetesen egy fedőnevet használsz (pl. Gamer tag/fórum nicknév), aminek van online hírneve',
        explanation: 'A Reddit vagy a Discord pszeudonim (álhírneved van a profilodon). Egy regisztráció nélküli visszajelző platform teljesen anonim.',
    },
    {
        id: 'd4-ext-20', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Biztonságos internetes vásárlás',
        task: 'Milyen intő jelekből lehet arra következtetni, hogy egy online Webáruház ÁTVERÉS (scam)?',
        options: ['Gyanúsan, irreálisan alacsony árakkal kínálnak prémium termékeket (pl. egy legújabb iPhone 20 ezer forintért)', 'A weboldal URL-je apró elírással utánoz egy igazi oldalt (pl. emag-vasarlok.hu az igazi emag.hu helyett)', 'Fizethetsz benne bankkártyával egy titkosított banki terminálon keresztül', 'Nincs se céges név, se telefonszám, se bejegyzett fizikai postacím feltüntetve az ÁSZF/Kapcsolat fülön'],
        correctAnswers: ['Gyanúsan, irreálisan alacsony árakkal kínálnak prémium termékeket (pl. egy legújabb iPhone 20 ezer forintért)', 'A weboldal URL-je apró elírással utánoz egy igazi oldalt (pl. emag-vasarlok.hu az igazi emag.hu helyett)', 'Nincs se céges név, se telefonszám, se bejegyzett fizikai postacím feltüntetve az ÁSZF/Kapcsolat fülön'],
        explanation: 'Ha túl szép hogy igaz legyen az ár, és nincs visszakövethető, felelősségre vonható emberi szervezet feltüntetve a weboldalon feltüntetve, azonnal zárd be a lapot.',
    }
];
