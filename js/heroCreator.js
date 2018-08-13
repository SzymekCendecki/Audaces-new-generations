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
let equipArmor = ["przeszywanica", "skórzana", "ćwiekowana"];

//tarcze
let equipShield = ["puklerz", "mała drewniana", "mała metalowa"];

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
let skillsCriminal = ["survival", "discipline", "argumentation", "impactShield", "horsebackRiding", "dagger", "shortSword", "sabre", "spear", "bow", "buckler", "smallWoodenShield", "smallMetalShield"];

//czarodzieja
let skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];

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
	  $("#drawnCharacter").empty();
	   functions.newElement("p", "choosenHeroTitle", "WYLOSOWANA POSTAĆ", $("#drawnCharacter"));
	   $("#drawnCharacter").addClass("flexForBtns");
	   $("#choosenHeroTitle").addClass("basicText center medievalText width100 textUnderlineGold");

//losowanie płci
  let randomSexNumber = Math.round(Math.random()*(sex.length-1));
  let sexHero = sex[randomSexNumber];

//losowanie imienia w oparciu o wylosowaną płeć
  if(sex[randomSexNumber] === "mężczyzna"){
    let randomNameNumber = Math.round(Math.random()*(namesMan.length-1));
	 $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Płeć: <span class="greenText">${sexHero}</span></p>`);
    let nameHero =  namesMan[randomNameNumber];
	 $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Imię: <span class="greenText">${nameHero}</span></p>`);
  }else if(sex[randomSexNumber] === "kobieta"){
	  $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Płeć: <span class="greenText">${sexHero}</span></p>`);
    let randomNameNumber = Math.round(Math.random()*(namesWomen.length-1));
    let nameHero = namesWomen[randomNameNumber];
	 $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Imię: <span class="greenText">${nameHero}</span></p>`);
  }else{
	  $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Płeć: <span class="greenText">${sexHero}</span></p>`);
    let allNames = namesMan.concat(namesWomen);
    let randomNameNumber = Math.round(Math.random()*(allNames.length-1));
    let nameHero =  allNames[randomNameNumber];
	 $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Imię: <span class="greenText">${nameHero}</span></p>`);
  }

  //losowanie profesji
  let randomOccupationNumber = Math.round(Math.random()*(occupations.length-1));
  let occupationsHero = occupations[randomOccupationNumber];
  $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Profesja: <span class="greenText">${occupationsHero}</span></p>`);

  //losowanie rasy
  let randomRaceNumber = Math.round(Math.random()*(races.length-1));
  let raceHero = races[randomRaceNumber];
  $("#drawnCharacter").append(`<p class = "basicText center width24 medievalText fontSize11em">Rasa: <span class="greenText">${raceHero}</span></p>`);

//losowanie punktów cech w zależności od rasy i profesji
//człowiek - wojownik
	if(raceHero == "człowiek" && occupationsHero == "wojownik"){
		functions.randomPoints(warrior[0], human[0], `siła`);
		functions.randomPoints(warrior[1], human[1], `wytrzymałość`);
		functions.randomPoints(warrior[2], human[2], `zręczność`)
		functions.randomPoints(warrior[3], human[3], `inteligencja`);
		functions.randomPoints(warrior[4], human[4], `charyzma`);
}

//człowiek - złoczyńca
	else if(raceHero == "człowiek" && occupationsHero == "złoczyńca"){
		functions.randomPoints(criminal[0], human[0], `siła`);
		functions.randomPoints(criminal[1], human[1], `wytrzymałość`);
		functions.randomPoints(criminal[2], human[2], `zręczność`)
		functions.randomPoints(criminal[3], human[3], `inteligencja`);
		functions.randomPoints(criminal[4], human[4], `charyzma`);
	}

//człowiek czarodziej
	else if(raceHero == "człowiek" && occupationsHero == "czarodziej"){
		functions.randomPoints(wizard[0], human[0], `siła`);
		functions.randomPoints(wizard[1], human[1], `wytrzymałość`);
		functions.randomPoints(wizard[2], human[2], `zręczność`)
		functions.randomPoints(wizard[3], human[3], `inteligencja`);
		functions.randomPoints(wizard[4], human[4], `charyzma`);
	}

//elf - wojownik
	else if(raceHero == "elf" && occupationsHero == "wojownik"){
		functions.randomPoints(warrior[0], elv[0], `siła`);
		functions.randomPoints(warrior[1], elv[1], `wytrzymałość`);
		functions.randomPoints(warrior[2], elv[2], `zręczność`)
		functions.randomPoints(warrior[3], elv[3], `inteligencja`);
		functions.randomPoints(warrior[4], elv[4], `charyzma`);
	}

//elf złoczyńca
else if(raceHero == "elf" && occupationsHero == "złoczyńca"){
	functions.randomPoints(criminal[0], elv[0], `siła`);
	functions.randomPoints(criminal[1], elv[1], `wytrzymałość`);
	functions.randomPoints(criminal[2], elv[2], `zręczność`)
	functions.randomPoints(criminal[3], elv[3], `inteligencja`);
	functions.randomPoints(criminal[4], elv[4], `charyzma`);
}

//elf czarodziej
else if(raceHero == "elf" && occupationsHero == "czarodziej"){
	functions.randomPoints(wizard[0], elv[0], `siła`);
	functions.randomPoints(wizard[1], elv[1], `wytrzymałość`);
	functions.randomPoints(wizard[2], elv[2], `zręczność`)
	functions.randomPoints(wizard[3], elv[3], `inteligencja`);
	functions.randomPoints(wizard[4], elv[4], `charyzma`);
}

//krasnolud - wojownik
	else if(raceHero == "krasnolud" && occupationsHero == "wojownik"){
		functions.randomPoints(warrior[0], dwarf[0], `siła`);
		functions.randomPoints(warrior[1], dwarf[1], `wytrzymałość`);
		functions.randomPoints(warrior[2], dwarf[2], `zręczność`)
		functions.randomPoints(warrior[3], dwarf[3], `inteligencja`);
		functions.randomPoints(warrior[4], dwarf[4], `charyzma`);
	}

//krasnolud złoczyńca
else if(raceHero == "krasnolud" && occupationsHero == "złoczyńca"){
	functions.randomPoints(criminal[0], dwarf[0], `siła`);
	functions.randomPoints(criminal[1], dwarf[1], `wytrzymałość`);
	functions.randomPoints(criminal[2], dwarf[2], `zręczność`)
	functions.randomPoints(criminal[3], dwarf[3], `inteligencja`);
	functions.randomPoints(criminal[4], dwarf[4], `charyzma`);
}

//krasnolud czarodziej
else if(raceHero == "krasnolud" && occupationsHero == "czarodziej"){
	functions.randomPoints(wizard[0], dwarf[0], `siła`);
	functions.randomPoints(wizard[1], dwarf[1], `wytrzymałość`);
	functions.randomPoints(wizard[2], dwarf[2], `zręczność`)
	functions.randomPoints(wizard[3], dwarf[3], `inteligencja`);
	functions.randomPoints(wizard[4], dwarf[4], `charyzma`);
}
//ork - wojownik
	else if(raceHero == "ork" && occupationsHero == "wojownik"){
		functions.randomPoints(warrior[0], orc[0], `siła`);
		functions.randomPoints(warrior[1], orc[1], `wytrzymałość`);
		functions.randomPoints(warrior[2], orc[2], `zręczność`)
		functions.randomPoints(warrior[3], orc[3], `inteligencja`);
		functions.randomPoints(warrior[4], orc[4], `charyzma`);
	}

//ork złoczyńca
else if(raceHero == "ork" && occupationsHero == "złoczyńca"){
	functions.randomPoints(criminal[0], orc[0], `siła`);
	functions.randomPoints(criminal[1], orc[1], `wytrzymałość`);
	functions.randomPoints(criminal[2], orc[2], `zręczność`)
	functions.randomPoints(criminal[3], orc[3], `inteligencja`);
	functions.randomPoints(criminal[4], orc[4], `charyzma`);
}

//ork czarodziej
else if(raceHero == "ork" && occupationsHero == "czarodziej"){
	functions.randomPoints(wizard[0], orc[0], `siła`);
	functions.randomPoints(wizard[1], orc[1], `wytrzymałość`);
	functions.randomPoints(wizard[2], orc[2], `zręczność`)
	functions.randomPoints(wizard[3], orc[3], `inteligencja`);
	functions.randomPoints(wizard[4], orc[4], `charyzma`);
}

});//koniec zdarzenia losowania postaci
}//koniec module.exports.randomChooseHeroBtns

///utworzenie paragrafu z opisem przycisków wylosuj i wybierz.
module.exports.textDescription = function(){
  $("#mainPart").html("<p id='text'>Zanim zaczniesz grę, muszisz stworzyć swoją postać. Można to zrobić na dwa sposoby. Pierwszy to wylosowanie protagonisty. Jest to sposób całkowice automatyczny i wystarczy wcisnąć przycisk <span class='blueText'>'losuj'</span>. Drugim sposobem na stworzenie własnej postaci jest jej własnoręczne utworzenie za pomocą kreatora postaci. W tym celu należy wcisnąć przycisk <span class='blueText'>'wybierz'</span>. Co robisz?</p>");

  $("#text").addClass("basicText medievalText");

   //utworzenie diva dla wylosowanej postaci
	functions.newElement("div", "drawnCharacter", "", $("#mainPart"));
}
