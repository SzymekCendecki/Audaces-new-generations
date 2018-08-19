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
	console.log(hero);
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
		console.log(hero);
	});

	$("#elv").on("click", ()=>{
		hero.splice(2, 1, "elf");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>elf</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
		console.log(hero);
	});

	$("#dwarf").on("click", ()=>{
		hero.splice(2, 1, "krasnolud");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>krasnolud</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
		console.log(hero);
	});

	$("#orc").on("click", ()=>{
		hero.splice(2, 1, "ork");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>ork</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
		console.log(hero);
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
		console.log(hero);
	});

	$("#criminal").on("click", ()=>{
		hero.splice(3, 1, "złoczyńca");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana profesja to: <span class='blueText'>złoczyńca</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
		console.log(hero);
	});

	$("#wizard").on("click", ()=>{
		hero.splice(3, 1, "czarodziej");
		$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana profesja to: <span class='blueText'>czarodziej</span></p>");
		setTimeout(function(){ $("#alerts").empty(); }, 5000);
		console.log(hero);
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
					console.log(randomFeatures);
				} }); }
				
				//funkcje losujące punkty cech
				randomPointsFeatures($("#force"), "randomForcePoints", 0);
				randomPointsFeatures($("#strength"), "randomStrenghtPoints", 1);
				randomPointsFeatures($("#dexterity"), "randomDexterityPoints", 2);
				randomPointsFeatures($("#intelligence"), "randomIntelligencePoints", 3);
				randomPointsFeatures($("#charisma"), "randomCharismaPoints", 4);


}); //koniec losowania cech

//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - waga, 13-wzrost
//let hero = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", 0, 0, 0, 0, 0, "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano"];
console.log(hero);


});//koniec ręcznego tworzenie postaci
}//koniec module.exports.randomChooseHeroBtns

///utworzenie paragrafu z opisem przycisków wylosuj i wybierz.
module.exports.textDescription = function(){
  $("#mainPart").html("<p id='text'>Zanim zaczniesz grę, muszisz stworzyć swoją postać. Można to zrobić na dwa sposoby. Pierwszy to wylosowanie protagonisty. Jest to sposób całkowice automatyczny i wystarczy wcisnąć przycisk <span class='blueText'>'losuj'</span>. Drugim sposobem na stworzenie własnej postaci jest jej własnoręczne utworzenie za pomocą kreatora postaci. W tym celu należy wcisnąć przycisk <span class='blueText'>'wybierz'</span>. Co robisz?</p>");

  $("#text").addClass("basicText medievalText");

   //utworzenie diva dla wylosowanej postaci
	functions.newElement("div", "drawnCharacter", "", $("#mainPart"));
}
