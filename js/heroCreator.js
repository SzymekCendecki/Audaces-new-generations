//import funkcji z pliku zewnętrznego
let functions = require("./functions.js"); //podstawowe funkcje

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
	if(raceHero == "człowiek" && occupationsHero == "wojownik"){
		functions.randomPoints(warrior[0], human[0], `siła`, hero, 4);
		functions.randomPoints(warrior[1], human[1], `wytrzymałość`, hero,  5);
		functions.randomPoints(warrior[2], human[2], `zręczność`, hero, 6);
		functions.randomPoints(warrior[3], human[3], `inteligencja`, hero,  7);
		functions.randomPoints(warrior[4], human[4], `charyzma`, hero, 8);
}

//człowiek - złoczyńca
	else if(raceHero == "człowiek" && occupationsHero == "złoczyńca"){
		functions.randomPoints(criminal[0], human[0], `siła`,hero, 4);
		functions.randomPoints(criminal[1], human[1], `wytrzymałość`, hero, 5);
		functions.randomPoints(criminal[2], human[2], `zręczność`, hero, 6);
		functions.randomPoints(criminal[3], human[3], `inteligencja`, hero, 7);
		functions.randomPoints(criminal[4], human[4], `charyzma`, hero, 8);
	}

//człowiek czarodziej
	else if(raceHero == "człowiek" && occupationsHero == "czarodziej"){
		functions.randomPoints(wizard[0], human[0], `siła`, hero, 4);
		functions.randomPoints(wizard[1], human[1], `wytrzymałość`, hero, 5);
		functions.randomPoints(wizard[2], human[2], `zręczność`, hero, 6);
		functions.randomPoints(wizard[3], human[3], `inteligencja`, hero, 7);
		functions.randomPoints(wizard[4], human[4], `charyzma`, hero, 8);
	}

//elf - wojownik
	else if(raceHero == "elf" && occupationsHero == "wojownik"){
		functions.randomPoints(warrior[0], elv[0], `siła`, hero, 4);
		functions.randomPoints(warrior[1], elv[1], `wytrzymałość`, hero, 5);
		functions.randomPoints(warrior[2], elv[2], `zręczność`, hero, 6);
		functions.randomPoints(warrior[3], elv[3], `inteligencja`, hero, 7);
		functions.randomPoints(warrior[4], elv[4], `charyzma`, hero, 8);
	}

//elf złoczyńca
else if(raceHero == "elf" && occupationsHero == "złoczyńca"){
	functions.randomPoints(criminal[0], elv[0], `siła`, hero, 4);
	functions.randomPoints(criminal[1], elv[1], `wytrzymałość`, hero, 5);
	functions.randomPoints(criminal[2], elv[2], `zręczność`, hero, 6);
	functions.randomPoints(criminal[3], elv[3], `inteligencja`, hero, 7);
	functions.randomPoints(criminal[4], elv[4], `charyzma`, hero, 8);
}

//elf czarodziej
else if(raceHero == "elf" && occupationsHero == "czarodziej"){
	functions.randomPoints(wizard[0], elv[0], `siła`, hero, 4);
	functions.randomPoints(wizard[1], elv[1], `wytrzymałość`, hero, 5);
	functions.randomPoints(wizard[2], elv[2], `zręczność`, hero, 6);
	functions.randomPoints(wizard[3], elv[3], `inteligencja`, hero, 7);
	functions.randomPoints(wizard[4], elv[4], `charyzma`, hero, 8);
}

//krasnolud - wojownik
	else if(raceHero == "krasnolud" && occupationsHero == "wojownik"){
		functions.randomPoints(warrior[0], dwarf[0], `siła`, hero, 4);
		functions.randomPoints(warrior[1], dwarf[1], `wytrzymałość`, hero, 5);
		functions.randomPoints(warrior[2], dwarf[2], `zręczność`, hero, 6);
		functions.randomPoints(warrior[3], dwarf[3], `inteligencja`, hero, 7);
		functions.randomPoints(warrior[4], dwarf[4], `charyzma`, hero, 8);
	}

//krasnolud złoczyńca
else if(raceHero == "krasnolud" && occupationsHero == "złoczyńca"){
	functions.randomPoints(criminal[0], dwarf[0], `siła`, hero, 4);
	functions.randomPoints(criminal[1], dwarf[1], `wytrzymałość`, hero, 5);
	functions.randomPoints(criminal[2], dwarf[2], `zręczność`, hero, 6);
	functions.randomPoints(criminal[3], dwarf[3], `inteligencja`, hero, 7);
	functions.randomPoints(criminal[4], dwarf[4], `charyzma`, hero, 8);
}

//krasnolud czarodziej
else if(raceHero == "krasnolud" && occupationsHero == "czarodziej"){
	functions.randomPoints(wizard[0], dwarf[0], `siła`, hero, 4);
	functions.randomPoints(wizard[1], dwarf[1], `wytrzymałość`, hero, 5);
	functions.randomPoints(wizard[2], dwarf[2], `zręczność`, hero, 6);
	functions.randomPoints(wizard[3], dwarf[3], `inteligencja`, hero, 7);
	functions.randomPoints(wizard[4], dwarf[4], `charyzma`, hero, 8);
}
//ork - wojownik
	else if(raceHero == "ork" && occupationsHero == "wojownik"){
		functions.randomPoints(warrior[0], orc[0], `siła`, hero, 4);
		functions.randomPoints(warrior[1], orc[1], `wytrzymałość`, hero, 5);
		functions.randomPoints(warrior[2], orc[2], `zręczność`, hero, 6);
		functions.randomPoints(warrior[3], orc[3], `inteligencja`, hero, 7);
		functions.randomPoints(warrior[4], orc[4], `charyzma`, hero, 8);
	}

//ork złoczyńca
else if(raceHero == "ork" && occupationsHero == "złoczyńca"){
	functions.randomPoints(criminal[0], orc[0], `siła`, hero, 4);
	functions.randomPoints(criminal[1], orc[1], `wytrzymałość`, hero, 5);
	functions.randomPoints(criminal[2], orc[2], `zręczność`, hero, 6);
	functions.randomPoints(criminal[3], orc[3], `inteligencja`, hero, 7);
	functions.randomPoints(criminal[4], orc[4], `charyzma`, hero, 8);
}

//ork czarodziej
else if(raceHero == "ork" && occupationsHero == "czarodziej"){
	functions.randomPoints(wizard[0], orc[0], `siła`, hero, 4);
	functions.randomPoints(wizard[1], orc[1], `wytrzymałość`, hero, 5);
	functions.randomPoints(wizard[2], orc[2], `zręczność`, hero, 6);
	functions.randomPoints(wizard[3], orc[3], `inteligencja`, hero, 7);
	functions.randomPoints(wizard[4], orc[4], `charyzma`, hero, 8);
}

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

//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - waga, 13-wzrost

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
$("#chooseHero").on("click", ()=>{
	$("#drawnCharacter").empty(); $("#playGame").hide(); $("#interactionsBtns").empty();
	functions.newElement("p", "choosenHeroTitle", "WYBIERANIE POSTACI", $("#drawnCharacter"));
	$("#choosenHeroTitle").addClass("basicText center medievalText width100 textUnderlineGold");

	//torzenie przycików dla tworzenia postaci
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
	equip.splice(0, 5); skills.splice(0, 3);

//ustawienie tablicy hero na początkowe zawartości
hero.splice(0, 1, "nie wybrano"); hero.splice(1, 1, "nie wybrano"); hero.splice(2, 1, "nie wybrano"); hero.splice(3, 1, "nie wybrano");
hero.splice(4, 1, 0); hero.splice(5, 1, 0); hero.splice(6, 1, 0); hero.splice(7, 1, 0);
hero.splice(8, 1, 0);
hero.splice(9, 1, "nie wybrano"); hero.splice(10, 1, "nie wybrano"); hero.splice(11, 1, "nie wybrano"); hero.splice(12, 1, "nie wybrano"); hero.splice(13, 1, "nie wybrano");

//zdarzenie dla przycisku imię
$("#createName").on("click", ()=>{
	$("#interactionCreator").empty();
	functions.newElement("div", "description", "", $("#interactionCreator"));
	$("#interactionCreator").addClass("width100");
	functions.newElement("p", "title", "wybór imienia", $("#interactionCreator"));
	$("#title").addClass("basicText medievalText textUnderlineGold");

	functions.newElement("p", "descriptionName", "", $("#interactionCreator"));
$("#descriptionName").html("<p id='text'>Wpisz w pole niżej swoje imię oraz wciśnij przycisk <span class='blueText'>'zatwierdź'</span>. Możesz wpisać tylko litery, cyfry nie będą barne pod uwagę. Imię można zmieniać dowolną ilość razy.</p>");

	functions.newElement("input", "giveName", "", $("#interactionCreator"));
	functions.newElement("button", "acceptName", "zatwierdź", $("#interactionCreator"));

	$("#descriptionName").addClass("medievalText boldText marginTop3");
	$("#giveName").addClass("marginTop3 marginLeft25 boldText medievalText center fontSize12em");
	$("#acceptName").addClass("marginLeft5 medievalText boldText btnNewGame width20");

	//funkcja wpisywania imienia
		$("#acceptName").on("click", () =>{
		let nameInput = $("#giveName").val().replace(/\d/g,'');
	if(nameInput == ""){
		$("#alerts").html("<p class='redText boldText fontSize12em medievalText'>nie wybrano imienia</p>");
	}else{
		 hero.splice(0, 1, nameInput);
		 $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrane imię to: <span class='blueText'>" + nameInput + "</span></p>");
	}
	setTimeout(function(){ $("#alerts").empty(); }, 5000);
});
}); //koniec zdarzenia dla wybierania imienia

//zdarzenie dla wybierania rasy
$("#createRace").on("click", ()=>{
	$("#interactionCreator").empty();
	functions.newElement("div", "description", "", $("#interactionCreator"));
	$("#interactionCreator").addClass("width100");
	functions.newElement("p", "title", "wybór rasy", $("#interactionCreator"));
	$("#title").addClass("basicText medievalText textUnderlineGold");

	functions.newElement("p", "descriptionName", "", $("#interactionCreator"));
	$("#descriptionName").html("<p id='text'>Poniżej znajdują się cztery przyciski. Dzięki nim wybierzesz rasę, która Cię interesuje. Po klinkięciu w przycisk pojawi się krótki opis wybranej rasy.</p>");

	$("#descriptionName").addClass("medievalText boldText marginTop3");

	functions.newElement("button", "human", "człowiek", $("#interactionCreator"));
	functions.newElement("button", "elv", "elf", $("#interactionCreator"));
	functions.newElement("button", "dwarf", "krasnolud", $("#interactionCreator"));
	functions.newElement("button", "orc", "ork", $("#interactionCreator"));

	$("#human, #elv, #dwarf, #orc").addClass("basicBtn btnNewGame medievalText width20 marginTop5 marginLeft4");

	$("#human").on("click", ()=>{
		hero.splice(2, 1, "człowiek");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>człowiek</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#elv").on("click", ()=>{
		hero.splice(2, 1, "elf");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>elf</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#dwarf").on("click", ()=>{
		hero.splice(2, 1, "krasnolud");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>krasnolud</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#orc").on("click", ()=>{
		hero.splice(2, 1, "ork");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>ork</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});
});//koniec zdarzenia dla wybierania rasy

//zdarzenie dla wybierania profesji
$("#createOccupation").on("click", ()=>{
	$("#interactionCreator").empty();
	functions.newElement("div", "description", "", $("#interactionCreator"));
	$("#interactionCreator").addClass("width100");
	functions.newElement("p", "title", "wybór profesji", $("#interactionCreator"));
	$("#title").addClass("basicText medievalText textUnderlineGold");

	functions.newElement("p", "descriptionName", "", $("#interactionCreator"));
	$("#descriptionName").html("<p id='text'>Poniżej znajdują się trzy przyciski. Dzięki nim wybierzesz profesję, która Cię interesuje. Po klinkięciu w przycisk pojawi się krótki opis wybranej profesji.</p>");

	$("#descriptionName").addClass("medievalText boldText marginTop3");

	functions.newElement("button", "warrior", "wojownik", $("#interactionCreator"));
	functions.newElement("button", "criminal", "złoczyńca", $("#interactionCreator"));
	functions.newElement("button", "wizard", "czarodziej", $("#interactionCreator"));

	$("#warrior, #criminal, #wizard").addClass("basicBtn btnNewGame medievalText width20 marginTop5 marginLeft4");

	$("#warrior").on("click", ()=>{
		hero.splice(3, 1, "wojownik");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana profesja to: <span class='blueText'>wojownik</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#criminal").on("click", ()=>{
		hero.splice(3, 1, "złoczyńca");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana profesja to: <span class='blueText'>złoczyńca</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#wizard").on("click", ()=>{
		hero.splice(3, 1, "czarodziej");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana profesja to: <span class='blueText'>czarodziej</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});
});//koniec zdarzenia dla wybierania profesji

//losowanie punktów cech postaci
$("#createFeatures").on("click", () =>{
	$("#interactionCreator").empty();
	functions.newElement("div", "description", "", $("#interactionCreator"));
	$("#interactionCreator").addClass("width100");
	functions.newElement("p", "title", "losowanie cech", $("#interactionCreator"));
	$("#title").addClass("basicText medievalText textUnderlineGold");

	functions.newElement("p", "descriptionName", "", $("#interactionCreator"));
	$("#descriptionName").html("<p id='text'>Poniżej znajduje się pięć przycisków, dzięki którym wylosujesz ilość punktów cech, które będą odzwierciedlały fizyczne i psychiczne atrybuty Twojej postaci.</p>");

	$("#descriptionName").addClass("medievalText boldText marginTop3");

	functions.newElement("button", "force", "siła", $("#interactionCreator"));
	functions.newElement("button", "strength", "wytrzymałość", $("#interactionCreator"));
	functions.newElement("button", "dexterity", "zręczność", $("#interactionCreator"));
	functions.newElement("button", "intelligence", "inteligencja", $("#interactionCreator"));
	functions.newElement("button", "charisma", "charisma", $("#interactionCreator"));

	$("#force, #strength, #dexterity, #intelligence, #charisma").addClass("basicBtn btnNewGame medievalText width20 marginTop5 marginLeft4");

	//funkcja optymalizująca losowanie cechy
			function randomPointsFeatures(element, name, number){
				element.on("click", ()=>{
				let name = Math.round(Math.random()*50);
				randomFeatures.splice(number, 1, name);
				if(randomFeatures[0] !== 0 && randomFeatures[1] !== 0 && randomFeatures[2] !== 0 && randomFeatures[3] !== 0 && randomFeatures[4] !== 0){
					$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wylosowano wszystkie cechy</p>");
					setTimeout(function(){ $("#alerts").empty(); }, 5000);
				} }); }

				//funkcje losujące punkty cech
				randomPointsFeatures($("#force"), "randomForcePoints", 0);
				randomPointsFeatures($("#strength"), "randomStrenghtPoints", 1);
				randomPointsFeatures($("#dexterity"), "randomDexterityPoints", 2);
				randomPointsFeatures($("#intelligence"), "randomIntelligencePoints", 3);
				randomPointsFeatures($("#charisma"), "randomCharismaPoints", 4);
}); //koniec losowania cech

$("#createFeatures2").on("click", ()=>{
	$("#interactionCreator").empty();
	functions.newElement("div", "description", "", $("#interactionCreator"));
	$("#interactionCreator").addClass("width100");
	functions.newElement("p", "title", "wybór cech", $("#interactionCreator"));
	$("#title").addClass("basicText medievalText textUnderlineGold");

	functions.newElement("p", "descriptionName", "", $("#interactionCreator"));
	$("#descriptionName").html("<p id='text'>W tej części kreatora należy wybrać płeć, kolor włosów, oczu, skóry, wagę i wzrost. Poniżej są przyciski dzięki, którym należy to zrobić.</p>");

	$("#descriptionName").addClass("medievalText boldText marginTop3");

	functions.newElement("p", "titleSex", "wybór płci", $("#interactionCreator"));
	$("#titleSex").addClass("basicText medievalText textUnderlineGold");

	functions.newElement("button", "women", "kobieta", $("#interactionCreator"));
	functions.newElement("button", "man", "mężczyzna", $("#interactionCreator"));
	functions.newElement("button", "other", "nie wiadomo", $("#interactionCreator"));

	$("#women").on("click", ()=>{
		hero.splice(1, 1, "kobieta");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano płeć: <span class='blueText'> kobieta</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#man").on("click", ()=>{
		hero.splice(1, 1, "kobieta");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano płeć: <span class='blueText'> mężczyzna</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#other").on("click", ()=>{
		hero.splice(1, 1, "kobieta");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano płeć: <span class='blueText'> nie wiadomo</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#women, #man, #other").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");

	functions.newElement("p", "titleHair", "kolor włosów", $("#interactionCreator"));
	$("#titleHair").addClass("basicText medievalText textUnderlineGold");

	functions.newElement("button", "blonde", "blond", $("#interactionCreator"));
	functions.newElement("button", "red", "rude", $("#interactionCreator"));
	functions.newElement("button", "dark", "czarne", $("#interactionCreator"));
	functions.newElement("button", "colors", "farbowane", $("#interactionCreator"));

	$("#blonde").on("click", ()=>{
		hero.splice(10, 1, "blond");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor włosów: <span class='blueText'> blond</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#red").on("click", ()=>{
		hero.splice(10, 1, "rude");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor włosów: <span class='blueText'> rude</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#dark").on("click", ()=>{
		hero.splice(10, 1, "czarne");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor włosów: <span class='blueText'> czarne</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#colors").on("click", ()=>{
		hero.splice(10, 1, "farbowane");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor włosów: <span class='blueText'> farbowane</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

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

	$("#white").on("click", ()=>{
		hero.splice(11, 1, "biała");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor skóry: <span class='blueText'> biała</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#brown").on("click", ()=>{
		hero.splice(11, 1, "brązowa");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor skóry: <span class='blueText'> brązowa</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#black").on("click", ()=>{
		hero.splice(11, 1, "czarna");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor skóry: <span class='blueText'> czarna</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#redSkin").on("click", ()=>{
		hero.splice(11, 1, "czerwona");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor skóry: <span class='blueText'> czerwona</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#yellow").on("click", ()=>{
		hero.splice(11, 1, "zółta");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor skóry: <span class='blueText'> żółta</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#green").on("click", ()=>{
		hero.splice(11, 1, "zielona");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor skóry: <span class='blueText'> zielona</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#tawny").on("click", ()=>{
		hero.splice(11, 1, "brunatna");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor skóry: <span class='blueText'> brunatna</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#azure").on("click", ()=>{
		hero.splice(11, 1, "błękitna");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor skóry: <span class='blueText'> błękitna</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

		$("#white, #brown, #black, #redSkin, #yellow, #green, #tawny, #azure").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

		functions.newElement("p", "titleWeight", "waga", $("#interactionCreator"));
		$("#titleWeight").addClass("basicText medievalText textUnderlineGold");

		functions.newElement("button", "lessWeight", "niedowaga", $("#interactionCreator"));
		functions.newElement("button", "normalWeight", "normalna", $("#interactionCreator"));
		functions.newElement("button", "overWeight", "nadwaga", $("#interactionCreator"));

	$("#lessWeight, #normalWeight, #overWeight").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");

	$("#lessWeight").on("click", ()=>{
		hero.splice(12, 1, "niedowaga");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano wagę: <span class='blueText'> niedowaga</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#normalWeight").on("click", ()=>{
		hero.splice(12, 1, "normalna");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano wagę: <span class='blueText'> normalna</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	$("#overWeight").on("click", ()=>{
		hero.splice(12, 1, "nadwaga");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano wagę: <span class='blueText'> nadwaga</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
	});

	functions.newElement("p", "titleHeight", "wzrost", $("#interactionCreator"));
	$("#titleHeight").addClass("basicText medievalText textUnderlineGold");

		functions.newElement("button", "short", "niski", $("#interactionCreator"));
		functions.newElement("button", "normal", "normalny", $("#interactionCreator"));
		functions.newElement("button", "tall", "wysoki", $("#interactionCreator"));

		$("#short").on("click", ()=>{
			hero.splice(13, 1, "niski");
			$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano wzrost: <span class='blueText'> niski</span></p>");
			setTimeout(function(){ $("#alerts").empty(); }, 5000);
		});

		$("#normal").on("click", ()=>{
			hero.splice(13, 1, "normalna");
			$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano wzrost: <span class='blueText'> normalny</span></p>");
			setTimeout(function(){ $("#alerts").empty(); }, 5000);
		});

		$("#tall").on("click", ()=>{
			hero.splice(13, 1, "wysoki");
			$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano wzrost: <span class='blueText'> wysoki</span></p>");
			setTimeout(function(){ $("#alerts").empty(); }, 5000);
		});

	$("#short, #normal, #tall").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");
});// koniec przycisku "cechy 2"

//wybieranie ekwipunku
$("#createEquip").on("click", ()=>{
  $("#interactionCreator").empty();
  functions.newElement("div", "description", "", $("#interactionCreator"));
  $("#interactionCreator").addClass("width100");
  functions.newElement("p", "title", "wybór ekwipunku", $("#interactionCreator"));
  $("#title").addClass("basicText medievalText textUnderlineGold");

  functions.newElement("p", "descriptionName", "", $("#interactionCreator"));
	$("#descriptionName").html("<p id='text'>Ta część podzielona jest zasadniczo na dwie części. W pierwszej możesz wybrać (w sumie) pięć rzeczy z kategorii: broń, zbroje, tarcze i inne. W drugiej części dzięki przyciskom, będzie można usunąć wcześniej wybrane przedmioty.</p>");
 	$("#descriptionName").addClass("medievalText boldText marginTop3");

  function chooseItem(whatClick, whatPush){
  	whatClick.on("click", () =>{
  		if(equip.length <= 4){
        $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano rzecz: <span class='blueText'> " + whatPush + "</span></p>");
    		setTimeout(function(){ $("#alerts").empty(); }, 5000);

  			$("#btnToRemove").text(functions.newElement("button", whatPush, whatPush, $("#btnToRemove")));
  			$("#btnToRemove").find("button").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");
        equip.push(whatPush);
        console.log(equip);
  		}else{
        $("#alerts").html("<p class='redText boldText fontSize12em medievalText'>Już zostało wybrane pięć przedmiotów.");
        setTimeout(function(){ $("#alerts").empty(); }, 5000);
        equip.splice(5, 1);
        console.log(equip);
  			}
      }); //koniec funkcji kliknięcia w przycisk
}

//broń
	functions.newElement("p", "weapon", "broń", $("#interactionCreator"));
	$("#weapon").addClass("basicText medievalText textUnderlineGold");
	functions.newElement("button", "dagger", "sztylet", $("#interactionCreator"));
  chooseItem($("#dagger"), "sztylet");
	functions.newElement("button", "woodenStick", "drewniana pałka", $("#interactionCreator"));
	functions.newElement("button", "shortSword", "krótki miecz", $("#interactionCreator"));
	functions.newElement("button", "sabre", "szabla", $("#interactionCreator"));
	functions.newElement("button", "spear", "włócznia", $("#interactionCreator"));
	functions.newElement("button", "slingshot", "proca", $("#interactionCreator"));
	functions.newElement("button", "bow", "łuk", $("#interactionCreator"));

	$("#dagger, #woodenStick, #shortSword, #sabre, #spear, #slingshot, #bow").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

	//zbroje
		functions.newElement("p", "armor", "zbroje", $("#interactionCreator"));
		$("#armor").addClass("basicText medievalText textUnderlineGold");
		functions.newElement("button", "gambison", "przeszywanica", $("#interactionCreator"));
		functions.newElement("button", "leather", "zbr. skórzana", $("#interactionCreator"));
		functions.newElement("button", "studded", "zbr. ćwiekowana", $("#interactionCreator"));

		$("#gambison, #leather, #studded").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");

	//tarcze
		functions.newElement("p", "shield", "tarcze", $("#interactionCreator"));
		$("#shield").addClass("basicText medievalText textUnderlineGold");
		functions.newElement("button", "buckler", "puklerz", $("#interactionCreator"));
		functions.newElement("button", "smallWodden", "mała tarcza drew.", $("#interactionCreator"));
		functions.newElement("button", "smallMetal", "mała tarcza metal.", $("#interactionCreator"));

		$("#buckler, #smallWodden, #smallMetal").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");

		//inne
			functions.newElement("p", "other", "inne", $("#interactionCreator"));
			$("#other").addClass("basicText medievalText textUnderlineGold");

			functions.newElement("button", "stick", "kostur", $("#interactionCreator"));
			functions.newElement("button", "moneyBag", "mieszek", $("#interactionCreator"));
			functions.newElement("button", "travelBag", "torba podróżna", $("#interactionCreator"));
			functions.newElement("button", "purse", "sakwa", $("#interactionCreator"));
			functions.newElement("button", "backpack", "plecak", $("#interactionCreator"));
			functions.newElement("button", "canteen", "manierka", $("#interactionCreator"));
			functions.newElement("button", "pot", "sagan", $("#interactionCreator"));
			functions.newElement("button", "blanket", "koc", $("#interactionCreator"));
			functions.newElement("button", "tubePartschmen", "tuba na pergaminy", $("#interactionCreator"));
			functions.newElement("button", "penWriting", "pęk piór do pisania", $("#interactionCreator"));
			functions.newElement("button", "parchments5pieces", "pergaminy 5szt.", $("#interactionCreator"));
			functions.newElement("button", "ordinaryClothing", "zwykłe ubranie", $("#interactionCreator"));
			functions.newElement("button", "fussyHat", "fikuśna czapka", $("#interactionCreator"));
			functions.newElement("button", "coat", "płaszcz", $("#interactionCreator"));
			functions.newElement("button", "leatherBelt", "skórzany pas", $("#interactionCreator"));
			functions.newElement("button", "needlesThread", "igły i nici", $("#interactionCreator"));
			functions.newElement("button", "saddleCloth", "derka", $("#interactionCreator"));
			functions.newElement("button", "tent", "namiot", $("#interactionCreator"));
			functions.newElement("button", "woodenBowl", "drewniana miska", $("#interactionCreator"));
			functions.newElement("button", "torch", "pochodnia", $("#interactionCreator"));
			functions.newElement("button", "oliveLamp", "lampa oliwna", $("#interactionCreator"));
			functions.newElement("button", "oilLamp", "kaganek", $("#interactionCreator"));
			functions.newElement("button", "rope5m", "lina 5m", $("#interactionCreator"));
			functions.newElement("button", "tinders", "hubka i krzesiwo", $("#interactionCreator"));

			$("#stick, #moneyBag, #travelBag, #purse, #backpack, #canteen, #pot, #blanket, #tubePartschmen, #penWriting, #parchments5pieces, #ordinaryClothing, #fussyHat, #coat, #leatherBelt, #needlesThread, #saddleCloth, #tent, #woodenBowl, #torch, #oliveLamp, #oilLamp, #rope5m, #tinders").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

      functions.newElement("p", "toRemove", "do usunięcia", $("#interactionCreator"));
      $("#toRemove").addClass("basicText medievalText textUnderlineGold");

      functions.newElement("div", "btnToRemove", "", $("#interactionCreator"));
	});//koniec tworzenia ekwipunku

//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - waga, 13-wzrost
//let hero = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", 0, 0, 0, 0, 0, "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano"];
});//koniec ręcznego tworzenie postaci
}//koniec module.exports.randomChooseHeroBtns

///utworzenie paragrafu z opisem przycisków wylosuj i wybierz.
module.exports.textDescription = function(){
  $("#mainPart").html("<p id='text'>Zanim zaczniesz grę, muszisz stworzyć swoją postać. Można to zrobić na dwa sposoby. Pierwszy to wylosowanie protagonisty. Jest to sposób całkowice automatyczny i wystarczy wcisnąć przycisk <span class='blueText'>'losuj'</span>. Drugim sposobem na stworzenie własnej postaci jest jej własnoręczne utworzenie za pomocą kreatora postaci. W tym celu należy wcisnąć przycisk <span class='blueText'>'wybierz'</span>. Co robisz?</p>");
  $("#text").addClass("basicText medievalText");

 //utworzenie diva dla wylosowanej postaci
	functions.newElement("div", "drawnCharacter", "", $("#mainPart"));
}
