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


//import z plików zewnętrznych
var functions = __webpack_require__(3); //podstawowe funkcje
var introFirstMenu = __webpack_require__(12); //plik z częścią intro oraz pierwszym menu
var heroCreator = __webpack_require__(5);
var introGame = __webpack_require__(6);
var firstP = __webpack_require__(7);
var street = __webpack_require__(8);
var market = __webpack_require__(9);
var caravans = __webpack_require__(10);
var startVoyage = __webpack_require__(11);
var firstFight = __webpack_require__(1);

document.addEventListener("DOMContentLoaded", function () {
	console.log("NIEWIERNE PSY RULEZ!!!!");

	//intro i pierwsze menu
	introFirstMenu.gameTitle();
	//przyciski pierwszego menu
	introFirstMenu.btnsFirstMenu();

	//utworzenie przycisków kreatora
	functions.newElement("button", "name", "imię", $("nav"));
	functions.newElement("button", "race", "rasa", $("nav"));
	functions.newElement("button", "occupation", "profesja", $("nav"));
	functions.newElement("button", "features", "cechy", $("nav"));
	functions.newElement("button", "features2", "cechy 2", $("nav"));
	functions.newElement("button", "equipment", "ekwipunek", $("nav"));
	functions.newElement("button", "skills", "umiejętności", $("nav"));
	functions.newElement("button", "infoCreator", "info", $("nav"));
	functions.newElement("button", "startGame", "start", $("nav"));

	//utworzenie przycisku wyjścia z pokoju na ulicę
	functions.newElement("button", "outRoom", "wyjdź", $("nav"));

	//utorzenie przycisków przejścia na targ lub do miejsca stacjonowania karawan
	functions.newElement("button", "caravans", "karawany", $("nav"));
	functions.newElement("button", "marketPlace", "targ", $("nav"));

	//utworzenie przycisku dalej, gry bohater wsiada na wóz
	functions.newElement("button", "further", "dalej", $("nav"));

	//utworzenie przycisku dalej, gry bohater wsiada na wóz
	functions.newElement("button", "voyage", "dalej", $("nav"));

	//tablice
	// tablica postaci 0 - imię, 1 - rasa, 2 - profesja
	var hero = ["nie wybrano", "nie wybrano", "nie wybrano"];

	//tablica wylosowanych punktów cech 0 - siła, 1 - wytrzymałość, 2 - zręczność, 3 - inteligencja, 4 - charyzma
	var randomFeatures = [0, 0, 0, 0, 0];

	//tablica dla wybieralnych cech postaci 0 - płeć, 1 - kolor włosów, 2 - kolor oczu, 3 - kolor skóry, 4 - waga, 5 - wzrost
	var choosenFeatures = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano"];

	//tablica ekwipunku max 5 elementów
	var equip = [];
	module.exports.e = equip;

	//tablica umiejętności max 3 elementy
	var skills = [];

	//tablice ze modyfikatorami rasy i profesji - dla określenia ostatecznej ilości punktów postaci
	var warrior = [5, 5, 0, 0, 0];var criminal = [0, 0, 10, 0, 0];var wizard = [0, 0, 0, 5, 5];

	var human = [0, 0, 0, 0, 0];var elf = [-5, -5, 0, 5, 5];
	var dwarf = [4, 4, 0, -2, -3];var orc = [5, 5, 0, -5, -5];

	//tablice pomocnicze dla walidacji wylosowanych punktów cech, rasy i pofesji
	var choosenOccupation = [];var choosenRace = [];

	//suma wszystkich punktów
	var amountAllPoint = [];

	//tablica zadań
	var tasks = ["zanieś paczkę mnichowi"];

	//początkowa ilosć złota
	var gold = [0];

	//showanie przycisków pierszego menu
	$("#info, #licence, #tutorial, #newGame, #titleGameHeader, #subTitleGameHeader").hide();

	//schowanie przycisków
	$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator, #startGame, #outRoom, #lookAroundStreet, #marketPlace, #inRoom, #caravans, #further, #voyage").hide();

	//schowanie i usunięcie nazwy studia oraz sentencji
	$("#studioTitle").fadeOut(6000);

	//przejście z nazwy gry do pierwszego toFirstMenu
	introFirstMenu.toFirstMenu();

	//funkcje zdarzeń (kliknięcia w przyciski) dla pierwszego menu
	introFirstMenu.clicksFirstMenu();

	//funkcje tworzenia dla menu gry
	createNewElementAppend("button", "featuresGame", "cechy", $("nav"));
	createNewElementAppend("button", "equipGame", "ekwipunek", $("nav"));
	createNewElementAppend("button", "skillsGame", "umiejętności", $("nav"));
	createNewElementAppend("button", "taskGame", "zadania", $("nav"));
	$("#featuresGame, #equipGame, #skillsGame, #taskGame").hide();

	//przycisk nowej gry - tworzenie kretora postaci
	$("#newGame").on("click", function () {
		$("#mainPart").empty().removeClass("basicText");
		$("#info, #licence, #tutorial, #newGame").fadeOut();
		$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").fadeIn();
		$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").addClass("basicBtn");

		//tworzenie czerwonych paragrafów w części alertowej - zmieniają kolor na zielony po wybraniu
		createNewElementAppend("p", "nameAlert", heroCreator.nameAlert, $("#alerts"));
		createNewElementAppend("p", "raceAlert", heroCreator.raceAlert, $("#alerts"));
		createNewElementAppend("p", "occupationAlert", heroCreator.occupationAlert, $("#alerts"));
		createNewElementAppend("p", "featuresAlert", heroCreator.featuresAlert, $("#alerts"));
		createNewElementAppend("p", "features2Alert", heroCreator.features2Alert, $("#alerts"));
		createNewElementAppend("p", "equipmentAlert", heroCreator.equipmentAlert, $("#alerts"));
		createNewElementAppend("p", "skillAlert", heroCreator.skillsAlert, $("#alerts"));
		$("#nameAlert, #raceAlert, #occupationAlert, #featuresAlert, #features2Alert, #equipmentAlert, #skillAlert").addClass("redText");

		//zdarzenia dla przycisku imię (name)
		$("#name").on("click", function () {
			$("#mainPart").empty();

			//elementy wyboru imienia
			createNewElementAppend("p", "nameTitle", heroCreator.nameTitle, $("#mainPart"));
			$("#nameTitle").addClass("goldUnderline basicText");
			createNewElementAppend("p", "nameDescription", heroCreator.nameDescription, $("#mainPart"));

			createNewElementAppend("input", "giveName", "", $("#mainPart"));
			createNewElementAppend("button", "acceptName", "zatwierdź", $("#mainPart"));

			//funkcja wpisywania imienia
			$("#acceptName").on("click", function () {
				var nameInput = $("#giveName").val().replace(/\d/g, '');
				if (nameInput == "") {
					$("#nameAlert").addClass("redText");
				} else {
					hero.splice(0, 1, nameInput);$("#nameAlert").addClass("greenText");
				}
			});
		}); //koniec zdarzeń dla przycisku imię

		//zdarzenia dla przyciku rasa (race)
		$("#race").on("click", function () {
			$("#mainPart").empty();

			//elementy wyboru rasy
			createNewElementAppend("p", "raceTitle", heroCreator.raceTitle, $("#mainPart"));
			$("#raceTitle").addClass("goldUnderline basicText");
			createNewElementAppend("p", "raceDescription", heroCreator.raceDescription, $("#mainPart"));

			createNewElementAppend("button", "human", "człowiek", $("#mainPart"));
			createNewElementAppend("button", "elv", "elf", $("#mainPart"));
			createNewElementAppend("button", "dwarf", "krasnolud", $("#mainPart"));
			createNewElementAppend("button", "orc", "ork", $("#mainPart"));
			$("#human, #elv, #dwarf, #orc").addClass("basicBtn");
			createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

			//funkcje dla wyboru rasy
			clickRaceOccupation($("#human"), "człowiek", 1, heroCreator.human, $("#raceAlert"));
			clickRaceOccupation($("#elv"), "elf", 1, heroCreator.elv, $("#raceAlert"));
			clickRaceOccupation($("#dwarf"), "krasnolud", 1, heroCreator.dwarf, $("#raceAlert"));
			clickRaceOccupation($("#orc"), "ork", 1, heroCreator.orc, $("#raceAlert"));
		}); //koniec zdarzeń dla przycisku rasa

		//zdarzenia dla przyciku profesja (occupation)
		$("#occupation").on("click", function () {
			$("#mainPart").empty();

			//elementy wyboru profesji
			createNewElementAppend("p", "occupationTitle", heroCreator.occupationTitle, $("#mainPart"));
			$("#occupationTitle").addClass("goldUnderline basicText");
			createNewElementAppend("p", "occupationDescription", heroCreator.occupationDescription, $("#mainPart"));

			createNewElementAppend("button", "warrior", "wojownik", $("#mainPart"));
			createNewElementAppend("button", "criminal", "złoczyńca", $("#mainPart"));
			createNewElementAppend("button", "wizard", "czarodziej", $("#mainPart"));
			$("#warrior, #criminal, #wizard").addClass("basicBtn");
			createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

			//funkcje wyboru profesji
			clickRaceOccupation($("#warrior"), "wojownik", 2, heroCreator.warrior, $("#occupationAlert"));
			clickRaceOccupation($("#criminal"), "złoczyńca", 2, heroCreator.criminal, $("#occupationAlert"));
			clickRaceOccupation($("#wizard"), "czarodziej", 2, heroCreator.wizard, $("#occupationAlert"));
		}); //koniec zdarzeń dla przycisku profesja

		//przycisk cech część piewrsza - wybieranie siły, wytrzymałości, zręczności, inteligencji i charyzmy
		$("#features").on("click", function () {
			$("#mainPart").empty();

			//elementy losowania cech
			createNewElementAppend("p", "featuresTitle", heroCreator.featuresTitle, $("#mainPart"));
			$("#featuresTitle").addClass("goldUnderline basicText");
			createNewElementAppend("p", "featuresDescription", heroCreator.featuresDescription, $("#mainPart"));

			createNewElementAppend("button", "force", "siła", $("#mainPart"));
			createNewElementAppend("button", "strength", "wytrzymałość", $("#mainPart"));
			createNewElementAppend("button", "dexterity", "zręczność", $("#mainPart"));
			createNewElementAppend("button", "intelligence", "inteligencja", $("#mainPart"));
			createNewElementAppend("button", "charisma", "charyzma", $("#mainPart"));
			$("#force, #strength, #dexterity, #intelligence, #charisma").addClass("basicBtn");
			createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

			//funkcja optymalizująca losowanie cechy
			function randomPointsFeatures(element, name, number, source) {
				element.on("click", function () {
					var name = Math.round(Math.random() * 50);
					randomFeatures.splice(number, 1, name);$("#choosenDescription").text(source);
					$("#featuresAlert").addClass("redText");if (randomFeatures[0] !== 0 && randomFeatures[1] !== 0 && randomFeatures[2] !== 0 && randomFeatures[3] !== 0 && randomFeatures[4] !== 0) {
						$("#featuresAlert").addClass("greenText");
					}
				});
			}

			//funkcje losujące punkty cech
			randomPointsFeatures($("#force"), "randomForcePoints", 0, heroCreator.force);
			randomPointsFeatures($("#strength"), "randomStrenghtPoints", 1, heroCreator.strenght);
			randomPointsFeatures($("#dexterity"), "randomDexterityPoints", 2, heroCreator.dexterity);
			randomPointsFeatures($("#intelligence"), "randomIntelligencePoints", 3, heroCreator.intelligence);
			randomPointsFeatures($("#charisma"), "randomCharismaPoints", 4, heroCreator.charisma);
		}); //koniec zdarzeń dla przycisku cech (features) - siły, wytrzymałości, zręczności inteligencji i charyzmy

		//zdarzenia dla przycisku cechy 2 - płeć, kolor włosów, oczu, skóry, waga, wzrost,
		$("#features2").on("click", function () {
			$("#mainPart").empty();

			//elementy wyboru płci
			createNewElementAppend("p", "features2Title", heroCreator.features2Title, $("#mainPart"));
			$("#features2Title").addClass("goldUnderline basicText");
			createNewElementAppend("p", "features2Description", heroCreator.features2Description, $("#mainPart"));

			createNewElementAppend("div", "features2Main", "", $("#mainPart"));
			createNewElementAppend("p", "features2MainSex", "Płeć", $("#features2Main"));
			createNewElementAppend("button", "features2MainWomen", "Kobieta", $("#features2Main"));
			createNewElementAppend("button", "features2MainMen", "Mężczyzna", $("#features2Main"));
			createNewElementAppend("button", "features2MainOther", "Nie wiadomo", $("#features2Main"));

			$("#features2MainWomen, #features2MainMen, #features2MainOther").addClass("btnsFeatures2");

			//funkcja optymalizująca wybieranie drugiego zestawu cech
			function features2(element, number, text) {
				element.on("click", function () {
					choosenFeatures.splice(number, 1, text);if (choosenFeatures[0] == "nie wybrano" || choosenFeatures[1] == "nie wybrano" || choosenFeatures[2] == "nie wybrano" || choosenFeatures[3] == "nie wybrano" || choosenFeatures[4] == "nie wybrano" || choosenFeatures[5] == "nie wybrano") {
						$("#features2Alert").addClass("redText");
					} else {
						$("#features2Alert").addClass("greenText");
					}
				});
			}

			//funkcje wyboru płci
			features2($("#features2MainWomen"), 0, "kobieta");features2($("#features2MainMen"), 0, "mężczyzna");features2($("#features2MainOther"), 0, "nie wiadomo");

			//elementy wyboru koloru włosów
			createNewElementAppend("p", "features2MainHair", "Kolor włosów", $("#features2Main"));
			createNewElementAppend("button", "features2MainBlond", "blond", $("#features2Main"));
			createNewElementAppend("button", "features2MainRed", "rude", $("#features2Main"));
			createNewElementAppend("button", "features2MainBlack", "czarne", $("#features2Main"));
			createNewElementAppend("button", "features2MainDyed", "farbowane", $("#features2Main"));

			$("#features2MainBlond, #features2MainRed, #features2MainBlack, #features2MainDyed").addClass("btnsFeatures2");

			//funkcje wyboru kolorów włosów
			features2($("#features2MainBlond"), 1, "blond");features2($("#features2MainRed"), 1, "rude");
			features2($("#features2MainBlack"), 1, "czarne");features2($("#features2MainDyed"), 1, "farbowane");

			//elementy wyboru koloru oczu
			createNewElementAppend("p", "features2MainEyes", "Kolor oczu", $("#features2Main"));
			createNewElementAppend("button", "features2MainHazel", "piwne", $("#features2Main"));
			createNewElementAppend("button", "features2MainGrey", "szare", $("#features2Main"));
			createNewElementAppend("button", "features2MainBrown", "brązowe", $("#features2Main"));
			createNewElementAppend("button", "features2MainBlue", "niebieskie", $("#features2Main"));

			$("#features2MainHazel, #features2MainGrey, #features2MainBrown, #features2MainBlue").addClass("btnsFeatures2");

			//funkcje wyboru koloru oczu
			features2($("#features2MainHazel"), 2, "piwne");features2($("#features2MainGrey"), 2, "szare");
			features2($("#features2MainBrown"), 2, "brązowe");features2($("#features2MainBlue"), 2, "niebieskie");

			//elementy wyboru koloru skóry
			createNewElementAppend("p", "features2MainSkins", "Kolor skóry", $("#features2Main"));
			createNewElementAppend("button", "features2MainWhite", "biała", $("#features2Main"));
			createNewElementAppend("button", "features2MainBrownSkin", "brązowa", $("#features2Main"));
			createNewElementAppend("button", "features2MainBlack", "czarna", $("#features2Main"));
			createNewElementAppend("button", "features2MainRed", "czerwona", $("#features2Main"));
			createNewElementAppend("button", "features2MainYellow", "żółta", $("#features2Main"));
			createNewElementAppend("button", "features2MainGreen", "zielona", $("#features2Main"));
			createNewElementAppend("button", "features2MainTawny", "brunatna", $("#features2Main"));
			createNewElementAppend("button", "features2MainAzure", "błękitna", $("#features2Main"));

			$("#features2MainWhite, #features2MainBrown, #features2MainBrownSkin, #features2MainBlack, #features2MainRed, #features2MainYellow, #features2MainGreen, #features2MainTawny, #features2MainAzure").addClass("btnsFeatures2");

			//funkcje wyboru koloru skóry
			features2($("#features2MainWhite"), 3, "biała");features2($("#features2MainBrownSkin"), 3, "brązowa");features2($("#features2MainBlack"), 3, "czarna");features2($("#features2MainRed"), 3, "czerwona");features2($("#features2MainYellow"), 3, "żółta");
			features2($("#features2MainGreen"), 3, "zielona");features2($("#features2MainTawny"), 3, "brunatna");features2($("#features2MainAzure"), 3, "błękitna");

			//elementy wyboru wagi
			createNewElementAppend("p", "features2MainWeight", "Waga", $("#features2Main"));
			createNewElementAppend("button", "features2MainUnderweight", "niedowaga", $("#features2Main"));
			createNewElementAppend("button", "features2MainNormalweight", "normalna", $("#features2Main"));
			createNewElementAppend("button", "features2MainOverweight", "nadwaga", $("#features2Main"));

			$("#features2MainUnderweight, #features2MainNormalweight, #features2MainOverweight").addClass("btnsFeatures2");

			//funkcje wyboru wagi
			features2($("#features2MainUnderweight"), 4, "niedowaga");features2($("#features2MainNormalweight"), 4, "normalna");
			features2($("#features2MainOverweight"), 4, "nadwaga");

			//elementy wyboru wzrostu
			createNewElementAppend("p", "features2MainGrowth", "Wzrost", $("#features2Main"));
			createNewElementAppend("button", "features2MainShort", "niski", $("#features2Main"));
			createNewElementAppend("button", "features2MainNormalGrowth", "normalny", $("#features2Main"));
			createNewElementAppend("button", "features2MainTall", "wysoki", $("#features2Main"));

			$("#features2MainShort, #features2MainNormalGrowth, #features2MainTall").addClass("btnsFeatures2");

			//funkcje wyboru wzrostu
			features2($("#features2MainShort"), 5, "niski");features2($("#features2MainNormalGrowth"), 5, "normalny");features2($("#features2MainTall"), 5, "wysoki");
		}); //koniec zdarzeń dla przycisku cechy 2 (features2)

		//zdarzenia dla przycisku ekwipunek
		$("#equipment").on("click", function () {
			$("#mainPart").empty();

			//elementy wyboru ekwipunku
			createNewElementAppend("p", "equipmentTitle", heroCreator.equipmentTitle, $("#mainPart"));
			$("#equipmentTitle").addClass("goldUnderline basicText");
			createNewElementAppend("p", "equipmentDescription", heroCreator.equipmentDescription, $("#mainPart"));
			createNewElementAppend("p", "weaponTitle", "broń", $("#mainPart"), "bold");

			function chooseItem(whatClick, whatPush) {
				whatClick.on("click", function () {
					if (equip.length <= 4) {
						equip.push(whatPush);$("#alerts #equipmentAlert").removeClass("redText");$("#alerts #equipmentAlert").addClass("greenText");

						$("#btnToRemove").text(createNewElementAppend("button", whatPush, whatPush, $("#btnToRemove")));
						$("#btnToRemove").find("button").addClass("width15 bold");

						var allBtnRemove = document.querySelectorAll("#btnToRemove button"),
						    i = void 0;
						for (i = 0; i < allBtnRemove.length; i++) {
							allBtnRemove[i].addEventListener("click", function (e) {
								if (equip.indexOf(this.id) !== -1) {
									equip.splice(equip.indexOf(this.id), 1);this.remove();
								}
								if (equip.length === 0) {
									$("#alerts #equipmentAlert").removeClass("greenText");$("#alerts #equipmentAlert").addClass("redText");
								} else if (equip.length < 5) {
									$("#subAlert").text("").removeClass("redText");
								}
							});
						}
					} else {
						$("#subAlert").text("Już zostało wybrane pięć przedmiotów").addClass("redText");
					}
				}); //koniec funkcji kliknięcia w przycisk
			} //koniec funkcji chooseItem

			//broń
			createNewElementAppend("button", heroCreator.equipWeaponENG[0], heroCreator.equipWeaponPL[0], $("#mainPart"), "bold");chooseItem($("#dagger"), "sztylet");
			createNewElementAppend("button", heroCreator.equipWeaponENG[1], heroCreator.equipWeaponPL[1], $("#mainPart"), "bold");chooseItem($("#woddenStick"), "drewniana pałka");
			createNewElementAppend("button", heroCreator.equipWeaponENG[2], heroCreator.equipWeaponPL[2], $("#mainPart"), "bold");chooseItem($("#shortSword"), "krótki miecz");
			createNewElementAppend("button", heroCreator.equipWeaponENG[3], heroCreator.equipWeaponPL[3], $("#mainPart"), "bold");chooseItem($("#sabre"), "szabla");
			createNewElementAppend("button", heroCreator.equipWeaponENG[4], heroCreator.equipWeaponPL[4], $("#mainPart"), "bold");chooseItem($("#spear"), "włócznia");
			createNewElementAppend("button", heroCreator.equipWeaponENG[5], heroCreator.equipWeaponPL[5], $("#mainPart"), "bold");chooseItem($("#slingshot"), "proca");
			createNewElementAppend("button", heroCreator.equipWeaponENG[6], heroCreator.equipWeaponPL[6], $("#mainPart"), "bold");chooseItem($("#bow"), "łuk");

			//zbroje
			createNewElementAppend("p", "armorTitle", "zbroje", $("#mainPart"), "bold");
			createNewElementAppend("button", heroCreator.equipArmorENG[0], heroCreator.equipArmorPL[0], $("#mainPart"), "bold");chooseItem($("#gambison"), "przeszywanica");
			createNewElementAppend("button", heroCreator.equipArmorENG[1], heroCreator.equipArmorPL[1], $("#mainPart"), "bold");chooseItem($("#leather"), "zbr. skórzana");
			createNewElementAppend("button", heroCreator.equipArmorENG[2], heroCreator.equipArmorPL[2], $("#mainPart"), "bold");chooseItem($("#studded"), "zbr. ćwiekowana");

			//tarcze
			createNewElementAppend("p", "shieldTitle", "tarcze", $("#mainPart"), "bold");
			createNewElementAppend("button", heroCreator.equipShieldENG[0], heroCreator.equipShieldPL[0], $("#mainPart"), "bold");chooseItem($("#buckler"), "puklerz");
			createNewElementAppend("button", heroCreator.equipShieldENG[1], heroCreator.equipShieldPL[1], $("#mainPart"), "bold");chooseItem($("#smallWooden"), "tarcza mała drew.");
			createNewElementAppend("button", heroCreator.equipShieldENG[2], heroCreator.equipShieldPL[2], $("#mainPart"), "bold");chooseItem($("#smallMetal"), "tarcza mała metal.");

			//inne
			createNewElementAppend("p", "otherTitle", "inne", $("#mainPart"), "bold");
			createNewElementAppend("button", heroCreator.equipOtherENG[0], heroCreator.equipOtherPL[0], $("#mainPart"), "bold");chooseItem($("#stick"), "kostur");
			createNewElementAppend("button", heroCreator.equipOtherENG[1], heroCreator.equipOtherPL[1], $("#mainPart"), "bold");chooseItem($("#moneyBag"), "mieszek");
			createNewElementAppend("button", heroCreator.equipOtherENG[2], heroCreator.equipOtherPL[2], $("#mainPart"), "bold");chooseItem($("#travelBag"), "torba podróżna");
			createNewElementAppend("button", heroCreator.equipOtherENG[3], heroCreator.equipOtherPL[3], $("#mainPart"), "bold");chooseItem($("#purse"), "sakwa");
			createNewElementAppend("button", heroCreator.equipOtherENG[4], heroCreator.equipOtherPL[4], $("#mainPart"), "bold");chooseItem($("#backpack"), "plecak");
			createNewElementAppend("button", heroCreator.equipOtherENG[5], heroCreator.equipOtherPL[5], $("#mainPart"), "bold");chooseItem($("#canteen"), "manierka");
			createNewElementAppend("button", heroCreator.equipOtherENG[6], heroCreator.equipOtherPL[6], $("#mainPart"), "bold");chooseItem($("#pot"), "sagan");
			createNewElementAppend("button", heroCreator.equipOtherENG[7], heroCreator.equipOtherPL[7], $("#mainPart"), "bold");chooseItem($("#blanket"), "koc");
			createNewElementAppend("button", heroCreator.equipOtherENG[8], heroCreator.equipOtherPL[8], $("#mainPart"), "bold");chooseItem($("#tubeParchments"), "tuba na pergaminy");
			createNewElementAppend("button", heroCreator.equipOtherENG[9], heroCreator.equipOtherPL[9], $("#mainPart"), "bold");chooseItem($("#penWriting"), "pęk piór do pisania");
			createNewElementAppend("button", heroCreator.equipOtherENG[10], heroCreator.equipOtherPL[10], $("#mainPart"), "bold");chooseItem($("#parchments5pieces"), "pergaminy 5szt.");
			createNewElementAppend("button", heroCreator.equipOtherENG[11], heroCreator.equipOtherPL[11], $("#mainPart"), "bold");chooseItem($("#ordinaryClothing"), "zwykłe ubranie");
			createNewElementAppend("button", heroCreator.equipOtherENG[12], heroCreator.equipOtherPL[12], $("#mainPart"), "bold");chooseItem($("#fussyHat"), "fikuśna czapka");
			createNewElementAppend("button", heroCreator.equipOtherENG[13], heroCreator.equipOtherPL[13], $("#mainPart"), "bold");chooseItem($("#coat"), "płaszcz");
			createNewElementAppend("button", heroCreator.equipOtherENG[14], heroCreator.equipOtherPL[14], $("#mainPart"), "bold");chooseItem($("#leatherBelt"), "skórzany pas");
			createNewElementAppend("button", heroCreator.equipOtherENG[15], heroCreator.equipOtherPL[15], $("#mainPart"), "bold");chooseItem($("#needlesThread"), "igły i nici");
			createNewElementAppend("button", heroCreator.equipOtherENG[16], heroCreator.equipOtherPL[16], $("#mainPart"), "bold");chooseItem($("#saddleCloth"), "derka");
			createNewElementAppend("button", heroCreator.equipOtherENG[17], heroCreator.equipOtherPL[17], $("#mainPart"), "bold");chooseItem($("#tent"), "namiot");
			createNewElementAppend("button", heroCreator.equipOtherENG[18], heroCreator.equipOtherPL[18], $("#mainPart"), "bold");chooseItem($("#woodenBowl"), "drewniana miska");
			createNewElementAppend("button", heroCreator.equipOtherENG[19], heroCreator.equipOtherPL[19], $("#mainPart"), "bold");chooseItem($("#woodenSpoon"), "drewniana łyżka");
			createNewElementAppend("button", heroCreator.equipOtherENG[20], heroCreator.equipOtherPL[20], $("#mainPart"), "bold");chooseItem($("#torch"), "pochodnia");
			createNewElementAppend("button", heroCreator.equipOtherENG[21], heroCreator.equipOtherPL[21], $("#mainPart"), "bold");chooseItem($("#oliveLamp"), "lampa oliwna");
			createNewElementAppend("button", heroCreator.equipOtherENG[22], heroCreator.equipOtherPL[22], $("#mainPart"), "bold");chooseItem($("#oilLamp"), "kaganek");
			createNewElementAppend("button", heroCreator.equipOtherENG[23], heroCreator.equipOtherPL[23], $("#mainPart"), "bold");chooseItem($("#rope5m"), "lina 5m");
			createNewElementAppend("button", heroCreator.equipOtherENG[24], heroCreator.equipOtherPL[24], $("#mainPart"), "bold");chooseItem($("#tinders"), "hubka i krzesiwo");

			$("#mainPart button").addClass("width15");

			//paragraf do wyświetlania opisu wybranego elementu ekwipunku
			createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));
			createNewElementAppend("p", "btnToRemoveTitle", "Przedmioty do usunięcia", $("#choosenDescription"));
			createNewElementAppend("p", "btnToRemove", "", $("#choosenDescription"));
			createNewElementAppend("p", "subAlert", "", $("#choosenDescription"));

			//pętla dla przycisków usuwania przedmiotów, gdy pownownie wejdzie się w opcje wybiernia przedmiotów
			for (var j = 0; j < equip.length; j++) {
				createNewElementAppend("button", j, equip[j], $("#btnToRemove"));var allBtnRemove = document.querySelectorAll("#btnToRemove button"),
				    i = void 0;
				for (i = 0; i < allBtnRemove.length; i++) {
					allBtnRemove[i].addEventListener("click", function (e) {
						if (equip.indexOf($(this).text()) !== -1) {
							equip.splice(equip.indexOf($(this).text()), 1);this.remove();
						}this.remove();
					});
				}
			}$("#btnToRemoveTitle").addClass("goldUnderline bold");
		}); //koniec zdarzeń dla kreatora postaci - ekwipunku

		//początek zdarzeń dla przycisku umiejętności - kreator postaci
		$("#skills").on("click", function () {
			$("#mainPart").empty();
			//elementy wyboru umiejętności
			createNewElementAppend("p", "skillsTitle", heroCreator.skillsTitle, $("#mainPart"));
			$("#skillsTitle").addClass("goldUnderline basicText");
			createNewElementAppend("p", "skillsDescription", heroCreator.skillsDescription, $("#mainPart"));

			function chooseSkill(whatClick, whatPush) {
				whatClick.on("click", function () {
					if (skills.length <= 2) {
						if (skills.indexOf(whatPush) !== -1) {
							$("#subAlert").text("Ta umiejętność została już wybrana.").addClass("redText");
						} else {
							skills.push(whatPush);createNewElementAppend("button", whatPush, whatPush, $("#btnToRemove"), "bold");$("#alerts #skillAlert").removeClass("redText");$("#alerts #skillAlert").addClass("greenText");
						}
					} else if (skills.length > 2) {
						$("#subAlert").text("Już zostały wybrane trzy umiejętności.").addClass("redText");
					}

					var allBtnRemove = document.querySelectorAll("#btnToRemove button"),
					    i = void 0;for (i = 0; i < allBtnRemove.length; i++) {
						allBtnRemove[i].addEventListener("click", function (e) {
							if (skills.indexOf(this.id) !== -1) {
								skills.splice(skills.indexOf(this.id), 1);this.remove();
							}
							if (skills.length === 0) {
								$("#alerts #skillAlert").removeClass("greenText");$("#alerts #skillAlert").addClass("redText");
							} else if (skills.length < 3) {
								$("#subAlert").text("").removeClass("redText");
							}
						});
					}
				});
			}

			//umiejętności wojownika
			createNewElementAppend("p", "warriorTitle", "wojownik", $("#mainPart"), "bold");
			createNewElementAppend("button", heroCreator.warriorENG[0], heroCreator.warriorPL[0], $("#mainPart"), "bold");chooseSkill($("#survival"), "szt. przetrwania");
			createNewElementAppend("button", heroCreator.warriorENG[1], heroCreator.warriorPL[1], $("#mainPart"), "bold");chooseSkill($("#discipline"), "dyscyplina");
			createNewElementAppend("button", heroCreator.warriorENG[2], heroCreator.warriorPL[2], $("#mainPart"), "bold");chooseSkill($("#argumentation"), "dowodzenie");
			createNewElementAppend("button", heroCreator.warriorENG[3], heroCreator.warriorPL[3], $("#mainPart"), "bold");chooseSkill($("#impactShield"), "uderzenie tarczą");
			createNewElementAppend("button", heroCreator.warriorENG[4], heroCreator.warriorPL[4], $("#mainPart"), "bold");chooseSkill($("#horsebackRiding"), "jeździectwo");
			createNewElementAppend("button", heroCreator.warriorENG[5], heroCreator.warriorPL[5], $("#mainPart"), "bold");chooseSkill($("#dagger"), "sztylet");
			createNewElementAppend("button", heroCreator.warriorENG[6], heroCreator.warriorPL[6], $("#mainPart"), "bold");chooseSkill($("#shortSword"), "krótki miecz");
			createNewElementAppend("button", heroCreator.warriorENG[7], heroCreator.warriorPL[7], $("#mainPart"), "bold");chooseSkill($("#sabre"), "szabla");
			createNewElementAppend("button", heroCreator.warriorENG[8], heroCreator.warriorPL[8], $("#mainPart"), "bold");chooseSkill($("#spear"), "włócznia");
			createNewElementAppend("button", heroCreator.warriorENG[9], heroCreator.warriorPL[9], $("#mainPart"), "bold");chooseSkill($("#bow"), "łuk");
			createNewElementAppend("button", heroCreator.warriorENG[10], heroCreator.warriorPL[10], $("#mainPart"), "bold");chooseSkill($("#buckler"), "puklerz");
			createNewElementAppend("button", heroCreator.warriorENG[11], heroCreator.warriorPL[11], $("#mainPart"), "bold");chooseSkill($("#smallWoodenShield"), "mała tarcza drew.");
			createNewElementAppend("button", heroCreator.warriorENG[12], heroCreator.warriorPL[12], $("#mainPart"), "bold");chooseSkill($("#smallMetalShield"), "mała tarcza metal.");

			//umiejętności złoczyńcy
			createNewElementAppend("p", "criminalTitle", "złoczyńca", $("#mainPart"), "bold");
			createNewElementAppend("button", heroCreator.criminalENG[0], heroCreator.criminalPL[0], $("#mainPart"), "bold");chooseSkill($("#poison"), "trucizny");
			createNewElementAppend("button", heroCreator.criminalENG[1], heroCreator.criminalPL[1], $("#mainPart"), "bold");chooseSkill($("#climb"), "wspinaczka");
			createNewElementAppend("button", heroCreator.criminalENG[2], heroCreator.criminalPL[2], $("#mainPart"), "bold");chooseSkill($("#acting"), "aktorstwo");
			createNewElementAppend("button", heroCreator.criminalENG[3], heroCreator.criminalPL[3], $("#mainPart"), "bold");chooseSkill($("#acrobatics"), "akrobatyka");
			createNewElementAppend("button", heroCreator.criminalENG[4], heroCreator.criminalPL[4], $("#mainPart"), "bold");chooseSkill($("#traps"), "pułapki");
			createNewElementAppend("button", heroCreator.criminalENG[5], heroCreator.criminalPL[5], $("#mainPart"), "bold");chooseSkill($("#sneak"), "skradanie się");
			createNewElementAppend("button", heroCreator.criminalENG[6], heroCreator.criminalPL[6], $("#mainPart"), "bold");chooseSkill($("#theft"), "kradzież");
			createNewElementAppend("button", heroCreator.criminalENG[7], heroCreator.criminalPL[7], $("#mainPart"), "bold");chooseSkill($("#dodge"), "uniki");
			createNewElementAppend("button", heroCreator.criminalENG[8], heroCreator.criminalPL[8], $("#mainPart"), "bold");chooseSkill($("#bluff"), "blefowanie");
			createNewElementAppend("button", heroCreator.criminalENG[9], heroCreator.criminalPL[9], $("#mainPart"), "bold");chooseSkill($("#poison"), "trucizny");
			createNewElementAppend("button", heroCreator.criminalENG[10], heroCreator.criminalPL[10], $("#mainPart"), "bold");chooseSkill($("#woddenStick"), "drewniana pałka");

			//umiejętności złoczyńca
			createNewElementAppend("p", "wizardTitle", "czarodziej", $("#mainPart"), "bold");
			createNewElementAppend("button", heroCreator.wizardENG[0], heroCreator.wizardPL[0], $("#mainPart"), "bold");chooseSkill($("#writingRead"), "pisanie i czytanie");
			createNewElementAppend("button", heroCreator.wizardENG[1], heroCreator.wizardPL[1], $("#mainPart"), "bold");chooseSkill($("#summonOvertake"), "przyw./odp. demona");
			createNewElementAppend("button", heroCreator.wizardENG[2], heroCreator.wizardPL[2], $("#mainPart"), "bold");chooseSkill($("#divination"), "wróżbiarstwo");
			createNewElementAppend("button", heroCreator.wizardENG[3], heroCreator.wizardPL[3], $("#mainPart"), "bold");chooseSkill($("#healig"), "leczenie ran");
			createNewElementAppend("button", heroCreator.wizardENG[4], heroCreator.wizardPL[4], $("#mainPart"), "bold");chooseSkill($("#castSpell"), "rzucanie czarów");
			createNewElementAppend("button", heroCreator.wizardENG[5], heroCreator.wizardPL[5], $("#mainPart"), "bold");chooseSkill($("#createPotion"), "tworz. eliksirów");
			createNewElementAppend("button", heroCreator.wizardENG[6], heroCreator.wizardPL[6], $("#mainPart"), "bold");chooseSkill($("#createMagItem"), "tworz. mag. przedmiotów");
			createNewElementAppend("button", heroCreator.wizardENG[7], heroCreator.wizardPL[7], $("#mainPart"), "bold");chooseSkill($("#createBalm"), "tworzenie maści");
			createNewElementAppend("button", heroCreator.wizardENG[8], heroCreator.wizardPL[8], $("#mainPart"), "bold");chooseSkill($("#createRunes"), "tworzenie run");
			createNewElementAppend("button", heroCreator.wizardENG[9], heroCreator.wizardPL[9], $("#mainPart"), "bold");chooseSkill($("#astrology"), "pisanie i czytanie");
			createNewElementAppend("button", heroCreator.wizardENG[0], heroCreator.wizardPL[0], $("#mainPart"), "bold");chooseSkill($("#herbalism"), "zielarstwo");

			//paragraf do wyświetlania opisu wybranej umiejętności
			$("#mainPart button").addClass("width15");

			// część do usuwania wybranej umiejętności i komunikacji o błędzie
			createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));
			createNewElementAppend("p", "btnToRemoveTitle", "Umiejętności do usunięcia", $("#choosenDescription"));
			createNewElementAppend("p", "btnToRemove", "", $("#choosenDescription"));
			createNewElementAppend("p", "subAlert", "", $("#choosenDescription"));

			//pętla dla przycisków usuwania umiejetności, gdy pownownie wejdzie się w opcje wybiernia umiejętności
			function skillsToRemove(skills) {
				if (skills.length > 0) {
					for (var i = 0; i < skills.length; i++) {
						createNewElementAppend("button", i, skills[i], $("#btnToRemove"), "bold");
						var allBtnRemove = document.querySelectorAll("#btnToRemove button"),
						    j = void 0;
						for (j = 0; j < allBtnRemove.length; j++) {
							allBtnRemove[j].addEventListener("click", function (e) {
								if (skills.indexOf($(this).text()) !== -1) {
									skills.splice(equip.indexOf($(this).text()), 1);
									this.remove();
								}this.remove();
							});
						}
					}
				}
			}skillsToRemove(skills);
		}); //koniec zdarzeń dla kreatora postaci - umiejętności

		//funkcja optymalizująca tworzenie elementów informacji zbiorczej
		function infoCreator(titleId, textTitle, nameInfoSubId, what, where) {
			createNewElementAppend("p", titleId, textTitle, where);createNewElementAppend("p", nameInfoSubId, what, where);if (what == "nie wybrano") {
				$("#" + nameInfoSubId).addClass("redText");
			} else if (what !== "nie wybrano") {
				$("#" + nameInfoSubId).addClass("greenText");
			}
		}

		//zdarzenia dla przycisku info - w kreatorze postaci
		$("#infoCreator").on("click", function () {
			$("#mainPart").empty();

			createNewElementAppend("p", "infoTitle", heroCreator.infoTitle, $("#mainPart"));
			$("#infoTitle").addClass("goldUnderline basicText");
			createNewElementAppend("p", "infoDescription", heroCreator.infoDescription, $("#mainPart"));

			//część pierwsza - imię, rasa i profesja
			createNewElementAppend("div", "divInfoOne", "", $("#mainPart"));
			//imię
			createNewElementAppend("div", "nameResult", "", $("#divInfoOne"));
			infoCreator("nameInfo", "imię", "nameInfoSub", hero[0], $("#nameResult"));
			//rasa
			createNewElementAppend("div", "raceResult", "", $("#divInfoOne"));
			infoCreator("raceInfo", "rasa", "raceInfoSub", hero[1], $("#raceResult"));
			//profesja
			createNewElementAppend("div", "occupationResult", "", $("#divInfoOne"));
			infoCreator("occupationInfo", "profesja", "occupationInfoSub", hero[2], $("#occupationResult"));

			//część druga - losowane cechy
			createNewElementAppend("div", "divInfoTwo", "", $("#mainPart"));

			//siła
			createNewElementAppend("div", "forceResult", "", $("#divInfoTwo"));
			infoCreator("forceInfo", "siła", "forceInfoSub", "nie wylosowano", $("#forceResult"));

			//wytrzymałość
			createNewElementAppend("div", "strengthResult", "", $("#divInfoTwo"));
			infoCreator("strengthInfo", "wytrzymałość", "strengthInfoSub", "nie wylosowano", $("#strengthResult"));

			//zręczność
			createNewElementAppend("div", "dexterityResult", "", $("#divInfoTwo"));
			infoCreator("dexterityInfo", "zręczność", "dexterityInfoSub", "nie wylosowano", $("#dexterityResult"));

			//inteligencja
			createNewElementAppend("div", "intelligenceResult", "", $("#divInfoTwo"));
			infoCreator("intelligenceInfo", "inteligencja", "intelligenceInfoSub", "nie wylosowano", $("#intelligenceResult"));

			//charyzma
			createNewElementAppend("div", "charismaResult", "", $("#divInfoTwo"));
			infoCreator("charismaInfo", "charyzma", "charismaInfoSub", "nie wylosowano", $("#charismaResult"));

			//część trzecia - wybór pozostałych cech - przycisk CECHY 2
			createNewElementAppend("div", "divInfoThree", "", $("#mainPart"));

			//płeć
			createNewElementAppend("div", "sexResult", "", $("#divInfoThree"));
			infoCreator("sexInfo", "płeć", "sexInfoSub", choosenFeatures[0], $("#sexResult"));

			//kolor włosów
			createNewElementAppend("div", "hairResult", "", $("#divInfoThree"));
			infoCreator("hairInfo", "kolor włosów", "hairInfoSub", choosenFeatures[1], $("#hairResult"));

			//kolor oczu
			createNewElementAppend("div", "eyesResult", "", $("#divInfoThree"));
			infoCreator("eyesInfo", "kolor oczu", "eyesInfoSub", choosenFeatures[2], $("#eyesResult"));

			//kolor skóry
			createNewElementAppend("div", "skinResult", "", $("#divInfoThree"));
			infoCreator("skinInfo", "kolor skóry", "skinInfoSub", choosenFeatures[3], $("#skinResult"));

			//waga
			createNewElementAppend("div", "weightResult", "", $("#divInfoThree"));
			infoCreator("weightInfo", "waga", "weightInfoSub", choosenFeatures[4], $("#weightResult"));

			//wzrost
			createNewElementAppend("div", "heightResult", "", $("#divInfoThree"));
			infoCreator("heightInfo", "wzrost", "heightInfoSub", choosenFeatures[5], $("#heightResult"));

			//część czwarta - wybrany ekwipunek
			createNewElementAppend("div", "divInfoFour", "", $("#mainPart"));

			createNewElementAppend("div", "equipResult", "", $("#divInfoFour"));
			infoCreator("equipInfo", "ekwipunek", "equipInfoSub", equip, $("#equipResult"));

			//część piąta- wybrane umiejętności
			createNewElementAppend("div", "divInfoFive", "", $("#mainPart"));

			createNewElementAppend("div", "skillsResult", "", $("#divInfoFour"));
			infoCreator("skillsInfo", "umiejętności", "skillsInfoSub", skills, $("#skillsResult"));

			createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));
		}); //koniec zdarzeń dla przycisku info - w kreatorze postaci

		var allgreen = document.querySelectorAll("#alerts .greenText");
		checkGreen();
	}); //koniec przycisku nowa gra (newGame)

	//funkcja optymalizująca zliczanie punktów cech
	function resultRandomFeatures(features, race, occupation, where, tablePosition) {
		if (!isNaN(features) && isNaN(race) && isNaN(occupation)) {
			// jest tylko cecha
			var result = features;amountAllPoint.splice(tablePosition, 1, result);where.text(result);
		} else if (!isNaN(features) && !isNaN(race) && isNaN(occupation)) {
			// jest cecha + rasa
			var _result = features + race;amountAllPoint.splice(tablePosition, 1, _result);where.text(_result);
		} else if (isNaN(features) && !isNaN(race) && isNaN(occupation)) {
			// jest rasa
			var _result2 = race;amountAllPoint.splice(tablePosition, 1, _result2);where.text(_result2);
		} else if (isNaN(features) && !isNaN(race) && !isNaN(occupation)) {
			// jest rasa + profesja
			var _result3 = race + occupation;amountAllPoint.splice(tablePosition, 1, _result3);where.text(_result3);
		} else if (isNaN(features) && isNaN(race) && !isNaN(occupation)) {
			// jest profesja
			var _result4 = occupation;amountAllPoint.splice(tablePosition, 1, _result4);where.text(_result4);
		} else if (!isNaN(features) && isNaN(race) && !isNaN(occupation)) {
			// jest cecha + profesja
			var _result5 = features + occupation;amountAllPoint.splice(tablePosition, 1, _result5);
			where.text(_result5);
		} else if (!isNaN(features) && !isNaN(race) && !isNaN(occupation)) {
			//cecha + rasa + profesja
			var _result6 = features + race + occupation;amountAllPoint.splice(tablePosition, 1, _result6);
			where.text(_result6);
		}
	}

	//interwał dla zliczania punktów cech Postaci
	var stopPoints = setInterval(function () {
		resultRandomFeatures(randomFeatures[0], choosenRace[0], choosenOccupation[0], $("#forceInfoSub"), 0);resultRandomFeatures(randomFeatures[1], choosenRace[1], choosenOccupation[1], $("#strengthInfoSub"), 1);resultRandomFeatures(randomFeatures[2], choosenRace[2], choosenOccupation[2], $("#dexterityInfoSub"), 2);resultRandomFeatures(randomFeatures[3], choosenRace[3], choosenOccupation[3], $("#intelligenceInfoSub"), 3);resultRandomFeatures(randomFeatures[4], choosenRace[4], choosenOccupation[4], $("#charismaInfoSub"), 4);
	}, 100);

	//funkcja dla interwału, sprawdzającego wybranie wszystkich potrzebnych rzeczy
	var stopAll = setInterval(function () {
		checkGreen();
	}, 100);
	function checkGreen() {
		var allgreen = document.querySelectorAll("#alerts .greenText");
		if (allgreen.length < 7 || equip.length == 0 || skills.length == 0) {
			$("#startGame").hide();
		} else if (allgreen.length == 7 && equip.length > 0 && skills.length > 0) {
			$("#startGame").show().addClass("basicBtn").addClass("start");
		}
	}

	//zdarzenie dla przycisku cechy - wyświetlanym w oknie alertowym
	$("#featuresGame").on("click", function () {
		createNewElementAppend("p", "nameTitle", "imię", $("#alerts"));
		createNewElementAppend("p", "nameTable", hero[0], $("#alerts"));

		createNewElementAppend("p", "raceTitle", "rasa", $("#alerts"));
		createNewElementAppend("p", "raceTable", hero[1], $("#alerts"));

		createNewElementAppend("p", "occupationTitle", "profesja", $("#alerts"));
		createNewElementAppend("p", "occupationTable", hero[2], $("#alerts"));

		createNewElementAppend("p", "forceTitle", "siła", $("#alerts"));
		createNewElementAppend("p", "forceTable", amountAllPoint[0], $("#alerts"));

		createNewElementAppend("p", "strenghtTitle", "wytrzymałość", $("#alerts"));
		createNewElementAppend("p", "strenghtTable", amountAllPoint[1], $("#alerts"));

		createNewElementAppend("p", "dexterityTitle", "zręczność", $("#alerts"));
		createNewElementAppend("p", "dexterityTable", amountAllPoint[2], $("#alerts"));

		createNewElementAppend("p", "intelligenceTitle", "inteligencja", $("#alerts"));
		createNewElementAppend("p", "intelligenceTable", amountAllPoint[3], $("#alerts"));

		createNewElementAppend("p", "charismaTitle", "charyzma", $("#alerts"));
		createNewElementAppend("p", "charismaTable", amountAllPoint[4], $("#alerts"));

		createNewElementAppend("p", "sexTitle", "płeć", $("#alerts"));
		createNewElementAppend("p", "sexTable", choosenFeatures[0], $("#alerts"));

		createNewElementAppend("p", "hairTitle", "kolor włosów", $("#alerts"));
		createNewElementAppend("p", "hairTable", choosenFeatures[1], $("#alerts"));

		createNewElementAppend("p", "eyesTitle", "kolor oczu", $("#alerts"));
		createNewElementAppend("p", "eyesTable", choosenFeatures[2], $("#alerts"));

		createNewElementAppend("p", "skinTitle", "kolor skóry", $("#alerts"));
		createNewElementAppend("p", "skinTable", choosenFeatures[3], $("#alerts"));

		createNewElementAppend("p", "weightTitle", "waga", $("#alerts"));
		createNewElementAppend("p", "weightTable", choosenFeatures[4], $("#alerts"));

		createNewElementAppend("p", "heightTitle", "wzrost", $("#alerts"));
		createNewElementAppend("p", "heightTable", choosenFeatures[5], $("#alerts"));

		$("#featuresGame").prop("disabled", true);
		$("#alerts").addClass("arrange");

		$("#nameTitle, #nameTable, #raceTitle, #raceTable, #occupationTitle, #occupationTable, #forceTitle, #forceTable, #strenghtTitle, #strenghtTable, #dexterityTitle, #dexterityTable, #intelligenceTitle, #intelligenceTable, #charismaTitle, #charismaTable, #sexTitle, #sexTable, #hairTitle, #hairTable, #eyesTitle, #eyesTable, #skinTitle, #skinTable, #weightTitle, #weightTable, #heightTitle, #heightTable").addClass("centerBold");

		$("#nameTable, #raceTable, #occupationTable, #forceTable, #strenghtTable, #dexterityTable, #intelligenceTable, #charismaTable, #sexTable, #hairTable, #eyesTable, #skinTable, #weightTable,  #heightTable").addClass("font12emGreen");

		createNewElementAppend("button", "closeFeatures", "zamknij", $("#alerts"));

		//zdarzenie przycisku zamykania
		$("#closeFeatures").addClass("closeBtn");$("#closeFeatures").on("click", function () {
			$("#alerts").removeClass("arrange").empty();$("#taskGame, #skillsGame, #equipGame, #featuresGame").prop("disabled", false);
		});
	}); //koniec zdarzenia dla przycisku cechy - wyświetlanym w oknie alertowym

	//zdarzenie wyświetlania ekwipunku (gra);
	$("#equipGame").on("click", function () {
		createNewElementAppend("p", "equipTitle", "ekwipunek", $("#alerts"));
		createNewElementAppend("p", "equipTable", equip, $("#alerts"));
		createNewElementAppend("p", "goldTitle", "złoto", $("#alerts"));
		createNewElementAppend("p", "goldTable", gold, $("#alerts"));
		createNewElementAppend("button", "closeEquip", "zamknij", $("#alerts"));

		$("#equipTable, #equipTitle, #goldTitle, #goldTable").addClass("centerBold2");
		$("#equipTable, #goldTable").addClass("font12emGreen");

		$("#equipGame").prop("disabled", true);

		//zdarzenie przycisku zamykania
		$("#closeEquip").addClass("closeBtn");
		$("#closeEquip").on("click", function () {
			$("#alerts").empty();
			$("#taskGame, #skillsGame, #equipGame, #featuresGame").prop("disabled", false);
		});
	});
	//koniec zdarzenia wyświetlania ekwipunku (gra)

	//zdarzenie dla wyświetlania umiejętności (gra);
	$("#skillsGame").on("click", function () {
		createNewElementAppend("p", "skillsTitle", "umiejętności", $("#alerts"));createNewElementAppend("p", "skillsTable", skills, $("#alerts"));createNewElementAppend("button", "closeSkills", "zamknij", $("#alerts"));

		$("#skillsTitle, #skillsTable").addClass("centerBold2");
		$("#skillsTable").addClass("font12emGreen");

		$("#skillsGame").prop("disabled", true);

		//zdarzenie przycisku zamykania
		$("#closeSkills").addClass("closeBtn");$("#closeSkills").on("click", function () {
			$("#alerts").empty();
			$("#taskGame, #skillsGame, #equipGame, #featuresGame").prop("disabled", false);
		});
	});
	//koniec zdarzenia wyświetlania umiejętności (gra)

	//zdarzenie dla wyśwetlania zadań w grze (gra)
	$("#taskGame").on("click", function () {
		createNewElementAppend("p", "taskTitle", "zadania", $("#alerts"));
		for (var i = 0; i < tasks.length; i++) {
			createNewElementAppend("p", "taskId" + i, tasks[i], $("#alerts"), "font12emGreen");
		}
		createNewElementAppend("button", "closeTasks", "zamknij", $("#alerts"));
		$("#alerts > p").addClass("centerBold2");
		$("#taskGame").prop("disabled", true);
		//zdarzenie przycisku zamykania
		$("#closeTasks").addClass("closeBtn");
		$("#closeTasks").on("click", function () {
			$("#alerts").empty();
			$("#taskGame, #skillsGame, #equipGame, #featuresGame").prop("disabled", false);
		});
	}); //koniec zdarzenia wyświetlania zadań (gra)

	//zdarzenie dla przycisku start w kreatorze postaci
	$("#startGame").on("click", function () {

		clearInterval(stopAll); // zatrzymanie interwału - sprawdzenia poprawnego dokonania wyborów
		clearInterval(stopPoints); // zatrzymanie interwału - dla zliczania punktów cech postaci
		$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator, #startGame").hide();$("#mainPart").empty();$("#alerts").empty();

		setTimeout(function () {
			createNewElementAppend("p", "text1", introGame.text1, $("#mainPart"));createNewElementAppend("p", "text2", introGame.text2, $("#mainPart"));createNewElementAppend("p", "text3", introGame.text3, $("#mainPart"));
			createNewElementAppend("p", "text4", introGame.text4, $("#mainPart"));
			createNewElementAppend("p", "text5", introGame.text5, $("#mainPart"));
			createNewElementAppend("p", "text6", introGame.text6, $("#mainPart"));
			createNewElementAppend("p", "text7", introGame.text7, $("#mainPart"));
			createNewElementAppend("p", "text8", introGame.text8, $("#mainPart"));
		}, 100);

		setTimeout(function () {
			$("#mainPart").empty();
			$("#featuresGame, #equipGame, #skillsGame, #taskGame").show().addClass("basicBtn correctStyles");
			$("#skillsGame").addClass("correctSkills");
		}, 30000);
		$("#marketPlace, #caravans").hide();

		setTimeout(function () {
			createNewElementAppend("div", "btnsP1", "", $("nav"));

			//tworzenie przycisków dla pierwszego paragrafu - pokój
			createNewElementAppend("button", "lookAround", "rozejrzyj się", $("#btnsP1"));
			createNewElementAppend("button", "wardrobe", "zbadaj szafę", $("#btnsP1"));
			createNewElementAppend("button", "chest", "zbadaj skrzynię", $("#btnsP1"));
			createNewElementAppend("button", "package", "weź paczkę", $("#btnsP1"));

			//tworzenie przycisków dla paragrafu drugiego - ulica
			createNewElementAppend("button", "lookAroundStreet", "rozejrzyj się", $("#btnsP1"));
			createNewElementAppend("button", "inRoom", "do domu", $("#btnsP1"));

			//tworzenie przycisków kupowanie i sprzedawanie
			createNewElementAppend("button", "buy", "kup", $("#btnsP1"));
			createNewElementAppend("button", "sell", "sprzedaj", $("#btnsP1"));

			//ukrywanie przycisków
			$("#lookAroundStreet, #inRoom, #buy, #sell").hide();

			createNewElementAppend("p", "textP", firstP.text, $("#mainPart"));
			createNewElementAppend("p", "description", "", $("#mainPart"));
			$("#btnsP1").after($("#outRoom").show().addClass("outRoomRed").prop("disabled", true));

			//zdarzenie dla rozglądania się
			$("#lookAround").on("click", function () {
				firstP.lookAround();
			});
			//koniec zdarzenia rozglądania się

			//zdarzenie dla zbadania szafy
			$("#wardrobe").on("click", function () {
				firstP.wardrobe(choosenFeatures[0], $("#description"), equip);
				firstP.closeWardrobe();firstP.takeCoat(equip);
			});
			//koniec zdarzenia badania szafy

			//zdarzenie dla zbadania skrzynię
			$("#chest").on("click", function () {
				firstP.chest(gold, $("#description"));firstP.closeChest($("#description"));
			});
			//koniec zdarzenia dla zbadania skrzyni

			//zdarzenie dla zabrania paczki
			$("#package").on("click", function () {
				equip.push("paczka");$("#outRoom").addClass("outRoomGreen").prop("disabled", false);
				$("#outRoom").removeClass("streetMarket");
				$("#outRoom").removeClass("outRoomRed");
				$(this).remove();
			});
			//koniec zdarzenia dla zabrania paczki
		}, 30100);
	}); //koniec zdarzenia dla przycisku start w kreatorze postaci

	//zdarzenie dla wyjścia z pokoju - ulica
	$("#outRoom").on("click", function () {
		$("#mainPart").empty();
		$("#lookAround, #wardrobe, #chest, #outRoom, #buy, #sell").hide();
		$("#lookAroundStreet, #inRoom").show();
		createNewElementAppend("p", "textP", street.text, $("#mainPart"));
		createNewElementAppend("p", "description", "", $("#mainPart"));

		$("#ask").hide();

		$("#btnsP1").after($("#marketPlace, #caravans").show());

		//zdarzenie dla rozglądania się na ulicy
		$("#lookAroundStreet").on("click", function () {
			street.lookAround();
		});

		//zdarzenie dla wejścia do domu
		$("#inRoom").on("click", function () {
			$("#mainPart").empty();
			$("#lookAroundStreet, #marketPlace, #inRoom, #caravans").hide();
			$("#lookAround, #wardrobe, #chest, #outRoom").show();
			createNewElementAppend("p", "textP", firstP.text, $("#mainPart"));
			createNewElementAppend("p", "description", "", $("#mainPart"));
		});
	});

	//zdarzenia dla targu
	$("#marketPlace").on("click", function () {
		$("#mainPart").empty();
		$("#lookAroundStreet, #marketPlace, #inRoom, #caravans, #ask").hide();

		createNewElementAppend("p", "textP", market.market, $("#mainPart"));
		createNewElementAppend("p", "description", "", $("#mainPart"));
		$("#buy, #sell").show();

		market.marketToStreet();
		market.marketToCaravans();

		//zdarzenie dla kupowania
		$("#buy").on("click", function () {
			$("#description").addClass("btnsMarket");
			market.btnsBuy(gold, equip);
		});

		//zdarzenie dla sprzedawania
		$("#sell").on("click", function () {
			$("#description").addClass("btnsMarket");
			market.btnsSell(gold, equip);
		});
	});

	//zdarzenie dla pójścia do miejsca postoju karawany
	$("#caravans").on("click", function () {
		$("#mainPart").empty();
		$("#btnsP1").empty();
		$("#caravans, #marketPlace").hide();
		$("#outRoom").hide();
		createNewElementAppend("p", "textP", caravans.text, $("#mainPart"));
		createNewElementAppend("p", "description", "", $("#mainPart"));
		caravans.street();
		caravans.market();
		caravans.ask();
		caravans.answerAsk();
		caravans.agree();

		$("#agree").on("click", function () {
			$("#textP, #description").empty();
			$("#ask, #agree, #marketPlace, #outRoom").hide();
			$("#further").show();
			startVoyage.startVoyageText();
		});
	});
	startVoyage.further();
}); //koniec DOMContentLoaded

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var workingFile = __webpack_require__(0);

//funkcja, która tworzy nowy element DOM
function createNewElementAppend(nameElement, idName, text, whereAppend, addedClass) {
	var newElement = document.createElement(nameElement);
	newElement.id = idName;newElement.innerText = text;
	whereAppend.append(newElement);newElement.classList.add(addedClass);
	newElement.classList.remove("undefined");
}

//tekst pierwszej walki
var text = "Jedziecie sobie spokojnie. Czas mija na oglądaniu pejzaży z jadącego wozu. Niestety ta sielanka skończyła się wieczorem drugiego dnia. Zaczęło się od zawalonej, przez drzewa drogi. Gdy uczestnicy, z pierwszych wozów karawany uprzątali drzewa, nastąpił atak. Wszyscy muszą walczyć!. Ciebie atakuje jeden bandyta z wielkim mieczem.";

module.exports.firstFight = function () {
	$("#textP").text(text);
	$("#voyage").prop("disabled", true);
	createNewElementAppend("button", "prepareToBattle", "przygotuj się", $("nav"));

	$("#prepareToBattle").on("click", function () {
		createNewElementAppend("p", "prepareToBattleTitle", "Wybierz maksymalnie trzy rzeczy, które będziesz używać w trakcie walki.", $("#description"));

		createNewElementAppend("p", "equipList", "", $("#description"));

		for (var i = 0; i < workingFile.e.length; i++) {
			var weaponBtn = document.createElement("button");
			weaponBtn.id = workingFile.e[i];
			weaponBtn.innerText = workingFile.e[i];
			$("#equipList").append(weaponBtn);
			$("#description button").addClass("weaponList");
		}

		$("#paczka").prop("disabled", true);
	});
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//funkcja, która tworzy nowy element DOM
module.exports.newElement = function (nameElement, idName, text, whereAppend) {
  var newElement = document.createElement(nameElement);
  newElement.id = idName;
  newElement.innerText = text;
  whereAppend.append(newElement);
};

function newElement(nameElement, idName, text, whereAppend) {
  var newElement = document.createElement(nameElement);
  newElement.id = idName;
  newElement.innerText = text;
  whereAppend.append(newElement);
}

//funkcja optymalizująca tworzenie inputów
function createNewInputAppend(nameElement, name, id, value, type, whereAppend) {
  var newElement = document.createElement(nameElement);
  newElement.type = type;
  newElement.name = name;
  newElement.id = id;
  newElement.value = value;
  whereAppend.append(newElement);
}

//funkcja klik dla pierwszego menu
module.exports.clickFirstMenu = function (element, element2, idElement, textElement) {
  element.on("click", function () {
    element2.children("p").remove();
    newElement("p", idElement, textElement, element2);
    element2.addClass("basicText medievalText");
  });
};

//funkcja optymalizująca wybieranie rasy i profesji
function clickRaceOccupation(element, text, number, sourceDescription, alert) {
  element.on("click", function () {
    hero.splice(number, 1, text);
    alert.addClass("greenText");
    $("#choosenDescription").text(sourceDescription);

    if (text === "wojownik") {
      choosenOccupation.splice(0, 1, 5);
      choosenOccupation.splice(1, 1, 5);
      choosenOccupation.splice(2, 1, 0);
      choosenOccupation.splice(3, 1, 0);
      choosenOccupation.splice(4, 1, 0);
    } else if (text === "złoczyńca") {
      choosenOccupation.splice(0, 1, 0);
      choosenOccupation.splice(1, 1, 0);
      choosenOccupation.splice(2, 1, 10);
      choosenOccupation.splice(3, 1, 0);
      choosenOccupation.splice(4, 1, 0);
    } else if (text === "czarodziej") {
      choosenOccupation.splice(0, 1, 0);
      choosenOccupation.splice(1, 1, 0);
      choosenOccupation.splice(2, 1, 0);
      choosenOccupation.splice(3, 1, 5);
      choosenOccupation.splice(4, 1, 5);
    } else if (text === "człowiek") {
      choosenRace.splice(0, 1, 0);
      choosenRace.splice(1, 1, 0);choosenRace.splice(2, 1, 0);
      choosenRace.splice(3, 1, 0);choosenRace.splice(4, 1, 0);
    } else if (text === "elf") {
      choosenRace.splice(0, 1, -5);
      choosenRace.splice(1, 1, -5);choosenRace.splice(2, 1, 0);
      choosenRace.splice(3, 1, 5);choosenRace.splice(4, 1, 5);
    } else if (text === "krasnolud") {
      choosenRace.splice(0, 1, 4);
      choosenRace.splice(1, 1, 4);choosenRace.splice(2, 1, 0);
      choosenRace.splice(3, 1, -2);choosenRace.splice(4, 1, -3);
    } else if (text === "ork") {
      choosenRace.splice(0, 1, 5);
      choosenRace.splice(1, 1, 5);choosenRace.splice(2, 1, 0);
      choosenRace.splice(3, 1, -5);choosenRace.splice(4, 1, -5);
    }
  });
}

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
module.exports.equipOtherPL = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergamniny 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas", "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

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

/***/ }),
/* 6 */
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var workingFile = __webpack_require__(0);

module.exports.text = "Stoisz w swoim pokoju, w którym znajduje się tylko łóżko, szafa, mały stolik i drewniana skrzynia. Na stoliku leży zawniątko, które musisz oddać mnichowi w przygranicznej wiosce. Co robisz?";

//funkcje dla szafy
//funkcja zamykania szafy
function closeWardrobe(where) {
  var closeWardrobe = document.createElement("button");closeWardrobe.id = "closeWardrobe";closeWardrobe.innerText = "zamknij szafę";where.append(closeWardrobe);
}

//funkcja tworzenia przycisku zabierania płaszcza
function btnTakeCoat(where) {
  var takeCoat = document.createElement("button");takeCoat.id = "takeCoatWardrobe";takeCoat.innerText = "weź płaszcz";where.append(takeCoat);
}

//zamykanie szafy
module.exports.closeWardrobe = function () {
  $("#closeWardrobe").on("click", function () {
    $("#description").empty();
  });
};

//funkcja dla badania szafy
module.exports.wardrobe = function (sex, where, equip) {
  //gdy płaszcz jest ekwipunku
  if (equip.indexOf('płaszcz') !== -1) {
    if (sex === "kobieta") {
      where.text("Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłaś szafę. Jest pusta.");closeWardrobe(where);
    } else if (sex === "mężczyzna" || sex === "nie wiadomo") {
      where.text("Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłeś szafę. Jest pusta.");closeWardrobe(where);
    }
  }

  //gdy nie płaszcza w ekwipunku
  else {
      if (sex === "kobieta") {
        where.text("Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłaś szafę, w której wisi płaszcz.");btnTakeCoat(where);
        closeWardrobe(where);
      } else if (sex === "mężczyzna" || sex === "nie wiadomo") {
        where.text("Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłeś szafę, w której wisi płaszcz.");
        btnTakeCoat(where);closeWardrobe(where);
      }
    }
};

//zabieranie płaszcza
module.exports.takeCoat = function (equip) {
  $("#takeCoatWardrobe").on("click", function () {
    equip.push("płaszcz");$(this).remove();
  });
};

//funkcje dla skrzyni
//zamykanie skrzyni
module.exports.closeChest = function (where) {
  $("#closeChest").on("click", function () {
    $("#description").empty();
  });
};

//funkcja tworzenia przycisku zamykania skrzyni
function closeChest(where) {
  var closeChest = document.createElement("button");closeChest.id = "closeChest";closeChest.innerText = "zamknij skrzynię";where.append(closeChest);
}

//funkcja tworzenia przycisku zabierania złota
function btnTakeGold(where) {
  var takeGold = document.createElement("button");takeGold.id = "takeGoldChest";takeGold.innerText = "weź złoto";where.append(takeGold);
}

module.exports.chest = function (gold, where) {
  if (gold[0] == 0) {
    where.text("Niewielka drewniana skrzynia, bez żadnych żelaznych okuć. W środku znajduje się 12 sztuk złotych monet.");btnTakeGold(where);closeChest(where);

    $("#takeGoldChest").on("click", function () {
      gold.splice(0, 1, 12);$("#description").text("Niewielka drewniana skrzynia, bez żadnych żelaznych okuć. Jest pusta.");closeChest(where);$("#closeChest").on("click", function () {
        $("#description").empty();
      });$(this).remove();
    });
  } else if (gold[0] > 0) {
    where.text("Niewielka drewniana skrzynia, bez żadnych żelaznych okuć. Jest pusta.");closeChest(where);
  }
};

//funkcja rozglądania się po pokoju
module.exports.lookAround = function () {
  $("#description").text("Pokój jak pokój. Stół, łóżko, szafa, skrzynia.");
  setTimeout(function () {
    $("#description").empty();
  }, 7000);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//główny tekst opisu ulicy
module.exports.text = "Stoisz przed domem. Aby udać się do wyznaczonego celu, najlepiej zabrać się z jakąś karawaną. Idziesz w kierunku bramy miasta. Przy bramie znajduje się targ. To dobry czas i miejsce, aby uzupełnić zapasy na dalszą podróż.";

//tekst dla rozglądania się na ulicy
module.exports.lookAround = function () {
  $("#description").text("Typowa ulica dzielnicy Najemników, miasta Erharuf. Częściowo brukowana. Pobliskie budynki są niskie i drewniane, maksymalnie jednopiętrowe. Nic specjalnego.");
  setTimeout(function () {
    $("#description").empty();
  }, 11000);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//główny tekst opisu market
module.exports.market = "Stoisz na środku placu targowego. Wokół widzisz stragany, na których możesz kupić potrzebne rzeczy.";

//funkcja, która tworzy nowy element DOM
function createNewElementAppend(nameElement, idName, text, whereAppend, addedClass) {
  var newElement = document.createElement(nameElement);newElement.id = idName;newElement.innerText = text;whereAppend.append(newElement);newElement.classList.add(addedClass);newElement.classList.remove("undefined");
}

function buyItem(item, price, gold, equip) {
  if (gold[0] >= price) {
    equip.push(item);
    var newGold = gold[0] - price;
    var newGoldFixed = newGold.toFixed(2);
    gold.splice(0, 1, newGoldFixed);
    createNewElementAppend("p", "buyed", "kupiono: " + item, $("#alerts"));
    setTimeout(function () {
      $("#buyed").remove();
    }, 5000);
  } else {
    createNewElementAppend("p", "noGold", "brak złota", $("#alerts"));
    setTimeout(function () {
      $("#noGold").remove();
    }, 5000);
  }
}

//funkcja tworząca przyciski rzeczy, które można kupić
module.exports.btnsBuy = function (gold, equip) {
  $("#description").empty();
  createNewElementAppend("p", "buyItemMarket", "przedmioty do kupienia", $("#description"));
  createNewElementAppend("button", "tentM", "namiot - 5szt.", $("#description"));
  createNewElementAppend("button", "bagM", "torba - 1szt.", $("#description"));
  createNewElementAppend("button", "blanketM", "derka - 1szt.", $("#description"));
  createNewElementAppend("button", "lampM", "lampa - 1szt.", $("#description"));
  createNewElementAppend("button", "ropeM", "lina - 1szt.", $("#description"));
  createNewElementAppend("button", "foodM", "racja żyw. - 1szt.", $("#description"));
  createNewElementAppend("button", "daggerM", "sztylet - 8szt.", $("#description"));
  createNewElementAppend("button", "crossBowM", "kusza - 12szt.", $("#description"));
  createNewElementAppend("button", "saddleM", "siodło - 10szt.", $("#description"));
  createNewElementAppend("button", "woodenStickM", "drew. pałka - 4szt.", $("#description"));
  createNewElementAppend("button", "bucklerM", "puklerz - 12szt.", $("#description"));
  createNewElementAppend("button", "closeM", "zamknij", $("#description"));
  $("#closeM").on("click", function () {
    $("#description").empty();
  });

  //zdarzenia dla przycisków kupowania
  $("#tentM").on("click", function () {
    buyItem("namiot", 5, gold, equip);
  });
  $("#bagM").on("click", function () {
    buyItem("torba", 1, gold, equip);
  });
  $("#blanketM").on("click", function () {
    buyItem("derka", 1, gold, equip);
  });
  $("#lampM").on("click", function () {
    buyItem("lampa", 1, gold, equip);
  });
  $("#ropeM").on("click", function () {
    buyItem("lina", 1, gold, equip);
  });
  $("#foodM").on("click", function () {
    buyItem("racja żyw", 1, gold, equip);
  });
  $("#daggerM").on("click", function () {
    buyItem("sztylet", 8, gold, equip);
  });
  $("#crossBowM").on("click", function () {
    buyItem("namiot", 10, gold, equip);
  });
  $("#saddleM").on("click", function () {
    buyItem("siodło", 12, gold, equip);
  });
  $("#woodenStickM").on("click", function () {
    buyItem("drew. pałka", 4, gold, equip);
    $("#bucklerM").on("click", function () {
      buyItem("puklerz", 12, gold, equip);
    });
  });
};

//funkcja tworząca przyciski rzeczy, które można sprzedać
module.exports.btnsSell = function (gold, equip) {
  $("#description").empty();
  createNewElementAppend("p", "sellItemMarket", "przedmioty do sprzedania", $("#description"));
  for (var i = 0; i < equip.length; i++) {
    createNewElementAppend("button", equip[i], equip[i], $("#description"), "btnsSellGreen");

    document.querySelectorAll("#description button")[i].onclick = function () {
      var newGold = gold[0] + 0.35;
      gold.splice(0, 1, newGold);

      var thisText = $(this).text();
      if (equip.indexOf(thisText) !== -1) {
        equip.splice(equip.indexOf(thisText), 1);
      }

      createNewElementAppend("p", "itSell", "sprzedano: " + thisText + " za 0,35 szt. zł.", $("#alerts"));
      $(this).remove();

      setTimeout(function () {
        $("#itSell").remove();
      }, 5000);
    };
  }

  createNewElementAppend("button", "closeM", "zamknij", $("#description"));
  $("#closeM").on("click", function () {
    $("#description").empty();
  });

  $("#paczka").prop("disabled", true).text("paczka");
  $("#paczka").addClass("redBtnPackage");
};

module.exports.marketToStreet = function () {
  $("#outRoom").show().text("ulica").toggleClass("streetMarket");
};

module.exports.marketToCaravans = function () {
  $("#caravans").show().text("karawany");
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createNewElementAppend(nameElement, idName, text, whereAppend, addedClass) {
  var newElement = document.createElement(nameElement);
  newElement.id = idName;newElement.innerText = text;
  whereAppend.append(newElement);newElement.classList.add(addedClass);
  newElement.classList.remove("undefined");
}

module.exports.text = "Idziesz w kierunku głównej bramy. Mijasz ludzi, zwierzęta i taplające się w błocie dzieci. Gdy dochodzisz do bramy robi się coraz tłoczniej. Przez bramę przejeżdżają wozy, ludzie łażą w każdą stronę, wartownicy na murach ziewają z nudów. W końcu udało się wyjść z miasta. Przed sobą widzisz wielki plac, na którym jakaś karawana szykuje się właśnie do odjazdu. Może warto spytać się, czy jedzie do przygranicznej wioski?";

var answer = "Podchodzisz bliżej. Widzisz postać krasnoluda, który wydziera się w niebo głosy i pogania wszystkich wokół. Gdy jesteś już blisko, pytasz: 'Mości krasnoludzie, czy ta karawana jedzie do wioski na pograniczu?' 'Że co? Aaaa... Tak! Jedziemy dalej, ale będziemy przez nią przejeżdżać. Jak chcesz się zabrać to musisz się pospiesz z wsiadaniem. Na ostatnim wozie jest jeszcze trochę miejsca.'- odpowiedział i wrócił do swoich obowiązków.";

module.exports.ask = function () {
  createNewElementAppend("button", "ask", "zapytaj", $("#btnsP1"));
};

module.exports.answerAsk = function () {
  $("#ask").on("click", function () {
    $("#description").text(answer);
  });
};

module.exports.street = function () {
  $("#outRoom").show().text("ulica").toggleClass("streetMarket");
};

module.exports.market = function () {
  $("#marketPlace").show();
};

module.exports.agree = function () {
  createNewElementAppend("button", "agree", "zgódź się", $("nav"));
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var firstFight = __webpack_require__(1);

//tekst startu podróży
var text = "Na ostatnim wozie okazało się, że jest jeszcze sporo miejsca, dzięki czemu będzie można podróżować dość wygodnie. Po kilkunastu minutach karawana ruszyła...";

module.exports.startVoyageText = function () {
	$("#textP").append(text);
};

module.exports.further = function () {
	$("#further").on("click", function () {
		$("#textP").empty();
		$("#further").hide();
		$("#voyage").show();
		firstFight.firstFight();
	});
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import funkcji z pliku zewnętrznego
var functions = __webpack_require__(3); //podstawowe funkcje

//funkcja tytuły gry
module.exports.gameTitle = function () {
  //utworzenie paragarafów dla tytułu gry
  functions.newElement("p", "titleGameHeader", "AUDACES", $("header"));
  functions.newElement("p", "subTitleGameHeader", "serce ze stali", $("#titleGameHeader"));

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
    $("#info, #licence, #tutorial, #newGame").fadeIn(1500).addClass("basicBtn");
    $("#info").addClass("btnInfo");
    $("#licence").addClass("btnLicence");
    $("#tutorial").addClass("btnTutorial");
    $("#newGame").addClass("btnNewGame");
    functions.newElement("p", "textHello", textHello, $("#mainPart"));
    $("#textHello").addClass("basicText medievalText");
  }, 20000);
};

//utworzenie przycisków pierwszego menu
module.exports.btnsFirstMenu = function () {
  functions.newElement("button", "info", "info", $("nav"));
  functions.newElement("button", "licence", "licencja", $("nav"));
  functions.newElement("button", "tutorial", "tutorial", $("nav"));
  functions.newElement("button", "newGame", "Nowa Gra", $("nav"));
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
};

/***/ })
/******/ ]);