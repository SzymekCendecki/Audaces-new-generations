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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import funkcji z pliku zewnętrznego
var functions = __webpack_require__(1); //podstawowe funkcje
var intro = __webpack_require__(9); // intro gry (te po kreatorze postaci);

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
var equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergaminy 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas", "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

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

//tablica ze złotem
var gold = [0];

//utworzenie przycisków wylosuj i wybierz postać
module.exports.randomChooseHeroBtns = function () {
	//utworzenie przycisku wylosuj postać
	functions.newElement("button", "randomHero", "wylosuj", $("#heroBtns"));
	//utworzenie przycisku wybierz postać
	functions.newElement("button", "chooseHero", "wybierz", $("#heroBtns"));
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

		$("#playGame").on("click", function () {
			$("#heroBtns, #mainBtns, #interactionsBtns, #mainPart").empty();
			intro.intro();
		});

		//usuwanie z tablic potencjalnych wyników ewentualnego wybierania
		equip.splice(0, 5);skills.splice(0, 3);
		randomFeatures.splice(0, 1, 0);randomFeatures.splice(1, 1, 0);randomFeatures.splice(2, 1, 0);
		randomFeatures.splice(3, 1, 0);randomFeatures.splice(4, 1, 0);

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
			functions.randomPoints(warrior[0], human[0], "si\u0142a", hero, 4);functions.randomPoints(warrior[1], human[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);functions.randomPoints(warrior[2], human[2], "zr\u0119czno\u015B\u0107", hero, 6);functions.randomPoints(warrior[3], human[3], "inteligencja", hero, 7);
			functions.randomPoints(warrior[4], human[4], "charyzma", hero, 8);
		}

		//człowiek - złoczyńca
		else if (raceHero == "człowiek" && occupationsHero == "złoczyńca") {
				functions.randomPoints(criminal[0], human[0], "si\u0142a", hero, 4);functions.randomPoints(criminal[1], human[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
				functions.randomPoints(criminal[2], human[2], "zr\u0119czno\u015B\u0107", hero, 6);
				functions.randomPoints(criminal[3], human[3], "inteligencja", hero, 7);
				functions.randomPoints(criminal[4], human[4], "charyzma", hero, 8);
			}

			//człowiek czarodziej
			else if (raceHero == "człowiek" && occupationsHero == "czarodziej") {
					functions.randomPoints(wizard[0], human[0], "si\u0142a", hero, 4);functions.randomPoints(wizard[1], human[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);functions.randomPoints(wizard[2], human[2], "zr\u0119czno\u015B\u0107", hero, 6);functions.randomPoints(wizard[3], human[3], "inteligencja", hero, 7);
					functions.randomPoints(wizard[4], human[4], "charyzma", hero, 8);
				}

				//elf - wojownik
				else if (raceHero == "elf" && occupationsHero == "wojownik") {
						functions.randomPoints(warrior[0], elv[0], "si\u0142a", hero, 4);functions.randomPoints(warrior[1], elv[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
						functions.randomPoints(warrior[2], elv[2], "zr\u0119czno\u015B\u0107", hero, 6);functions.randomPoints(warrior[3], elv[3], "inteligencja", hero, 7);functions.randomPoints(warrior[4], elv[4], "charyzma", hero, 8);
					}

					//elf złoczyńca
					else if (raceHero == "elf" && occupationsHero == "złoczyńca") {
							functions.randomPoints(criminal[0], elv[0], "si\u0142a", hero, 4);functions.randomPoints(criminal[1], elv[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
							functions.randomPoints(criminal[2], elv[2], "zr\u0119czno\u015B\u0107", hero, 6);
							functions.randomPoints(criminal[3], elv[3], "inteligencja", hero, 7);
							functions.randomPoints(criminal[4], elv[4], "charyzma", hero, 8);
						}

						//elf czarodziej
						else if (raceHero == "elf" && occupationsHero == "czarodziej") {
								functions.randomPoints(wizard[0], elv[0], "si\u0142a", hero, 4);functions.randomPoints(wizard[1], elv[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);functions.randomPoints(wizard[2], elv[2], "zr\u0119czno\u015B\u0107", hero, 6);functions.randomPoints(wizard[3], elv[3], "inteligencja", hero, 7);
								functions.randomPoints(wizard[4], elv[4], "charyzma", hero, 8);
							}

							//krasnolud - wojownik
							else if (raceHero == "krasnolud" && occupationsHero == "wojownik") {
									functions.randomPoints(warrior[0], dwarf[0], "si\u0142a", hero, 4);functions.randomPoints(warrior[1], dwarf[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
									functions.randomPoints(warrior[2], dwarf[2], "zr\u0119czno\u015B\u0107", hero, 6);
									functions.randomPoints(warrior[3], dwarf[3], "inteligencja", hero, 7);
									functions.randomPoints(warrior[4], dwarf[4], "charyzma", hero, 8);
								}

								//krasnolud złoczyńca
								else if (raceHero == "krasnolud" && occupationsHero == "złoczyńca") {
										functions.randomPoints(criminal[0], dwarf[0], "si\u0142a", hero, 4);functions.randomPoints(criminal[1], dwarf[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
										functions.randomPoints(criminal[2], dwarf[2], "zr\u0119czno\u015B\u0107", hero, 6);
										functions.randomPoints(criminal[3], dwarf[3], "inteligencja", hero, 7);
										functions.randomPoints(criminal[4], dwarf[4], "charyzma", hero, 8);
									}

									//krasnolud czarodziej
									else if (raceHero == "krasnolud" && occupationsHero == "czarodziej") {
											functions.randomPoints(wizard[0], dwarf[0], "si\u0142a", hero, 4);functions.randomPoints(wizard[1], dwarf[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);functions.randomPoints(wizard[2], dwarf[2], "zr\u0119czno\u015B\u0107", hero, 6);functions.randomPoints(wizard[3], dwarf[3], "inteligencja", hero, 7);
											functions.randomPoints(wizard[4], dwarf[4], "charyzma", hero, 8);
										}

										//ork - wojownik
										else if (raceHero == "ork" && occupationsHero == "wojownik") {
												functions.randomPoints(warrior[0], orc[0], "si\u0142a", hero, 4);functions.randomPoints(warrior[1], orc[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);
												functions.randomPoints(warrior[2], orc[2], "zr\u0119czno\u015B\u0107", hero, 6);functions.randomPoints(warrior[3], orc[3], "inteligencja", hero, 7);functions.randomPoints(warrior[4], orc[4], "charyzma", hero, 8);
											}

											//ork złoczyńca
											else if (raceHero == "ork" && occupationsHero == "złoczyńca") {
													functions.randomPoints(criminal[0], orc[0], "si\u0142a", hero, 4);functions.randomPoints(criminal[1], orc[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);functions.randomPoints(criminal[2], orc[2], "zr\u0119czno\u015B\u0107", hero, 6);
													functions.randomPoints(criminal[3], orc[3], "inteligencja", hero, 7);
													functions.randomPoints(criminal[4], orc[4], "charyzma", hero, 8);
												}

												//ork czarodziej
												else if (raceHero == "ork" && occupationsHero == "czarodziej") {
														functions.randomPoints(wizard[0], orc[0], "si\u0142a", hero, 4);functions.randomPoints(wizard[1], orc[1], "wytrzyma\u0142o\u015B\u0107", hero, 5);functions.randomPoints(wizard[2], orc[2], "zr\u0119czno\u015B\u0107", hero, 6);functions.randomPoints(wizard[3], orc[3], "inteligencja", hero, 7);
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
		$("#drawnCharacter").empty();$("#playGame").hide();$("#interactionsBtns").empty();functions.newElement("p", "choosenHeroTitle", "WYBIERANIE POSTACI", $("#drawnCharacter"));$("#choosenHeroTitle").addClass("basicText center medievalText width100 textUnderlineGold");

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
		equip.splice(0, 5);skills.splice(0, 3);randomFeatures.splice(0, 1, 0);randomFeatures.splice(1, 1, 0);randomFeatures.splice(2, 1, 0);
		randomFeatures.splice(3, 1, 0);randomFeatures.splice(4, 1, 0);
		//ustawienie tablicy hero na początkowe zawartości
		hero.splice(0, 1, "nie wybrano");hero.splice(1, 1, "nie wybrano");hero.splice(2, 1, "nie wybrano");hero.splice(3, 1, "nie wybrano");
		hero.splice(4, 1, 0);hero.splice(5, 1, 0);hero.splice(6, 1, 0);hero.splice(7, 1, 0);
		hero.splice(8, 1, 0);
		hero.splice(9, 1, "nie wybrano");hero.splice(10, 1, "nie wybrano");hero.splice(11, 1, "nie wybrano");hero.splice(12, 1, "nie wybrano");hero.splice(13, 1, "nie wybrano");

		//zdarzenie dla przycisku imię
		$("#createName").on("click", function () {
			functions.clearStart("wybór imienia");
			functions.description("Wpisz w pole niżej swoje imię oraz wciśnij przycisk <span class='blueText'>'zatwierdź'</span>. Możesz wpisać tylko litery, cyfry nie będą barne pod uwagę. Imię można zmieniać dowolną ilość razy.");

			functions.newElement("input", "giveName", "", $("#interactionCreator"));
			functions.newElement("button", "acceptName", "zatwierdź", $("#interactionCreator"));

			$("#giveName").addClass("marginTop3 marginLeft25 boldText medievalText center fontSize12em");
			$("#acceptName").addClass("marginLeft5 medievalText boldText btnNewGame width20");

			//funkcja akceptowania imienia
			functions.acceptName(hero);
		}); //koniec zdarzenia dla wybierania imienia

		//zdarzenie dla wybierania rasy
		$("#createRace").on("click", function () {
			functions.clearStart("wybór rasy");
			functions.description("Poniżej znajdują się cztery przyciski. Dzięki nim wybierzesz rasę, która Cię interesuje. Po klinkięciu w przycisk pojawi się krótki opis wybranej rasy.");

			functions.newElement("button", "human", "człowiek", $("#interactionCreator"));
			functions.newElement("button", "elv", "elf", $("#interactionCreator"));
			functions.newElement("button", "dwarf", "krasnolud", $("#interactionCreator"));
			functions.newElement("button", "orc", "ork", $("#interactionCreator"));

			$("#human, #elv, #dwarf, #orc").addClass("basicBtn btnNewGame medievalText width20 marginTop5 marginLeft4");

			$("#human").on("click", function () {
				functions.oneRace(hero, "człowiek");
			});
			$("#elv").on("click", function () {
				functions.oneRace(hero, "elf");
			});
			$("#dwarf").on("click", function () {
				functions.oneRace(hero, "krasnolud");
			});
			$("#orc").on("click", function () {
				functions.oneRace(hero, "ork");
			});
		}); //koniec zdarzenia dla wybierania rasy

		//zdarzenie dla wybierania profesji
		$("#createOccupation").on("click", function () {
			functions.clearStart("wybór profesji");
			functions.description("Poniżej znajdują się trzy przyciski. Dzięki nim wybierzesz profesję, która Cię interesuje. Po klinkięciu w przycisk pojawi się krótki opis wybranej profesji.");

			functions.newElement("button", "warrior", "wojownik", $("#interactionCreator"));
			functions.newElement("button", "criminal", "złoczyńca", $("#interactionCreator"));
			functions.newElement("button", "wizard", "czarodziej", $("#interactionCreator"));

			$("#warrior, #criminal, #wizard").addClass("basicBtn btnNewGame medievalText width20 marginTop5 marginLeft4");

			$("#warrior").on("click", function () {
				functions.oneOccupation(hero, "wojownik");
			});
			$("#criminal").on("click", function () {
				functions.oneOccupation(hero, "złoczyńca");
			});
			$("#wizard").on("click", function () {
				functions.oneOccupation(hero, "czarodziej");
			});
		}); //koniec zdarzenia dla wybierania profesji

		//losowanie punktów cech postaci
		$("#createFeatures").on("click", function () {
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

		$("#createFeatures2").on("click", function () {
			functions.clearStart("wybór cech");
			functions.description("W tej części kreatora należy wybrać płeć, kolor włosów, oczu, skóry, wagę i wzrost. Poniżej są przyciski dzięki, którym należy to zrobić.");

			functions.newElement("p", "titleSex", "wybór płci", $("#interactionCreator"));
			$("#titleSex").addClass("basicText medievalText textUnderlineGold");

			functions.newElement("button", "women", "kobieta", $("#interactionCreator"));
			functions.newElement("button", "man", "mężczyzna", $("#interactionCreator"));
			functions.newElement("button", "other", "nie wiadomo", $("#interactionCreator"));

			$("#women").on("click", function () {
				functions.sex(hero, "kobieta");
			});
			$("#man").on("click", function () {
				functions.sex(hero, "mężczyzna");
			});
			$("#other").on("click", function () {
				functions.sex(hero, "nie wiadomo");
			});

			$("#women, #man, #other").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");

			functions.newElement("p", "titleEye", "kolor oczy", $("#interactionCreator"));$("#titleEye").addClass("basicText medievalText textUnderlineGold");
			functions.newElement("button", "hazel", "piwne", $("#interactionCreator"));
			functions.newElement("button", "gray", "szare", $("#interactionCreator"));
			functions.newElement("button", "brownEyes", "brązowe", $("#interactionCreator"));
			functions.newElement("button", "blue", "niebieskie", $("#interactionCreator"));

			$("#hazel").on("click", function () {
				functions.eyes(hero, "piwne");
			});
			$("#gray").on("click", function () {
				functions.eyes(hero, "szare");
			});
			$("#brownEyes").on("click", function () {
				functions.eyes(hero, "brązowe");
			});
			$("#blue").on("click", function () {
				functions.eyes(hero, "niebieskie");
			});

			$("#hazel, #gray, #brownEyes, #blue").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

			functions.newElement("p", "titleHair", "kolor włosów", $("#interactionCreator"));$("#titleHair").addClass("basicText medievalText textUnderlineGold");

			functions.newElement("button", "blonde", "blond", $("#interactionCreator"));
			functions.newElement("button", "red", "rude", $("#interactionCreator"));
			functions.newElement("button", "dark", "czarne", $("#interactionCreator"));
			functions.newElement("button", "colors", "farbowane", $("#interactionCreator"));

			$("#blonde").on("click", function () {
				functions.hair(hero, "blond");
			});
			$("#red").on("click", function () {
				functions.hair(hero, "rude");
			});
			$("#dark").on("click", function () {
				functions.hair(hero, "czarne");
			});
			$("#colors").on("click", function () {
				functions.hair(hero, "farbowane");
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

			$("#white").on("click", function () {
				functions.skin(hero, "biała");
			});
			$("#brown").on("click", function () {
				functions.skin(hero, "brązowa");
			});
			$("#black").on("click", function () {
				functions.skin(hero, "czarna");
			});
			$("#redSkin").on("click", function () {
				functions.skin(hero, "czerwona");
			});
			$("#yellow").on("click", function () {
				functions.skin(hero, "żółta");
			});
			$("#green").on("click", function () {
				functions.skin(hero, "zielona");
			});
			$("#tawny").on("click", function () {
				functions.skin(hero, "brunatna");
			});
			$("#azure").on("click", function () {
				functions.skin(hero, "błękitna");
			});

			$("#white, #brown, #black, #redSkin, #yellow, #green, #tawny, #azure").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");

			functions.newElement("p", "titleWeight", "waga", $("#interactionCreator"));
			$("#titleWeight").addClass("basicText medievalText textUnderlineGold");

			functions.newElement("button", "lessWeight", "niedowaga", $("#interactionCreator"));
			functions.newElement("button", "normalWeight", "normalna", $("#interactionCreator"));
			functions.newElement("button", "overWeight", "nadwaga", $("#interactionCreator"));

			$("#lessWeight, #normalWeight, #overWeight").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");

			$("#lessWeight").on("click", function () {
				functions.weight(hero, "niedowaga");
			});
			$("#normalWeight").on("click", function () {
				functions.weight(hero, "normalna");
			});
			$("#overWeight").on("click", function () {
				functions.weight(hero, "nadwaga");
			});

			functions.newElement("p", "titleHeight", "wzrost", $("#interactionCreator"));
			$("#titleHeight").addClass("basicText medievalText textUnderlineGold");

			functions.newElement("button", "short", "niski", $("#interactionCreator"));
			functions.newElement("button", "normal", "normalny", $("#interactionCreator"));
			functions.newElement("button", "tall", "wysoki", $("#interactionCreator"));

			$("#short").on("click", function () {
				functions.height(hero, "niski");
			});
			$("#normal").on("click", function () {
				functions.height(hero, "normalny");
			});
			$("#tall").on("click", function () {
				functions.height(hero, "wysoki");
			});

			$("#short, #normal, #tall").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft10");
		}); // koniec przycisku "cechy 2"

		//wybieranie ekwipunku
		$("#createEquip").on("click", function () {
			functions.clearStart("wybór ekwipunku");
			functions.description("Ta część podzielona jest zasadniczo na dwie części. W pierwszej możesz wybrać (w sumie) pięć rzeczy z kategorii: broń, zbroje, tarcze i inne. W drugiej części dzięki przyciskom, będzie można usunąć wcześniej wybrane przedmioty.");

			//funkcja wybierania i usuwania rzeczy z ekwipunku
			function chooseItem(whatClick, whatPush) {
				whatClick.on("click", function () {
					functions.itemsAddRemove(whatClick, whatPush, equip);
				}); //koniec funkcji wybierania i usuwania rzeczy z ekwipunku
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
			chooseItem($("#sabre"), "szabla");
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
			functions.newElement("button", "tubePartschmen", "tuba na pergaminy", $("#interactionCreator"));
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
		}); //koniec tworzenia ekwipunku

		//zdarzenie dla "ręcznego" wybierania umiejętności
		$("#createSkills").on("click", function () {
			functions.clearStart("wybór umiejętności");
			functions.description("W tej części kreatora należy wybrać płeć, kolor włosów, oczu, skóry, wagę i wzrost. Poniżej są przyciski dzięki, którym należy to zrobić.");

			functions.newElement("p", "titleWarrior", "wojownik", $("#interactionCreator"));
			$("#titleWarrior").addClass("basicText medievalText textUnderlineGold");

			//funkcja wybierania umiejętności
			function chooseSkill(whatClick, whatPush) {
				whatClick.on("click", function () {
					functions.skillsAddRemove(whatClick, whatPush, skills);
				});
			}

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
		}); //koniec zdarzenia dla "ręcznego" wybierania umiejętności

		//zdarzenie dla informacji zbiorczej wszystkich dokonanych wyborów
		$("#createInfo").on("click", function () {

			functions.clearStart("Twoja postać.");
			functions.description("Poniżej znajdują się Twoje wybory. W tej sekcji możesz je sprawdzić oraz zastanowić się nad ewentualnymi zmianami. Po dokonaniu wszystkich wyborów, to po lewej stronie pod przyciskami powinien ukazać się przycisk rozpoczynający grę.");

			//funkcja do zliczania wszystkich punktów cech
			//gdy nie wybrano profesji ani rasy oraz jeżeli wylosowano (lub nie wylosowano) punkty cech
			if (hero[2] == "nie wybrano" && hero[3] == "nie wybrano") {
				hero.splice(4, 1, randomFeatures[0]);hero.splice(5, 1, randomFeatures[1]);hero.splice(6, 1, randomFeatures[2]);hero.splice(7, 1, randomFeatures[3]);hero.splice(8, 1, randomFeatures[4]);
			}
			//dla człowieka i profesji
			else if (hero[2] == "człowiek" && hero[3] == "nie wybrano") {
					hero.splice(4, 1, randomFeatures[0]);hero.splice(5, 1, randomFeatures[1]);hero.splice(6, 1, randomFeatures[2]);hero.splice(7, 1, randomFeatures[3]);hero.splice(8, 1, randomFeatures[4]);
				} else if (hero[2] == "człowiek" && hero[3] == "wojownik") {
					hero.splice(4, 1, randomFeatures[0] + warrior[0]);hero.splice(5, 1, randomFeatures[1] + warrior[1]);hero.splice(6, 1, randomFeatures[2] + warrior[2]);hero.splice(7, 1, randomFeatures[3] + warrior[3]);hero.splice(8, 1, randomFeatures[4] + warrior[4]);
				} else if (hero[2] == "człowiek" && hero[3] == "złoczyńca") {
					hero.splice(4, 1, randomFeatures[0] + criminal[0]);hero.splice(5, 1, randomFeatures[1] + criminal[1]);hero.splice(6, 1, randomFeatures[2] + criminal[2]);hero.splice(7, 1, randomFeatures[3] + criminal[3]);hero.splice(8, 1, randomFeatures[4] + criminal[4]);
				} else if (hero[2] == "człowiek" && hero[3] == "czarodziej") {
					hero.splice(4, 1, randomFeatures[0] + wizard[0]);hero.splice(5, 1, randomFeatures[1] + wizard[1]);hero.splice(6, 1, randomFeatures[2] + wizard[2]);hero.splice(7, 1, randomFeatures[3] + wizard[3]);hero.splice(8, 1, randomFeatures[4] + wizard[4]);
				}

				//dla elfa i profesji oraz jeżeli wylosowano (lub nie wylosowano) punkty cech
				else if (hero[2] == "elf" && hero[3] == "nie wybrano") {
						hero.splice(4, 1, randomFeatures[0] + elv[0]);hero.splice(5, 1, randomFeatures[1] + elv[1]);
						hero.splice(6, 1, randomFeatures[2] + elv[2]);hero.splice(7, 1, randomFeatures[3] + elv[3]);
						hero.splice(8, 1, randomFeatures[4] + elv[4]);
					} else if (hero[2] == "elf" && hero[3] == "wojownik") {
						hero.splice(4, 1, randomFeatures[0] + elv[0] + warrior[0]);hero.splice(5, 1, randomFeatures[1] + elv[1] + warrior[1]);hero.splice(6, 1, randomFeatures[2] + elv[2] + warrior[2]);hero.splice(7, 1, randomFeatures[3] + elv[3] + warrior[3]);hero.splice(8, 1, randomFeatures[4] + elv[4] + warrior[4]);
					} else if (hero[2] == "elf" && hero[3] == "złoczyńca") {
						hero.splice(4, 1, randomFeatures[0] + elv[0] + criminal[0]);hero.splice(5, 1, randomFeatures[1] + elv[1] + criminal[1]);hero.splice(6, 1, randomFeatures[2] + elv[2] + criminal[2]);hero.splice(7, 1, randomFeatures[3] + elv[3] + criminal[3]);
						hero.splice(8, 1, randomFeatures[4] + elv[4] + criminal[4]);
					} else if (hero[2] == "elf" && hero[3] == "czarodziej") {
						hero.splice(4, 1, randomFeatures[0] + elv[0] + wizard[0]);hero.splice(5, 1, randomFeatures[1] + elv[1] + wizard[1]);hero.splice(6, 1, randomFeatures[2] + elv[2] + wizard[2]);
						hero.splice(7, 1, randomFeatures[3] + elv[3] + wizard[3]);hero.splice(8, 1, randomFeatures[4] + elv[4] + wizard[4]);
					}

					//dla krasnoluda i profesji oraz jeżeli wylosowano (lub nie wylosowano) punkty cech
					else if (hero[2] == "krasnolud" && hero[3] == "nie wybrano") {
							hero.splice(4, 1, randomFeatures[0] + dwarf[0]);hero.splice(5, 1, randomFeatures[1] + dwarf[1]);hero.splice(6, 1, randomFeatures[2] + dwarf[2]);hero.splice(7, 1, randomFeatures[3] + dwarf[3]);hero.splice(8, 1, randomFeatures[4] + dwarf[4]);
						} else if (hero[2] == "krasnolud" && hero[3] == "wojownik") {
							hero.splice(4, 1, randomFeatures[0] + dwarf[0] + warrior[0]);hero.splice(5, 1, randomFeatures[1] + dwarf[1] + warrior[1]);hero.splice(6, 1, randomFeatures[2] + dwarf[2] + warrior[2]);hero.splice(7, 1, randomFeatures[3] + dwarf[3] + warrior[3]);hero.splice(8, 1, randomFeatures[4] + dwarf[4] + warrior[4]);
						} else if (hero[2] == "krasnolud" && hero[3] == "złoczyńca") {
							hero.splice(4, 1, randomFeatures[0] + dwarf[0] + criminal[0]);hero.splice(5, 1, randomFeatures[1] + dwarf[1] + criminal[1]);hero.splice(6, 1, randomFeatures[2] + dwarf[2] + criminal[2]);hero.splice(7, 1, randomFeatures[3] + dwarf[3] + criminal[3]);hero.splice(8, 1, randomFeatures[4] + dwarf[4] + criminal[4]);
						} else if (hero[2] == "krasnolud" && hero[3] == "czarodziej") {
							hero.splice(4, 1, randomFeatures[0] + dwarf[0] + wizard[0]);hero.splice(5, 1, randomFeatures[1] + dwarf[1] + wizard[1]);hero.splice(6, 1, randomFeatures[2] + dwarf[2] + wizard[2]);hero.splice(7, 1, randomFeatures[3] + dwarf[3] + wizard[3]);hero.splice(8, 1, randomFeatures[4] + dwarf[4] + wizard[4]);
						}

						//dla orka i profesji oraz jeżeli wylosowano (lub nie wylosowano) punkty cech
						else if (hero[2] == "ork" && hero[3] == "nie wybrano") {
								hero.splice(4, 1, randomFeatures[0] + orc[0]);hero.splice(5, 1, randomFeatures[1] + orc[1]);
								hero.splice(6, 1, randomFeatures[2] + orc[2]);hero.splice(7, 1, randomFeatures[3] + orc[3]);
								hero.splice(8, 1, randomFeatures[4] + orc[4]);
							} else if (hero[2] == "ork" && hero[3] == "wojownik") {
								hero.splice(4, 1, randomFeatures[0] + orc[0] + warrior[0]);hero.splice(5, 1, randomFeatures[1] + orc[1] + warrior[1]);hero.splice(6, 1, randomFeatures[2] + orc[2] + warrior[2]);
								hero.splice(7, 1, randomFeatures[3] + orc[3] + warrior[3]);hero.splice(8, 1, randomFeatures[4] + orc[4] + warrior[4]);
							} else if (hero[2] == "ork" && hero[3] == "złoczyńca") {
								hero.splice(4, 1, randomFeatures[0] + orc[0] + criminal[0]);hero.splice(5, 1, randomFeatures[1] + orc[1] + criminal[1]);hero.splice(6, 1, randomFeatures[2] + orc[2] + criminal[2]);hero.splice(7, 1, randomFeatures[3] + orc[3] + criminal[3]);hero.splice(8, 1, randomFeatures[4] + orc[4] + criminal[4]);
							} else if (hero[2] == "ork" && hero[3] == "czarodziej") {
								hero.splice(4, 1, randomFeatures[0] + orc[0] + wizard[0]);hero.splice(5, 1, randomFeatures[1] + orc[1] + wizard[1]);hero.splice(6, 1, randomFeatures[2] + orc[2] + wizard[2]);hero.splice(7, 1, randomFeatures[3] + orc[3] + wizard[3]);hero.splice(8, 1, randomFeatures[4] + orc[4] + wizard[4]);
							}

							//punkty cech jezeli ne wybrało się rasy a wybrało się profesję (z wylosowanymi, lub nie, punktami cech)
							else if (hero[2] == "nie wybrano" && hero[3] == "wojownik") {
									hero.splice(4, 1, randomFeatures[0] + warrior[0]);hero.splice(5, 1, randomFeatures[1] + warrior[1]);hero.splice(6, 1, randomFeatures[2] + warrior[2]);hero.splice(7, 1, randomFeatures[3] + warrior[3]);hero.splice(8, 1, randomFeatures[4] + warrior[4]);
								} else if (hero[2] == "nie wybrano" && hero[3] == "złoczyńca") {
									hero.splice(4, 1, randomFeatures[0] + criminal[0]);hero.splice(5, 1, randomFeatures[1] + criminal[1]);hero.splice(6, 1, randomFeatures[2] + criminal[2]);hero.splice(7, 1, randomFeatures[3] + criminal[3]);hero.splice(8, 1, randomFeatures[4] + criminal[4]);
								} else if (hero[2] == "nie wybrano" && hero[3] == "czarodziej") {
									hero.splice(4, 1, randomFeatures[0] + wizard[0]);hero.splice(5, 1, randomFeatures[1] + wizard[1]);hero.splice(6, 1, randomFeatures[2] + wizard[2]);hero.splice(7, 1, randomFeatures[3] + wizard[3]);hero.splice(8, 1, randomFeatures[4] + wizard[4]);
								}

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
			if (hero[0] == "nie wybrano" || hero[1] == "nie wybrano" || hero[2] == "nie wybrano" || hero[3] == "nie wybrano" || hero[4] == 0 || hero[5] == 0 || hero[6] == 0 || hero[7] == 0 || hero[8] == 0 || hero[9] == "nie wybrano" || hero[10] == "nie wybrano" || hero[11] == "nie wybrano" || hero[12] == "nie wybrano" || hero[13] == "nie wybrano" || equip.length == 0 || skills.length == 0) {
				$("#playGame").remove();
			} else {
				$("#mainBtns").empty();functions.newElement("button", "playGame", "GRA", $("#mainBtns"));$("#playGame").addClass("basicBtn medievalText btnNewGame");$("#playGame").on("click", function () {
					$("#heroBtns, #mainBtns, #interactionsBtns, #mainPart").empty();intro.intro();
				});
			}
		}); //koniec zdarzenia dla informacji zbiorczej wszystkich dokonanych wyborów
	}); //koniec ręcznego tworzenie postaci

	//eksport tablic do gry
	module.exports.hero = hero;
	module.exports.equip = equip;
	module.exports.skills = skills;
	module.exports.tasks = ["zanieś paczkę mnichowi"];
	module.exports.gold = gold;
}; //koniec module.exports.randomChooseHeroBtns

///utworzenie paragrafu z opisem przycisków wylosuj i wybierz.
module.exports.textDescription = function () {
	$("#mainPart").html("<p id='text'>Zanim zaczniesz grę, muszisz stworzyć swoją postać. Można to zrobić na dwa sposoby. Pierwszy to wylosowanie protagonisty. Jest to sposób całkowice automatyczny i wystarczy wcisnąć przycisk <span class='blueText'>'losuj'</span>. Drugim sposobem na stworzenie własnej postaci jest jej własnoręczne utworzenie za pomocą kreatora postaci. W tym celu należy wcisnąć przycisk <span class='blueText'>'wybierz'</span>. Co robisz?</p>");
	$("#text").addClass("basicText medievalText");

	//utworzenie diva dla wylosowanej postaci
	functions.newElement("div", "drawnCharacter", "", $("#mainPart"));
};

/***/ }),
/* 1 */
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

//funkcja losowania punktów cech postaci w oparciu o rasę, profesję i wylosowaną liczbę
module.exports.randomPoints = function (occupationsPoints, racePoints, text, table, tablePosition) {
  var randomPoints = Math.round(Math.random() * 50);var allPoints = randomPoints + occupationsPoints + racePoints;$("#drawnCharacter").append("<p class = \"basicText center width20 medievalText fontSize11em\">" + text + (": <span class=\"greenText\">" + allPoints + "</span></p>"));table.splice(tablePosition, 1, allPoints);
};

//-----------------funkcje "ręcznego" tworzenia postaci----------------//
//funkcja czyszczenia diva interactionCreator, dodawania diva description oraz tytułu głównego
module.exports.clearStart = function (text) {
  $("#interactionCreator").empty();newElement("div", "description", "", $("#interactionCreator"));$("#interactionCreator").addClass("width100");newElement("p", "title", text, $("#interactionCreator"));$("#title").addClass("basicText medievalText textUnderlineGold");
};

//funkcja tworzenia opisu głównego w "ręcznym" tworzeniu postaci
module.exports.description = function (text2) {
  newElement("p", "descriptionName", "", $("#interactionCreator"));$("#descriptionName").html("<p id='text'>" + text2 + "</p>");
  $("#descriptionName").addClass("medievalText boldText marginTop3");
};

//jedna funkcja dla wyboru rasy
module.exports.oneRace = function (hero, text) {
  hero.splice(2, 1, text);$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>" + text + "</span></p>");setTimeout(function () {
    $("#alerts").empty();
  }, 5000);
};

//jedna funkcja dla wyboru profesji
module.exports.oneOccupation = function (hero, text) {
  hero.splice(3, 1, text);$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana profesja to: <span class='blueText'>" + text + "</span></p>");setTimeout(function () {
    $("#alerts").empty();
  }, 5000);
};

//funkcja losując punkty cechy - "ręczne" tworzenie postaci
module.exports.randomPointsFeatures = function (element, name, number, randomFeatures) {
  element.on("click", function () {
    var name = Math.round(Math.random() * 50);randomFeatures.splice(number, 1, name);if (randomFeatures[0] !== 0 && randomFeatures[1] !== 0 && randomFeatures[2] !== 0 && randomFeatures[3] !== 0 && randomFeatures[4] !== 0) {
      $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wylosowano wszystkie cechy</p>");setTimeout(function () {
        $("#alerts").empty();
      }, 5000);
    }
  });
};

//zdarzenie wyboru płci
module.exports.sex = function (hero, text) {
  hero.splice(1, 1, text);
  $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano płeć: <span class='blueText'> " + text + "</span></p>");setTimeout(function () {
    $("#alerts").empty();
  }, 5000);
};

//zdarzenie wyboru koloru oczu
module.exports.eyes = function (hero, text) {
  hero.splice(9, 1, text);
  $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor oczu: <span class='blueText'> " + text + "</span></p>");setTimeout(function () {
    $("#alerts").empty();
  }, 5000);
};

//zdarzenie wyboru koloru włosów
module.exports.hair = function (hero, text) {
  hero.splice(10, 1, text);
  $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor włosów: <span class='blueText'> " + text + "</span></p>");setTimeout(function () {
    $("#alerts").empty();
  }, 5000);
};

//zdarzenie wyboru koloru skóry
module.exports.skin = function (hero, text) {
  hero.splice(11, 1, text);
  $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor skóry: <span class='blueText'> " + text + "</span></p>");setTimeout(function () {
    $("#alerts").empty();
  }, 5000);
};

//zdarzenie wyboru koloru wagi
module.exports.weight = function (hero, text) {
  hero.splice(12, 1, text);
  $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano wagę: <span class='blueText'> " + text + "</span></p>");setTimeout(function () {
    $("#alerts").empty();
  }, 5000);
};

//zdarzenie wyboru wzrostu
module.exports.height = function (hero, text) {
  hero.splice(13, 1, text);
  $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano wzrost: <span class='blueText'> " + text + "</span></p>");setTimeout(function () {
    $("#alerts").empty();
  }, 5000);
};

//funkcja dodawania i usuwania rzeczy do ekwipunku
module.exports.itemsAddRemove = function (whatClick, whatPush, equip) {
  if (equip.length < 5) {
    if (equip.indexOf(whatPush) !== -1) {
      var number = 0;number = number + equip.length;$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano rzecz: <span class='blueText'> " + whatPush + "</span></p>");setTimeout(function () {
        $("#alerts").empty();
      }, 5000);$("#btnToRemove").text(newElement("button", whatPush + number, whatPush, $("#btnToRemove")));
    } else {
      $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano rzecz: <span class='blueText'> " + whatPush + "</span></p>");setTimeout(function () {
        $("#alerts").empty();
      }, 5000);$("#btnToRemove").text(newElement("button", whatPush, whatPush, $("#btnToRemove")));
    }
    $("#btnToRemove").find("button").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");equip.push(whatPush);var allBtnRemove = document.querySelectorAll("#btnToRemove button"),
        i = void 0;for (i = 0; i < allBtnRemove.length; i++) {
      allBtnRemove[i].addEventListener("click", function (e) {
        equip.splice(equip.indexOf(this.id), 1);this.remove();$("#alerts").html("<p class='redText boldText fontSize12em medievalText'>usunięto: <span class='blueText'>" + this.id + "</span>");setTimeout(function () {
          $("#alerts").empty();
        }, 5000);
      });
    }
  } else {
    $("#alerts").html("<p class='redText boldText fontSize12em medievalText'>Już zostało wybrane pięć przedmiotów.");setTimeout(function () {
      $("#alerts").empty();
    }, 5000);equip.splice(5, 1);
  }
};

//"funkcja" dodawania i usuwania umiejętności
module.exports.skillsAddRemove = function (whatClick, whatPush, skills) {
  if (skills.length <= 2) {
    if (skills.indexOf(whatPush) !== -1) {
      $("#alerts").html("<p class='redText boldText fontSize12em medievalText'>Ta umiejętność została już wybrana.</p>");setTimeout(function () {
        $("#alerts").empty();
      }, 5000);
    } else {
      skills.push(whatPush);newElement("button", whatPush, whatPush, $("#btnToRemove"), "bold");$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>" + whatPush + "</span></p>");setTimeout(function () {
        $("#alerts").empty();
      }, 5000);
    }
  } else if (skills.length > 2) {
    $("#alerts").html("<p class='redText boldText fontSize12em medievalText'>Już zostały wybrane trzy umiejętności.</p>");setTimeout(function () {
      $("#alerts").empty();
    }, 5000);
  }
  var allBtnRemove = document.querySelectorAll("#btnToRemove button"),
      i = void 0;$("#btnToRemove").find("button").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");for (i = 0; i < allBtnRemove.length; i++) {
    allBtnRemove[i].addEventListener("click", function (e) {
      if (skills.indexOf(this.id) !== -1) {
        skills.splice(skills.indexOf(this.id), 1);this.remove();
      }
    });
  }
};

//pętla dla przycisków usuwania przedmiotów, gdy pownownie wejdzie się w opcje wybiernia przedmiotów
module.exports.itemForRemove = function (equip) {
  for (var j = 0; j < equip.length; j++) {
    newElement("button", j, equip[j], $("#btnToRemove"));$("#btnToRemove").find("button").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");var allBtnRemove = document.querySelectorAll("#btnToRemove button"),
        i = void 0;
    for (i = 0; i < allBtnRemove.length; i++) {
      allBtnRemove[i].addEventListener("click", function (e) {
        if (equip.indexOf($(this).text()) !== -1) {
          equip.splice(equip.indexOf($(this).text()), 1);this.remove();
        }this.remove();
      });
    }
  }
};

//pętla dla przycisków usuwania umiejętności, gdy pownownie wejdzie się w opcje wybiernia umiejętności
module.exports.skillsToRemove = function (skills) {
  for (var j = 0; j < skills.length; j++) {
    newElement("button", j, skills[j], $("#btnToRemove"));$("#btnToRemove").find("button").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5");var allBtnRemove = document.querySelectorAll("#btnToRemove button"),
        i = void 0;
    for (i = 0; i < allBtnRemove.length; i++) {
      allBtnRemove[i].addEventListener("click", function (e) {
        if (skills.indexOf($(this).text()) !== -1) {
          skills.splice(skills.indexOf($(this).text()), 1);this.remove();
        }this.remove();
      });
    }
  }
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

//funkcja akceptowania imienia
module.exports.acceptName = function (hero) {
  $("#acceptName").on("click", function () {
    var nameInput = $("#giveName").val().replace(/\d/g, '');if (nameInput == "") {
      $("#alerts").html("<p class='redText boldText fontSize12em medievalText'>nie wybrano imienia</p>");
    } else {
      hero.splice(0, 1, nameInput);$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrane imię to: <span class='blueText'>" + nameInput + "</span></p>");
    }setTimeout(function () {
      $("#alerts").empty();
    }, 5000);
  });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import funkcji z pliku zewnętrznego
var functions = __webpack_require__(1); //podstawowe funkcje
var heroCreator = __webpack_require__(0);
var defenseCaravans = __webpack_require__(4);

//zdarzenie dla przycisku "cechy"
module.exports.btnFeatures = function () {
  $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>TWÓJ PROTAGONISTA</p><div class='width90 flexForBtns marginTop2'><p class='width24 navyText'>imię: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[0] + "</span></p><p class='width24 navyText'>płeć: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[1] + "</span></p><p class='width24 navyText'>rasa: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[2] + "</span></p><p class='width24 navyText'>profesja: <span class='blackText fontSize12em'>" + heroCreator.hero[3] + "</p></div><div class='width90 flexForBtns marginTop2'><p class='width33 navyText'>siła: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[4] + "</span></p><p class='width33 navyText'>wytrzymałość: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[5] + "</span></p><p class='width33 navyText'>zręczność: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[6] + "</span></p><p class='width33 navyText'>inteligencja: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[7] + "</span></p><p class='width33 navyText'>charyzma: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[8] + "</span></p></div><div class='width90 flexForBtns marginTop2'><p class='width33 navyText'>kolor oczu: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[9] + "</span></p><p class='width33 navyText'>kolor włosów: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[10] + "</span></p><p class='width33 navyText'>kolor skóry: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[11] + "</span></p><p class='width33 navyText'>waga: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[12] + "</span></p><p class='width33 navyText'>wzrost: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[13] + "</span></p></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");
  $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", true);

  $("#close").on("click", function () {
    $("#info").empty();$("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", false);
  });
};

//zdarzenie dla przycisku "ewipunku"
module.exports.btnEquip = function () {
  $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>EKWIPUNEK</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em'>" + heroCreator.equip + "</span></p><p class='width90 navyText'>złoto: <span class='blackText boldText fontSize12em'>" + heroCreator.gold + "</span></p</div></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", true);

  $("#close").on("click", function () {
    $("#info").empty();$("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", false);
  });
};

//zdarzenie dla przycisku "umiejętności"
module.exports.btnSkills = function () {
  $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>UMIEJĘTNOŚCI</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em'>" + heroCreator.skills + "</span></p></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");
  $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", true);

  $("#close").on("click", function () {
    $("#info").empty();$("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", false);
  });
};

//zdarzenie dla przycisku "zadania"
module.exports.btnTasks = function () {
  $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>ZADANIA</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em'>" + heroCreator.tasks + "</span></p></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");
  $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", true);

  $("#close").on("click", function () {
    $("#info").empty();$("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", false);
  });
};

//zdarzenie dla przycisku "punkty bojowe"
module.exports.powerHero = function () {
  //suma wszystkich puntktów bojowych 0 - cechy, 1 - ekwipunek, 2 - umiejętności
  var allPoints = [0, 0, 0];

  //suma punktów z cech postaci
  var suma = heroCreator.hero[4] + heroCreator.hero[5] + heroCreator.hero[6] + heroCreator.hero[7] + heroCreator.hero[8];
  allPoints.splice(0, 1, suma);

  //suma punktów z wybranego ekwipunku
  var sumaEquip = [0];

  //tablica dla posiadanych umiejętnościach
  var activeSkills = [0];

  //tablica dla punktów bojowych wynikających z umiejętności
  var pointsSkills = [0];

  //filtrowanie ekqwipunu oraz przypisanie do rzeczy wartości punktowych
  var equipPoints = defenseCaravans.fightWeapon.filter(function (el) {
    if (el == "sztylet" || el == "proca" || el == "przeszywanica" || el == "puklerz" || el == "kostur") {
      sumaEquip.splice(0, 1, 5);

      if (heroCreator.skills.indexOf(el) !== -1) {
        pointsSkills.splice(0, 1, 5);
        activeSkills.push(el);
      }
    } else if (el == "krótki miecz" || el == "drewniana pałka" || el == "łuk" || el == "zbroja skórzana" || el == "zbroja ćwiekowana" || el == "mała tarcza drewniana" || el == "mała tarcza drewniana") {
      sumaEquip.push(10);

      if (heroCreator.skills.indexOf(el) !== -1) {
        pointsSkills.splice(0, 1, 10);
        activeSkills.push(el);
      }
    } else if (el == "szabla" || el == "włócznia") {
      sumaEquip.splice(0, 1, 15);

      if (heroCreator.skills.indexOf(el) !== -1) {
        pointsSkills.splice(0, 1, 15);
        activeSkills.push(el);
      }
    } else if (el == "mieszek" || el == "torba podróżna" || el == "sakwa" || el == "plecak" || el == "manierka" || el == "sagan" || el == "koc" || el == "tuba na perg." || el == "pęk piór do pis." || el == "pergaminy 5szt." || el == "zwykłe ubranie" || el == "fikuśna czapka" || el == "płaszcz" || el == "skórzany płaszcz" || el == "igły i nici" || el == "derka" || el == "namiot" || el == "drewniana miska" || el == "drewniana łyżka" || el == "pochodnia" || el == "lampa oliwna" || el == "kaganek" || el == "lina 5m" || el == "hubka i krzesiwo") {
      sumaEquip.push(-10);

      if (heroCreator.skills.indexOf(el) !== -1) {
        pointsSkills.splice(0, 1, -10);
        activeSkills.push(el);
      }
    }
  });

  //zliczanie punktów z wybranego ekwipunku
  var sumaPointEquip = 0;
  for (var i = 0; i < sumaEquip.length; i++) {
    sumaPointEquip += sumaEquip[i];
    allPoints.splice(1, 1, sumaPointEquip);
  }

  //zliczanie punktów z umiejętności
  var sumaPointSkills = 0;
  for (var _i = 0; _i < pointsSkills.length; _i++) {
    sumaPointSkills += pointsSkills[_i];
    allPoints.splice(2, 1, sumaPointSkills);
  }

  var allHeroPoints = allPoints[0] + allPoints[1] + allPoints[2];

  //informacja zbiorcza z ilością puntktów bojowych z rozbiciem na posczególne moduły: cechy, ekwipunek (ich sumy) oraz suma cech i ekwipunku
  $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>WARTOŚCI BOJOWE</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em textUnderlineGold'>cechy</span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>siła: <span class='navyText'>" + heroCreator.hero[4] + "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>wytrzymałość: <span class='navyText'>" + heroCreator.hero[5] + "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>zręczność: <span class='navyText'>" + heroCreator.hero[6] + "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>inteligencja: <span class='navyText'>" + heroCreator.hero[7] + "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>charyzma: <span class='navyText'>" + heroCreator.hero[8] + "</span></span></p><p class='width90 center'><span class='blackText boldText fontSize12em textUnderlineGold'>suma punktów cech: <span class='navyText textUnderlineGold center'>" + suma + "</span></span></p><p class='width90'><span class='blackText boldText fontSize12em textUnderlineGold'>wybrany sprzęt: </p><p id='equipToRemove' class='width90'><span class='navyText'>" + defenseCaravans.fightWeapon + "</span></span></p><p class='width90 center'><span class='blackText boldText fontSize12em textUnderlineGold'>suma punktów ekwipunku: <span class='navyText textUnderlineGold center'>" + sumaPointEquip + "</span></span></p><p class='width90'><span class='blackText boldText fontSize12em textUnderlineGold'>umiejętności: </p><p id='equipToRemove' class='width90'><span class='navyText'>" + activeSkills + "</span></span></p><p class='width90 center'><span class='blackText boldText fontSize12em textUnderlineGold'>suma punktów umiejętności: <span class='navyText textUnderlineGold center'>" + sumaPointSkills + "</span></span></p><p class='width90 center marginTop3'><span class='blackText boldText fontSize12em textUnderlineGold'>suma punktów bojowych: <span class='navyText textUnderlineGold center'>" + (suma + sumaPointEquip + sumaPointSkills) + "</span></span></p></div><button id='removeEquip' class='bckgRed fontSize12em width20 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>usuń rzeczy</button><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");

  $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", true);

  $("#close").on("click", function () {
    $("#info").empty();$("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", false);
  });

  //usuwanie wybranego ekwipunku do walki
  $("#removeEquip").on("click", function () {
    defenseCaravans.fightWeapon.splice(0, 3);
    activeSkills.splice(0, 3);
    $("#equipToRemove").empty();
    var przyciski = $("#btnsWeapon").find("button");
    przyciski.attr("disabled", false);
  });

  var a = suma + sumaPointEquip + sumaPointSkills;
  module.exports.a = a;
};

//tablica dla sprawdzania wykonania zadania. index 0 - oznacza zadanie, więc wartość 1 to pasikonik, 2 - wilk, 3-trol
module.exports.taskArray = [0, 0];

//tablica dla zrobionych zadań
module.exports.taskDone = [0, 0, 0];

//ostatni paragraf
module.exports.gameOver = function () {
  $("#mainPart").html("<div class='basicText medievalText'> Zako\u0144czy\u0142e\u015B trzecie zadanie. Zm\u0119czony i poobijany wr\xF3ci\u0142e\u015B do osady. Gdy tylko wszed\u0142e\u015B do osady zobaczy\u0142e\u015B jak mieszka\u0144cy oraz uczestnicy karawany \u015Bwi\u0119towali. Kap\u0142an uleczy\u0142 Twoje rany, dzi\u0119ki temu mog\u0142e\u015B bawi\u0107 si\u0119 z innymi. Nast\u0119pnego dnia obudzi\u0142e\u015B si\u0119 potwornym kacem, na kopie siana w szczerym polu. I tak nast\u0105pi\u0142 szcz\u0119\u015Bliwy koniec tej przygody z dostarczeniem paczki. Jednak\u017Ce nasta\u0142 nowy dzie\u0144... ale to ju\u017C inna historia.</div><div id='description' class='center medievalText marginTop15 whiteTextShadow11 gameOver'><a href=\"javascript:location.reload()\">GAME OVER</div></a>");
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heroCreator = __webpack_require__(0);
var street = __webpack_require__(5);

//głowny tekst opisowy dla paragrafu pierwszego (pokoju)
module.exports.textRoom = function () {
  $("#mainPart").html("<div class='basicText medievalText'>Stoisz w swoim pokoju, w którym znajduje się tylko łóżko, szafa, mały stolik i drewniana skrzynia. Na stoliku leży zawniątko, które musisz oddać mnichowi w przygranicznej wiosce. Co robisz?</div><div id='description'></div>");
};

//zawartość zdarzenia dla przycisku rozejrzyj się
module.exports.lookAround = function () {
  $("#description").html("<p class='basicText medievalText'>Rozglądasz się po pokoju. Widzisz drewnianą szafę, stojącą w rogu pokoju. Pod oknem stoi niewielka, drewniana skrzynia. Naprzeciw drzwi stoi łóżko. W pomieszczeniu niemiłosiernie wali stęchlizną i kupą szczurów.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", function () {
    $("#description").empty();
  });
};

//zawartość zdarzenia dla przycisku szafa
module.exports.wardrobe = function () {
  if (heroCreator.equip.indexOf('płaszcz') !== -1) {
    if (heroCreator.hero[1] === "kobieta") {
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłaś szafę. Jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#close").on("click", function () {
        $("#description").empty();
      });
    } else if (heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo") {
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłeś szafę. Jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#close").on("click", function () {
        $("#description").empty();
      });
    }
  } else {
    if (heroCreator.hero[1] === "kobieta") {
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłaś szafę, w której wisi płaszcz.</p><button id='coat' class='basicBtn bckgGreen medievalText whiteTextShadow11 width15 boldText'>weź płaszcz</button><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#coat").on("click", function () {
        heroCreator.equip.push("płaszcz");
        $("#coat").remove();
      });
      $("#close").on("click", function () {
        $("#description").empty();
      });
    } else if (heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo") {
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłeś szafę, w której wisi płaszcz.</p><button id='coat' class='basicBtn bckgGreen medievalText whiteTextShadow11 width15 boldText'>weź płaszcz</button><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#coat").on("click", function () {
        heroCreator.equip.push("płaszcz");
        $("#coat").remove();
      });
      $("#close").on("click", function () {
        $("#description").empty();
      });
    }
  }
};

//zdarzenia dla przycisku skrzynia
module.exports.chest = function () {
  if (heroCreator.gold[0] > 0) {
    if (heroCreator.hero[1] === "kobieta") {
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłaś skrzynię. Jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#close").on("click", function () {
        $("#description").empty();
      });
    } else if (heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo") {
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłeś skrzynię. Jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#close").on("click", function () {
        $("#description").empty();
      });
    }
  } else {
    if (heroCreator.hero[1] === "kobieta") {
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłaś skrzynię, w której znajduje się 12 sztuk złota.</p><button id='coat' class='basicBtn bckgGreen medievalText whiteTextShadow11 width15 boldText'>weź złoto</button><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#coat").on("click", function () {
        heroCreator.gold.splice(0, 1, 12);
        $("#description").html("<p class='basicText medievalText boldText'>Skrzynia jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
        $("#close").on("click", function () {
          $("#description").empty();
        });
      });
      $("#close").on("click", function () {
        $("#description").empty();
      });
    } else if (heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo") {
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłeś skrzynię, w której znajduje się 12 sztuk złota.</p><button id='coat' class='basicBtn bckgGreen medievalText whiteTextShadow11 width15 boldText'>weź złoto</button><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#coat").on("click", function () {
        heroCreator.gold.splice(0, 1, 12);
        $("#description").html("<p class='basicText medievalText boldText'>Skrzynia jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
        $("#close").on("click", function () {
          $("#description").empty();
        });
      });
      $("#close").on("click", function () {
        $("#description").empty();
      });
    }
  }
};

//zdarzenie dla paczki
module.exports.package = function () {
  heroCreator.equip.push("paczka");
  $("#outRoom").removeClass("bckgRed").addClass("bckgGreen").prop("disabled", false);
  $("#package").remove();
};

//zdarzenie dla wyjścia z pokoju
module.exports.outRoom = function () {
  $("#mainPart").empty();
  $("#outRoom, #wardrobe, #chest, #lookAroundRoom").hide();
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heroCreator = __webpack_require__(0);
var functions = __webpack_require__(1); //podstawowe funkcje
var theGame = __webpack_require__(2);

//tablica dla ustalania stylu walki
var fightStyle = ["brak"];

module.exports.textCaravans = function () {
  //główny tekst opisowy dla paragrafu - karawany - paragraf postoju karawan
  $("#mainPart").html("<div class='basicText medievalText'>Jedziecie sobie spokojnie. Czas mija na oglądaniu pejzaży z jadącego wozu. Niestety ta sielanka skończyła się wieczorem drugiego dnia. Zaczęło się od zawalonej, przez drzewa drogi. Gdy uczestnicy, z pierwszych wozów karawany uprzątali drzewa, nastąpił atak. Wszyscy muszą walczyć!. Ciebie atakuje jeden bandyta z wielkim mieczem. <span class='normalText italic'>Po lewej stronie znajduje się przycisk <span class='blueText boldText'>'przygotuj się'</span>, aby wybrać ekwipunek.</span></div><div id='description'></div>");

  $("#toVillage, #prepare").show().addClass("basicBtn medievalText shadowForBtn marginTop4");
  $("#toVillage").addClass("bckgRed");
  $("#toVillage").prop("disabled", true);
  $("#prepare").addClass("bckgGreen fontSize08em paddingUpDown1");

  $("#prepare").on("click", function () {
    $("#description").html("<p class='textUnderlineGold boldText medievalText width100 center marginTop5 fontSize11em'>WYBIERZ EKWIPUNEK DO WALKI</p><div id='btnsWeapon' class='flexForBtns'></div>");
    //wybór przedmiotów do walki
    //przyciski z rzeczmi do wyboru
    for (var i = 0; i < heroCreator.equip.length; i++) {
      var weaponBtn = document.createElement("button");
      weaponBtn.id = heroCreator.equip[i];
      weaponBtn.innerText = heroCreator.equip[i];
      $("#btnsWeapon").append(weaponBtn);
    }

    var allBtns = document.querySelectorAll("#description button");
    $("#btnsWeapon").find("button").addClass("basicBtn medievalText bckgGreen width20 marginTop4");
    var fightWeapon = []; //tablica pomocnicza, dzięki której jest możliwa walidacja wuboru 3 rzeczy do walki oraz oblicznia wartości bojowej

    for (var _i = 0; _i < allBtns.length; _i++) {
      allBtns[_i].onclick = function () {
        if (fightWeapon.length < 3) {
          var item = $(this).text();
          fightWeapon.push(item);
          $(this).prop("disabled", true);
          $("#alerts").html("<p id='buyed' class='greenText medievalText boldText'>Został wybrany: <span class='blueText'>" + $(this).text() + "</span></p>");
          setTimeout(function () {
            $("#alerts").empty();
          }, 5000);
        } else if (fightWeapon.length >= 3) {
          $("#alerts").html("<p id='buyed' class='redText medievalText boldText'>Nie możesz wybrać więcej rzeczy.</p>");
          setTimeout(function () {
            $("#alerts").empty();
          }, 5000);
        }
      };
      module.exports.fightWeapon = fightWeapon;
    }

    //przycisk sprawdzający punkty bojowe postaci
    var powerHero = document.createElement("button");
    powerHero.id = "powerHero";
    powerHero.innerText = "punkty bojowe";
    $("#btnsWeapon").append(powerHero);
    $("#powerHero").addClass("basicBtn medievalText bckgGreen width20 marginTop4");

    $("#powerHero").on("click", function () {
      theGame.powerHero();
    });

    //przycisk kończący - zatwierdzający wybieranie
    var btnAccept = document.createElement("button");
    btnAccept.id = "chooseFinish";
    btnAccept.innerText = "zakończ wybieranie";
    $("#btnsWeapon").append(btnAccept);
    $("#chooseFinish").addClass("basicBtn medievalText bckgGreen width20 marginTop4");

    $("#paczka").remove();

    //koniec wybierania ekwipunku oraz wybranie stylu walki
    $("#chooseFinish").on("click", function () {
      $("#description").empty();
      $("#description").html("<p class='textUnderlineGold boldText medievalText width100 center marginTop5 fontSize11em'>WYBIERZ STYL WALKI</p><div id='btnsStyles' class='flexForBtns'></div>");

      functions.newElement("button", "none", "brak", $("#btnsStyles"));
      functions.newElement("button", "defensive", "defensywny", $("#btnsStyles"));
      functions.newElement("button", "agresive", "ofensywny", $("#btnsStyles"));
      functions.newElement("button", "finish", "zakończ wybieranie", $("#btnsStyles"));

      $("#none, #defensive, #agresive, #finish").addClass("basicBtn medievalText bckgGreen width20 marginTop4");

      //zdarzenie dla braku stylu
      $("#none").on("click", function () {
        fightStyle.splice(0, 1, "brak");

        $("#alerts").html("<p id='stylesFight' class='greenText medievalText boldText'>wybrany styl walki: <span class='blueText'>brak</span></p>");
        setTimeout(function () {
          $("#alerts").empty();
        }, 5000);
      });

      //zdarzenie dla stylu defensywnego
      $("#defensive").on("click", function () {
        fightStyle.splice(0, 1, "defensywny");

        $("#alerts").html("<p id='stylesFight' class='greenText medievalText boldText'>wybrany styl walki: <span class='blueText'>defensywny</span></p>");
        setTimeout(function () {
          $("#alerts").empty();
        }, 5000);
      });

      //zdarzenie dla stylu ofensywnego
      $("#agresive").on("click", function () {
        fightStyle.splice(0, 1, "ofensywny");
        $("#alerts").html("<p id='stylesFight' class='greenText medievalText boldText'>wybrany styl walki: <span class='blueText'>ofensywny</span></p>");
        setTimeout(function () {
          $("#alerts").empty();
        }, 5000);
      });
      //zakończenie wybierania stylu WALKI
      $("#finish").on("click", function () {
        theGame.powerHero();

        //część kodu walki umożliwiająca walkę podczas wyonywania zadań: pasikonik, wilk i troll
        if (theGame.taskArray[0] == 1) {
          theGame.taskArray.splice(1, 1, 1);
        } else if (theGame.taskArray[0] == 2) {
          theGame.taskArray.splice(1, 1, 2);
        } else if (theGame.taskArray[0] == 3) {
          theGame.taskArray.splice(1, 1, 3);
        }

        if (theGame.taskArray[0] == 1 && theGame.taskArray[1] == 1) {
          $("#finishTask1").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
        } else if (theGame.taskArray[0] == 2 && theGame.taskArray[1] == 2) {
          $("#finishTask2").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
        } else if (theGame.taskArray[0] == 3 && theGame.taskArray[1] == 3) {
          $("#finishTask3").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
        }
        //koniec części kodu walki umożliwiająca walkę podczas wyonywania zadań: pasikonik, wilk i troll

        $("#info").empty();
        $("#features, #equip, #skills, #tasks").prop("disabled", false);

        $("#toVillage").removeClass("bckgRed").addClass("bckgGreen").prop("disabled", false);

        $("#prepare").hide();

        //wyliczanie trafienia dla gracza i przeciwnika
        var hitting = theGame.a;
        var hitting1 = theGame.a / 2;

        //losowanie czy gracz trafił

        var hits = [];

        if (hitting1 < hitting) {
          hits.splice(0, 1, " trafiony");
        } else {
          hits.splice(0, 1, " nie trafiony");
        }

        $("#description").empty();
        $("#description").html("<div class='width75 flexForBtns medievalText greenText boldText fontSize1em marginTop4'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>WALKA</p><p class='width100 center'><span class='blackText boldText fontSize12em textUnderlineGold'>Twoje trafienie</span></p><p class='width100 center'><span class='blackText boldText fontSize12em'><span class='navyText'> " + hitting + " </span></span></p><p class='width100 center'><span class='blackText boldText fontSize12em'><span id='result' class='navyText'> " + hits + "</span></span></p><p class='width100 center'><span class='blackText boldText fontSize12em textUnderlineGold'>Trafienie przeciwnika </span></p><p class='width100 center'><span class='blackText boldText fontSize12em'><span class='navyText'> " + hitting1 + " </span></span></p><p class='width100 center'><span class='blackText boldText fontSize12em'><span id='result' class='navyText'>nie trafiony</span></span></p></div>");

        $("#toVillage").on("click", function () {
          $("#toVillage").hide();
          $("#toVillage2").show().addClass("basicBtn medievalText bckgGreen width49 marginTop4");
          var text = [];

          //wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
          if (heroCreator.hero[1] == "kobieta") {
            text.splice(0, 1, "przeżyłaś");
            text.splice(1, 1, "Rozejrzałaś się");
          } else if (heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo") {
            text.splice(0, 1, "przeżyłeś");
            text.splice(1, 1, "Rozejrzałeś się");
          }

          //wyszukanie w tablicy trafienia (lub nie) i przypisanie go do zmiennej
          if (hits.indexOf(" trafiony") !== -1 && heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo") {
            text.splice(2, 1, "Jednym z ciosów, trafiłeś swojego przeciwnika i wysłałeś go do piachu");
          } else if (hits.indexOf(" trafiony") !== -1 && heroCreator.hero[1] == "kobieta") {
            text.splice(2, 1, "Jednym z ciosów, trafiłaś swojego przeciwnika i wysłałaś go do piachu");
          } else {
            text.splice(2, 1, "Twój przeciwnik nagle odwrócił się i uciekł");
          }

          $("#mainPart").html("<p class=\"basicText medievalText\">Szcz\u0119\u015Bliwie " + text[0] + " walk\u0119. " + text[2] + ". " + text[1] + ". Walka r\xF3wnie szybko si\u0119 sko\u0144czy\u0142a jak zacz\u0119\u0142a. Karawana odczea\u0142a w gotowo\u015Bci jescze kilka minut. Po nich pochowali\u015Bcie cia\u0142a poleg\u0142ych obro\u0144c\xF3w i atakuj\u0105cych w jednej, zbiorowej mogile, niedaleko drogi. Po kr\xF3tkich modlitwach odjechali\u015Bcie. Twoje cechy podnios\u0142y si\u0119.<p>");

          //dodanie punktów do cech
          console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);
          heroCreator.hero.splice(4, 1, heroCreator.hero[4] + 5);
          heroCreator.hero.splice(5, 1, heroCreator.hero[5] + 5);
          heroCreator.hero.splice(6, 1, heroCreator.hero[6] + 5);
          heroCreator.hero.splice(7, 1, heroCreator.hero[7] + 5);
          heroCreator.hero.splice(8, 1, heroCreator.hero[8] + 5);
          console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);
        });
      });
    });
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heroCreator = __webpack_require__(0);
var room = __webpack_require__(3);

module.exports.showBtns = function () {
  $("#lookAroundStreet, #inRoom, #toCaravans, #toMarket").show();
  $("#lookAroundStreet, #inRoom, #toCaravans, #toMarket").addClass("basicBtn");
  $("#inRoom, #toCaravans, #toMarket").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#lookAroundStreet").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
};

module.exports.textStreet = function () {
  //główny tekst opisowy dla paragrafu - ulica - paragraf drugi
  $("#mainPart").html("<div class='basicText medievalText'>Stoisz przed domem. Aby udać się do wyznaczonego celu, najlepiej zabrać się z jakąś karawaną. Idziesz w kierunku bramy miasta. Przy bramie znajduje się targ. To dobry czas i miejsce, aby uzupełnić zapasy na dalszą podróż. Co robisz?</div><div id='description'></div>");
};

module.exports.lookAroundStreet = function () {
  $("#description").html("<p class='basicText medievalText'>Typowa ulica dzielnicy Najemników, miasta Erharuf. Częściowo brukowana. Pobliskie budynki są niskie i drewniane, maksymalnie jednopiętrowe. Nic specjalnego.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", function () {
    $("#description").empty();
  });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import z plików zewnętrznych
var functions = __webpack_require__(1); //podstawowe funkcje
var introFirstMenu = __webpack_require__(8); //plik z częścią intro oraz pierwszym menu
var heroCreator = __webpack_require__(0);
var introGame = __webpack_require__(16);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import funkcji z pliku zewnętrznego
var functions = __webpack_require__(1); //podstawowe funkcje
var heroCreator = __webpack_require__(0); //plik tworzenia postaci

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import funkcji z pliku zewnętrznego
var functions = __webpack_require__(1); //podstawowe funkcje
var theGame = __webpack_require__(2); //gra
var heroCreator = __webpack_require__(0);
var room = __webpack_require__(3);
var street = __webpack_require__(5);
var market = __webpack_require__(10);
var caravans = __webpack_require__(11);
var defenseCaravans = __webpack_require__(4);
var village = __webpack_require__(12);
var grasshopper = __webpack_require__(13);
var wolf = __webpack_require__(14);
var troll = __webpack_require__(15);

var text1 = "Mówią, że Dzikie Pustkowia to kraina opuszczona przez Bogów.";

var text2 = "Pełna siedzib mrocznych kultów, wyrzutków społeczeństwa, krwiożerczych bestii i demonów, przywołanych czarną magią z innych wymiarów.";

var text3 = " Krąży wiele legend o ukrytych, nieprzebranych skarbach, o herosach - smokobójcach.";

var text4 = "Dzikie Pustkowia fascynuję i przerażają, jednak wielu śmiałków wędruje w tą część świata w poszukiwaniu bogactw i chwały.";

var text5 = "Większość nie wraca... ";

var text6 = "Twoja historia zaczyna się w mieście Erharuf.";

var text7 = " W ostatnim bezpiecznym mieście przed Dzikimi Pustkowiami.";

var text8 = "Na usilną prośbę znajomego kapłana zgadzasz się dostarczyć małą paczkę dla tamtejszego mnicha, rezydującego w niewielkiej wiosce, która leży tuż przy granicy z Dzikimi Pustkowiami.";

module.exports.intro = function () {
  setTimeout(function () {
    $("#mainPart").empty();
    functions.newElement("p", "text1", text1, $("#mainPart"));
    functions.newElement("p", "text2", text2, $("#mainPart"));
    functions.newElement("p", "text3", text3, $("#mainPart"));
    functions.newElement("p", "text4", text4, $("#mainPart"));
    functions.newElement("p", "text5", text5, $("#mainPart"));
    functions.newElement("p", "text6", text6, $("#mainPart"));
    functions.newElement("p", "text7", text7, $("#mainPart"));
    functions.newElement("p", "text8", text8, $("#mainPart"));
    $("#text1, #text2, #text3, #text4, #text5, #text6, #text7, #text8").addClass("basicText center width100 medievalText fontSize11em");
  }, 100);

  setTimeout(function () {
    $("#text1, #text2, #text3, #text4, #text5, #text6, #text7, #text8").hide();

    //utworzenie głownych przycisków: cechy, ekwipunek, umijętności i zadania
    functions.newElement("button", "features", "cechy", $("#heroBtns"));
    functions.newElement("button", "equip", "ekwipunek", $("#heroBtns"));
    functions.newElement("button", "skills", "umiejętności", $("#heroBtns"));
    functions.newElement("button", "tasks", "zadania", $("#heroBtns"));
    $("#features, #equip, #skills, #tasks").addClass("basicBtn btnNewGame");
    $("#equip, #skills").addClass("fontSize09em paddingUpDown1");

    //utworzenie przyciku wyjdź dla paragrafu pierwszego - pokoju - w tym miejscu zablokowane odpalenie zdarzenia
    functions.newElement("button", "outRoom", "wyjdź", $("#mainBtns"));
    $("#outRoom").prop("disabled", true);

    //utworzenie przycisków interakcji dla pierwszego paragrafu - pokoju
    functions.newElement("button", "lookAroundRoom", "rozejrzyj się", $("#interactionsBtns"));
    functions.newElement("button", "wardrobe", "szafa", $("#interactionsBtns"));
    functions.newElement("button", "chest", "skrzynia", $("#interactionsBtns"));
    functions.newElement("button", "package", "paczka", $("#interactionsBtns"));

    $("#outRoom, #lookAroundRoom, #wardrobe, #chest, #package").addClass("basicBtn");
    $("#outRoom").addClass("bckgRed medievalText marginTop4 shadowForBtn");
    $("#lookAroundRoom").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
    $("#wardrobe, #chest").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
    $("#package").addClass("bckgYellow medievalText marginTop4 shadowForBtn marginTop4");

    //utworzenie przycisków interakcji dla drugiego paragrafu - ulicy
    functions.newElement("button", "inRoom", "wejdź", $("#mainBtns"));
    functions.newElement("button", "toCaravans", "karawany", $("#mainBtns"));
    functions.newElement("button", "toMarket", "targ", $("#mainBtns"));
    functions.newElement("button", "lookAroundStreet", "rozejrzyj się", $("#interactionsBtns"));

    //ukrycie przycisków drugiego paragrafu
    $("#lookAroundStreet, #inRoom, #toCaravans, #toMarket").hide();

    //utworzenie przycisków dla paragrafu targ
    functions.newElement("button", "buy", "kup", $("#interactionsBtns"));
    functions.newElement("button", "sell", "sprzedaj", $("#interactionsBtns"));
    functions.newElement("button", "lookAroundMarket", "rozejrzyj się", $("#interactionsBtns"));

    $("#buy, #sell, #lookAroundMarket").hide();

    //utworzenie przycisków interakcji dla paragrafu - postoju karawan
    functions.newElement("button", "toStreet", "ulica", $("#mainBtns"));
    functions.newElement("button", "lookAroundCaravans", "rozejrzyj się", $("#interactionsBtns"));
    functions.newElement("button", "ask", "zapytaj", $("#interactionsBtns"));

    $("#toStreet, #lookAroundCaravans, #ask").hide();

    //przyciski, które pojawiają sie po wejściu na wóz
    functions.newElement("button", "go", "dalej", $("#mainBtns"));
    functions.newElement("button", "lookAroundWaggon", "rozejrzyj się", $("#interactionsBtns"));
    $("#go, #lookAroundWaggon").hide();

    //przyciski dla paragrafu obrony karawany
    functions.newElement("button", "toVillage", "dalej", $("#mainBtns"));
    functions.newElement("button", "prepare", "przygotuj się", $("#interactionsBtns"));
    $("#toVillage, #prepare").hide();

    //przycisk dla paragrafu po pierwszej bitwie
    functions.newElement("button", "toVillage2", "dalej", $("#mainBtns"));
    $("#toVillage2").hide();

    //przyciki dla wioski
    functions.newElement("button", "enterVillage", "do wioski", $("#mainBtns"));
    functions.newElement("button", "outVillageLookAround", "rozejrzyj się", $("#interactionsBtns"));
    functions.newElement("button", "monk", "mnich", $("#mainBtns"));
    functions.newElement("button", "tavern", "karczma", $("#mainBtns"));
    functions.newElement("button", "lookAtVillage", "rozejrzyj się", $("#interactionsBtns"));
    functions.newElement("button", "outDoor", "wyjdź", $("#mainBtns"));
    functions.newElement("button", "lookAtChurch", "rozejrzyj się", $("#interactionsBtns"));
    functions.newElement("button", "give", "oddaj paczkę", $("#interactionsBtns"));
    functions.newElement("button", "lookAtTavern", "rozejrzyj się", $("#interactionsBtns"));
    functions.newElement("button", "blackboard", "tablica", $("#interactionsBtns"));
    functions.newElement("button", "outTavern", "wyjdź", $("#mainBtns"));

    $("#enterVillage, #outVillageLookAround, #monk, #tavern, #lookAtVillage, #outDoor, #lookAtChurch, #give, #lookAtTavern, #blackboard, #outTavern").hide();

    //przyciski do zadań
    functions.newElement("button", "goTask1", "pasikonik", $("#mainBtns"));
    functions.newElement("button", "goTask2", "wilk", $("#mainBtns"));
    functions.newElement("button", "goTask3", "troll", $("#mainBtns"));

    $("#goTask1, #goTask2, #goTask3").hide();

    //przycisk kończący zadanie pierwsze, drugie i trzecie
    functions.newElement("button", "finishTask1", "zakończ", $("#interactionsBtns"));
    functions.newElement("button", "finishTask2", "zakończ", $("#interactionsBtns"));
    functions.newElement("button", "finishTask3", "zakończ", $("#interactionsBtns"));
    $("#finishTask1, #finishTask2, #finishTask3").hide();

    //przycisk dalej dla przejścia do ostatniego paragrafu - game over
    functions.newElement("button", "toGameOver", "dalej", $("#interactionsBtns"));
    $("#toGameOver").hide();

    //główny tekst opisowy dla paragrafu - pokój - paragraf pierwszy
    room.textRoom();

    //utworzenie "okna dialogowego"
    functions.newElement("div", "info", "", $("header"));

    //utworzenie "pomocniczego" diva opisującego paragraf - lokację, w której znajduje się aktualnie gracz
    functions.newElement("div", "description", "", $("#mainPart"));

    //zdarzenie dla przycisków głownych: cechy, ekwipunek, umiejętności zadania
    $("#features").on("click", function () {
      theGame.btnFeatures();
    });
    $("#equip").on("click", function () {
      theGame.btnEquip();
    });
    $("#skills").on("click", function () {
      theGame.btnSkills();
    });
    $("#tasks").on("click", function () {
      theGame.btnTasks();
    });

    //zdarzenia dla przycisków interakcji pierwszego paragrafu - pokój
    //zdarzenie rozglądania się
    $("#lookAroundRoom").on("click", function () {
      room.lookAround();
    });
    //zdarzenie dla szafy
    $("#wardrobe").on("click", function () {
      room.wardrobe();
    });
    //zdarzenie dla skrzyni
    $("#chest").on("click", function () {
      room.chest();
    });
    //zdarzenie dla paczki
    $("#package").on("click", function () {
      room.package();
    });
    //zdarzenie dla wyjścia z pokoju
    $("#outRoom").on("click", function () {
      room.outRoom();street.showBtns();street.textStreet();
    });

    //zdarzenia dla przycisków interakcji drugiego paragrafu - ulica
    $("#inRoom").on("click", function () {
      $("#inRoom, #toCaravans, #toMarket, #lookAroundStreet").hide();
      $("#wardrobe, #chest, #outRoom, #lookAroundRoom").show();room.textRoom();
    });
    $("#lookAroundStreet").on("click", function () {
      street.lookAroundStreet();
    });

    //zdarzenia dla interakcji paragrafu - targ
    $("#toMarket").on("click", function () {
      market.showBtns();market.textMarket();
    });
    $("#buy").on("click", function () {
      market.buy();
    });
    $("#sell").on("click", function () {
      market.btnsSell();
    });

    //zdarzenia dla interakcji paragrafu - karawany
    $("#toCaravans").on("click", function () {
      caravans.showBtns();caravans.textCaravans();
    });
    $("#lookAroundCaravans").on("click", function () {
      caravans.lookAroundCaravans();
    });
    $("#ask").on("click", function () {
      caravans.ask();
    });

    $("#toStreet").on("click", function () {
      $("#toStreet, #toMarket, #lookAroundCaravans, #ask, #agree, #buy, #sell, #lookAroundMarket").hide();$("#inRoom, #toCaravans, #toMarket, #lookAroundStreet").show();street.textStreet();
    });

    //zdarzenia dla paragrafu obrony karawany - defenseCaravans
    $("#go").on("click", function () {
      $("#go, #lookAroundWaggon").hide();
      $("#mainPart").empty();
      defenseCaravans.textCaravans();

      $("#toVillage2").on("click", function () {
        //przybycie do wioski
        village.arriveVillage();
        $("#outVillageLookAround").on("click", function () {
          village.outVillageLookAround();
        });
        $("#monk").on("click", function () {
          village.talkMonk();
        });
      });

      //plac po środku woski
      $("#enterVillage").on("click", function () {
        village.enterVillage();
      });

      //wyjście z kościoła (od mnicha)
      $("#outDoor").on("click", function () {
        $("#outDoor, #lookAtChurch, #give").hide();
        $("#lookAtVillage, #monk, #tavern").show();
        $("#outVillageLookAround").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em whiteTextShadow11 paddingUpDown1 boldText");
        village.enterVillage();
      });

      //wejście do karczmy
      $("#tavern").on("click", function () {
        village.enterTavern();
      });

      //wyjście z karczmy
      $("#outTavern").on("click", function () {
        $("#blackboard, #lookAtTavern, #outTavern").hide();
        $("#lookAtVillage, #monk, #tavern").show();
        $("#outVillageLookAround").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em whiteTextShadow11 paddingUpDown1 boldText");
        village.enterVillage();
      });

      $("#goTask1").on("click", function () {
        grasshopper.toGrasshopper();
        $("#goTask2, #goTask3").prop("disabled", true);
      });

      $("#goTask2").on("click", function () {
        wolf.toWolf();
        $("#goTask1, #goTask3").prop("disabled", true);
      });

      $("#goTask3").on("click", function () {
        troll.toTroll();
        $("#goTask1, #goTask2").prop("disabled", true);
      });

      $("#toGameOver").on("click", function () {
        theGame.gameOver();
      });
    });
  }, 30000);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functions = __webpack_require__(1); //podstawowe funkcje
var heroCreator = __webpack_require__(0);

//funkcja kupowania przedmiotów
function buyItem(item, price, gold, equip) {
  if (heroCreator.gold[0] >= price) {
    heroCreator.equip.push(item);
    var newGold = heroCreator.gold[0] - price;
    heroCreator.gold.splice(0, 1, newGold);
    $("#alerts").html("<p id='buyed' class='greenText medievalText boldText'>kupiono: <span class='blueText'>" + item + "</span></p>");
    setTimeout(function () {
      $("#buyed").remove();
    }, 5000);
  } else {
    $("#alerts").html("<p id='noGold' class='redText medievalText boldText'>brak złota</p>");
    setTimeout(function () {
      $("#noGold").remove();
    }, 5000);
  }
}

//funkcja tworząca przyciski rzeczy, które można sprzedać
module.exports.btnsSell = function (gold, equip) {
  $("#description").empty();
  functions.newElement("p", "sellItemMarket", "PRZEDMIOTY DO SPRZEDANIA", $("#description"));
  $("#sellItemMarket").addClass("boldText medievalText textUnderlineGold center width100 marginTop3 fontSize12em");

  for (var i = 0; i < heroCreator.equip.length; i++) {
    functions.newElement("button", heroCreator.equip[i], heroCreator.equip[i], $("#description"));
    document.querySelectorAll("#description button")[i].onclick = function () {
      var newGold = heroCreator.gold[0] + 0.5;
      heroCreator.gold.splice(0, 1, newGold);
      var thisText = $(this).text();
      if (heroCreator.equip.indexOf(thisText) !== -1) {
        heroCreator.equip.splice(heroCreator.equip.indexOf(thisText), 1);
      }

      $("#alerts").html("<p id='itSell' class='redText medievalText boldText'>sprzedano: <span class='blueText'>" + thisText + " za 0,35 szt. zł.</span></p>");
      $(this).remove();
      setTimeout(function () {
        $("#itSell").remove();
      }, 5000);
    };
    $("#description").addClass("flexForBtns");
    $("#description button").addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1");
    $("#paczka").addClass("bckgRed").prop("disabled", true);
  }
  functions.newElement("button", "closeBuy", "zamknij", $("#description"));
  $("#closeBuy").addClass("basicBtn bckgRed medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1").on("click", function () {
    $("#description").empty();
  });
};
//pokazanie przycisków dla paragrafu targu
module.exports.showBtns = function () {
  $("#lookAroundStreet, #toMarket, #inRoom, #lookAroundCaravans, #ask, #agree").hide();
  $("#buy, #sell, #lookAroundMarket, #toStreet, #toCaravans").show();

  $("#toStreet, #buy, #sell, #lookAroundMarket").addClass("basicBtn");
  $("#lookAroundMarket").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
  $("#buy, #toStreet").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#sell").addClass("bckgYellow medievalText marginTop4 shadowForBtn");
};

//teks główny dla paragrafu targ
module.exports.textMarket = function () {
  $("#mainPart").html("<div class='basicText medievalText'>Stoisz na środku placu targowego. Wokół widzisz stragany, na których możesz kupić potrzebne rzeczy. Co robisz?</div><div id='description'></div>");
};

//zdarzenie dla przyciku kup
module.exports.buy = function () {
  $("#description").empty();
  $("#description").html("<p class='boldText medievalText textUnderlineGold center width100'>TOWAR DO KUPIENIA</p><button id='tent' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>namiot - 5szt.</button><button id='bag' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1'>torba - 1szt.</button><button id='saddleCloth' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1'>derka - 1szt.</button><button id='lamp' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1'>lampa - 1szt.</button><button id='rope' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1'>lina - 1szt.</button><button id='food' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>racja żyw. - 1szt.</button><button id='dagger' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>sztylet - 8szt.</button><button id='crossbow' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>kusza - 12szt.</button><button id='saddle' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>siodło - 10szt.</button><button id='wooddenStick' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>drew. pałka - 4szt.</button><button id='buckler' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>puklerz - 12szt.</button><button id='closeBuy' class='basicBtn bckgRed medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1'>zamknij</button>");

  //zdarzenia dla przycisków kupowania
  $("#tent").on("click", function () {
    buyItem("namiot", 5, heroCreator.gold, heroCreator.equip);
  });
  $("#bag").on("click", function () {
    buyItem("torba", 1, heroCreator.gold, heroCreator.equip);
  });
  $("#saddleCloth").on("click", function () {
    buyItem("derka", 1, heroCreator.gold, heroCreator.equip);
  });
  $("#lamp").on("click", function () {
    buyItem("lampa", 1, heroCreator.gold, heroCreator.equip);
  });
  $("#rope").on("click", function () {
    buyItem("lina", 1, heroCreator.gold, heroCreator.equip);
  });
  $("#food").on("click", function () {
    buyItem("racja żyw.", 1, heroCreator.gold, heroCreator.equip);
  });
  $("#dagger").on("click", function () {
    buyItem("sztylet", 8, heroCreator.gold, heroCreator.equip);
  });
  $("#crossbow").on("click", function () {
    buyItem("namiot", 10, heroCreator.gold, heroCreator.equip);
  });
  $("#saddle").on("click", function () {
    buyItem("siodło", 12, heroCreator.gold, heroCreator.equip);
  });
  $("#wooddenStick").on("click", function () {
    buyItem("drewniana pałka", 4, heroCreator.gold, heroCreator.equip);
  });
  $("#buckler").on("click", function () {
    buyItem("puklerz", 12, heroCreator.gold, heroCreator.equip);
  });
  $("#closeBuy").on("click", function () {
    $("#description").empty();
  });
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functions = __webpack_require__(1); //podstawowe funkcje

//tablica, która pomaga przy sprawdzaniu czy został wciśnięty przycisk zapytaj (ask)
var point = [0];

module.exports.showBtns = function () {
  if (point[0] == 0) {
    $("#inRoom, #toCaravans, #toMarket, #lookAroundStreet, #buy, #sell, #lookAroundMarket").hide();
    $("#toStreet, #toMarket, #lookAroundCaravans, #ask").show();
    $("#toStreet, #toMarket, #lookAroundCaravans, #ask").addClass("basicBtn");
    $("#lookAroundCaravans").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
    $("#ask, #toStreet").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  } else {
    $("#inRoom, #toCaravans, #toMarket, #lookAroundStreet, #buy, #sell, #lookAroundMarket").hide();
    $("#toStreet, #toMarket, #lookAroundCaravans, #agree").show();
    $("#toStreet, #toMarket, #lookAroundCaravans, #agree").addClass("basicBtn");
    $("#lookAroundCaravans").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
    $("#ask, #toStreet").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  }
};

module.exports.textCaravans = function () {
  //główny tekst opisowy dla paragrafu - karawany - paragraf postoju karawan
  $("#mainPart").html("<div class='basicText medievalText'>Idziesz w kierunku głównej bramy. Mijasz ludzi, zwierzęta i taplające się w błocie dzieci. Gdy dochodzisz do bramy robi się coraz tłoczniej. Przez bramę przejeżdżają wozy, ludzie łażą w każdą stronę, wartownicy na murach ziewają z nudów. W końcu udało się wyjść z miasta. Przed sobą widzisz wielki plac, na którym jakaś karawana szykuje się właśnie do odjazdu. Może warto spytać się, czy jedzie do przygranicznej wioski? Co robisz?</div><div id='description'></div>");
};

module.exports.lookAroundCaravans = function () {
  $("#description").html("<p class='basicText medievalText'>Za sobą masz bramę do miasta oraz wysokie mury miasta Erharuf. Przed sobą widzisz wielki plac, na którym karawany mogą przygotować się do podróży. W dali widniej ciemna linia prastarego lasu.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", function () {
    $("#description").empty();
  });
};

module.exports.ask = function () {
  $("#description").html("<p class='basicText medievalText'>Podchodzisz bliżej. Widzisz postać krasnoluda, który wydziera się w niebo głosy i pogania wszystkich wokół. Gdy jesteś już blisko, pytasz: 'Mości krasnoludzie, czy ta karawana jedzie do wioski na pograniczu?' 'Że co? Aaaa... Tak! Jedziemy dalej, ale będziemy przez nią przejeżdżać. Jak chcesz się zabrać to musisz się pospiesz z wsiadaniem. Na ostatnim wozie jest jeszcze trochę miejsca.'- odpowiedział i wrócił do swoich obowiązków.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", function () {
    $("#description").empty();
  });

  $("#ask").remove();
  functions.newElement("button", "agree", "zgódź się", $("#interactionsBtns"));
  $("#agree").addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
  point.splice(0, 1, 1);

  $("#agree").on("click", function () {
    $("#mainPart").html("<div class='basicText medievalText'>Na ostatnim wozie okazało się, że jest jeszcze sporo miejsca, dzięki czemu będzie można podróżować dość wygodnie. Po kilkunastu minutach karawana ruszyła...</div><div id='description'></div>");
    $("#toStreet, #toMarket, #lookAroundCaravans, #ask, #agree, #buy, #sell, #lookAroundMarket").hide();
    $("#go, #lookAroundWaggon").show();
    $("#go").addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
    $("#lookAroundWaggon").addClass("basicBtn bckgBlue medievalText marginTop4 shadowForBtn fontSize09em");

    $("#lookAroundWaggon").on("click", function () {
      $("#description").html("<p class='basicText medievalText'>Wóz jak wóz. Kilka pakunków. Dwóch woźniców: krasnolud i człowiek.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
      $("#close").on("click", function () {
        $("#description").empty();
      });
    });
  });
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heroCreator = __webpack_require__(0);
var functions = __webpack_require__(1); //podstawowe funkcje

module.exports.arriveVillage = function () {
  //główny tekst opisowy dla paragrafu dojazd do wioski
  $("#mainPart").empty();
  $("#toVillage2").hide();
  $("#enterVillage, #outVillageLookAround").show().addClass("basicBtn");
  $("#enterVillage").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#outVillageLookAround").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
  $("#mainPart").html("<div class='basicText medievalText'>Po trzech dniach, dotarliście już bez przeszkód do Przygranicznej wioski. Rozbiliście obozowisko, przy starym młynie. Zaciekawieni mieszkańcy wyszli ze swych chałup i obleźli karawanę. Co robisz?</div><div id='description'></div>");
};

module.exports.outVillageLookAround = function () {
  $("#description").html("<p class='basicText medievalText'>Wioska jest dość duża, składa się z prawie 40 chałup. Otoczona jest wałem ziemnym, z wbitymi w niego, zaostrzonymi palikami. To typowe umocnienie w tym rejonie. Przy rzece stoi stary młyn. Wokół wioski, jak okiem sięgnąć rozciągają się pola.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", function () {
    $("#description").empty();
  });
};
//#monk, #tavern, #lookAtVillage").hide();
module.exports.enterVillage = function () {
  //główny tekst opisowy dla paragrafu dojazd do wioski
  $("#mainPart").empty();
  $("#enterVillage, #outVillageLookAround, #toVillage2").hide();
  $("#monk, #tavern, #lookAtVillage").show().addClass("basicBtn");
  $("#monk, #tavern").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#lookAtVillage").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em");
  $("#mainPart").html("<div class='basicText medievalText'>Stoisz na placu pośrodku wioski. Przed sobą widzisz kamienną karczmę. Po Twojej lewej stronie jest mały 'kościółek'. Pewnie tam jest mnich, któremu musisz odda paczkę. Co robisz?</div><div id='description'></div>");

  $("#lookAtVillage").on("click", function () {
    $("#description").html("<p class='basicText medievalText'>Wioska jakich wiele w regionie. Bydło i ptactwo jest wszędzie. W oddali słychać odgłosy kuźni. Uwagę przykuwa karczma, jedyny kamienny budynek we wiosce.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
    $("#close").on("click", function () {
      $("#description").empty();
    });
  });
};

// w kościele - rozmowa z mnichem
module.exports.talkMonk = function () {
  $("#mainPart").empty();
  $("#monk, #tavern, #lookAtVillage, #outVillageLookAround").hide();
  $("#outDoor, #give").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
  $("#give").addClass("fontSize08em paddingUpDown1");
  $("#lookAtChurch").show().addClass("basicBtn bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");

  var text = [];
  if (heroCreator.hero[1] == "kobieta") {
    text.splice(0, 1, "Weszłaś do kościoła.");
    text.splice(1, 1, "Podeszłaś ");
  } else {
    text.splice(0, 1, "Wszedłeś do kościoła.");
    text.splice(1, 1, "Podszedłeś ");
  }

  $("#mainPart").html("<div class='basicText medievalText'>" + text[0] + " Panuje w nim lekki zaduch i niewielki p\xF3\u0142mrok. " + text[1] + " do stoj\u0105cego przy o\u0142tarzu mnicha. Mnich odwr\xF3ci\u0142 si\u0119 i powiedzia\u0142: <span class='italic blueText'>Witaj! Spodziewa\u0142em si\u0119 Ciebie. Pono\u0107 masz dla mnie przesy\u0142k\u0119?</span> Co robisz?</div><div id='description'></div>");

  $("#give").on("click", function () {
    if (heroCreator.equip.indexOf('paczka') !== -1) {
      heroCreator.equip.splice(heroCreator.equip.indexOf('paczka'), 1);
      $("#give").remove();

      $("#alerts").html("<p id='noGold' class='greenText medievalText boldText'>Paczka została oddana.</p>");
      setTimeout(function () {
        $("#noGold").remove();
      }, 5000);
    }

    if (heroCreator.tasks.indexOf('zanieś paczkę mnichowi') !== -1) {
      heroCreator.tasks.splice(heroCreator.tasks.indexOf('zanieś paczkę mnichowi'), 1);
    }
  });

  $("#lookAtChurch").on("click", function () {
    $("#description").html("<p class='basicText medievalText'>Jest to niewielki kościółek. Kilka prostych ław. Na końcu stoi niewielki ołtarz poświęcony lokalnemu Bogu.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
    $("#close").on("click", function () {
      $("#description").empty();
    });
  });
};

module.exports.enterTavern = function () {
  $("#mainPart").empty();
  $("#monk, #lookAtVillage, #tavern").hide();
  $("#lookAtTavern, #blackboard, #outTavern").show();
  $("#blackboard, #outTavern").addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
  $("#lookAtTavern").addClass("basicBtn bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");

  $("#mainPart").html("<div class='basicText medievalText'>W karczmie jest do\u015B\u0107 przyjemnie. W powietrzu utrzymuje si\u0119 zapach pieczonego mi\u0119sa. Kilku wie\u015Bniak\xF3w siedzi i popija z g\u0105siora. W k\u0105cie pomieszczenia siedzi niewielka trupa aktorska. Na \u015Bcianie obok kontuaru w\u0142a\u015Bciciela karczma jest tablica z og\u0142oszeniami. Co robisz?</div><div id='description'></div>");

  $("#lookAtTavern").on("click", function () {
    $("#description").html("<p class='basicText medievalText'>Typowa karczma, w której można zjeść, wypić czy wynająć pokój.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
    $("#close").on("click", function () {
      $("#description").empty();
    });
  });

  var text = ["", "", ""];

  $("#blackboard").on("click", function () {
    if (heroCreator.tasks.indexOf(" ubij pasikonika") !== -1 && heroCreator.tasks.indexOf(" ubij wilka") !== -1 && heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1) {
      text.splice(0, 1, "");
      text.splice(1, 1, "");
      text.splice(2, 1, "");
      text.splice(3, 1, "Brak ogłoszeń.");
    } else if (heroCreator.tasks.indexOf(" ubij pasikonika") !== -1) {
      text.splice(0, 1, "");
      text.splice(1, 1, "<button id='task2' class='basicBtn medievalText width24 bckgGreen'>wilk</button>");
      text.splice(2, 1, "<button id='task3' class='basicBtn medievalText width24 bckgGreen'>trol</button>");
      text.splice(3, 1, "Wiszą na niej ogłoszenia.");
    } else if (heroCreator.tasks.indexOf(" ubij wilka") !== -1) {
      text.splice(0, 1, "<button id='task1' class='basicBtn medievalText width24 bckgGreen'>pasikonik</button>");
      text.splice(1, 1, "");
      text.splice(2, 1, "<button id='task3' class='basicBtn medievalText width24 bckgGreen'>trol</button>");
      text.splice(3, 1, "Wiszą na niej ogłoszenia.");
    } else if (heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1) {
      text.splice(0, 1, "<button id='task1' class='basicBtn medievalText width24 bckgGreen'>pasikonik</button>");
      text.splice(1, 1, "<button id='task2' class='basicBtn medievalText width24 bckgGreen'>wilk</button>");
      text.splice(2, 1, "");
      text.splice(3, 1, "Wiszą na niej ogłoszenia.");
    } else if (heroCreator.tasks.indexOf(" ubij pasikonika") !== -1 && heroCreator.tasks.indexOf(" ubij wilka") !== -1) {
      text.splice(0, 1, "");
      text.splice(1, 1, "");
      text.splice(2, 1, "<button id='task3' class='basicBtn medievalText width24 bckgGreen'>trol</button>");
      text.splice(3, 1, "Wiszą na niej ogłoszenia.");
    } else if (heroCreator.tasks.indexOf(" ubij pasikonika") !== -1 && heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1) {
      text.splice(0, 1, "");
      text.splice(1, 1, "<button id='task2' class='basicBtn medievalText width24 bckgGreen'>wilk</button>");
      text.splice(2, 1, "");
      text.splice(3, 1, "Wiszą na niej ogłoszenia.");
    } else if (heroCreator.tasks.indexOf(" ubij wilka") !== -1 && heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1) {
      text.splice(0, 1, "<button id='task1' class='basicBtn medievalText width24 bckgGreen'>pasikonik</button>");
      text.splice(1, 1, "");
      text.splice(2, 1, "");
      text.splice(3, 1, "Wiszą na niej ogłoszenia.");
    } else {
      text.splice(0, 1, "<button id='task1' class='basicBtn medievalText width24 bckgGreen'>pasikonik</button>");
      text.splice(1, 1, "<button id='task2' class='basicBtn medievalText width24 bckgGreen'>wilk</button>");
      text.splice(2, 1, "<button id='task3' class='basicBtn medievalText width24 bckgGreen'>trol</button>");
      text.splice(3, 1, "Wiszą na niej ogłoszenia.");
    }

    $("#description").html("<p class='basicText medievalText'>Podchodzisz do tablicy. " + text[3] + " <p id='taskBtn' class='flexForBtns marginTop4'>" + text[0] + " " + text[1] + " " + text[2] + "</p></p>");

    //zdarzenia dla podjęcia się pracy
    $("#task1").on("click", function () {
      $("#task1").remove();
      heroCreator.tasks.push(" ubij pasikonika");
      $("#goTask1").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
    });

    $("#task2").on("click", function () {
      $("#task2").remove();
      heroCreator.tasks.push(" ubij wilka");
      $("#goTask2").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
    });
    $("#task3").on("click", function () {
      $("#task3").remove();
      heroCreator.tasks.push(" rozwiąż konflikt z trolem");
      $("#goTask3").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
    });
  });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heroCreator = __webpack_require__(0);
var functions = __webpack_require__(1); //podstawowe funkcje
var theGame = __webpack_require__(2);

module.exports.toGrasshopper = function () {
      if (heroCreator.equip.indexOf("paczka") !== -1) {
            $("#description").html("<p class='basicText medievalText'>Oddaj najpierw paczkę !!!!.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");

            $("#close").on("click", function () {
                  $("#description").empty();
            });
      } else {
            $("#mainBtns button").hide();
            $("#interactionsBtns button").hide();
            $("#goTask1, #goTask2, #goTask3").show();

            $("#goTask1").prop("disabled", true);

            var text = [];

            //wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
            if (heroCreator.hero[1] == "kobieta") {
                  text.splice(0, 1, "Doszłaś");
                  text.splice(1, 1, "niedostrzegłaś");
                  text.splice(2, 1, "Uznałaś");
                  text.splice(3, 1, "uszłyszałaś");
                  text.splice(4, 1, "Zaczęłaś");
                  text.splice(5, 1, "ujrzałaś");
            } else if (heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo") {
                  text.splice(0, 1, "Doszedłeś");
                  text.splice(1, 1, "niedostrzegłeś");
                  text.splice(2, 1, "Uznałeś");
                  text.splice(3, 1, "uszłyszałeś");
                  text.splice(4, 1, "Zacząłeś");
                  text.splice(5, 1, "ujrzałeś");
            }

            theGame.taskArray.splice(0, 1, 1);
            $("#mainPart").html("<div class='basicText medievalText'>Idziesz na pola. Jest ciep\u0142o, \u0142any zb\xF3\u017C ko\u0142ysz\u0105 si\u0119 na wietrze. Jest spok\xF3j. Zastanawiasz si\u0119 czy ten polny stw\xF3r to nie majaki pijanych farmer\xF3w. Jednak dla \u015Bwi\u0119tego spokoju idziesz dalej i rozgl\u0105dasz si\u0119 po okolicy. " + text[0] + " prawie do ko\u0144ca p\xF3l. Niczego niepokoj\u0105cego " + text[1] + ". " + text[2] + ", \u017Ce trzeba si\u0119 zaj\u0105\u0107 nast\u0119pnym zadaniem. Wtem " + text[3] + " dziwne, suche trzaski. " + text[4] + " si\u0119 rozgl\u0105da\u0107 i " + text[5] + " jak z pobliskiego rowu zacz\u0105\u0142 wstawa\u0107 stw\xF3r, wielki jak dorodny baw\xF3\u0142. Przecierasz oczy ze zdumienia i nie wierzysz. Ten potw\xF3r wygl\u0105da jak gigantyczny PASIKONIK!!!!</div><div id='description'></div>");

            $("#prepare").show();
            $("#prepare").addClass("bckgGreen fontSize08em paddingUpDown1");

            $("#finishTask1").on("click", function () {
                  $("#description").html("<p class='basicText medievalText'>Pasikonik wykończony. Twoje cechy podniosły się. Wybierz kolejne zadanie.</p>");
                  theGame.taskDone.splice(0, 1, 1);

                  if (heroCreator.tasks.indexOf(' ubij pasikonika') !== -1) {
                        heroCreator.tasks.splice(heroCreator.tasks.indexOf(' ubij pasikonika'), 1);
                        console.log(heroCreator.tasks);
                  }

                  console.log(theGame.taskDone);

                  //dodanie punktów do cech
                  console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);
                  heroCreator.hero.splice(4, 1, heroCreator.hero[4] + 5);
                  heroCreator.hero.splice(5, 1, heroCreator.hero[5] + 5);
                  heroCreator.hero.splice(6, 1, heroCreator.hero[6] + 5);
                  heroCreator.hero.splice(7, 1, heroCreator.hero[7] + 5);
                  heroCreator.hero.splice(8, 1, heroCreator.hero[8] + 5);
                  console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);

                  if (theGame.taskDone[1] == 0) {
                        $("#goTask2").prop("disabled", false);
                  } else {
                        $("#goTask2").prop("disabled", true);
                  }

                  if (theGame.taskDone[2] == 0) {
                        $("#goTask3").prop("disabled", false);
                  } else {
                        $("#goTask3").prop("disabled", true);
                  }

                  $("#finishTask1").remove();

                  if (theGame.taskDone[0] == 1 && theGame.taskDone[1] == 1 && theGame.taskDone[2] == 1) {
                        console.log("game over");
                        $("#toGameOver").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
                  }
            });
      }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heroCreator = __webpack_require__(0);
var functions = __webpack_require__(1); //podstawowe funkcje
var theGame = __webpack_require__(2);

module.exports.toWolf = function () {
  if (heroCreator.equip.indexOf("paczka") !== -1) {
    $("#description").html("<p class='basicText medievalText'>Oddaj najpierw paczkę !!!!.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");

    $("#close").on("click", function () {
      $("#description").empty();
    });
  } else {
    $("#mainBtns button").hide();
    $("#interactionsBtns button").hide();
    $("#goTask1, #goTask2, #goTask3").show();

    $("#goTask2").prop("disabled", true);

    var text = [];

    //wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
    if (heroCreator.hero[1] == "kobieta") {
      text.splice(0, 1, "wykorzystałaś");
      text.splice(0, 1, "trafiłaś");
    } else if (heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo") {
      text.splice(0, 1, "Wykorzystałeś");
      text.splice(0, 1, "trafiłeś");
    }

    theGame.taskArray.splice(0, 1, 2);

    $("#mainPart").html("<div class='basicText medievalText'>Id\u0105c drog\u0105 w stron\u0119 kolejnego zadania, wchodzisz w las. Pachnie igliwiem, ptaki \u015Bpiewaj\u0105. Przechodzisz ko\u0142o sporej polany. Na jej ko\u0144cu widzisz \u0142anie z m\u0142odymi. Spostrzeg\u0142a Ci\u0119 i szybkimi susami znikn\u0119\u0142a z m\u0142odymi w lesie. Idziesz dalej. W ko\u0144cu docieraszdo pieczary. Przed ni\u0105 widzisz resztki zwierz\u0105t. W powietrzu unosi si\u0119 zapach gnij\u0105cego mi\u0119sa, kt\xF3ry potrafi zemdli\u0107 nawet takiego twardziela jak Ty. 'No c\xF3\u017C. Zadanie trzeba wykona\u0107, pomimo zapachu. Tego dziwnego pasikonika w sumie si\u0119 pokona\u0142o.' - przemkn\u0119\u0142a my\u015B w Twojej g\u0142owie. Jaskinia jest wi\u0119ksza i do\u015B\u0107 dobrze o\u015Bwietlona ni\u017C wydawa\u0142o si\u0119 to z zewn\u0105trz. Po kilku krokach dochodzisz prawie do jej \u015Brodka. Wtem, zza sporego g\u0142azu, kt\xF3ry sta\u0142 przy wej\u015Bciu wyszed\u0142 bardzo du\u017Cy wilk i tarasuje wyj\u015Bcie. Nie mo\u017Cesz ucie\u0107. Musisz walczy\u0107.Wchodzisz do jaskini.</div><div id='description'></div>");

    $("#prepare").show();
    $("#prepare").addClass("bckgGreen fontSize08em paddingUpDown1");

    $("#finishTask2").on("click", function () {
      $("#description").html("<p class='basicText medievalText'>To by\u0142a dzika walka. Nie by\u0142o 'zlituj si\u0119'. Niestety wilk pope\u0142ni\u0142 b\u0142\u0105d. Fatalny dla niego w skutkach. \u0179le si\u0119 ustawi\u0142, a Ty bez skrup\xF3\u0142\xF3w " + text[0] + " jego b\u0142\u0105d i z ca\u0142ej si\u0142y " + text[1] + " w jego kr\u0119gos\u0142up. Tylko gruchn\u0119\u0142o. Wilk momentalnie pad\u0142 i zgin\u0105\u0142 w konwulsjach, z pian\u0105 na pysku. Po odpoczynku czas na kolejne zadanie</p>");
      theGame.taskDone.splice(1, 1, 1);

      if (heroCreator.tasks.indexOf(' ubij wilka') !== -1) {
        heroCreator.tasks.splice(heroCreator.tasks.indexOf(' ubij wilka'), 1);
        console.log(heroCreator.tasks);
      }

      console.log(theGame.taskDone);

      //dodanie punktów do cech
      console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);
      heroCreator.hero.splice(4, 1, heroCreator.hero[4] + 5);
      heroCreator.hero.splice(5, 1, heroCreator.hero[5] + 5);
      heroCreator.hero.splice(6, 1, heroCreator.hero[6] + 5);
      heroCreator.hero.splice(7, 1, heroCreator.hero[7] + 5);
      heroCreator.hero.splice(8, 1, heroCreator.hero[8] + 5);
      console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);

      if (theGame.taskDone[0] == 0) {
        $("#goTask1").prop("disabled", false);
      } else {
        $("#goTask1").prop("disabled", true);
      }

      if (theGame.taskDone[2] == 0) {
        $("#goTask3").prop("disabled", false);
      } else {
        $("#goTask3").prop("disabled", true);
      }

      $("#finishTask2").remove();
      if (theGame.taskDone[0] == 1 && theGame.taskDone[1] == 1 && theGame.taskDone[2] == 1) {
        console.log("game over");
        $("#toGameOver").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
      }
    });
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heroCreator = __webpack_require__(0);
var functions = __webpack_require__(1); //podstawowe funkcje
var theGame = __webpack_require__(2);

module.exports.toTroll = function () {
  if (heroCreator.equip.indexOf("paczka") !== -1) {
    $("#description").html("<p class='basicText medievalText'>Oddaj najpierw paczkę !!!!.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");

    $("#close").on("click", function () {
      $("#description").empty();
    });
  } else {
    $("#mainBtns button").hide();
    $("#interactionsBtns button").hide();
    $("#goTask1, #goTask2, #goTask3").show();

    $("#goTask3").prop("disabled", true);

    var text = [];

    //wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
    if (heroCreator.hero[1] == "kobieta") {
      text.splice(0, 1, "wykorzystałaś");
      text.splice(0, 1, "trafiłaś");
    } else if (heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo") {
      text.splice(0, 1, "Wykorzystałeś");
      text.splice(0, 1, "trafiłeś");
    }
    theGame.taskArray.splice(0, 1, 3);

    $("#mainPart").html("<div class='basicText medievalText'>Idziesz w stron\u0119 mostu. Przez las, w\u0105w\xF3z. Wychodzisz na du\u017C\u0105 polan\u0119. Na drugim ko\u0144cu widzisz ju\u017C zarysy mostu. Z trudem dostrzegasz du\u017C\u0105 posta\u0107 - to chyba ten trol. Podchodzisz bli\u017Cej i widzisz jak jakie\u015B osoby co\u015B wykrzykuj\u0105 i machaj\u0105 r\u0119kami. Po chwili wszystko ucicha. Du\u017Ca posta\u0107 nadal stoi przy mo\u015Bcie, reszta przechodzi. Jeste\u015B ju\u017C blisko mostu. Widzisz ogromnego trola siedz\u0105cego na kamieniu, wspartego o du\u017Cych rozmiar\xF3w maczug\u0119. Gdy ju\u017C jeste\u015B ca\u0142kiem blisko trol m\xF3wi do Ciebie: 'Op\u0142ata za przej\u015Bcie, albo zje\u017Cd\u017Caj!!'. 'Nie mam zamiaru p\u0142aci\u0107m, ani przechodzi\u0107. Jestem tutaj z twojego powodu.' -    odpowiadasz. 'Chce, \u017Ceby\u015B zaprzesta\u0142 pobierania nielegalnego myta. Je\u017Celi tego nie zrobisz b\u0119d\u0119 musia\u0142 Ci\u0119 zabi\u0107.' - m\xF3wisz dalej. 'Nic z Tego. To jest m\xF3j most i b\u0119d\u0119 pobiera\u0142 myto za jego przej\u015Bcie.' - odpar\u0142. Dyplomacja nie wysz\u0142a. Musisz z nim walczy\u0107.</div><div id='description'></div>");

    $("#prepare").show();
    $("#prepare").addClass("bckgGreen fontSize08em paddingUpDown1");
    $("#finishTask3").on("click", function () {
      $("#description").html("<p class='basicText medievalText'>Walka nie by\u0142a d\u0142uga. Mia\u0142e\u015B szcz\u0119\u015Bcie. Uda\u0142o Ci si\u0119 go zrani\u0107 pod pach\u0105. Trol zawy\u0142 dziko. Przechyli\u0142 si\u0119 i straci\u0142 r\xF3wnowag\u0119 i stoczy\u0142 si\u0119 ze skarpy do rzeki.    Spojrza\u0142e\u015B w d\xF3\u0142 i ujrza\u0142e\u015B go martwego z roztrzaskan\u0105 g\u0142ow\u0105. Czas na kolejne zadanaie.</p>");
      theGame.taskDone.splice(2, 1, 1);

      if (heroCreator.tasks.indexOf(' rozwiąż konflikt z trolem') !== -1) {
        heroCreator.tasks.splice(heroCreator.tasks.indexOf(' rozwiąż konflikt z trolem'), 1);
        console.log(heroCreator.tasks);
      }

      console.log(theGame.taskDone);

      //dodanie punktów do cech
      console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);
      heroCreator.hero.splice(4, 1, heroCreator.hero[4] + 5);
      heroCreator.hero.splice(5, 1, heroCreator.hero[5] + 5);
      heroCreator.hero.splice(6, 1, heroCreator.hero[6] + 5);
      heroCreator.hero.splice(7, 1, heroCreator.hero[7] + 5);
      heroCreator.hero.splice(8, 1, heroCreator.hero[8] + 5);
      console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);

      if (theGame.taskDone[0] == 0) {
        $("#goTask1").prop("disabled", false);
      } else {
        $("#goTask1").prop("disabled", true);
      }

      if (theGame.taskDone[1] == 0) {
        $("#goTask2").prop("disabled", false);
      } else {
        $("#goTask2").prop("disabled", true);
      }

      $("#finishTask3").remove();

      if (theGame.taskDone[0] == 1 && theGame.taskDone[1] == 1 && theGame.taskDone[2] == 1) {
        console.log("game over");
        $("#toGameOver").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
      }
    });
  }
};

/***/ }),
/* 16 */
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