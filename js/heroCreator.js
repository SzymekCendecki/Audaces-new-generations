//--------------------------------tablice dla wybierania ekwipunku ------------------------------//
//broń
module.exports.equipWeaponPL = ["sztylet", "drewniana pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];
module.exports.equipWeaponENG = ["dagger", "woddenStick", "shortSword", "sabre", "spear", "slingshot", "bow"];

//zbroje
module.exports.equipArmorPL = ["przeszywanica", "skórzana", "ćwiekowana"];
module.exports.equipArmorENG = ["gambison", "leather", "studded"];

//tarcze
module.exports.equipShieldPL = ["puklerz", "mała drewniana", "mała metalowa"];
module.exports.equipShieldENG = ["buckler", "smallWooden", "smallMetal"];

//pozostały ekwipunek
module.exports.equipOtherPL = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergamniny 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas",  "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

module.exports.equipOtherENG = ["stick", "moneyBag", "travelBag", "purse", "backpack", "canteen", "pot", "blanket", "tubeParchments", "penWriting", "parchments5pieces", "ordinaryClothing", "fussyHat", "coat", "leatherBelt", "needlesThread", "saddleCloth", "tent", "woodenBowl", "woodenSpoon", "torch", "oliveLamp", "oilLamp", "rope5m", "tinders"];

//---------------------------tablice dla wybierania umiejętności -------------------------------//
//umiejętności dla wojownika
module.exports.warriorPL = ["szt.przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

module.exports.warriorENG = ["survival", "discipline", "argumentation", "impactShield", "horsebackRiding", "dagger", "shortSword", "sabre", "spear", "bow", "buckler", "smallWoodenShield", "smallMetalShield"];

//umiejętności dla złoczyńcy
module.exports.criminalPL = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drewniana pałka"];

module.exports.criminalENG = ["poison", "climb", "acting", "acrobatics", "traps", "sneak", "theft", "dodge", "bluff", "woddenStick"];

//umiejętności dla czarodzieja
module.exports.wizardPL = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];

module.exports.wizardENG = ["writingRead", "summonOvertake", "divination", "healing", "castSpell", "createPotion", "createMagItem", "createBalm", "createRunes", "astrology", "herbalism"];

//-----------------------------------Imię-------------------------------------------------------//
//tekst dla wyboru imienia
module.exports.nameTitle = "Wybór imienia.";
module.exports.nameDescription = "Wpisz w pole niżej swoje imię oraz wciśnij przycisk 'zatwierdź'. Możesz wpisać tylko litery, cyfry nie będą barne pod uwagę. Imię można zmieniać dowolną ilość razy.";

//tekst dla alertu wyboru imienia
module.exports.nameAlert = "Wybierz imię.";

//-------------------------------------------RASA------------------------------------------------//
//tekst dla wyboru rasy
module.exports.raceTitle = "Wybór rasy.";
module.exports.raceDescription = "Poniżej znajdują się cztery przyciski. Dzięki nim wybierzesz rasę, która Cię interesuje. Po klinkięciu w przycisk pojawi się krótki opis wybranej rasy.";

//opis wybranych ras
module.exports.human = "Człowiek jedna z najbardziej licznych ras (ustępują jedynie goblinom). Są wszechstronni i wszędobylscy, dlatego też można spotkać ich na wszystkich kontynentach, parających się różnymi profesjami. Podstawowe cechy: wzrost: 150 - 210cm, waga: 40 - 120kg, kolor oczu: najczęściej piwne, szare, brązowe, kolor skóry: od białego do czarnego (wraz z odcieniami), żółta, czerwona, kolor włosów: każdy, wiek: do 100 lat, profesja: każda.";

module.exports.elv = "Elfy to bardzo uzdolnieni czarodzieje. Pomimo olbrzymich umiejętności magicznych, są równie biegli w posługiwaniu się łukiem. Są długowieczni, przez co omyłkowo uznawani są za nieśmiertelnych. Podstawowe cechy: wzrost: 180 - 210cm, waga: 40 - 90kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 1500 lat, profesja: każda, z predyspozycjami do bycia czarodziejem.";

module.exports.dwarf = "Przez swoje specyficzne podejście do rzeczywistości, postrzegani są jako najardziej chamowata rasa świata. Jednakże są wyśmienitymi kowalami, górnikami i wojownikami. Bardzo uczuleni na punkcie krasnoludzkich kobiet, honoru oraz swoich bród. Podstawowe cechy: wzrost: 100 - 145cm, waga: 70 - 100kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 500 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.";

module.exports.orc = "Orki to niezwykle wojownicza rasa. Są w głównej mierze koczownikami, z kastowym podziałem społeczeństwa. Są niechętni każdemu rodzajowi magii, za wyjątkiem magii szamańskiej, do której odnoszą się z nieufnością. Podstawowe cechy: wzrost: 180 - 220cm, waga: 100 - 150kg, kolor oczu: każdy, kolor skóry: każdy, kolor włosów: każdy, wiek: do 80 lat, profesja: każda, z predyspozycjami do bycia wojownikiem.";

//tekst dla alertu wyboru rasy
module.exports.raceAlert = "Wybierz rasę.";

//--------------------------------------PROFESJA-------------------------------------------------//
//tekst dla wyboru profesji
module.exports.occupationTitle = "Wybór profesji.";
module.exports.occupationDescription = "Poniżej znajdują się trzy przyciski. Dzięki nim wybierzesz profesję, która Cię interesuje. Po klinkięciu w przycisk pojawi się krótki opis wybranej profesji.";

//opis wybranych ras
module.exports.warrior = "Wojownicy to specjaliści we władaniu każdą bronią białą bronią. Są podstawą wszystkich armii świata, ale także mogą podróżwać samotni lub w niewielkich grupach. Wielu idących drogą wojownika zdobyło sławę w bitwach czy pogromcy smoków. Będąc wojownikiem zwiedzisz świat.";

module.exports.criminal = "Trucizny. Pułapki. Skrytobójstwo. To wszystko i wiele innych rzeczy zapewni Tobie droga złoczyńcy. Już w każdym mniejszym miasteczku, są odpowiednie organizacje, które wyszkolą Cię na nieustraszonego rzezimieszka.";

module.exports.wizard = "Czarodziej to brzmi dumnie. Po wielu latach spędzonych na nauce. Będzie wzbudzał szacunek swoją tylko osobą, a wrogowie będą uciekać w panice przed Twoimi kulami ognia.";

//tekst dla wyboru profesji
module.exports.occupationAlert = "Wybierz profesję.";

//---------------------------CECHY część I -LOSOWANIE CECH---------------------------------------//
module.exports.featuresTitle = "Losowanie cech.";
module.exports.featuresDescription = "Poniżej znajduje się pięć przycisków, dzięki którym wylosujesz wysokość cech, które będą odzwierciedlały fizyczne i psychiczne atrybuty Twojej postaci.";

//tekst dla losowania cech
module.exports.featuresAlert = "Wylosuj cechy.";

//---------------------------WYBÓR CECH część II--------------------------------------------------//
module.exports.features2Title = "Wybór cech.";
module.exports.features2Description = "W tej części kreatora należy wybrać płeć, kolor włosów, oczu, skóry, wagę i wzrost. Poniżej są przyciski dzięki, którym należy to zrobić.";

//tekst dla wybierania cech
module.exports.features2Alert = "Wybierz cechy.";

//------------------------------WYBÓR EKWIPUNKU------------------------------------------------//
module.exports.equipmentTitle = "Wybór ekwipunku.";
module.exports.equipmentDescription = "Ta część podzielona jest zasadniczo na dwie części. W pierwszej możesz wybrać (w sumie) pięć rzeczy z kategorii: broń, zbroje, tarcze i inne. W drugiej części dzięki przyciskom, będzie można usunąć wcześniej wybrane przedmioty.";

//tekst dla wybierania cech
module.exports.equipmentAlert = "Wybierz ekwipunek.";

//-----------------------------WYBÓR UMIEJĘTNOŚCI------------------------------------------------//
module.exports.skillsTitle = "Wybór umiejętności.";
module.exports.skillsDescription = "Ta część podzielona jest zasadniczo na dwie części. W pierwszej możesz wybrać (w sumie) 3 umiejętności z kategorii: wojownik, złoczyńca i czarodziej. W drugiej części dzięki przyciskom, będzie można usunąć wcześniej wybrane umiejętności.";

module.exports.skillsAlert = "Wybierz umiejętności";

//-------------------------INFORMACJA ZBIORCZA ------------------------------------------------//
module.exports.infoTitle = "Twoja postać.";
module.exports.infoDescription = "Poniżej znajdują się Twoje wybory. W tej sekcji możesz je sprawdzić oraz zastanowić się nad ewentualnymi zmianami. Po dokonaniu wszystkich wyborów, to po prawej stronie pod przyciskami powinien ukazać się przycisk rozpoczynający grę.";
