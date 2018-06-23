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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var intro = __webpack_require__(2);
var heroCreator = __webpack_require__(3);

document.addEventListener("DOMContentLoaded", function () {
	console.log("NIEWIERNE PSY RULEZ!!!!");

	//funkcja, która tworzy nowy element DOM
	function createNewElementAppend(nameElement, idName, text, whereAppend, addedClass) {
		var newElement = document.createElement(nameElement);
		newElement.id = idName;
		newElement.innerText = text;
		whereAppend.append(newElement);
		newElement.classList.add(addedClass);
		newElement.classList.remove("undefined");
	}

	//funkcja optymalizująca tworzenie inputów
	function createNewInputAppend(nameElement, name, id, value, type, whereAppend, addedClass) {
		var newElement = document.createElement(nameElement);
		newElement.type = type;
		newElement.name = name;
		newElement.id = id;
		newElement.value = value;
		whereAppend.append(newElement);
		newElement.classList.add(addedClass);
		newElement.classList.remove("undefined");
	}

	//funkcja optymalizująca wybieranie rasy i profesji
	function clickRaceOccupation(element, text, number, sourceDescription, alert) {
		element.on("click", function () {
			hero.splice(number, 1, text);alert.addClass("greenText");
			$("#choosenDescription").text(sourceDescription);
		});
	}

	//utworzenie przycisków pierwszego menu
	createNewElementAppend("p", "titleGameHeader", "AUDACES", $("header"));
	createNewElementAppend("p", "subTitleGameHeader", "serce ze stali", $("#titleGameHeader"));
	createNewElementAppend("button", "info", "info", $("nav"));
	createNewElementAppend("button", "licence", "licencja", $("nav"));
	createNewElementAppend("button", "tutorial", "tutorial", $("nav"));
	createNewElementAppend("button", "newGame", "Nowa Gra", $("nav"));

	//utworzenie przycisków kreatora
	createNewElementAppend("button", "name", "imię", $("nav"));
	createNewElementAppend("button", "race", "rasa", $("nav"));
	createNewElementAppend("button", "occupation", "profesja", $("nav"));
	createNewElementAppend("button", "features", "cechy", $("nav"));
	createNewElementAppend("button", "features2", "cechy 2", $("nav"));
	createNewElementAppend("button", "equipment", "ekwipunek", $("nav"));
	createNewElementAppend("button", "skills", "umiejętności", $("nav"));
	createNewElementAppend("button", "infoCreator", "info", $("nav"));

	//tablice
	// tablica postaci 0 - imię, 1 - rasa, 2 - profesja
	var hero = [];

	//wylosowanych punktów cech 0 - siła, 1 - wytrzymałość, 2 - zręczność, 3 - inteligencja, 4 - charyzma
	var randomFeatures = [];

	//tablica dla wybieralnych cech postaci 0 - płeć, 1 - kolor włosów, 2 - kolor oczu, 3 - waga, 4 - wzrost, 5 - kolor skóry
	var choosenFeatures = [];

	//tablica ekwipunku max 5 elementów
	var equip = [];

	//tablica umiejętności max 3 elementy
	var skills = [];

	//showanie przycisków pierszego menu
	$("#info, #licence, #tutorial, #newGame, #titleGameHeader, #subTitleGameHeader").hide();

	//schowanie przycisków kreatora
	$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").hide();

	//schowanie i usunięcie nazwy studia oraz sentencji
	$("#studioTitle").fadeOut(6000);

	//pokazanie tytułu i podtytułu gry
	setTimeout(function () {
		$("#studioTitle h2").replaceWith("<p class='medievalText gameTitle'>Audaces</p>");
		$("#studioTitle h3").replaceWith("<p class='medievalText subGameTitle'>serce z żelaza</p>");
		$("#studioTitle").fadeIn(6000);
		$("#studioTitle").delay(2000).fadeOut(6000);
	}, 6200);

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
		createNewElementAppend("p", "textHello", intro.textHello, $("#mainPart"));
		$("#textHello").addClass("basicText");
	}, 20000);

	//funkcja klik dla pierwszego menu
	function clickFirstMenu(element, element2, idElement, textElement) {
		element.on("click", function () {
			element2.children("p").remove();createNewElementAppend("p", idElement, textElement, element2);element2.addClass("basicText");
		});
	}

	//funkcje dla pierwszego menu
	clickFirstMenu($("#info"), $("#mainPart"), "textElement", intro.textInfo);
	clickFirstMenu($("#licence"), $("#mainPart"), "textLicence", intro.textLicence);
	clickFirstMenu($("#tutorial"), $("#mainPart"), "textTutorial", intro.textTutorial);

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
					if (randomFeatures.length < 5) {
						$("#featuresAlert").addClass("redText");
					} else {
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
					choosenFeatures.splice(number, 1, text);
					if (choosenFeatures.length < 6) {
						$("#features2Alert").addClass("redText");
					} else if (choosenFeatures.length == 6) {
						$("#features2Alert").addClass("greenText");
					}
				});
			}

			//funkcje wyboru płci
			features2($("#features2MainWomen"), 0, "kobieta");
			features2($("#features2MainMen"), 0, "mężczyzna");
			features2($("#features2MainOther"), 0, "nie wiadomo");

			//elementy wyboru koloru włosów
			createNewElementAppend("p", "features2MainHair", "Kolor włosów", $("#features2Main"));
			createNewElementAppend("button", "features2MainBlond", "blond", $("#features2Main"));
			createNewElementAppend("button", "features2MainRed", "rude", $("#features2Main"));
			createNewElementAppend("button", "features2MainBlack", "czarne", $("#features2Main"));
			createNewElementAppend("button", "features2MainDyed", "farbowane", $("#features2Main"));

			$("#features2MainBlond, #features2MainRed, #features2MainBlack, #features2MainDyed").addClass("btnsFeatures2");

			//funkcje wyboru kolorów włosów
			features2($("#features2MainBlond"), 1, "blond");
			features2($("#features2MainRed"), 1, "rude");
			features2($("#features2MainBlack"), 1, "czarne");
			features2($("#features2MainDyed"), 1, "farbowane");

			//elementy wyboru koloru oczu
			createNewElementAppend("p", "features2MainEyes", "Kolor oczu", $("#features2Main"));
			createNewElementAppend("button", "features2MainHazel", "piwne", $("#features2Main"));
			createNewElementAppend("button", "features2MainGrey", "szare", $("#features2Main"));
			createNewElementAppend("button", "features2MainBrown", "brązowe", $("#features2Main"));
			createNewElementAppend("button", "features2MainBlue", "niebieskie", $("#features2Main"));

			$("#features2MainHazel, #features2MainGrey, #features2MainBrown, #features2MainBlue").addClass("btnsFeatures2");

			//funkcje wyboru koloru oczu
			features2($("#features2MainHazel"), 2, "piwne");
			features2($("#features2MainGrey"), 2, "szare");
			features2($("#features2MainBrown"), 2, "brązowe");
			features2($("#features2MainBlue"), 2, "niebieskie");

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
			features2($("#features2MainWhite"), 3, "biała");
			features2($("#features2MainBrownSkin"), 3, "brązowa");
			features2($("#features2MainBlack"), 3, "czarna");
			features2($("#features2MainRed"), 3, "czerwona");
			features2($("#features2MainYellow"), 3, "żółta");
			features2($("#features2MainGreen"), 3, "zielona");
			features2($("#features2MainTawny"), 3, "brunatna");
			features2($("#features2MainAzure"), 3, "błękitna");

			//elementy wyboru wagi
			createNewElementAppend("p", "features2MainWeight", "Waga", $("#features2Main"));
			createNewElementAppend("button", "features2MainUnderweight", "niedowaga", $("#features2Main"));
			createNewElementAppend("button", "features2MainNormalweight", "normalna", $("#features2Main"));
			createNewElementAppend("button", "features2MainOverweight", "nadwaga", $("#features2Main"));

			$("#features2MainUnderweight, #features2MainNormalweight, #features2MainOverweight").addClass("btnsFeatures2");

			//funkcje wyboru wagi
			features2($("#features2MainUnderweight"), 4, "niedowaga");
			features2($("#features2MainNormalweight"), 4, "normalna");
			features2($("#features2MainOverweight"), 4, "nadwaga");

			//elementy wyboru wzrostu
			createNewElementAppend("p", "features2MainGrowth", "Wzrost", $("#features2Main"));
			createNewElementAppend("button", "features2MainShort", "niski", $("#features2Main"));
			createNewElementAppend("button", "features2MainNormalGrowth", "normalny", $("#features2Main"));
			createNewElementAppend("button", "features2MainTall", "wysoki", $("#features2Main"));

			$("#features2MainShort, #features2MainNormalGrowth, #features2MainTall").addClass("btnsFeatures2");

			//funkcje wyboru wzrostu
			features2($("#features2MainShort"), 5, "niski");
			features2($("#features2MainNormalGrowth"), 5, "normalny");
			features2($("#features2MainTall"), 5, "wysoki");
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
						equip.push(whatPush);
						$("#alerts #equipmentAlert").removeClass("redText");$("#alerts #equipmentAlert").addClass("greenText");

						$("#btnToRemove").text(createNewElementAppend("button", whatPush, whatPush, $("#btnToRemove")));
						$("#btnToRemove").find("button").addClass("width15 bold");

						var allBtnRemove = document.querySelectorAll("#btnToRemove button"),
						    i = void 0;

						for (i = 0; i < allBtnRemove.length; i++) {
							allBtnRemove[i].addEventListener("click", function (e) {
								if (equip.indexOf(this.id) !== -1) {
									equip.splice(equip.indexOf(this.id), 1);
									this.remove();
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
				});
			}

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
			createNewElementAppend("button", heroCreator.equipArmorENG[1], heroCreator.equipArmorPL[1], $("#mainPart"), "bold");chooseItem($("#leather"), "skórzana");
			createNewElementAppend("button", heroCreator.equipArmorENG[2], heroCreator.equipArmorPL[2], $("#mainPart"), "bold");chooseItem($("#studded"), "ćwiekowana");

			//tarcze
			createNewElementAppend("p", "shieldTitle", "tarcze", $("#mainPart"), "bold");
			createNewElementAppend("button", heroCreator.equipShieldENG[0], heroCreator.equipShieldPL[0], $("#mainPart"), "bold");chooseItem($("#buckler"), "puklerz");
			createNewElementAppend("button", heroCreator.equipShieldENG[1], heroCreator.equipShieldPL[1], $("#mainPart"), "bold");chooseItem($("#smallWooden"), "mała drewniana");
			createNewElementAppend("button", heroCreator.equipShieldENG[2], heroCreator.equipShieldPL[2], $("#mainPart"), "bold");chooseItem($("#smallMetal"), "mała metalowa");

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

			$("#dagger, #woddenStick, #shortSword, #sabre, #spear, #slingshot, #bow, #gambison, #leather, #studded, #buckler, #smallWooden, #smallMetal, #stick, #moneyBag, #travelBag, #purse, #backpack, #canteen, #pot, #blanket, #tubeParchments, #penWriting, #parchments5pieces, #ordinaryClothing, #fussyHat, #coat, #leatherBelt, #needlesThread, #saddleCloth, #tent, #woodenBowl, #woodenSpoon, #torch, #oliveLamp, #oilLamp, #rope5m, #tinders").addClass("width15");

			//paragraf do wyświetlania opisu wybranego elementu ekwipunku
			createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));
			createNewElementAppend("p", "btnToRemoveTitle", "Przedmioty do usunięcia", $("#choosenDescription"));
			createNewElementAppend("p", "btnToRemove", "", $("#choosenDescription"));
			createNewElementAppend("p", "subAlert", "", $("#choosenDescription"));

			$("#btnToRemoveTitle").addClass("goldUnderline bold");
		}); //koniec zdarzeń dla kreatora postaci - ekipunku

		//początek zdarzeń dla przycisku umiejętności - kreator postaci
		$("#skills").on("click", function () {
			$("#mainPart").empty();

			//elementy wyboru umiejętności
			createNewElementAppend("p", "skillsTitle", heroCreator.skillsTitle, $("#mainPart"));
			$("#skillsTitle").addClass("goldUnderline basicText");
			createNewElementAppend("p", "skillsDescription", heroCreator.skillsDescription, $("#mainPart"));

			function chooseSkill(whatClick, whatPush) {
				whatClick.on("click", function () {
					if (skills.indexOf(whatPush) !== -1) {
						$("#subAlert").text("Nie możesz wybrać drugi raz tej samej umiejętności.").addClass("redText");
						setTimeout(function () {
							$("#subAlert").text("").removeClass("redText");
						}, 7000);
					} else if (skills.length <= 2) {
						skills.push(whatPush);
						$("#alerts #skillAlert").removeClass("redText");$("#alerts #skillAlert").addClass("greenText");
						$("#btnToRemove").text(createNewElementAppend("button", whatPush, whatPush, $("#btnToRemove")));
						$("#btnToRemove").find("button").addClass("width15 bold");

						var allBtnRemove = document.querySelectorAll("#btnToRemove button"),
						    i = void 0;

						for (i = 0; i < allBtnRemove.length; i++) {
							allBtnRemove[i].addEventListener("click", function (e) {
								if (skills.indexOf(this.id) !== -1) {
									skills.splice(skills.indexOf(this.id), 1);
									this.remove();
								}
								if (skills.length === 0) {
									$("#alerts #skillAlert").removeClass("greenText");$("#alerts #skillAlert").addClass("redText");
								} else if (skills.length < 3) {
									$("#subAlert").text("").removeClass("redText");
								}
							});
						}
					} else {
						$("#subAlert").text("Już zostały wybrane trzy umiejętności.").addClass("redText");
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
			createNewElementAppend("button", heroCreator.warriorENG[6], heroCreator.warriorPL[6], $("#mainPart"), "bold");chooseSkill($("#buckler"), "puklerz");
			createNewElementAppend("button", heroCreator.warriorENG[7], heroCreator.warriorPL[7], $("#mainPart"), "bold");chooseSkill($("#smallWoodenShield"), "mała tarcza drew.");
			createNewElementAppend("button", heroCreator.warriorENG[8], heroCreator.warriorPL[8], $("#mainPart"), "bold");chooseSkill($("#smallMetalShield"), "mała tarcza metal.");

			//umiejętności złoczyńca
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

			// cżęść do usuwania wybranej umiejętności i komunikacji o błędzie
			createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));
			createNewElementAppend("p", "btnToRemoveTitle", "Przedmioty do usunięcia", $("#choosenDescription"));
			createNewElementAppend("p", "btnToRemove", "", $("#choosenDescription"));
			createNewElementAppend("p", "subAlert", "", $("#choosenDescription"));

			$("#btnToRemoveTitle").addClass("goldUnderline bold");
		}); //koniec zdarzeń dla kreatora postaci - umiejętności

		//zdarzenia dla przycisku info - w kreatorze postaci
		$("#infoCreator").on("click", function () {
			console.log(skills);
		}); //koniec zdarzeń dla przycisku info - w kreatorze postaci
	}); //koniec przycisku nowa gra (newGame)
}); //koniec DOMContentLoaded

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//tekst powitalny
module.exports.textHello = "Witaj w grze 'Audaces - serce z żelaza', pierwszej grze tekstowej Niewiernych Psów. Poniżej znajdują się cztery przyciski, dzięki którym poznasz podsatwowe informacje o Niewiernych Psach, licencji gry, jsamouczka obsługi interfejsu gry oraz rozpoczniesz grę AUDACES - serce z żelaza. Także tego. Studio Niewiernych Psów, życzy miłej zabawy.";

//tekst dla informacji w menu pierwszym
module.exports.textInfo = "Ta wersja gry została stworzona jako poprawiona wersja, projektu końcowego kursu front'endowego, a także jako modernizacja tej samej gry sprzed kursu. Gra ma także na celu przetestowanie mechaniki 'papierowej' wersji systemu gry Audaces. Projekt będzie rozwijalny także po skończeniu kursu. Wszystkie wersje tej gry zostały wydane przez niezależne studio Niewierne Psy. Gra powstała dzięki użytym technologiom: HTML5, SASS, jQuery, EcmaScript 6. Fonty pobrane z: fonts.google.com/.";

//tekst dla licencji
module.exports.textLicence = "UMOWA LICENCYJNA UŻYTKOWNIKA APLIKACJI AUDACES (oraz wszystkich jego wesji). POSIADAJĄC APLIKACJĘ AKCEPTUJESZ PONIŻSZE WARUNKI LICENCJI. Autor informuje, iż zawarte treści w aplikacji mogą być niestosowne dla osób niepełnoletnich, o innym światopoglądzie lub wyznawanej religii. Użytkownik używa aplikację na własne ryzyko. Twórca tej aplikacji infourmuje, iż aplikacja ta została stowrzona w celach hobbystycznych oraz w celu nauki programowania. Aplikacja ta może zawierać błędy, które niekoniecznie muszą być poprawione. Autor nie udziela żadnych gwarancji, obietnic oraz zapewnień na tą aplikację (i jej wersje) i nie odpowiada za błędne działanie lub użytkowanie programu. Autor aplikacji nie bierze na siebie żadnych reklamacji w sprawie wadliwego działania programu oraz nie poczuwa się do zadość uczynienia za spowodowane szkody. Prawa autorskie należą do Szymona Cendeckiego. Audaces jest rozprowadzany na zasadzie FREEWARE czyli: użytkownik dostaje aplikację za darmo, nie może w żaden sposób zmieniać aplikacji, może wykorzystywać aplikację na własny użytek, zabrnia się wykorzystywać aplikację w celach komercyjnych, zabrania się ujawniania kodu źródłowego.";

//tekst dla tutorialu
module.exports.textTutorial = "Początek gry. Ekran składa się z powitania oraz czterech przycisków. Po wciśnięciu przycisku Info, Licencja lub Tutorial obok pojawi się odpowiednia informacja. Po wciśnięciu przycisku Nowa gra, użytkownik rozpocznie grę. Po rozpoczęciu gry, użytkownik będzie mógł stworzyć swoją. Po stworzeniu postaci, użytkownik przejdze do gry. Ekran będzie podzielony na część z przyciskami, główną, w której będzie rozgrywała się gra oraz na część z komunikatami. Część z przyciskami będzie posiadała przyciski umożliwiające dostęp do cech postaci, ekwipunku, umiejętności itd. oraz do opcji, które będzie mógł wybrać w trakcie gry. W głównej części pojawi się główna gra. Na jej podstawie gracz będzie mógł dokonywać wyborów z listy przycików. W części komunikatów będą pojawiać się komunikaty dotyczące podjętych działań.";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//----------------------------------------tablice dla wybierania ekwipunku ----------------------------------------//
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

//---------------------------------------------tablice dla wybierania umiejętności --------------------------------------------//
//umiejętności dla wojownika
module.exports.warriorPL = ["szt.przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

module.exports.warriorENG = ["survival", "discipline", "argumentation", "impactShield", "horsebackRiding", "dagger", "shortSword", "sabre", "spear", "bow", "buckler", "smallWoodenShield", "smallMetalShield"];

//umiejętności dla złoczyńcy
module.exports.criminalPL = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drewniana pałka"];

module.exports.criminalENG = ["poison", "climb", "acting", "acrobatics", "traps", "sneak", "theft", "dodge", "bluff", "woddenStick"];

//umiejętności dla czarodzieja
module.exports.wizardPL = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];

module.exports.wizardENG = ["writingRead", "summonOvertake", "divination", "healing", "castSpell", "createPotion", "createMagItem", "createBalm", "createRunes", "astrology", "herbalism"];

//-----------------------------------------Imię------------------------------------------------------------//
//tekst dla wyboru imienia
module.exports.nameTitle = "Wybór imienia.";
module.exports.nameDescription = "Wpisz w pole niżej swoje imię oraz wciśnij przycisk 'zatwierdź'. Możesz wpisać tylko litery, cyfry nie będą barne pod uwagę. Imię można zmieniać dowolną ilość razy.";

//tekst dla alertu wyboru imienia
module.exports.nameAlert = "Wybierz imię.";

//-------------------------------------------RASA--------------------------------------------------------//
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

//--------------------------------------PROFESJA--------------------------------------------------------------//
//tekst dla wyboru profesji
module.exports.occupationTitle = "Wybór profesji.";
module.exports.occupationDescription = "Poniżej znajdują się trzy przyciski. Dzięki nim wybierzesz profesję, która Cię interesuje. Po klinkięciu w przycisk pojawi się krótki opis wybranej profesji.";

//opis wybranych ras
module.exports.warrior = "Wojownicy to specjaliści we władaniu każdą bronią białą bronią. Są podstawą wszystkich armii świata, ale także mogą podróżwać samotni lub w niewielkich grupach. Wielu idących drogą wojownika zdobyło sławę w bitwach czy pogromcy smoków. Będąc wojownikiem zwiedzisz świat.";

module.exports.criminal = "Trucizny. Pułapki. Skrytobójstwo. To wszystko i wiele innych rzeczy zapewni Tobie droga złoczyńcy. Już w każdym mniejszym miasteczku, są odpowiednie organizacje, które wyszkolą Cię na nieustraszonego rzezimieszka.";

module.exports.wizard = "Czarodziej to brzmi dumnie. Po wielu latach spędzonych na nauce. Będzie wzbudzał szacunek swoją tylko osobą, a wrogowie będą uciekać w panice przed Twoimi kulami ognia.";

//tekst dla wyboru profesji
module.exports.occupationAlert = "Wybierz profesję.";

//---------------------------CECHY część I -LOSOWANIE CECH------------------------------------------------------//
module.exports.featuresTitle = "Losowanie cech.";
module.exports.featuresDescription = "Poniżej znajduje się pięć przycisków, dzięki którym wylosujesz wysokość cech, które będą odzwierciedlały fizyczne i psychiczne atrybuty Twojej postaci.";

//tekst dla losowania cech
module.exports.featuresAlert = "Wylosuj cechy.";

//---------------------------WYBÓR CECH część II---------------------------------------------------------------//
module.exports.features2Title = "Wybór cech.";
module.exports.features2Description = "W tej części kreatora należy wybrać płeć, kolor włosów, oczu, skóry, wagę i wzrost. Poniżej są przyciski dzięki, którym należy to zrobić.";

//tekst dla wybierania cech
module.exports.features2Alert = "Wybierz cechy.";

//------------------------------WYBÓR EKWIPUNKU-----------------------------------------------------------------//
module.exports.equipmentTitle = "Wybór ekwipunku.";
module.exports.equipmentDescription = "Ta część podzielona jest zasadniczo na dwie części. W pierwszej możesz wybrać (w sumie) pięć rzeczy z kategorii: broń, zbroje, tarcze i inne. W drugiej części dzięki przyciskom, będzie można usunąć wcześniej wybrane przedmioty.";

//tekst dla wybierania cech
module.exports.equipmentAlert = "Wybierz ekwipunek.";

//-----------------------------WYBÓR UMIEJĘTNOŚCI--------------------------------------------------------------------//
module.exports.skillsTitle = "Wybór umiejętności";
module.exports.skillsDescription = "Ta część podzielona jest zasadniczo na dwie części. W pierwszej możesz wybrać (w sumie) 3 umiejętności z kategorii: wojownik, złoczyńca i czarodziej. W drugiej części dzięki przyciskom, będzie można usunąć wcześniej wybrane umiejętności.";

module.exports.skillsAlert = "Wybierz umiejętności";

/***/ })
/******/ ]);