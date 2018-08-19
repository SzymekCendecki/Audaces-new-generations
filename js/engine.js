/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//funkcja, która tworzy nowy element DOM
module.exports.newElement = function (nameElement, idName, text, whereAppend) {
  var newElement = document.createElement(nameElement);newElement.id = idName;
  newElement.innerText = text;whereAppend.append(newElement);
};

function newElement(nameElement, idName, text, whereAppend) {
  var newElement = document.createElement(nameElement);newElement.id = idName;newElement.innerText = text;
  whereAppend.append(newElement);
}

//funkcja optymalizująca tworzenie inputów
function createNewInputAppend(nameElement, name, id, value, type, whereAppend) {
  var newElement = document.createElement(nameElement);newElement.type = type;newElement.name = name;newElement.id = id;newElement.value = value;whereAppend.append(newElement);
}

//funkcja klik dla pierwszego menu
module.exports.clickFirstMenu = function (element, element2, idElement, textElement) {
  element.on("click", function () {
    element2.children("p").remove();newElement("p", idElement, textElement, element2);element2.addClass("basicText medievalText");
  });
};

//funckcja zliczająca punkty cech w zależności od rasy, profesji oraz wylosowanej liczby
module.exports.randomPoints = function (occupationsPoints, racePoints, text, table, tablePosition) {
  var randomPoints = Math.round(Math.random() * 50);var allPoints = randomPoints + occupationsPoints + racePoints;$("#drawnCharacter").append("<p class = \"basicText center width20 medievalText fontSize11em\">" + text + (": <span class=\"greenText\">" + allPoints + "</span></p>"));table.splice(tablePosition, 1, allPoints);
};

//funkcja optymalizująca wybieranie rasy i profesji
function clickRaceOccupation(element, text, number, sourceDescription, alert) {
  element.on("click", function () {
    hero.splice(number, 1, text);alert.addClass("greenText");
    $("#choosenDescription").text(sourceDescription);

    if (text === "wojownik") {
      choosenOccupation.splice(0, 1, 5);choosenOccupation.splice(1, 1, 5);choosenOccupation.splice(2, 1, 0);choosenOccupation.splice(3, 1, 0);choosenOccupation.splice(4, 1, 0);
    } else if (text === "złoczyńca") {
      choosenOccupation.splice(0, 1, 0);choosenOccupation.splice(1, 1, 0);choosenOccupation.splice(2, 1, 10);
      choosenOccupation.splice(3, 1, 0);choosenOccupation.splice(4, 1, 0);
    } else if (text === "czarodziej") {
      choosenOccupation.splice(0, 1, 0);choosenOccupation.splice(1, 1, 0);choosenOccupation.splice(2, 1, 0);
      choosenOccupation.splice(3, 1, 5);choosenOccupation.splice(4, 1, 5);
    } else if (text === "człowiek") {
      choosenRace.splice(0, 1, 0);choosenRace.splice(1, 1, 0);choosenRace.splice(2, 1, 0);choosenRace.splice(3, 1, 0);choosenRace.splice(4, 1, 0);
    } else if (text === "elf") {
      choosenRace.splice(0, 1, -5);choosenRace.splice(1, 1, -5);
      choosenRace.splice(2, 1, 0);choosenRace.splice(3, 1, 5);choosenRace.splice(4, 1, 5);
    } else if (text === "krasnolud") {
      choosenRace.splice(0, 1, 4);choosenRace.splice(1, 1, 4);
      choosenRace.splice(2, 1, 0);choosenRace.splice(3, 1, -2);choosenRace.splice(4, 1, -3);
    } else if (text === "ork") {
      choosenRace.splice(0, 1, 5);choosenRace.splice(1, 1, 5);choosenRace.splice(2, 1, 0);choosenRace.splice(3, 1, -5);choosenRace.splice(4, 1, -5);
    }
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import funkcji z pliku zewnętrznego
var functions = __webpack_require__(0); //podstawowe funkcje

//tablica z imionami męskimi
var namesMan = ["Wortigern", "Gintor", "Hegel", "Derig", "Diggramon", "Zengowetoryk", "Deggetm", "Zigamon", "Birduk", "Ardenor", "Winterks", "Joluntik", "Menigor", "Oltis", "Kurdir"];

//tablica z imionami żeńskimi
var namesWomen = ["Wortigerna", "Hejacynta", "Dejawina", "Ludiniam", "Keoburna", "Leokamina", "Erminia", "Xynenda", "Fejmira", "Apsurginis", "Wicynia", "Jermodernia", "Sertyksa"];

//tablica z rasami
var races = ["człowiek", "elf", "krasnolud", "ork"];

//tablica z profesjami
var occupations = ["wojownik", "złoczyńca", "czarodziej"];

//tabica z płcią
var sex = ["kobieta", "mężczyzna", "nie wiadomo"];

//tablica z kolorami włosów
var hairColor = ["blond", "rude", "czarne", "farbowane"];

//tablica z kolorem oczu
var eyesColor = ["piwne", "szare", "brązowe", "niebieskie"];

//tablica z kolorem skóry
var skinColor = ["biała", "brązowa", "czarna", "czerwona", "zółta", "zielona", "brunatna", "błękitna"];

//tablica z wagą
var weight = ["niedowaga", "normalna", "nadwaga"];

//tablica ze wzrostem
var height = ["niski", "normalny", "wysoki"];

//tablice z ekwipunkiem
//broń
var equipWeapon = ["sztylet", "drewniana pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];

//zbroja
var equipArmor = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana"];

//tarcze
var equipShield = ["puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

//tablice ze modyfikatorami rasy i profesji - dla określenia ostatecznej ilości punktów postaci
var warrior = [5, 5, 0, 0, 0];
var criminal = [0, 0, 10, 0, 0];
var wizard = [0, 0, 0, 5, 5];

var human = [0, 0, 0, 0, 0];
var elv = [-5, -5, 0, 5, 5];
var dwarf = [4, 4, 0, -2, -3];
var orc = [5, 5, 0, -5, -5];

//inny ekwipunek
var equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergamniny 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas", "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

//tablice z umiejętnościami
//wojownika
var skillsWarrior = ["szt.przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

//złoczyńcy
var skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drewniana pałka"];

//czarodzieja
var skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];

//tablica zbiorcza z wyniami losowania lub wyborami postaci
//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - waga, 13-wzrost
var hero = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", 0, 0, 0, 0, 0, "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano"];

//dodatkowa tablica dla losowania cech
var randomFeatures = [0, 0, 0, 0, 0];

//tablica ekwipunku
var equip = [];

//tablica umiejętności
var skills = [];

//utworzenie przycisków wylosuj i wybierz postać
module.exports.randomChooseHeroBtns = function () {
	//utworzenie przycisku wylosuj postać
	functions.newElement("button", "randomHero", "wylosuj", $("#mainBtns"));
	//utworzenie przycisku wybierz postać
	functions.newElement("button", "chooseHero", "wybierz", $("#mainBtns"));
	//nadanie styli dla przycisków wylosuj i wybierz
	$("#randomHero, #chooseHero").addClass("basicBtn medievalText btnNewGame");

	//losowanie postaci
	$("#randomHero").on("click", function () {
		$("#drawnCharacter, #interactionsBtns").empty();
		functions.newElement("p", "choosenHeroTitle", "WYLOSOWANA POSTAĆ", $("#drawnCharacter"));
		$("#drawnCharacter").addClass("flexForBtns");
		$("#choosenHeroTitle").addClass("basicText center medievalText width100 textUnderlineGold");

		$("#playGame").remove();

		functions.newElement("button", "playGame", "GRA", $("#mainBtns"));
		$("#playGame").addClass("basicBtn medievalText btnNewGame");

		//losowanie płci
		var randomSexNumber = Math.round(Math.random() * (sex.length - 1));
		var sexHero = sex[randomSexNumber];

		hero.splice(1, 1, sexHero);

		//losowanie imienia w oparciu o wylosowaną płeć
		if (sex[randomSexNumber] === "mężczyzna") {
			var randomNameNumber = Math.round(Math.random() * (namesMan.length - 1));
			$("#drawnCharacter").append("<p class = \"basicText center width24 medievalText fontSize11em\">P\u0142e\u0107: <span class=\"greenText\">" + sexHero + "</span></p>");
			var nameHero = namesMan[randomNameNumber];
			$("#drawnCharacter").append("<p class = \"basicText center width24 medievalText fontSize11em\">Imi\u0119: <span class=\"greenText\">" + nameHero + "</span></p>");
			hero.splice(0, 1, nameHero);
		} else if (sex[randomSexNumber] === "kobieta") {
			$("#drawnCharacter").append("<p class = \"basicText center width24 medievalText fontSize11em\">P\u0142e\u0107: <span class=\"greenText\">" + sexHero + "</span></p>");
			var _randomNameNumber = Math.round(Math.random() * (namesWomen.length - 1));
			var _nameHero = namesWomen[_randomNameNumber];
			$("#drawnCharacter").append("<p class = \"basicText center width24 medievalText fontSize11em\">Imi\u0119: <span class=\"greenText\">" + _nameHero + "</span></p>");
			hero.splice(0, 1, _nameHero);
		} else {
			$("#drawnCharacter").append("<p class = \"basicText center width24 medievalText fontSize11em\">P\u0142e\u0107: <span class=\"greenText\">" + sexHero + "</span></p>");
			var allNames = namesMan.concat(namesWomen);
			var _randomNameNumber2 = Math.round(Math.random() * (allNames.length - 1));
			var _nameHero2 = allNames[_randomNameNumber2];
			$("#drawnCharacter").append("<p class = \"basicText center width24 medievalText fontSize11em\">Imi\u0119: <span class=\"greenText\">" + _nameHero2 + "</span></p>");
			hero.splice(0, 1, _nameHero2);
		}

		//losowanie profesji
		var randomOccupationNumber = Math.round(Math.random() * (occupations.length - 1));
		var occupationsHero = occupations[randomOccupationNumber];
		$("#drawnCharacter").append("<p class = \"basicText center width24 medievalText fontSize11em\">Profesja: <span class=\"greenText\">" + occupationsHero + "</span></p>");
		hero.splice(3, 1, occupationsHero);

		//losowanie rasy
		var randomRaceNumber = Math.round(Math.random() * (races.length - 1));
		var raceHero = races[randomRaceNumber];
		$("#drawnCharacter").append("<p class = \"basicText center width24 medievalText fontSize11em\">Rasa: <span class=\"greenText\">" + raceHero + "</span></p>");
		hero.splice(2, 1, raceHero);

		//losowanie punktów cech w zależności od rasy i profesji
		//człowiek - wojownik
		if (raceHero == "człowiek" && occupationsHero == "wojownik") {
			functions.randomPoints(warrior[0], human[0], "si\u0142a", hero, 4);
			functions.randomPoints(warrior[1], human[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
			functions.randomPoints(warrior[2], human[2], "zr\u0119czno\u015B\u0107", hero, 6);
			functions.randomPoints(warrior[3], human[3], "inteligencja", hero, 7);
			functions.randomPoints(warrior[4], human[4], "charyzma", hero, 8);
		}

		//człowiek - złoczyńca
		else if (raceHero == "człowiek" && occupationsHero == "złoczyńca") {
				functions.randomPoints(criminal[0], human[0], "si\u0142a", hero, 4);
				functions.randomPoints(criminal[1], human[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
				functions.randomPoints(criminal[2], human[2], "zr\u0119czno\u015B\u0107", hero, 6);
				functions.randomPoints(criminal[3], human[3], "inteligencja", hero, 7);
				functions.randomPoints(criminal[4], human[4], "charyzma", hero, 8);
			}

			//człowiek czarodziej
			else if (raceHero == "człowiek" && occupationsHero == "czarodziej") {
					functions.randomPoints(wizard[0], human[0], "si\u0142a", hero, 4);
					functions.randomPoints(wizard[1], human[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
					functions.randomPoints(wizard[2], human[2], "zr\u0119czno\u015B\u0107", hero, 6);
					functions.randomPoints(wizard[3], human[3], "inteligencja", hero, 7);
					functions.randomPoints(wizard[4], human[4], "charyzma", hero, 8);
				}

				//elf - wojownik
				else if (raceHero == "elf" && occupationsHero == "wojownik") {
						functions.randomPoints(warrior[0], elv[0], "si\u0142a", hero, 4);
						functions.randomPoints(warrior[1], elv[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
						functions.randomPoints(warrior[2], elv[2], "zr\u0119czno\u015B\u0107", hero, 6);
						functions.randomPoints(warrior[3], elv[3], "inteligencja", hero, 7);
						functions.randomPoints(warrior[4], elv[4], "charyzma", hero, 8);
					}

					//elf złoczyńca
					else if (raceHero == "elf" && occupationsHero == "złoczyńca") {
							functions.randomPoints(criminal[0], elv[0], "si\u0142a", hero, 4);
							functions.randomPoints(criminal[1], elv[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
							functions.randomPoints(criminal[2], elv[2], "zr\u0119czno\u015B\u0107", hero, 6);
							functions.randomPoints(criminal[3], elv[3], "inteligencja", hero, 7);
							functions.randomPoints(criminal[4], elv[4], "charyzma", hero, 8);
						}

						//elf czarodziej
						else if (raceHero == "elf" && occupationsHero == "czarodziej") {
								functions.randomPoints(wizard[0], elv[0], "si\u0142a", hero, 4);
								functions.randomPoints(wizard[1], elv[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
								functions.randomPoints(wizard[2], elv[2], "zr\u0119czno\u015B\u0107", hero, 6);
								functions.randomPoints(wizard[3], elv[3], "inteligencja", hero, 7);
								functions.randomPoints(wizard[4], elv[4], "charyzma", hero, 8);
							}

							//krasnolud - wojownik
							else if (raceHero == "krasnolud" && occupationsHero == "wojownik") {
									functions.randomPoints(warrior[0], dwarf[0], "si\u0142a", hero, 4);
									functions.randomPoints(warrior[1], dwarf[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
									functions.randomPoints(warrior[2], dwarf[2], "zr\u0119czno\u015B\u0107", hero, 6);
									functions.randomPoints(warrior[3], dwarf[3], "inteligencja", hero, 7);
									functions.randomPoints(warrior[4], dwarf[4], "charyzma", hero, 8);
								}

								//krasnolud złoczyńca
								else if (raceHero == "krasnolud" && occupationsHero == "złoczyńca") {
										functions.randomPoints(criminal[0], dwarf[0], "si\u0142a", hero, 4);
										functions.randomPoints(criminal[1], dwarf[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
										functions.randomPoints(criminal[2], dwarf[2], "zr\u0119czno\u015B\u0107", hero, 6);
										functions.randomPoints(criminal[3], dwarf[3], "inteligencja", hero, 7);
										functions.randomPoints(criminal[4], dwarf[4], "charyzma", hero, 8);
									}

									//krasnolud czarodziej
									else if (raceHero == "krasnolud" && occupationsHero == "czarodziej") {
											functions.randomPoints(wizard[0], dwarf[0], "si\u0142a", hero, 4);
											functions.randomPoints(wizard[1], dwarf[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
											functions.randomPoints(wizard[2], dwarf[2], "zr\u0119czno\u015B\u0107", hero, 6);
											functions.randomPoints(wizard[3], dwarf[3], "inteligencja", hero, 7);
											functions.randomPoints(wizard[4], dwarf[4], "charyzma", hero, 8);
										}
										//ork - wojownik
										else if (raceHero == "ork" && occupationsHero == "wojownik") {
												functions.randomPoints(warrior[0], orc[0], "si\u0142a", hero, 4);
												functions.randomPoints(warrior[1], orc[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
												functions.randomPoints(warrior[2], orc[2], "zr\u0119czno\u015B\u0107", hero, 6);
												functions.randomPoints(warrior[3], orc[3], "inteligencja", hero, 7);
												functions.randomPoints(warrior[4], orc[4], "charyzma", hero, 8);
											}

											//ork złoczyńca
											else if (raceHero == "ork" && occupationsHero == "złoczyńca") {
													functions.randomPoints(criminal[0], orc[0], "si\u0142a", hero, 4);
													functions.randomPoints(criminal[1], orc[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
													functions.randomPoints(criminal[2], orc[2], "zr\u0119czno\u015B\u0107", hero, 6);
													functions.randomPoints(criminal[3], orc[3], "inteligencja", hero, 7);
													functions.randomPoints(criminal[4], orc[4], "charyzma", hero, 8);
												}

												//ork czarodziej
												else if (raceHero == "ork" && occupationsHero == "czarodziej") {
														functions.randomPoints(wizard[0], orc[0], "si\u0142a", hero, 4);
														functions.randomPoints(wizard[1], orc[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
														functions.randomPoints(wizard[2], orc[2], "zr\u0119czno\u015B\u0107", hero, 6);
														functions.randomPoints(wizard[3], orc[3], "inteligencja", hero, 7);
														functions.randomPoints(wizard[4], orc[4], "charyzma", hero, 8);
													}

		//losowanie koloru włosów
		var randomHairNumber = Math.round(Math.random() * (hairColor.length - 1));
		var hairHero = hairColor[randomHairNumber];
		$("#drawnCharacter").append("<p class = \"basicText center width20 medievalText fontSize11em\">Kolor w\u0142os\xF3w: <span class=\"greenText\">" + hairHero + "</span></p>");
		hero.splice(10, 1, hairHero);

		//losowanie koloru oczu
		var randomEyesNumber = Math.round(Math.random() * (eyesColor.length - 1));
		var eyesHero = eyesColor[randomEyesNumber];
		$("#drawnCharacter").append("<p class = \"basicText center width20 medievalText fontSize11em\">Kolor oczu: <span class=\"greenText\">" + eyesHero + "</span></p>");
		hero.splice(9, 1, eyesHero);

		//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - waga, 13-wzrost

		//losowanie koloru skóry
		var randomSkinNumber = Math.round(Math.random() * (skinColor.length - 1));
		var skinHero = skinColor[randomSkinNumber];
		$("#drawnCharacter").append("<p class = \"basicText center width20 medievalText fontSize11em\">Kolor sk\xF3ry: <span class=\"greenText\">" + skinHero + "</span></p>");
		hero.splice(11, 1, skinHero);

		//losowanie wagi
		var randomWeightNumber = Math.round(Math.random() * (weight.length - 1));
		var weightHero = weight[randomWeightNumber];
		$("#drawnCharacter").append("<p class = \"basicText center width20 medievalText fontSize11em\">Waga: <span class=\"greenText\">" + weightHero + "</span></p>");
		hero.splice(12, 1, weightHero);

		//losowanie wzrostu
		var randomHeightNumber = Math.round(Math.random() * (height.length - 1));
		var heightHero = height[randomHeightNumber];
		$("#drawnCharacter").append("<p class = \"basicText center width20 medievalText fontSize11em\">Wzrost: <span class=\"greenText\">" + heightHero + "</span></p>");
		hero.splice(13, 1, heightHero);

		//losowanie ekwipunku
		var equipRandom = []; //utworzenie dodatkowej pustej tablicy dla losowania ekwipunku
		//połączenie wszystich tabel ekwipunku
		var allEquip = equipRandom.concat(equipOther, equipShield, equipArmor, equipWeapon);

		//losowanie pierwszej rzeczy
		var item1Number = Math.round(Math.random() * (allEquip.length - 1));
		var item1 = allEquip[item1Number];

		//losowanie drugiej rzeczy
		var item2Number = Math.round(Math.random() * (allEquip.length - 1));
		var item2 = allEquip[item2Number];

		//losowanie trzeciej rzeczy
		var item3Number = Math.round(Math.random() * (allEquip.length - 1));
		var item3 = allEquip[item3Number];

		//losowanie czwartej rzeczy
		var item4Number = Math.round(Math.random() * (allEquip.length - 1));
		var item4 = allEquip[item4Number];

		//losowanie piątej rzeczy
		var item5Number = Math.round(Math.random() * (allEquip.length - 1));
		var item5 = allEquip[item5Number];

		$("#drawnCharacter").append("<p class = \"basicText center width100 medievalText fontSize11em\">Ekwipunek: <span class=\"greenText\">" + item1 + ", " + item2 + ", " + item3 + ", " + item4 + ", " + item5 + "</span></p>");

		//zastępowanie w dodatkowej tabeli wylosowanych rzeczy
		equip.push(item1, item2, item3, item4, item5);

		//losowanie umiejętności
		//dla wojownika
		if (occupationsHero === "wojownik") {
			for (var i = 0; i < 3; i++) {
				var random = Math.round(Math.random() * (skillsWarrior.length - 1));var is = false;for (var j = 0; j < skills.length; j++) {
					if (skills[j] == random) is = true;
				}if (is) i--;else skills[i] = random;
			}

			$("#drawnCharacter").append("<p class = \"basicText center width100 medievalText fontSize11em\">Umiej\u0119tno\u015Bci: <span id='randomSkils'class=\"greenText\"></span></p>");

			for (var _i = 0; _i < 3; _i++) {
				$("#randomSkils").text(skillsWarrior[skills[0]] + ", " + skillsWarrior[skills[1]] + ", " + skillsWarrior[skills[2]]);
			}skills.splice(0, 1, skillsWarrior[skills[0]]);skills.splice(1, 1, skillsWarrior[skills[1]]);
			skills.splice(2, 1, skillsWarrior[skills[2]]);
		}

		//dla złoczyńcy
		else if (occupationsHero === "złoczyńca") {
				for (var _i2 = 0; _i2 < 3; _i2++) {
					var _random = Math.round(Math.random() * (skillsCriminal.length - 1));var _is = false;for (var _j = 0; _j < skills.length; _j++) {
						if (skills[_j] == _random) _is = true;
					}if (_is) _i2--;else skills[_i2] = _random;
				}

				$("#drawnCharacter").append("<p class = \"basicText center width100 medievalText fontSize11em\">Umiej\u0119tno\u015Bci: <span id='randomSkils'class=\"greenText\"></span></p>");

				for (var _i3 = 0; _i3 < 3; _i3++) {
					$("#randomSkils").text(skillsCriminal[skills[0]] + ", " + skillsCriminal[skills[1]] + ", " + skillsCriminal[skills[2]]);
				}skills.splice(0, 1, skillsCriminal[skills[0]]);skills.splice(1, 1, skillsCriminal[skills[1]]);
				skills.splice(2, 1, skillsCriminal[skills[2]]);
			}

			// dla czarodzieja
			else if (occupationsHero === "czarodziej") {
					for (var _i4 = 0; _i4 < 3; _i4++) {
						var _random2 = Math.round(Math.random() * (skillsWizard.length - 1));var _is2 = false;for (var _j2 = 0; _j2 < skills.length; _j2++) {
							if (skills[_j2] == _random2) _is2 = true;
						}if (_is2) _i4--;else skills[_i4] = _random2;
					}

					$("#drawnCharacter").append("<p class = \"basicText center width100 medievalText fontSize11em\">Umiej\u0119tno\u015Bci: <span id='randomSkils'class=\"greenText\"></span></p>");

					for (var _i5 = 0; _i5 < 3; _i5++) {
						$("#randomSkils").text(skillsWizard[skills[0]] + ", " + skillsWizard[skills[1]] + ", " + skillsWizard[skills[2]]);
					}skills.splice(0, 1, skillsWizard[skills[0]]);skills.splice(1, 1, skillsWizard[skills[1]]);
					skills.splice(2, 1, skillsWizard[skills[2]]);
				}
	}); //koniec zdarzenia losowania postaci

	//ręczne tworzenie potstaci
	$("#chooseHero").on("click", function () {
		$("#drawnCharacter").empty();$("#playGame").hide();$("#interactionsBtns").empty();
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
		equip.splice(0, 5);skills.splice(0, 3);

		//ustawienie tablicy hero na początkowe zawartości
		hero.splice(0, 1, "nie wybrano");hero.splice(1, 1, "nie wybrano");hero.splice(2, 1, "nie wybrano");hero.splice(3, 1, "nie wybrano");
		hero.splice(4, 1, 0);hero.splice(5, 1, 0);hero.splice(6, 1, 0);hero.splice(7, 1, 0);
		hero.splice(8, 1, 0);
		hero.splice(9, 1, "nie wybrano");hero.splice(10, 1, "nie wybrano");hero.splice(11, 1, "nie wybrano");hero.splice(12, 1, "nie wybrano");hero.splice(13, 1, "nie wybrano");

		//zdarzenie dla przycisku imię
		$("#createName").on("click", function () {
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
			$("#acceptName").on("click", function () {
				var nameInput = $("#giveName").val().replace(/\d/g, '');
				if (nameInput == "") {
					$("#alerts").html("<p class='redText boldText fontSize12em medievalText'>nie wybrano imienia</p>");
				} else {
					hero.splice(0, 1, nameInput);
					$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrane imię to: <span class='blueText'>" + nameInput + "</span></p>");
				}

				setTimeout(function () {
					$("#alerts").empty();
				}, 5000);
				console.log(hero);
			});
		}); //koniec zdarzenia dla wybierania imienia

		//zdarzenie dla wybierania rasy
		$("#createRace").on("click", function () {
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

			$("#human").on("click", function () {
				hero.splice(2, 1, "człowiek");
				$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>człowiek</span></p>");
				setTimeout(function () {
					$("#alerts").empty();
				}, 5000);
				console.log(hero);
			});

			$("#elv").on("click", function () {
				hero.splice(2, 1, "elf");
				$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>elf</span></p>");
				setTimeout(function () {
					$("#alerts").empty();
				}, 5000);
				console.log(hero);
			});

			$("#dwarf").on("click", function () {
				hero.splice(2, 1, "krasnolud");
				$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>krasnolud</span></p>");
				setTimeout(function () {
					$("#alerts").empty();
				}, 5000);
				console.log(hero);
			});

			$("#orc").on("click", function () {
				hero.splice(2, 1, "ork");
				$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>ork</span></p>");
				setTimeout(function () {
					$("#alerts").empty();
				}, 5000);
				console.log(hero);
			});
		}); //koniec zdarzenia dla wybierania rasy

		//zdarzenie dla wybierania profesji
		$("#createOccupation").on("click", function () {
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

			$("#warrior").on("click", function () {
				hero.splice(3, 1, "wojownik");
				$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana profesja to: <span class='blueText'>wojownik</span></p>");
				setTimeout(function () {
					$("#alerts").empty();
				}, 5000);
				console.log(hero);
			});

			$("#criminal").on("click", function () {
				hero.splice(3, 1, "złoczyńca");
				$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana profesja to: <span class='blueText'>złoczyńca</span></p>");
				setTimeout(function () {
					$("#alerts").empty();
				}, 5000);
				console.log(hero);
			});

			$("#wizard").on("click", function () {
				hero.splice(3, 1, "czarodziej");
				$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana profesja to: <span class='blueText'>czarodziej</span></p>");
				setTimeout(function () {
					$("#alerts").empty();
				}, 5000);
				console.log(hero);
			});
		}); //koniec zdarzenia dla wybierania profesji

		//losowanie punktów cech postaci
		$("#createFeatures").on("click", function () {
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
			function randomPointsFeatures(element, name, number) {
				element.on("click", function () {
					var name = Math.round(Math.random() * 50);
					randomFeatures.splice(number, 1, name);
					if (randomFeatures[0] !== 0 && randomFeatures[1] !== 0 && randomFeatures[2] !== 0 && randomFeatures[3] !== 0 && randomFeatures[4] !== 0) {
						$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wylosowano wszystkie cechy</p>");
						setTimeout(function () {
							$("#alerts").empty();
						}, 5000);
						console.log(randomFeatures);
					}
				});
			}

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
	}); //koniec ręcznego tworzenie postaci
}; //koniec module.exports.randomChooseHeroBtns

///utworzenie paragrafu z opisem przycisków wylosuj i wybierz.
module.exports.textDescription = function () {
	$("#mainPart").html("<p id='text'>Zanim zaczniesz grę, muszisz stworzyć swoją postać. Można to zrobić na dwa sposoby. Pierwszy to wylosowanie protagonisty. Jest to sposób całkowice automatyczny i wystarczy wcisnąć przycisk <span class='blueText'>'losuj'</span>. Drugim sposobem na stworzenie własnej postaci jest jej własnoręczne utworzenie za pomocą kreatora postaci. W tym celu należy wcisnąć przycisk <span class='blueText'>'wybierz'</span>. Co robisz?</p>");

	$("#text").addClass("basicText medievalText");

	//utworzenie diva dla wylosowanej postaci
	functions.newElement("div", "drawnCharacter", "", $("#mainPart"));
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import z plików zewnętrznych
var functions = __webpack_require__(0); //podstawowe funkcje
var introFirstMenu = __webpack_require__(4); //plik z częścią intro oraz pierwszym menu
var heroCreator = __webpack_require__(1);
var introGame = __webpack_require__(5);

document.addEventListener("DOMContentLoaded", function () {
	console.log("NIEWIERNE PSY RULEZ!!!!");

	//intro i pierwsze menu
	introFirstMenu.gameTitle();

	//przejście z nazwy gry do pierwszego toFirstMenu
	introFirstMenu.toFirstMenu();

	//utworzenie przycisków pierwszego menu
	introFirstMenu.btnsMenuFirst();

	//funkcje zdarzeń (kliknięcia w przyciski) dla pierwszego menu
	introFirstMenu.clicksFirstMenu();
}); //koniec DOMContentLoaded

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import funkcji z pliku zewnętrznego
var functions = __webpack_require__(0); //podstawowe funkcje
var heroCreator = __webpack_require__(1); //plik tworzenia postaci

//funkcja tytuły gry
module.exports.gameTitle = function () {
  //utworzenie paragarafów dla tytułu gry
  functions.newElement("p", "titleGameHeader", "AUDACES", $("header"));
  functions.newElement("p", "subTitleGameHeader", "serce ze stali", $("#titleGameHeader"));

  $("#titleGameHeader").hide();

  //pokazanie tytułu i podtytułu gry
  setTimeout(function () {
    $("#studioTitle h2").replaceWith("<p class='medievalTextTitle gameTitle'>Audaces</p>");
    $("#studioTitle h3").replaceWith("<p class='medievalTextTitle subGameTitle'>serce z żelaza</p>");
    $("#studioTitle").fadeIn(6000);$("#studioTitle").delay(2000).fadeOut(6000);
  }, 6200);
};

//przejście z nazwy gry do pierwszego toFirstMenu
module.exports.toFirstMenu = function () {
  //zmiana koloru tła na beżowy
  setTimeout(function () {
    $("body").css("backgroundColor", "beige");
  }, 19000);

  //usunięcie diva o id studioTitle
  setTimeout(function () {
    $("#studioTitle").remove();
    $("#titleGameHeader, #subTitleGameHeader").fadeIn(1500);
    $("#info, #licence, #tutorial, #newGame").delay(1500).show().addClass("basicBtn");
    $("#info").addClass("btnInfo");
    $("#licence").addClass("btnLicence");
    $("#tutorial").addClass("btnTutorial");
    $("#newGame").addClass("btnNewGame");
    functions.newElement("p", "textHello", textHello, $("#mainPart"));
    $("#textHello").addClass("basicText medievalText");
  }, 20000);
};

//utworzenie przycisków pierwszego menu
module.exports.btnsMenuFirst = function () {
  functions.newElement("button", "info", "info", $("#mainBtns"));
  functions.newElement("button", "licence", "licencja", $("#mainBtns"));
  functions.newElement("button", "tutorial", "tutorial", $("#mainBtns"));
  functions.newElement("button", "newGame", "Nowa Gra", $("#mainBtns"));
  $("#info, #licence, #tutorial, #newGame").hide();
};

//tekst powitalny
var textHello = "Witaj w grze 'Audaces - serce z żelaza', pierwszej grze tekstowej Niewiernych Psów. Poniżej znajdują się cztery przyciski, dzięki którym poznasz podsatwowe informacje o Niewiernych Psach, licencji gry, jsamouczka obsługi interfejsu gry oraz rozpoczniesz grę AUDACES - serce z żelaza. Także tego. Studio Niewiernych Psów, życzy miłej zabawy.";

//tekst dla informacji w menu pierwszym
var info = "Ta wersja gry została stworzona jako poprawiona wersja, projektu końcowego kursu front'endowego, a także jako modernizacja tej samej gry sprzed kursu. Gra ma także na celu przetestowanie mechaniki 'papierowej' wersji systemu gry Audaces. Projekt będzie rozwijalny także po skończeniu kursu. Wszystkie wersje tej gry zostały wydane przez niezależne studio Niewierne Psy. Gra powstała dzięki użytym technologiom: HTML5, SASS, jQuery, EcmaScript 6. Fonty pobrane z: fonts.google.com/.";

//tekst dla licencji
var licence = "UMOWA LICENCYJNA UŻYTKOWNIKA APLIKACJI AUDACES (oraz wszystkich jego wesji). POSIADAJĄC APLIKACJĘ AKCEPTUJESZ PONIŻSZE WARUNKI LICENCJI. Autor informuje, iż zawarte treści w aplikacji mogą być niestosowne dla osób niepełnoletnich, o innym światopoglądzie lub wyznawanej religii. Użytkownik używa aplikację na własne ryzyko. Twórca tej aplikacji infourmuje, iż aplikacja ta została stowrzona w celach hobbystycznych oraz w celu nauki programowania. Aplikacja ta może zawierać błędy, które niekoniecznie muszą być poprawione. Autor nie udziela żadnych gwarancji, obietnic oraz zapewnień na tą aplikację (i jej wersje) i nie odpowiada za błędne działanie lub użytkowanie programu. Autor aplikacji nie bierze na siebie żadnych reklamacji w sprawie wadliwego działania programu oraz nie poczuwa się do zadość uczynienia za spowodowane szkody. Prawa autorskie należą do Szymona Cendeckiego. Audaces jest rozprowadzany na zasadzie FREEWARE czyli: użytkownik dostaje aplikację za darmo, nie może w żaden sposób zmieniać aplikacji, może wykorzystywać aplikację na własny użytek, zabrnia się wykorzystywać aplikację w celach komercyjnych, zabrania się ujawniania kodu źródłowego.";

//tekst dla tutorialu
var tutorial = "Początek gry. Ekran składa się z powitania oraz czterech przycisków. Po wciśnięciu przycisku Info, Licencja lub Tutorial obok pojawi się odpowiednia informacja. Po wciśnięciu przycisku Nowa gra, użytkownik rozpocznie grę. Po rozpoczęciu gry, użytkownik będzie mógł stworzyć swoją. Po stworzeniu postaci, użytkownik przejdze do gry. Ekran będzie podzielony na część z przyciskami, główną, w której będzie rozgrywała się gra oraz na część z komunikatami. Część z przyciskami będzie posiadała przyciski umożliwiające dostęp do cech postaci, ekwipunku, umiejętności itd. oraz do opcji, które będzie mógł wybrać w trakcie gry. W głównej części pojawi się główna gra. Na jej podstawie gracz będzie mógł dokonywać wyborów z listy przycików. W części komunikatów będą pojawiać się komunikaty dotyczące podjętych działań.";

//zdarzenia dla pierwszego menu
module.exports.clicksFirstMenu = function () {
  functions.clickFirstMenu($("#info"), $("#mainPart"), "textInfo", info);
  functions.clickFirstMenu($("#licence"), $("#mainPart"), "textLicence", licence);
  functions.clickFirstMenu($("#tutorial"), $("#mainPart"), "textTutorial", tutorial);

  $("#newGame").on("click", function () {
    $("#mainBtns, #mainPart").empty();
    heroCreator.randomChooseHeroBtns();
    heroCreator.textDescription();
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.text1 = "Mówią, że Dzikie Pustkowia to kraina opuszczona przez Bogów.";

module.exports.text2 = "Pełna siedzib mrocznych kultów, wyrzutków społeczeństwa, krwiożerczych bestii i demonów, przywołanych czarną magią z innych wymiarów.";

module.exports.text3 = " Krąży wiele legend o ukrytych, nieprzebranych skarbach, o herosach - smokobójcach.";

module.exports.text4 = "Dzikie Pustkowia fascynuję i przerażają, jednak wielu śmiałków wędruje w tą część świata w poszukiwaniu bogactw i chwały.";

module.exports.text5 = "Większość nie wraca... ";

module.exports.text6 = "Twoja historia zaczyna się w mieście Erharuf.";

module.exports.text7 = " W ostatnim bezpiecznym mieście przed Dzikimi Pustkowiami.";

module.exports.text8 = "Na usilną prośbę znajomego kapłana zgadzasz się dostarczyć małą paczkę dla tamtejszego mnicha, rezydującego w niewielkiej wiosce, która leży tuż przy granicy z Dzikimi Pustkowiami.";

/***/ })
/******/ ]);