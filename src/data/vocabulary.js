// Comprehensive vocabulary for OKM Digital Competency
// Organized by the 4 tartalmi keret domains

export const vocabularyData = [
    // ════════ DIGITÁLIS ÍRÁSTUDÁS ════════
    {
        id: 'v01', term: 'Fájl', category: 'Digitális írástudás',
        definition: 'Adatokat tartalmazó, névvel és kiterjesztéssel ellátott egység, amelyet a számítógép tárol.',
        essential: true, didYouKnow: 'Egy fájl neve és kiterjesztése (pl. .docx, .jpg) meghatározza, melyik program nyissa meg!'
    },
    {
        id: 'v02', term: 'Könyvtár (mappa)', category: 'Digitális írástudás',
        definition: 'Fájlok és más mappák rendszerezésére szolgáló tároló a számítógépen.',
        essential: true
    },
    {
        id: 'v03', term: 'Kiterjesztés', category: 'Digitális írástudás',
        definition: 'A fájlnév utáni rész (pl. .pdf, .mp3), amely jelzi a fájl típusát.',
        essential: true, didYouKnow: 'A Windows alapértelmezés szerint elrejti a kiterjesztéseket – érdemes bekapcsolni a megjelenítésüket!'
    },
    {
        id: 'v04', term: 'Böngésző (Browser)', category: 'Digitális írástudás',
        definition: 'Program, amellyel weboldalakat nézhetsz meg (pl. Chrome, Firefox, Safari, Edge).',
        essential: true
    },
    {
        id: 'v05', term: 'URL', category: 'Digitális írástudás',
        definition: 'Uniform Resource Locator – egy weboldal egyedi „internetcíme" (pl. https://www.pelda.hu/oldal).',
        essential: false, didYouKnow: 'Az URL három fő részből áll: protokoll (https), domainnév (pelda.hu), és útvonal (/oldal).'
    },
    {
        id: 'v06', term: 'Keresőmotor', category: 'Digitális írástudás',
        definition: 'Szolgáltatás, amely a világhálón keres kulcsszavak alapján (pl. Google, Bing, DuckDuckGo).',
        essential: true
    },
    {
        id: 'v07', term: 'Rasztergrafika', category: 'Digitális írástudás',
        definition: 'Képformátum, amely pixelekből (képpontokból) áll. Nagyítva kockás lesz (pl. .jpg, .png, .bmp).',
        essential: false
    },
    {
        id: 'v08', term: 'Vektorgrafika', category: 'Digitális írástudás',
        definition: 'Képformátum, amely matematikai alakzatokból áll. Nagyítva is éles marad (pl. .svg).',
        essential: false
    },
    {
        id: 'v09', term: 'Álhír (Fake News)', category: 'Digitális írástudás',
        definition: 'Szándékosan megtévesztő, hamisnak tűnő információ, amelyet hírként terjesztenek.',
        essential: true, didYouKnow: 'Az álhírek 6× gyorsabban terjednek a közösségi médiában, mint a valós hírek!'
    },
    {
        id: 'v10', term: 'Digitális lábnyom', category: 'Digitális írástudás',
        definition: 'Minden adat és nyom, amit az interneten hagyunk magunk után (posztok, keresések, vásárlások).',
        essential: true, didYouKnow: 'Még a törölt posztok is hagyhatnak nyomot a szervereken vagy mások képernyőfotóin!'
    },
    {
        id: 'v11', term: 'Netikett', category: 'Digitális írástudás',
        definition: 'Az online viselkedés íratlan illemszabályai (ne írj csupa nagybetűvel, légy udvarias stb.).',
        essential: true
    },
    {
        id: 'v12', term: 'Deepfake', category: 'Digitális írástudás',
        definition: 'MI által készített, nagyon élethű, de hamisított kép, hang vagy videó.',
        essential: true, didYouKnow: 'A deepfake szó a „deep learning" és a „fake" szavakból származik.'
    },
    {
        id: 'v13', term: 'Creative Commons (CC)', category: 'Digitális írástudás',
        definition: 'Olyan licencrendszer, amely meghatározza, hogyan használhatsz fel szabadon megosztott tartalmakat.',
        essential: false
    },
    {
        id: 'v14', term: 'BCC (Titkos másolat)', category: 'Digitális írástudás',
        definition: 'E-mail mező, ahol a címzettek nem látják egymás e-mail címét.',
        essential: false
    },
    {
        id: 'v15', term: 'HTML', category: 'Digitális írástudás',
        definition: 'HyperText Markup Language – a weboldalak felépítéséhez használt jelölőnyelv.',
        essential: false, didYouKnow: 'Tim Berners-Lee találta fel 1991-ben, és azóta a web alapja!'
    },
    {
        id: 'v16', term: 'Élőfej és élőláb', category: 'Digitális írástudás',
        definition: 'A dokumentum minden oldalának tetejénapcsolatokkal (élőfej) és alján (élőláb) ismétlődő szöveg.',
        essential: false
    },
    {
        id: 'v17', term: 'Körlevél (Mail Merge)', category: 'Digitális írástudás',
        definition: 'Személyre szabott levelek automatikus generálása adatforrásból (pl. Excel táblából).',
        essential: false
    },

    // ════════ ADAT- ÉS ADATBÁZIS-KEZELÉS ════════
    {
        id: 'v20', term: 'Adat', category: 'Adat- és adatbázis-kezelés',
        definition: 'Nyers, feldolgozatlan tény vagy szám (pl. 37, „Budapest", 2025).',
        essential: true
    },
    {
        id: 'v21', term: 'Információ', category: 'Adat- és adatbázis-kezelés',
        definition: 'Feldolgozott, értelmes kontextusba helyezett adat (pl. „A beteg testhőmérséklete 37°C").',
        essential: true
    },
    {
        id: 'v22', term: 'GDPR', category: 'Adat- és adatbázis-kezelés',
        definition: 'General Data Protection Regulation – az EU adatvédelmi rendelete, amely védi a személyes adatokat.',
        essential: true, didYouKnow: 'A GDPR megsértéséért a cég bevételének akár 4%-a is bírság lehet!'
    },
    {
        id: 'v23', term: 'Személyes adat', category: 'Adat- és adatbázis-kezelés',
        definition: 'Bármely információ, amelyből egy személy azonosítható (név, cím, TAJ-szám, e-mail).',
        essential: true
    },
    {
        id: 'v24', term: 'Cellahivatkozás', category: 'Adat- és adatbázis-kezelés',
        definition: 'Egy táblázat cellájára való utalás a koordinátáival, pl. A1, B3, C10.',
        essential: false
    },
    {
        id: 'v25', term: 'Függvény (táblázat)', category: 'Adat- és adatbázis-kezelés',
        definition: 'Előre definiált számítás táblázatkezelőben, pl. SUM (összeg), AVERAGE (átlag), MAX, MIN.',
        essential: true
    },
    {
        id: 'v26', term: 'Elsődleges kulcs (PK)', category: 'Adat- és adatbázis-kezelés',
        definition: 'Egyedi azonosító egy adatbázis-táblában – minden sornak más értéke van.',
        essential: false, didYouKnow: 'Általában egy automatikusan növekvő szám (ID) az elsődleges kulcs.'
    },
    {
        id: 'v27', term: 'Idegen kulcs (FK)', category: 'Adat- és adatbázis-kezelés',
        definition: 'Egy másik tábla elsődleges kulcsára hivatkozó mező, amely összekapcsolja a táblákat.',
        essential: false
    },
    {
        id: 'v28', term: 'SQL', category: 'Adat- és adatbázis-kezelés',
        definition: 'Structured Query Language – adatbázisok lekérdezésére és kezelésére szolgáló nyelv.',
        essential: false, didYouKnow: 'Az SQL 1970-es évekből származik, de ma is a legelterjedtebb adatbázisnyelv!'
    },
    {
        id: 'v29', term: 'Big Data', category: 'Adat- és adatbázis-kezelés',
        definition: 'Hatalmas mennyiségű, változatos és gyorsan keletkező adathalmaz.',
        essential: false, didYouKnow: 'A 3V: Volume (mennyiség), Variety (változatosság), Velocity (sebesség).'
    },
    {
        id: 'v30', term: 'Adatbányászat', category: 'Adat- és adatbázis-kezelés',
        definition: 'Rejtett minták és összefüggések automatikus feltárása nagy adathalmazokból.',
        essential: false
    },
    {
        id: 'v31', term: 'Feltételes formázás', category: 'Adat- és adatbázis-kezelés',
        definition: 'Táblázatkezelő funkció, ami automatikusan formáz cellákat szabályok alapján (pl. piros ha < 50).',
        essential: false
    },

    // ════════ ALGORITMIZÁLÁS ════════
    {
        id: 'v40', term: 'Algoritmus', category: 'Algoritmizálás',
        definition: 'Lépések pontos, egyértelmű sorozata egy probléma megoldására.',
        essential: true, didYouKnow: 'A szó az arab matematikus, al-Hvárizmi nevéből származik!'
    },
    {
        id: 'v41', term: 'Folyamatábra', category: 'Algoritmizálás',
        definition: 'Grafikus ábra, amely alakzatokkal (rombusz=döntés, téglalap=művelet) mutatja az algoritmus lépéseit.',
        essential: true
    },
    {
        id: 'v42', term: 'Változó (Variable)', category: 'Algoritmizálás',
        definition: 'Névvel ellátott tárolóhely a programban, amelynek értéke változhat.',
        essential: true
    },
    {
        id: 'v43', term: 'Ciklus (Loop)', category: 'Algoritmizálás',
        definition: 'Programozási szerkezet, amely egy kódblokkot feltétel szerint ismétel.',
        essential: true, didYouKnow: 'Ha a kilépési feltétel soha nem teljesül, végtelen ciklus jön létre!'
    },
    {
        id: 'v44', term: 'Elágazás (If/Else)', category: 'Algoritmizálás',
        definition: 'Programozási szerkezet, amely feltétel alapján két különböző utat választ.',
        essential: true
    },
    {
        id: 'v45', term: 'Szekvencia', category: 'Algoritmizálás',
        definition: 'Lépések egymás utáni, sorrendbeli végrehajtása.',
        essential: false
    },
    {
        id: 'v46', term: 'Blokkprogramozás', category: 'Algoritmizálás',
        definition: 'Vizuális programozás összeilleszthető blokkokkal (pl. Scratch, Blockly).',
        essential: true
    },
    {
        id: 'v47', term: 'Szenzor (érzékelő)', category: 'Algoritmizálás',
        definition: 'Eszköz, amely méri a környezetet (hőmérséklet, fény, távolság) és jelzi a vezérlőnek.',
        essential: false
    },
    {
        id: 'v48', term: 'Gépi tanulás (ML)', category: 'Algoritmizálás',
        definition: 'A mesterséges intelligencia ága, ahol a gép adatokból tanul mintákat felismerni.',
        essential: true, didYouKnow: 'Az MI nem „gondolkodik" – statisztikai mintákat ismer fel nagy adatokból!'
    },
    {
        id: 'v49', term: 'MI hallucináció', category: 'Algoritmizálás',
        definition: 'Amikor egy MI modell magabiztosan generál valótlan információt, mintha igaz lenne.',
        essential: true
    },
    {
        id: 'v50', term: 'Nagy nyelvi modell (LLM)', category: 'Algoritmizálás',
        definition: 'Hatalmas szövegkorpuszból tanított MI, amely képes szöveget generálni (pl. ChatGPT, Gemini).',
        essential: false, didYouKnow: 'Az LLM-ek nem „tudják" az igazat – a legvalószínűbb következő szót jósolják.'
    },
    {
        id: 'v51', term: 'Prompt', category: 'Algoritmizálás',
        definition: 'Utasítás vagy kérdés, amelyet egy MI chatbotnak adunk a kívánt válasz eléréséhez.',
        essential: false
    },

    // ════════ IT ESZKÖZÖK ════════
    {
        id: 'v60', term: 'CPU (processzor)', category: 'IT Eszközök',
        definition: 'Central Processing Unit – a számítógép „agya", amely elvégzi a számításokat.',
        essential: true
    },
    {
        id: 'v61', term: 'RAM', category: 'IT Eszközök',
        definition: 'Random Access Memory – ideiglenes memória, ami kikapcsoláskor törlődik.',
        essential: true, didYouKnow: 'Minél több RAM van, annál több programot tudsz egyidejűleg futtatni!'
    },
    {
        id: 'v62', term: 'SSD / HDD', category: 'IT Eszközök',
        definition: 'Tartós tárolók: SSD (gyorsabb, drágább), HDD (lassabb, olcsóbb, forgó lemez).',
        essential: false
    },
    {
        id: 'v63', term: 'Operációs rendszer', category: 'IT Eszközök',
        definition: 'Szoftver, amely kezeli a hardvert és futtatja a programokat (pl. Windows, macOS, Linux, Android).',
        essential: true
    },
    {
        id: 'v64', term: 'LAN', category: 'IT Eszközök',
        definition: 'Local Area Network – helyi hálózat, pl. egy iskolán vagy irodán belül.',
        essential: false
    },
    {
        id: 'v65', term: 'WAN', category: 'IT Eszközök',
        definition: 'Wide Area Network – nagy kiterjedésű hálózat, pl. az internet maga.',
        essential: false
    },
    {
        id: 'v66', term: 'IoT (Dolgok Internete)', category: 'IT Eszközök',
        definition: 'Internet of Things – internetkapcsolattal rendelkező, adatot cserélő mindennapi tárgyak.',
        essential: true, didYouKnow: '2030-ra várhatóan több mint 30 milliárd IoT eszköz lesz a világon!'
    },
    {
        id: 'v67', term: 'Felhőszolgáltatás (Cloud)', category: 'IT Eszközök',
        definition: 'Számítási kapacitás és tárhelyet nyújtó távoli szerverek, interneten elérhetők (pl. Google Drive).',
        essential: true
    },
    {
        id: 'v68', term: 'Phishing (Adathalászat)', category: 'IT Eszközök',
        definition: 'Csalók megbízhatónak tűnő üzeneteken keresztül próbálják megszerezni jelszavainkat, adatainkat.',
        essential: true, didYouKnow: 'Mindig ellenőrizd az e-mail feladójának pontos címét, ne csak a megjelenített nevet!'
    },
    {
        id: 'v69', term: 'Smishing', category: 'IT Eszközök',
        definition: 'SMS-alapú adathalász támadás (pl. hamis csomagkézbesítési SMS link).',
        essential: false
    },
    {
        id: 'v70', term: 'Ransomware', category: 'IT Eszközök',
        definition: 'Kártevő, amely titkosítja a fájlokat és váltságdíjat követel a visszaállításukért.',
        essential: false, didYouKnow: 'A legjobb védelem a rendszeres biztonsági mentés (3-2-1 szabály)!'
    },
    {
        id: 'v71', term: 'MFA / 2FA', category: 'IT Eszközök',
        definition: 'Többfaktoros hitelesítés – a jelszó mellett egy másik eszköz (pl. telefonos kód) is szükséges.',
        essential: true
    },
    {
        id: 'v72', term: 'VPN', category: 'IT Eszközök',
        definition: 'Virtual Private Network – titkosított csatornát hoz létre a böngészéshez, védi a magánéletet.',
        essential: false
    },
    {
        id: 'v73', term: 'HTTPS', category: 'IT Eszközök',
        definition: 'Titkosított webkapcsolat (a lakat ikon jelzi a böngészőben). A HTTP nem titkosított.',
        essential: true
    },
    {
        id: 'v74', term: 'Bináris számrendszer', category: 'IT Eszközök',
        definition: 'Kettes alapú számrendszer (0 és 1), amelyen a számítógépek működnek.',
        essential: false, didYouKnow: '8 bit = 1 byte. A számítógép MINDENT 0-kból és 1-esekből épít fel!'
    },
    {
        id: 'v75', term: 'Crowdsourcing', category: 'IT Eszközök',
        definition: 'Sok ember önkéntes hozzájárulásából felépülő projekt (pl. Wikipedia, OpenStreetMap).',
        essential: false
    },
    {
        id: 'v76', term: 'Bluetooth', category: 'IT Eszközök',
        definition: 'Kis hatótávolságú vezeték nélküli technológia eszközök közötti adatátvitelre.',
        essential: false
    },
    {
        id: 'v77', term: 'NFC', category: 'IT Eszközök',
        definition: 'Near Field Communication – érintéses fizetésre és rövid hatótávolságú kommunikációra szolgáló technológia.',
        essential: false
    },
    {
        id: 'v78', term: 'E-ügyintézés', category: 'IT Eszközök',
        definition: 'Hivatali ügyek online intézése (pl. Ügyfélkapu+, adóbevallás, okmányigénylés).',
        essential: false
    },
    {
        id: 'v79', term: 'Képernyőidő', category: 'IT Eszközök',
        definition: 'Az eszközök beépített funkciója, amely méri és korlátozhatja az alkalmazáshasználatot.',
        essential: false, didYouKnow: 'A WHO szerint kamaszoknak napi max 2 óra képernyőidő ajánlott!'
    },
];
