//import funkcji z pliku zewnętrznego
let functions = require("./functions.js"); //podstawowe funkcje
let intro = require("./intro.js");// intro gry (te po kreatorze postaci);

//tablica z imionami męskimi
let namesMan = ["Wortigern", "Gintor", "Hegel", "Derig", "Diggramon", "Zengowetoryk", "Deggetm", "Zigamon", "Birduk", "Ardenor", "Winterks", "Joluntik", "Menigor", "Oltis", "Kurdir"];

//tablica z imionami żeńskimi
let namesWomen = ["Wortigerna", "Hejacynta", "Dejawina", "Ludiniam", "Keoburna", "Leokamina", "Erminia", "Xynenda", "Fejmira", "Apsurginis", "Wicynia", "Jermodernia", "Sertyksa"];

//tablica z rasami
let races = ["człowiek", "elf", "krasnolud", "ork"];

//tablica z profesjami
let occupations = ["wojownik", "złoczyńca", "czarodziej"];

//tabica z płcią
let sex = ["kobieta", "mężczyzna", "nie wiadomo"];

//tablica z kolorami włosów
let hairColor = ["blond", "rude", "czarne", "farbowane"];

//tablica z kolorem oczu
let eyesColor = ["piwne", "szare", "brązowe", "niebieskie"];

//tablica z kolorem skóry
let skinColor = ["biała", "brązowa", "czarna", "czerwona", "zółta", "zielona", "brunatna", "błękitna"];

//tablica z wagą
let weight = ["niedowaga", "normalna", "nadwaga"];

//tablica ze wzrostem
let height = ["niski", "normalny", "wysoki"];

//tablice z ekwipunkiem
//broń
let equipWeapon = ["sztylet", "drewniana pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];

//zbroja
let equipArmor = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana"];

//tarcze
let equipShield = ["puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

//tablice ze modyfikatorami rasy i profesji - dla określenia ostatecznej ilości punktów postaci
	let warrior = [5, 5, 0, 0, 0];
	let criminal = [0, 0, 10, 0, 0];
	let wizard = [0, 0, 0, 5, 5];

	let human = [0, 0, 0, 0, 0];
	let elv = [-5, -5, 0, 5, 5];
	let dwarf = [4, 4, 0, -2, -3];
	let orc = [5, 5, 0, -5, -5];

//inny ekwipunek
let equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergamniny 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas",  "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

//tablice z umiejętnościami
//wojownika
let skillsWarrior = ["szt.przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

//złoczyńcy
let skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drewniana pałka"];

//czarodzieja
let skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];

//tablica zbiorcza z wyniami losowania lub wyborami postaci
//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - waga, 13-wzrost
let hero = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", 0, 0, 0, 0, 0, "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano"];

//dodatkowa tablica dla losowania cech
let randomFeatures = [0, 0, 0, 0, 0];

//tablica ekwipunku
let equip = [];

//tablica umiejętności
let skills = [];

//utworzenie przycisków wylosuj i wybierz postać
module.exports.randomChooseHeroBtns = function(){
	//utworzenie przycisku wylosuj postać
  functions.newElement("button", "randomHero", "wylosuj", $("#mainBtns"));
	//utworzenie przycisku wybierz postać
  functions.newElement("button", "chooseHero", "wybierz", $("#mainBtns"));
	//nadanie styli dla przycisków wylosuj i wybierz
  $("#randomHero, #chooseHero").addClass("basicBtn medievalText btnNewGame");

//losowanie postaci
  $("#randomHero").on("click", ()=>{
	  $("#drawnCharacter, #interactionsBtns").empty();
	   functions.newElement("p", "choosenHeroTitle", "WYLOSOWANA POSTAĆ", $("#drawnCharacter"));
	   $("#drawnCharacter").addClass("flexForBtns");
	   $("#choosenHeroTitle").addClass("basicText center medievalText width100 textUnderlineGold");

		 $("#playGame").remove();

		 functions.newElement("button", "playGame", "GRA", $("#mainBtns"));
		 $("#playGame").addClass("basicBtn medievalText btnNewGame");

     $("#playGame").on("click", ()=>{
        $("#mainBtns, #interactionsBtns, #mainPart").empty();
        intro.intro();
     });

		 //usuwanie z tablic potencjalnych wyników ewentualnego wybierania
		 	equip.splice(0, 5); skills.splice(0, 3);
randomFeatures.splice(0, 1, 0); randomFeatures.splice(1, 1, 0); randomFeatures.splice(2, 1, 0);
randomFeatures.splice(3, 1, 0); randomFeatures.splice(4, 1, 0);

//losowanie płci
  let randomSexNumber = Math.round(Math.random()*(sex.length-1));
  let sexHero = sex[randomSexNumber];

	hero.splice(1, 1, sexHero);

//losowanie imienia w oparciu o wylosowaną płeć
  if(sex[randomSexNumber] === "mężczyzna"){
    let randomNameNumber = Math.round(Math.random()*(namesMan.length-1));
	 $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Płeć: <span class="greenText">${sexHero}</span></p>`);
    let nameHero = namesMan[randomNameNumber];
	 $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Imię: <span class="greenText">${nameHero}</span></p>`);
	 hero.splice(0, 1, nameHero);
	}else if(sex[randomSexNumber] === "kobieta"){
	  $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Płeć: <span class="greenText">${sexHero}</span></p>`);
    let randomNameNumber = Math.round(Math.random()*(namesWomen.length-1));
    let nameHero = namesWomen[randomNameNumber];
	 $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Imię: <span class="greenText">${nameHero}</span></p>`);
	 hero.splice(0, 1, nameHero);
  }else{
	  $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Płeć: <span class="greenText">${sexHero}</span></p>`);
    let allNames = namesMan.concat(namesWomen);
    let randomNameNumber = Math.round(Math.random()*(allNames.length-1));
    let nameHero =  allNames[randomNameNumber];
	 $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Imię: <span class="greenText">${nameHero}</span></p>`);
	 hero.splice(0, 1, nameHero);
  }

  //losowanie profesji
  let randomOccupationNumber = Math.round(Math.random()*(occupations.length-1));
  let occupationsHero = occupations[randomOccupationNumber];
  $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Profesja: <span class="greenText">${occupationsHero}</span></p>`);
	hero.splice(3, 1, occupationsHero);

  //losowanie rasy
  let randomRaceNumber = Math.round(Math.random()*(races.length-1));
  let raceHero = races[randomRaceNumber];
  $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Rasa: <span class="greenText">${raceHero}</span></p>`);
	hero.splice(2, 1, raceHero);

//losowanie punktów cech w zależności od rasy i profesji
//człowiek - wojownik
if(raceHero == "człowiek" && occupationsHero == "wojownik"){ functions.randomPoints(warrior[0], human[0], `siła`, hero, 4); functions.randomPoints(warrior[1], human[1], `wytrzymałość`, hero,  5); functions.randomPoints(warrior[2], human[2], `zręczność`, hero, 6); functions.randomPoints(warrior[3], human[3], `inteligencja`, hero,  7);
functions.randomPoints(warrior[4], human[4], `charyzma`, hero, 8); }

//człowiek - złoczyńca
else if(raceHero == "człowiek" && occupationsHero == "złoczyńca"){ functions.randomPoints(criminal[0], human[0], `siła`,hero, 4); functions.randomPoints(criminal[1], human[1], `wytrzymałość`, hero, 5);
functions.randomPoints(criminal[2], human[2], `zręczność`, hero, 6);
functions.randomPoints(criminal[3], human[3], `inteligencja`, hero, 7);
functions.randomPoints(criminal[4], human[4], `charyzma`, hero, 8); }

//człowiek czarodziej
else if(raceHero == "człowiek" && occupationsHero == "czarodziej"){ 	functions.randomPoints(wizard[0], human[0], `siła`, hero, 4); functions.randomPoints(wizard[1], human[1], `wytrzymałość`, hero, 5); functions.randomPoints(wizard[2], human[2], `zręczność`, hero, 6); functions.randomPoints(wizard[3], human[3], `inteligencja`, hero, 7);
functions.randomPoints(wizard[4], human[4], `charyzma`, hero, 8);	}

//elf - wojownik
else if(raceHero == "elf" && occupationsHero == "wojownik"){ functions.randomPoints(warrior[0], elv[0], `siła`, hero, 4); functions.randomPoints(warrior[1], elv[1], `wytrzymałość`, hero, 5);
functions.randomPoints(warrior[2], elv[2], `zręczność`, hero, 6); functions.randomPoints(warrior[3], elv[3], `inteligencja`, hero, 7); 	functions.randomPoints(warrior[4], elv[4], `charyzma`, hero, 8); }

//elf złoczyńca
else if(raceHero == "elf" && occupationsHero == "złoczyńca"){ functions.randomPoints(criminal[0], elv[0], `siła`, hero, 4); functions.randomPoints(criminal[1], elv[1], `wytrzymałość`, hero, 5);
functions.randomPoints(criminal[2], elv[2], `zręczność`, hero, 6);
functions.randomPoints(criminal[3], elv[3], `inteligencja`, hero, 7);
functions.randomPoints(criminal[4], elv[4], `charyzma`, hero, 8); }

//elf czarodziej
else if(raceHero == "elf" && occupationsHero == "czarodziej"){ functions.randomPoints(wizard[0], elv[0], `siła`, hero, 4); functions.randomPoints(wizard[1], elv[1], `wytrzymałość`, hero, 5); functions.randomPoints(wizard[2], elv[2], `zręczność`, hero, 6);	functions.randomPoints(wizard[3], elv[3], `inteligencja`, hero, 7);
functions.randomPoints(wizard[4], elv[4], `charyzma`, hero, 8); }

//krasnolud - wojownik
else if(raceHero == "krasnolud" && occupationsHero == "wojownik"){ functions.randomPoints(warrior[0], dwarf[0], `siła`, hero, 4); 	functions.randomPoints(warrior[1], dwarf[1], `wytrzymałość`, hero, 5);
functions.randomPoints(warrior[2], dwarf[2], `zręczność`, hero, 6);
functions.randomPoints(warrior[3], dwarf[3], `inteligencja`, hero, 7);
functions.randomPoints(warrior[4], dwarf[4], `charyzma`, hero, 8); }

//krasnolud złoczyńca
else if(raceHero == "krasnolud" && occupationsHero == "złoczyńca"){
functions.randomPoints(criminal[0], dwarf[0], `siła`, hero, 4); functions.randomPoints(criminal[1], dwarf[1], `wytrzymałość`, hero, 5);
functions.randomPoints(criminal[2], dwarf[2], `zręczność`, hero, 6);
functions.randomPoints(criminal[3], dwarf[3], `inteligencja`, hero, 7);
functions.randomPoints(criminal[4], dwarf[4], `charyzma`, hero, 8); }

//krasnolud czarodziej
else if(raceHero == "krasnolud" && occupationsHero == "czarodziej"){	functions.randomPoints(wizard[0], dwarf[0], `siła`, hero, 4);	functions.randomPoints(wizard[1], dwarf[1], `wytrzymałość`, hero, 5);	functions.randomPoints(wizard[2], dwarf[2], `zręczność`, hero, 6);	functions.randomPoints(wizard[3], dwarf[3], `inteligencja`, hero, 7);
functions.randomPoints(wizard[4], dwarf[4], `charyzma`, hero, 8); }

//ork - wojownik
else if(raceHero == "ork" && occupationsHero == "wojownik"){ functions.randomPoints(warrior[0], orc[0], `siła`, hero, 4); functions.randomPoints(warrior[1], orc[1], `wytrzymałość`, hero, 5);
functions.randomPoints(warrior[2], orc[2], `zręczność`, hero, 6); functions.randomPoints(warrior[3], orc[3], `inteligencja`, hero, 7); 	functions.randomPoints(warrior[4], orc[4], `charyzma`, hero, 8); 	}

//ork złoczyńca
else if(raceHero == "ork" && occupationsHero == "złoczyńca"){ functions.randomPoints(criminal[0], orc[0], `siła`, hero, 4); functions.randomPoints(criminal[1], orc[1], `wytrzymałość`, hero, 5);	functions.randomPoints(criminal[2], orc[2], `zręczność`, hero, 6);
functions.randomPoints(criminal[3], orc[3], `inteligencja`, hero, 7);
functions.randomPoints(criminal[4], orc[4], `charyzma`, hero, 8); }

//ork czarodziej
else if(raceHero == "ork" && occupationsHero == "czarodziej"){ functions.randomPoints(wizard[0], orc[0], `siła`, hero, 4); functions.randomPoints(wizard[1], orc[1], `wytrzymałość`, hero, 5);	functions.randomPoints(wizard[2], orc[2], `zręczność`, hero, 6); 	functions.randomPoints(wizard[3], orc[3], `inteligencja`, hero, 7);
	functions.randomPoints(wizard[4], orc[4], `charyzma`, hero, 8); }

//losowanie koloru włosów
let randomHairNumber = Math.round(Math.random()*(hairColor.length-1));
let hairHero = hairColor[randomHairNumber];
$("#drawnCharacter").append(`<p class = "basicText center width20 medievalText fontSize11em">Kolor włosów: <span class="greenText">${hairHero}</span></p>`);
hero.splice(10, 1, hairHero);

//losowanie koloru oczu
let randomEyesNumber = Math.round(Math.random()*(eyesColor.length-1));
let eyesHero = eyesColor[randomEyesNumber];
$("#drawnCharacter").append(`<p class = "basicText center width20 medievalText fontSize11em">Kolor oczu: <span class="greenText">${eyesHero}</span></p>`);
hero.splice(9, 1, eyesHero);

//losowanie koloru skóry
let randomSkinNumber = Math.round(Math.random()*(skinColor.length-1));
let skinHero = skinColor[randomSkinNumber];
$("#drawnCharacter").append(`<p class = "basicText center width20 medievalText fontSize11em">Kolor skóry: <span class="greenText">${skinHero}</span></p>`);
hero.splice(11, 1, skinHero);

//losowanie wagi
let randomWeightNumber = Math.round(Math.random()*(weight.length-1));
let weightHero = weight[randomWeightNumber];
$("#drawnCharacter").append(`<p class = "basicText center width20 medievalText fontSize11em">Waga: <span class="greenText">${weightHero}</span></p>`);
hero.splice(12, 1, weightHero);

//losowanie wzrostu
let randomHeightNumber = Math.round(Math.random()*(height.length-1));
let heightHero = height[randomHeightNumber];
$("#drawnCharacter").append(`<p class = "basicText center width20 medievalText fontSize11em">Wzrost: <span class="greenText">${heightHero}</span></p>`);
hero.splice(13, 1, heightHero);

//losowanie ekwipunku
let equipRandom = []; //utworzenie dodatkowej pustej tablicy dla losowania ekwipunku
//połączenie wszystich tabel ekwipunku
let allEquip = equipRandom.concat(equipOther, equipShield, equipArmor, equipWeapon);

//losowanie pierwszej rzeczy
let item1Number =  Math.round(Math.random()*(allEquip.length-1));
let item1 = allEquip[item1Number];

//losowanie drugiej rzeczy
let item2Number =  Math.round(Math.random()*(allEquip.length-1));
let item2 = allEquip[item2Number];

//losowanie trzeciej rzeczy
let item3Number =  Math.round(Math.random()*(allEquip.length-1));
let item3 = allEquip[item3Number];

//losowanie czwartej rzeczy
let item4Number =  Math.round(Math.random()*(allEquip.length-1));
let item4 = allEquip[item4Number];

//losowanie piątej rzeczy
let item5Number =  Math.round(Math.random()*(allEquip.length-1));
let item5 = allEquip[item5Number];

 $("#drawnCharacter").append(`<p class = "basicText center width100 medievalText fontSize11em">Ekwipunek: <span class="greenText">${item1}, ${item2}, ${item3}, ${item4}, ${item5}</span></p>`);

//zastępowanie w dodatkowej tabeli wylosowanych rzeczy
equip.push(item1, item2, item3, item4, item5);

//losowanie umiejętności
//dla wojownika
if(occupationsHero === "wojownik"){ for (let i=0; i<3; i++) { let  random = Math.round(Math.random()*(skillsWarrior.length-1)); let is = false; for (let j=0; j<skills.length; j++) if (skills[j] == random) is = true; if (is) i--; else skills[i] = random;}

$("#drawnCharacter").append(`<p class = "basicText center width100 medievalText fontSize11em">Umiejętności: <span id='randomSkils'class="greenText"></span></p>`);

for (let i=0; i<3; i++) $("#randomSkils").text(skillsWarrior[skills[0]] + ", " + skillsWarrior[skills[1]] + ", " + skillsWarrior[skills[2]]);

skills.splice(0, 1, skillsWarrior[skills[0]]); skills.splice(1, 1, skillsWarrior[skills[1]]);
skills.splice(2, 1, skillsWarrior[skills[2]]);
}

 //dla złoczyńcy
else if(occupationsHero === "złoczyńca"){ for (let i=0; i<3; i++) { let  random = Math.round(Math.random()*(skillsCriminal.length-1)); let is = false; for (let j=0; j<skills.length; j++) if (skills[j] == random) is = true; if (is) i--; else skills[i] = random;}

$("#drawnCharacter").append(`<p class = "basicText center width100 medievalText fontSize11em">Umiejętności: <span id='randomSkils'class="greenText"></span></p>`);

for (let i=0; i<3; i++) $("#randomSkils").text(skillsCriminal[skills[0]] + ", " + skillsCriminal[skills[1]] + ", " + skillsCriminal[skills[2]]);

skills.splice(0, 1, skillsCriminal[skills[0]]); skills.splice(1, 1, skillsCriminal[skills[1]]);
skills.splice(2, 1, skillsCriminal[skills[2]]);
}

// dla czarodzieja
else if(occupationsHero === "czarodziej"){ for (let i=0; i<3; i++) { let random = Math.round(Math.random()*(skillsWizard.length-1)); let is = false; for (let j=0; j<skills.length; j++) if (skills[j] == random) is = true; if (is) i--; else skills[i] = random; }

	$("#drawnCharacter").append(`<p class = "basicText center width100 medievalText fontSize11em">Umiejętności: <span id='randomSkils'class="greenText"></span></p>`);

	for (let i=0; i<3; i++) $("#randomSkils").text(skillsWizard[skills[0]] + ", " + skillsWizard[skills[1]] + ", " + skillsWizard[skills[2]]);

	skills.splice(0, 1, skillsWizard[skills[0]]); skills.splice(1, 1, skillsWizard[skills[1]]);
	skills.splice(2, 1, skillsWizard[skills[2]]);
	  }
});//koniec zdarzenia losowania postaci

//ręczne tworzenie potstaci
$("#chooseHero").on("click", ()=>{ $("#drawnCharacter").empty(); $("#playGame").hide(); $("#interactionsBtns").empty(); functions.newElement("p", "choosenHeroTitle", "WYBIERANIE POSTACI", $("#drawnCharacter")); $("#choosenHeroTitle").addClass("basicText center medievalText width100 textUnderlineGold");

//czysczenie tablicy ekwipunku z wybranych wcześniej rzeczy
equip.splice(0, 5);

	//tworzenie przycików dla tworzenia postaci
	functions.newElement("button", "createName", "imię", $("#interactionsBtns"));
	functions.newElement("button", "createRace", "rasa", $("#interactionsBtns"));
	functions.newElement("button", "createOccupation", "profesja", $("#interactionsBtns"));
	functions.newElement("button", "createFeatures", "cechy", $("#interactionsBtns"));
	functions.newElement("button", "createFeatures2", "cechy 2", $("#interactionsBtns"));
	functions.newElement("button", "createEquip", "ekwipunek", $("#interactionsBtns"));
	functions.newElement("button", "createSkills", "umiejętności", $("#interactionsBtns"));
	functions.newElement("button", "createInfo", "info", $("#interactionsBtns"));
	$("#createName, #createRace, #createOccupation, #createFeatures, #createFeatures2, #createEquip, #createSkills, #createInfo").addClass("basicBtn btnNewGame");

	$("#createName, #createRace").addClass("marginTop4vh");
	$("#createEquip, #createSkills").addClass("fontSize08em paddingUpDown1");

	//utworzenie diva dla interakcji kreatora POSTACI
	functions.newElement("div", "interactionCreator", "", $("#drawnCharacter"));

//usuwanie z tablic potencjalnych wyników ewentualnego losowania
	equip.splice(0, 5); skills.splice(0, 3); randomFeatures.splice(0, 1, 0); randomFeatures.splice(1, 1, 0); randomFeatures.splice(2, 1, 0);
	randomFeatures.splice(3, 1, 0); randomFeatures.splice(4, 1, 0);
//ustawienie tablicy hero na początkowe zawartości
hero.splice(0, 1, "nie wybrano"); hero.splice(1, 1, "nie wybrano"); hero.splice(2, 1, "nie wybrano"); hero.splice(3, 1, "nie wybrano");
hero.splice(4, 1, 0); hero.splice(5, 1, 0); hero.splice(6, 1, 0); hero.splice(7, 1, 0);
hero.splice(8, 1, 0);
hero.splice(9, 1, "nie wybrano"); hero.splice(10, 1, "nie wybrano"); hero.splice(11, 1, "nie wybrano"); hero.splice(12, 1, "nie wybrano"); hero.splice(13, 1, "nie wybrano");

//zdarzenie dla przycisku imię
$("#createName").on("click", ()=>{ functions.clearStart("wybór imienia");
functions.description("Wpisz w pole niżej swoje imię oraz wciśnij przycisk <span class='blueText'>'zatwierdź'</span>. Możesz wpisać tylko litery, cyfry nie będą barne pod uwagę. Imię można zmieniać dowolną ilość razy.");

functions.newElement("input", "giveName", "", $("#interactionCreator"));
functions.newElement("button", "acceptName", "zatwierdź", $("#interactionCreator"));

$("#giveName").addClass("marginTop3 marginLeft25 boldText medievalText center fontSize12em");
$("#acceptName").addClass("marginLeft5 medievalText boldText btnNewGame width20");

//funkcja akceptowania imienia
	functions.acceptName(hero);
}); //koniec zdarzenia dla wybierania imienia

//zdarzenie dla wybierania rasy
$("#createRace").on("click", ()=>{ functions.clearStart("wybór rasy");
functions.description("Poniżej znajdują się cztery przyciski. Dzięki nim wybierzesz rasę, która Cię interesuje. Po klinkięciu w przycisk pojawi się krótki opis wybranej rasy.");

functions.newElement("button", "human", "człowiek", $("#interactionCreator"));
functions.newElement("button", "elv", "elf", $("#interactionCreator"));
functions.newElement("button", "dwarf", "krasnolud", $("#interactionCreator"));
functions.newElement("button", "orc", "ork", $("#interactionCreator"));

	$("#human, #elv, #dwarf, #orc").addClass("basicBtn btnNewGame medievalText width20 marginTop5 marginLeft4");

	$("#human").on("click", ()=>{ functions.oneRace(hero, "człowiek"); });
	$("#elv").on("click", ()=>{ functions.oneRace(hero, "elf"); });
	$("#dwarf").on("click", ()=>{ functions.oneRace(hero, "krasnolud"); });
	$("#orc").on("click", ()=>{ functions.oneRace(hero, "ork"); });
});//koniec zdarzenia dla wybierania rasy

//zdarzenie dla wybierania profesji
$("#createOccupation").on("click", ()=>{
	functions.clearStart("wybór profesji");
	functions.description("Poniżej znajdują się trzy przyciski. Dzięki nim wybierzesz profesję, która Cię interesuje. Po klinkięciu w przycisk pojawi się krótki opis wybranej profesji.");

	functions.newElement("button", "warrior", "wojownik", $("#interactionCreator"));
	functions.newElement("button", "criminal", "złoczyńca", $("#interactionCreator"));
	functions.newElement("button", "wizard", "czarodziej", $("#interactionCreator"));

	$("#warrior, #criminal, #wizard").addClass("basicBtn btnNewGame medievalText width20 marginTop5 marginLeft4");

	$("#warrior").on("click", ()=>{ functions.oneOccupation(hero, "wojownik"); });
	$("#criminal").on("click", ()=>{ functions.oneOccupation(hero, "złoczyńca"); });
	$("#wizard").on("click", ()=>{ functions.oneOccupation(hero, "czarodziej"); });
});//koniec zdarzenia dla wybierania profesji

//losowanie punktów cech postaci
$("#createFeatures").on("click", () =>{
functions.clearStart("losowanie cech");
functions.description("Poniżej znajduje się pięć przycisków, dzięki którym wylosujesz ilość punktów cech, które będą odzwierciedlały fizyczne i psychiczne atrybuty Twojej postaci.");

functions.newElement("button", "force", "siła", $("#interactionCreator"));
functions.newElement("button", "strength", "wytrzymałość", $("#interactionCreator"));
functions.newElement("button", "dexterity", "zręczność", $("#interactionCreator"));
functions.newElement("button", "intelligence", "inteligencja", $("#interactionCreator"));
functions.newElement("button", "charisma", "charyzma", $("#interactionCreator"));

$("#force, #strength, #dexterity, #intelligence, #charisma").addClass("basicBtn btnNewGame medievalText width20 marginTop5 marginLeft4");

//funkcje losujące punkty cech
	functions.randomPointsFeatures($("#force"), "randomForcePoints", 0, randomFeatures);
	functions.randomPointsFeatures($("#strength"), "randomStrenghtPoints", 1, randomFeatures);
	functions.randomPointsFeatures($("#dexterity"), "randomDexterityPoints", 2, randomFeatures);
	functions.randomPointsFeatures($("#intelligence"), "randomIntelligencePoints", 3, randomFeatures);
	functions.randomPointsFeatures($("#charisma"), "randomCharismaPoints", 4, randomFeatures);
}); //koniec losowania cech

$("#createFeatures2").on("click", ()=>{
functions.clearStart("wybór cech");
functions.description("W tej części kreatora należy wybrać płeć, kolor włosów, oczu, skóry, wagę i wzrost. Poniżej są przyciski dzięki, którym należy to zrobić.");

functions.newElement("p", "titleSex", "wybór płci", $("#interactionCreator"));
$("#titleSex").addClass("basicText medievalText textUnderlineGold");

functions.newElement("button", "women", "kobieta", $("#interactionCreator"));
functions.newElement("button", "man", "mężczyzna", $("#interactionCreator"));
functions.newElement("button", "other", "nie wiadomo", $("#interactionCreator"));

$("#women").on("click", ()=>{ functions.sex(hero, "kobieta"); });
$("#man").on("click", ()=>{ functions.sex(hero, "mężczyzna"); });
$("#other").on("click", ()=>{ functions.sex(hero, "nie wiadomo"); });

$("#women, #man, #other").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");

functions.newElement("p", "titleEye", "kolor oczy", $("#interactionCreator"));	$("#titleEye").addClass("basicText medievalText textUnderlineGold");
functions.newElement("button", "hazel", "piwne", $("#interactionCreator"));
functions.newElement("button", "gray", "szare", $("#interactionCreator"));
functions.newElement("button", "brownEyes", "brązowe", $("#interactionCreator"));
functions.newElement("button", "blue", "niebieskie", $("#interactionCreator"));

$("#hazel").on("click", ()=>{ functions.eyes(hero, "piwne");	});
$("#gray").on("click", ()=>{ functions.eyes(hero, "szare");	});
$("#brownEyes").on("click", ()=>{ functions.eyes(hero, "brązowe");	});
$("#blue").on("click", ()=>{ functions.eyes(hero, "niebieskie");	});

$("#hazel, #gray, #brownEyes, #blue").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

functions.newElement("p", "titleHair", "kolor włosów", $("#interactionCreator"));	$("#titleHair").addClass("basicText medievalText textUnderlineGold");

functions.newElement("button", "blonde", "blond", $("#interactionCreator"));
functions.newElement("button", "red", "rude", $("#interactionCreator"));
functions.newElement("button", "dark", "czarne", $("#interactionCreator"));
functions.newElement("button", "colors", "farbowane", $("#interactionCreator"));

$("#blonde").on("click", ()=>{ functions.hair(hero, "blond");	});
$("#red").on("click", ()=>{ functions.hair(hero, "rude");	});
$("#dark").on("click", ()=>{ functions.hair(hero, "czarne");	});
$("#colors").on("click", ()=>{ functions.hair(hero, "farbowane");	});

$("#blonde, #red, #dark, #colors").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

functions.newElement("p", "titleSkin", "kolor skóry", $("#interactionCreator"));
$("#titleSkin").addClass("basicText medievalText textUnderlineGold");

	functions.newElement("button", "white", "biała", $("#interactionCreator"));
	functions.newElement("button", "brown", "brązowa", $("#interactionCreator"));
	functions.newElement("button", "black", "czarna", $("#interactionCreator"));
	functions.newElement("button", "redSkin", "czerwona", $("#interactionCreator"));
	functions.newElement("button", "yellow", "żółta", $("#interactionCreator"));
	functions.newElement("button", "green", "zielona", $("#interactionCreator"));
	functions.newElement("button", "tawny", "brunatna", $("#interactionCreator"));
	functions.newElement("button", "azure", "błęitna", $("#interactionCreator"));

	$("#white").on("click", ()=>{ functions.skin(hero, "biała"); });
	$("#brown").on("click", ()=>{ functions.skin(hero, "brązowa"); });
	$("#black").on("click", ()=>{ functions.skin(hero, "czarna"); });
	$("#redSkin").on("click", ()=>{ functions.skin(hero, "czerwona"); });
	$("#yellow").on("click", ()=>{ functions.skin(hero, "żółta"); });
	$("#green").on("click", ()=>{ functions.skin(hero, "zielona"); });
	$("#tawny").on("click", ()=>{ functions.skin(hero, "brunatna"); });
	$("#azure").on("click", ()=>{ functions.skin(hero, "błękitna"); });

$("#white, #brown, #black, #redSkin, #yellow, #green, #tawny, #azure").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

functions.newElement("p", "titleWeight", "waga", $("#interactionCreator"));
$("#titleWeight").addClass("basicText medievalText textUnderlineGold");

functions.newElement("button", "lessWeight", "niedowaga", $("#interactionCreator"));
functions.newElement("button", "normalWeight", "normalna", $("#interactionCreator"));
functions.newElement("button", "overWeight", "nadwaga", $("#interactionCreator"));

$("#lessWeight, #normalWeight, #overWeight").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");

$("#lessWeight").on("click", ()=>{ functions.weight(hero, "niedowaga"); });
$("#normalWeight").on("click", ()=>{ functions.weight(hero, "normalna"); });
$("#overWeight").on("click", ()=>{ functions.weight(hero, "nadwaga"); });

	functions.newElement("p", "titleHeight", "wzrost", $("#interactionCreator"));
	$("#titleHeight").addClass("basicText medievalText textUnderlineGold");

functions.newElement("button", "short", "niski", $("#interactionCreator"));
functions.newElement("button", "normal", "normalny", $("#interactionCreator"));
functions.newElement("button", "tall", "wysoki", $("#interactionCreator"));

$("#short").on("click", ()=>{ functions.height(hero, "niski"); });
$("#normal").on("click", ()=>{ functions.height(hero, "normalny"); });
$("#tall").on("click", ()=>{ functions.height(hero, "wysoki"); });

$("#short, #normal, #tall").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");
});// koniec przycisku "cechy 2"

//wybieranie ekwipunku
$("#createEquip").on("click", ()=>{ functions.clearStart("wybór ekwipunku");
functions.description("Ta część podzielona jest zasadniczo na dwie części. W pierwszej możesz wybrać (w sumie) pięć rzeczy z kategorii: broń, zbroje, tarcze i inne. W drugiej części dzięki przyciskom, będzie można usunąć wcześniej wybrane przedmioty.");

//funkcja wybierania i usuwania rzeczy z ekwipunku
function chooseItem(whatClick, whatPush){
	whatClick.on("click", () =>{
		functions.itemsAddRemove(whatClick, whatPush, equip); }); //koniec funkcji wybierania i usuwania rzeczy z ekwipunku
}

//broń
	functions.newElement("p", "weapon", "broń", $("#interactionCreator"));
	$("#weapon").addClass("basicText medievalText textUnderlineGold");
	functions.newElement("button", "dagger", "sztylet", $("#interactionCreator"));
  chooseItem($("#dagger"), "sztylet");
	functions.newElement("button", "woodenStick", "drewniana pałka", $("#interactionCreator"));
	chooseItem($("#woodenStick"), "drewniana pałka");
	functions.newElement("button", "shortSword", "krótki miecz", $("#interactionCreator"));
	chooseItem($("#shortSword"), "krótki miecz");
	functions.newElement("button", "sabre", "szabla", $("#interactionCreator"));
	chooseItem($("#sabre"), "szable");
	functions.newElement("button", "spear", "włócznia", $("#interactionCreator"));
	chooseItem($("#spear"), "włócznia");
	functions.newElement("button", "slingshot", "proca", $("#interactionCreator"));
	chooseItem($("#slingshot"), "proca");
	functions.newElement("button", "bow", "łuk", $("#interactionCreator"));
	chooseItem($("#bow"), "łuk");

	$("#dagger, #woodenStick, #shortSword, #sabre, #spear, #slingshot, #bow").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

	//zbroje
		functions.newElement("p", "armor", "zbroje", $("#interactionCreator"));
		$("#armor").addClass("basicText medievalText textUnderlineGold");
		functions.newElement("button", "gambison", "przeszywanica", $("#interactionCreator"));
		chooseItem($("#gambison"), "przeszywanica");
		functions.newElement("button", "leather", "zbr. skórzana", $("#interactionCreator"));
		chooseItem($("#leather"), "zbr. skórzana");
		functions.newElement("button", "studded", "zbr. ćwiekowana", $("#interactionCreator"));
		chooseItem($("#studded"), "zbr. ćwiekowana");

		$("#gambison, #leather, #studded").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");

	//tarcze
		functions.newElement("p", "shield", "tarcze", $("#interactionCreator"));
		$("#shield").addClass("basicText medievalText textUnderlineGold");
		functions.newElement("button", "buckler", "puklerz", $("#interactionCreator"));
		chooseItem($("#buckler"), "puklerz");
		functions.newElement("button", "smallWodden", "mała tarcza drew.", $("#interactionCreator"));
		chooseItem($("#smallWodden"), "mała tarcza drew.");
		functions.newElement("button", "smallMetal", "mała tarcza metal.", $("#interactionCreator"));
		chooseItem($("#smallMetal"), "mała tarcza metal.");

		$("#buckler, #smallWodden, #smallMetal").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");

		//inne
			functions.newElement("p", "other", "inne", $("#interactionCreator"));
			$("#other").addClass("basicText medievalText textUnderlineGold");

			functions.newElement("button", "stick", "kostur", $("#interactionCreator"));
				chooseItem($("#stick"), "kostur");
			functions.newElement("button", "moneyBag", "mieszek", $("#interactionCreator"));
				chooseItem($("#moneyBag"), "mieszek");
			functions.newElement("button", "travelBag", "torba podróżna", $("#interactionCreator"));
				chooseItem($("#travelBag"), "torba podróżna");
			functions.newElement("button", "purse", "sakwa", $("#interactionCreator"));
				chooseItem($("#purse"), "sakwa");
			functions.newElement("button", "backpack", "plecak", $("#interactionCreator"));
				chooseItem($("#backpack"), "plecak");
			functions.newElement("button", "canteen", "manierka", $("#interactionCreator"));
				chooseItem($("#canteen"), "manierka");
			functions.newElement("button", "pot", "sagan", $("#interactionCreator"));
				chooseItem($("#pot"), "sagan");
			functions.newElement("button", "blanket", "koc", $("#interactionCreator"));
			chooseItem($("#blanket"), "koc");
			functions.newElement("button", "tubePartschmen", "tuba na pergaminy",
			$("#interactionCreator"));
			chooseItem($("#tubePartschmen"), "tuba na pergaminy");
			functions.newElement("button", "penWriting", "pęk piór do pisania", $("#interactionCreator"));
			chooseItem($("#penWriting"), "pęk piór do pisania");
			functions.newElement("button", "parchments5pieces", "pergaminy 5szt.", $("#interactionCreator"));
			chooseItem($("#parchments5pieces"), "pergaminy 5szt.");
			functions.newElement("button", "ordinaryClothing", "zwykłe ubranie", $("#interactionCreator"));
			chooseItem($("#ordinaryClothing"), "zwykłe ubranie");
			functions.newElement("button", "fussyHat", "fikuśna czapka", $("#interactionCreator"));
			chooseItem($("#fussyHat"), "fikuśna czapka");
			functions.newElement("button", "coat", "płaszcz", $("#interactionCreator"));
			chooseItem($("#coat"), "płaszcz");
			functions.newElement("button", "leatherBelt", "skórzany pas", $("#interactionCreator"));
			chooseItem($("#leatherBelt"), "skórza pas");
			functions.newElement("button", "needlesThread", "igły i nici", $("#interactionCreator"));
			chooseItem($("#needlesThread"), "igły i nici");
			functions.newElement("button", "saddleCloth", "derka", $("#interactionCreator"));
			chooseItem($("#saddleCloth"), "derka");
			functions.newElement("button", "tent", "namiot", $("#interactionCreator"));
			chooseItem($("#tent"), "namiot");
			functions.newElement("button", "woodenBowl", "drewniana miska", $("#interactionCreator"));
			chooseItem($("#woodenBowl"), "drewniana miska");
			functions.newElement("button", "torch", "pochodnia", $("#interactionCreator"));
			chooseItem($("#torch"), "pochodnia");
			functions.newElement("button", "oliveLamp", "lampa oliwna", $("#interactionCreator"));
			chooseItem($("#oliveLamp"), "lampa oliwna");
			functions.newElement("button", "oilLamp", "kaganek", $("#interactionCreator"));
			chooseItem($("#oilLamp"), "kaganek");
			functions.newElement("button", "rope5m", "lina 5m", $("#interactionCreator"));
			chooseItem($("#rope5m"), "lina 5m");
			functions.newElement("button", "tinders", "hubka i krzesiwo", $("#interactionCreator"));
			chooseItem($("#tinders"), "hubka i krzesiwo");

			$("#stick, #moneyBag, #travelBag, #purse, #backpack, #canteen, #pot, #blanket, #tubePartschmen, #penWriting, #parchments5pieces, #ordinaryClothing, #fussyHat, #coat, #leatherBelt, #needlesThread, #saddleCloth, #tent, #woodenBowl, #torch, #oliveLamp, #oilLamp, #rope5m, #tinders").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

			functions.newElement("p", "toRemove", "do usunięcia", $("#interactionCreator"));
      $("#toRemove").addClass("basicText medievalText textUnderlineGold");

      functions.newElement("div", "btnToRemove", "", $("#interactionCreator"));

//pętla dla przycisków usuwania przedmiotów, gdy pownownie wejdzie się w opcje wybiernia przedmiotów
		functions.itemForRemove(equip);
});//koniec tworzenia ekwipunku

//zdarzenie dla "ręcznego" wybierania umiejętności
$("#createSkills").on("click", ()=>{
	functions.clearStart("wybór umiejętności");
	functions.description("W tej części kreatora należy wybrać płeć, kolor włosów, oczu, skóry, wagę i wzrost. Poniżej są przyciski dzięki, którym należy to zrobić.");

	functions.newElement("p", "titleWarrior", "wojownik", $("#interactionCreator"));
	$("#titleWarrior").addClass("basicText medievalText textUnderlineGold");

//funkcja wybierania umiejętności
function chooseSkill(whatClick, whatPush){ whatClick.on("click", () =>{ functions.skillsAddRemove(whatClick, whatPush, skills); }); }

//przyciski dla umiejętności wojownika
	functions.newElement("button", "survival", "szt. przetrwania", $("#interactionCreator"));
	chooseSkill($("#survival"), "szt. przetrwania");
	functions.newElement("button", "discipline", "dyscyplina", $("#interactionCreator"));
	chooseSkill($("#discipline"), "dyscyplina");
	functions.newElement("button", "argumentation", "dowodzenie", $("#interactionCreator"));
	chooseSkill($("#argumentation"), "dowodzenie");
	functions.newElement("button", "impactShield", "uderzenie tarczą", $("#interactionCreator"));
	chooseSkill($("#impactShield"), "uderzenie tarczą");
	functions.newElement("button", "horsebackRiding", "jazda konna", $("#interactionCreator"));
	chooseSkill($("#horsebackRiding"), "jazda konna");
	functions.newElement("button", "dagger", "sztylet", $("#interactionCreator"));
	chooseSkill($("#dagger"), "sztylet");
	functions.newElement("button", "shortSword", "krótki miecz", $("#interactionCreator"));
	chooseSkill($("#shortSword"), "krótki miecz");
	functions.newElement("button", "sabre", "szabla", $("#interactionCreator"));
	chooseSkill($("#sabre"), "szabla");
	functions.newElement("button", "spear", "włócznia", $("#interactionCreator"));
	chooseSkill($("#spear"), "włócznia");
	functions.newElement("button", "bow", "łuk", $("#interactionCreator"));
	chooseSkill($("#bow"), "łuk");
	functions.newElement("button", "buckler", "puklerz", $("#interactionCreator"));
	chooseSkill($("#buckler"), "puklerz");
	functions.newElement("button", "smallWoodenShield", "mała tarcza drew.", $("#interactionCreator"));
	chooseSkill($("#smallWoodenShield"), "mała tarcza drew.");
	functions.newElement("button", "smallMetalShield", "mała tarcza metal.", $("#interactionCreator"));
	chooseSkill($("#smallMetalShield"), "mała tarcza metal.");

	$("#survival, #discipline, #argumentation, #impactShield, #horsebackRiding, #dagger, #shortSword, #sabre, #spear, #bow, #buckler, #smallWoodenShield, #smallMetalShield").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

//przyciski dla umiejętności złoczyńcy
	functions.newElement("p", "titleCriminal", "złoczyńca", $("#interactionCreator"));
	$("#titleCriminal").addClass("basicText medievalText textUnderlineGold");

	functions.newElement("button", "poisons", "trucizny", $("#interactionCreator"));
	chooseSkill($("#poisons"), "trucizny");
	functions.newElement("button", "climb", "wspinaczka", $("#interactionCreator"));
	chooseSkill($("#climb"), "wspinaczka");
	functions.newElement("button", "acting", "aktorstwo", $("#interactionCreator"));
	chooseSkill($("#acting"), "aktorstwo");
	functions.newElement("button", "acrobatics", "akrobatyka", $("#interactionCreator"));
	chooseSkill($("#acrobatics"), "akrobatyka");
	functions.newElement("button", "traps", "pułapki", $("#interactionCreator"));
	chooseSkill($("#traps"), "pułapki");
	functions.newElement("button", "sneak", "skradanie się", $("#interactionCreator"));
	chooseSkill($("#sneak"), "skradanie się");
	functions.newElement("button", "theft", "kradzież", $("#interactionCreator"));
	chooseSkill($("#theft"), "kradzież");
	functions.newElement("button", "dodge", "uniki", $("#interactionCreator"));
	chooseSkill($("#dodge"), "uniki");
	functions.newElement("button", "bluff", "blefowanie", $("#interactionCreator"));
	chooseSkill($("#bluff"), "blefownie");
	functions.newElement("button", "woddenStick", "drewniana pałka", $("#interactionCreator"));
	chooseSkill($("#woodenStick"), "drewniana pałka");

	$("#poisons, #climb, #acting, #acrobatics, #traps, #sneak, #theft, #dodge, #bluff, #woddenStick").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

//przyciski dla umiejętności czarodzieja
functions.newElement("p", "titleWizard", "czarodziej", $("#interactionCreator"));
$("#titleWizard").addClass("basicText medievalText textUnderlineGold");

functions.newElement("button", "writingRead", "czytanie i pisanie", $("#interactionCreator"));
chooseSkill($("#writingRead"), "czytanie i pisanie");
functions.newElement("button", "summonOvertake", "przyw./odp. demona", $("#interactionCreator"));
chooseSkill($("#summonOvertake"), "przyw./odp. demona");
functions.newElement("button", "divination", "wróżbiarstwo", $("#interactionCreator"));
chooseSkill($("#divination"), "wróżbiarstwo");
functions.newElement("button", "healing", "leczenie ran", $("#interactionCreator"));
chooseSkill($("#healing"), "leczenie ran");
functions.newElement("button", "castSpell", "rzucanie czarów", $("#interactionCreator"));
chooseSkill($("#castSpell"), "rzucanie czarów");
functions.newElement("button", "createPotion", "tworz. eliksirów", $("#interactionCreator"));
chooseSkill($("#createPotion"), "tworz. eliksirów");
functions.newElement("button", "createMagItem", "tworz. mag. przedm.", $("#interactionCreator"));
chooseSkill($("#createMagItem"), "tworz. mag. przedm.");
functions.newElement("button", "createBalm", "tworzenie maści", $("#interactionCreator"));
chooseSkill($("#createBalm"), "tworzenie maści");
functions.newElement("button", "createRunes", "tworzenie run", $("#interactionCreator"));
chooseSkill($("#createRunes"), "tworzenie run");
functions.newElement("button", "astrology", "astrologia", $("#interactionCreator"));
chooseSkill($("#astrology"), "astrologia");
functions.newElement("button", "herbalism", "zielarstwo", $("#interactionCreator"));
chooseSkill($("#herbalism"), "zielarstwo");

$("#writingRead, #summonOvertake, #divination, #healing, #castSpell, #createPotion, #createMagItem, #createBalm, #createRunes, #astrology, #herbalism").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

$("#summonOvertake").addClass("fontSize09em");
$("#createMagItem").addClass("fontSize09em");

functions.newElement("p", "toRemove", "do usunięcia", $("#interactionCreator"));
$("#toRemove").addClass("basicText medievalText textUnderlineGold");

functions.newElement("div", "btnToRemove", "", $("#interactionCreator"));

//pętla dla przycisków usuwania umiejetności, gdy pownownie wejdzie się w opcje wybiernia umiejętności
functions.skillsToRemove(skills);
});//koniec zdarzenia dla "ręcznego" wybierania umiejętności

//zdarzenie dla informacji zbiorczej wszystkich dokonanych wyborów
$("#createInfo").on("click", ()=>{
	functions.clearStart("Twoja postać.");
	functions.description("Poniżej znajdują się Twoje wybory. W tej sekcji możesz je sprawdzić oraz zastanowić się nad ewentualnymi zmianami. Po dokonaniu wszystkich wyborów, to po lewej stronie pod przyciskami powinien ukazać się przycisk rozpoczynający grę.");

	//funkcja do zliczania wszystkich punktów cech
//gdy nie wybrano profesji ani rasy oraz jeżeli wylosowano (lub nie wylosowano) punkty cech
	if( hero[2] == "nie wybrano" && hero[3] == "nie wybrano"){
hero.splice(4, 1, randomFeatures[0]); hero.splice(5, 1, randomFeatures[1]); hero.splice(6, 1, randomFeatures[2]); hero.splice(7, 1, randomFeatures[3]); hero.splice(8, 1, randomFeatures[4]);
}
//dla człowieka i profesji
else if(hero[2] == "człowiek" && hero[3] == "nie wybrano"){
hero.splice(4, 1, randomFeatures[0]); hero.splice(5, 1, randomFeatures[1]); hero.splice(6, 1, randomFeatures[2]); hero.splice(7, 1, randomFeatures[3]); hero.splice(8, 1, randomFeatures[4]);
}else if(hero[2] == "człowiek" && hero[3] == "wojownik"){
hero.splice(4, 1, randomFeatures[0] + warrior[0]); hero.splice(5, 1, randomFeatures[1] + warrior[1]); hero.splice(6, 1, randomFeatures[2] + warrior[2]); hero.splice(7, 1, randomFeatures[3] + warrior[3]); hero.splice(8, 1, randomFeatures[4] + warrior[4]);
}else if(hero[2] == "człowiek" && hero[3] == "złoczyńca"){
hero.splice(4, 1, randomFeatures[0] + criminal[0]); hero.splice(5, 1, randomFeatures[1] + criminal[1]); hero.splice(6, 1, randomFeatures[2] + criminal[2]); hero.splice(7, 1, randomFeatures[3] + criminal[3]); hero.splice(8, 1, randomFeatures[4] + criminal[4]);
}else if(hero[2] == "człowiek" && hero[3] == "czarodziej"){
hero.splice(4, 1, randomFeatures[0] + wizard[0]); hero.splice(5, 1, randomFeatures[1] + wizard[1]); hero.splice(6, 1, randomFeatures[2] + wizard[2]); hero.splice(7, 1, randomFeatures[3] + wizard[3]); hero.splice(8, 1, randomFeatures[4] + wizard[4]); }

//dla elfa i profesji oraz jeżeli wylosowano (lub nie wylosowano) punkty cech
else if(hero[2] == "elf" && hero[3] == "nie wybrano"){
hero.splice(4, 1, randomFeatures[0] + elv[0]); hero.splice(5, 1, randomFeatures[1] + elv[1]);
hero.splice(6, 1, randomFeatures[2] + elv[2]); hero.splice(7, 1, randomFeatures[3] + elv[3]);
hero.splice(8, 1, randomFeatures[4] + elv[4]);
}else if(hero[2] == "elf" && hero[3] == "wojownik"){
hero.splice(4, 1, randomFeatures[0] + elv[0] + warrior[0]); hero.splice(5, 1, randomFeatures[1] + elv[1] + warrior[1]); hero.splice(6, 1, randomFeatures[2] + elv[2] + warrrior[2]); hero.splice(7, 1, randomFeatures[3] + elv[3] + warrrior[3]); hero.splice(8, 1, randomFeatures[4] + elv[4] + warrrior[4]);
}else if(hero[2] == "elf" && hero[3] == "złoczyńca"){
hero.splice(4, 1, randomFeatures[0] + elv[0] + criminal[0]); hero.splice(5, 1, randomFeatures[1] + elv[1] + criminal[1]); hero.splice(6, 1, randomFeatures[2] + elv[2] + criminal[2]);hero.splice(7, 1, randomFeatures[3] + elv[3] + criminal[3]);
hero.splice(8, 1, randomFeatures[4] + elv[4] + criminal[4]);
}else if(hero[2] == "elf" && hero[3] == "czarodziej"){
hero.splice(4, 1, randomFeatures[0] + elv[0] + wizard[0]); hero.splice(5, 1, randomFeatures[1] + elv[1] + wizard[1]); hero.splice(6, 1, randomFeatures[2] + elv[2] + wizard[2]);
hero.splice(7, 1, randomFeatures[3] + elv[3] + wizard[3]); hero.splice(8, 1, randomFeatures[4] + elv[4] + wizard[4]);}

//dla krasnoluda i profesji oraz jeżeli wylosowano (lub nie wylosowano) punkty cech
else if(hero[2] == "krasnolud" && hero[3] == "nie wybrano"){
hero.splice(4, 1, randomFeatures[0] + dwarf[0]); hero.splice(5, 1, randomFeatures[1] + dwarf[1]); hero.splice(6, 1, randomFeatures[2] + dwarf[2]); hero.splice(7, 1, randomFeatures[3] + dwarf[3]); hero.splice(8, 1, randomFeatures[4] + dwarf[4]); }
else if(hero[2] == "krasnolud" && hero[3] == "wojownik"){
hero.splice(4, 1, randomFeatures[0] + dwarf[0] + warrior[0]); hero.splice(5, 1, randomFeatures[1] + dwarf[1] + warrior[1]); hero.splice(6, 1, randomFeatures[2] + dwarf[2] + warrior[2]); hero.splice(7, 1, randomFeatures[3] + dwarf[3] + warrior[3]); hero.splice(8, 1, randomFeatures[4] + dwarf[4] + warrior[4]); }
else if(hero[2] == "krasnolud" && hero[3] == "złoczyńca"){
hero.splice(4, 1, randomFeatures[0] + dwarf[0] + criminal[0]); hero.splice(5, 1, randomFeatures[1] + dwarf[1] + criminal[1]); hero.splice(6, 1, randomFeatures[2] + dwarf[2] + criminal[2]); hero.splice(7, 1, randomFeatures[3] + dwarf[3] + criminal[3]); hero.splice(8, 1, randomFeatures[4] + dwarf[4] + criminal[4]); }
else if(hero[2] == "krasnolud" && hero[3] == "czarodziej"){
hero.splice(4, 1, randomFeatures[0] + dwarf[0] + wizard[0]); hero.splice(5, 1, randomFeatures[1] + dwarf[1] + wizard[1]); hero.splice(6, 1, randomFeatures[2] + dwarf[2] + wizard[2]); hero.splice(7, 1, randomFeatures[3] + dwarf[3] + wizard[3]); hero.splice(8, 1, randomFeatures[4] + dwarf[4] + wizard[4]); }

//dla orka i profesji oraz jeżeli wylosowano (lub nie wylosowano) punkty cech
else if(hero[2] == "ork" && hero[3] == "nie wybrano"){
hero.splice(4, 1, randomFeatures[0] + orc[0]); hero.splice(5, 1, randomFeatures[1] + orc[1]);
hero.splice(6, 1, randomFeatures[2] + orc[2]); hero.splice(7, 1, randomFeatures[3] + orc[3]);
hero.splice(8, 1, randomFeatures[4] + orc[4]); }
else if(hero[2] == "ork" && hero[3] == "wojownik"){
hero.splice(4, 1, randomFeatures[0] + orc[0] + warrior[0]); hero.splice(5, 1, randomFeatures[1] + orc[1] + warrior[1]); hero.splice(6, 1, randomFeatures[2] + orc[2] + warrior[2]);
hero.splice(7, 1, randomFeatures[3] + orc[3] + warrior[3]); hero.splice(8, 1, randomFeatures[4] + orc[4] + warrior[4]); }
else if(hero[2] == "ork" && hero[3] == "złoczyńca"){
hero.splice(4, 1, randomFeatures[0] + orc[0] + criminal[0]); hero.splice(5, 1, randomFeatures[1] + orc[1] + criminal[1]); hero.splice(6, 1, randomFeatures[2] + orc[2] + criminal[2]); hero.splice(7, 1, randomFeatures[3] + orc[3] + criminal[3]); hero.splice(8, 1, randomFeatures[4] + orc[4] + criminal[4]); }
else if(hero[2] == "ork" && hero[3] == "czarodziej"){
hero.splice(4, 1, randomFeatures[0] + orc[0] + wizard[0]); hero.splice(5, 1, randomFeatures[1] + orc[1] + wizard[1]); hero.splice(6, 1, randomFeatures[2] + orc[2] + wizard[2]); hero.splice(7, 1, randomFeatures[3] + orc[3] + wizard[3]); hero.splice(8, 1, randomFeatures[4] + orc[4] + wizard[4]); }

//punkty cech jezeli ne wybrało się rasy a wybrało się profesję (z wylosowanymi, lub nie, punktami cech)
else if(hero[2] == "nie wybrano" && hero[3] == "wojownik"){
hero.splice(4, 1, randomFeatures[0] + warrior[0]); hero.splice(5, 1, randomFeatures[1] + warrior[1]); hero.splice(6, 1, randomFeatures[2] + warrior[2]); hero.splice(7, 1, randomFeatures[3] + warrior[3]); hero.splice(8, 1, randomFeatures[4] + warrior[4]); }
else if(hero[2] == "nie wybrano" && hero[3] == "złoczyńca"){
hero.splice(4, 1, randomFeatures[0] + criminal[0]); hero.splice(5, 1, randomFeatures[1] + criminal[1]); hero.splice(6, 1, randomFeatures[2] + criminal[2]); hero.splice(7, 1, randomFeatures[3] + criminal[3]); hero.splice(8, 1, randomFeatures[4] + criminal[4]);
}
else if(hero[2] == "nie wybrano" && hero[3] == "czarodziej"){
hero.splice(4, 1, randomFeatures[0] + wizard[0]); hero.splice(5, 1, randomFeatures[1] + wizard[1]); hero.splice(6, 1, randomFeatures[2] + wizard[2]); hero.splice(7, 1, randomFeatures[3] + wizard[3]); hero.splice(8, 1, randomFeatures[4] + wizard[4]); }
	//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - waga, 13-wzrost

functions.newElement("div", "first", "", $("#interactionCreator"));
$("#first").addClass("flexForBtns");
$("#first").append("<p class='basicText center width33 medievalText fontSize11em'>Imię: <span class='greenText'>" + hero[0] + "</span></p>");
$("#first").append("<p class='basicText center width33 medievalText fontSize11em'>Płeć: <span class='greenText'>" + hero[1] + "</span></p>");
$("#first").append("<p class='basicText center width33 medievalText fontSize11em'>Rasa: <span class='greenText'>" + hero[2] + "</span></p>");
$("#first").append("<p class='basicText center width33 medievalText fontSize11em'>Profesja: <span class='greenText'>" + hero[3] + "</span></p>");

functions.newElement("div", "second", "", $("#interactionCreator"));
$("#second").addClass("flexForBtns");

$("#second").append("<p class='basicText center width24 medievalText fontSize11em'>Siła: <span class='greenText'>" + hero[4] + "</span></p>");
$("#second").append("<p class='basicText center width24 medievalText fontSize11em'>wytrzymałość: <span class='greenText'>" + hero[5] + "</span></p>");
$("#second").append("<p class='basicText center width24 medievalText fontSize11em'>zręczność: <span class='greenText'>" + hero[6] + "</span></p>");
$("#second").append("<p class='basicText center width24 medievalText fontSize11em'>Inteligencja: <span class='greenText'>" + hero[7] + "</span></p>");
$("#second").append("<p class='basicText center width24 medievalText fontSize11em'>charyzma: <span class='greenText'>" + hero[8] + "</span></p>");

functions.newElement("div", "third", "", $("#interactionCreator"));
$("#third").addClass("flexForBtns");

$("#third").append("<p class='basicText center width33 medievalText fontSize11em'>Kolor oczu: <span class='greenText'>" + hero[9] + "</span></p>");
$("#third").append("<p class='basicText center width33 medievalText fontSize11em'>Kolor włosów: <span class='greenText'>" + hero[10] + "</span></p>");
$("#third").append("<p class='basicText center width33 medievalText fontSize11em'>Kolor skóry: <span class='greenText'>" + hero[11] + "</span></p>");
$("#third").append("<p class='basicText center width33 medievalText fontSize11em'>Waga: <span class='greenText'>" + hero[12] + "</span></p>");
$("#third").append("<p class='basicText center width33 medievalText fontSize11em'>Wzrost: <span class='greenText'>" + hero[13] + "</span></p>");

functions.newElement("div", "fourth", "", $("#interactionCreator"));
$("#fourth").append("<p class='basicText center width100 medievalText fontSize11em'>Umiejętności: <span class='greenText'>" + skills + "</span></p>");

functions.newElement("div", "fifth", "", $("#interactionCreator"));
$("#fifth").append("<p class='basicText center width100 medievalText fontSize11em'>Ekwipunek: <span class='greenText'>" + equip + "</span></p>");

//walidacja dokonanych wyborów
if(hero[0] == "nie wybrano" || hero[1] == "nie wybrano" || hero[2] == "nie wybrano" || hero[3] == "nie wybrano" || hero[4] == 0 || hero[5] == 0 || hero[6] == 0 || hero[7] == 0 || hero[8] == 0 || hero[9] == "nie wybrano" || hero[10] == "nie wybrano" || hero[11] == "nie wybrano" || hero[12] == "nie wybrano" || hero[13] == "nie wybrano" || equip.length == 0 || skills.length == 0){
	$("#playGame").remove();
}else{
	functions.newElement("button", "playGame", "GRA", $("#mainBtns"));
	$("#playGame").addClass("basicBtn medievalText btnNewGame");
  $("#playGame").on("click", ()=>{
        $("#mainBtns, #interactionsBtns, #mainPart").empty();
          intro.intro();
  });
}
});//koniec zdarzenia dla informacji zbiorczej wszystkich dokonanych wyborów

});//koniec ręcznego tworzenie postaci

module.exports.hero = hero;
}//koniec module.exports.randomChooseHeroBtns

///utworzenie paragrafu z opisem przycisków wylosuj i wybierz.
module.exports.textDescription = function(){
  $("#mainPart").html("<p id='text'>Zanim zaczniesz grę, muszisz stworzyć swoją postać. Można to zrobić na dwa sposoby. Pierwszy to wylosowanie protagonisty. Jest to sposób całkowice automatyczny i wystarczy wcisnąć przycisk <span class='blueText'>'losuj'</span>. Drugim sposobem na stworzenie własnej postaci jest jej własnoręczne utworzenie za pomocą kreatora postaci. W tym celu należy wcisnąć przycisk <span class='blueText'>'wybierz'</span>. Co robisz?</p>");
  $("#text").addClass("basicText medievalText");

 //utworzenie diva dla wylosowanej postaci
	functions.newElement("div", "drawnCharacter", "", $("#mainPart"));
}
