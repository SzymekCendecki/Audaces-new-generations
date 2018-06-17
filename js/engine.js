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
		function createNewElementAppend(nameElement, idName, text, whereAppend) {
				var newElement = document.createElement(nameElement);
				newElement.id = idName;
				newElement.innerText = text;
				whereAppend.append(newElement);
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
		// tablica postaci 0 - imię, 1 - rasa, 2 - profesja, 3 - siła, 4 - wytrzymałość, 5 - zręczność, 6 - inteligencja, 7 - charyzma, 8 - płeć, 9 - kolor włosów, 10 - kolor oczu, 11 - waga, 12 - wzrost, 13 - kolor skóry
		var hero = [];

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

		//funkcje dla pierwszego menu
		$("#info").on("click", function () {
				$("#mainPart").children("p").remove();
				createNewElementAppend("p", "textInfo", intro.textInfo, $("#mainPart"));
				$("#textInfo").addClass("basicText");
		});

		$("#licence").on("click", function () {
				$("#mainPart").children("p").remove();
				createNewElementAppend("p", "textLicence", intro.textLicence, $("#mainPart"));
				$("#textLicence").addClass("basicText");
		});

		$("#tutorial").on("click", function () {
				$("#mainPart").children("p").remove();
				createNewElementAppend("p", "textTutorial", intro.textTutorial, $("#mainPart"));
				$("#textTutorial").addClass("basicText");
		});

		//przycisk nowej gry - tworzenie kretora postaci
		$("#newGame").on("click", function () {
				$("#mainPart").empty();
				$("#info, #licence, #tutorial, #newGame").fadeOut();
				$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").fadeIn();
				$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").addClass("basicBtn");

				//tworzenie czerwonych paragrafów w części alertowej - zmieniają kolor na zielony po wybraniu
				createNewElementAppend("p", "nameAlert", heroCreator.nameAlert, $("#alerts"));
				createNewElementAppend("p", "raceAlert", heroCreator.raceAlert, $("#alerts"));
				createNewElementAppend("p", "occupationAlert", heroCreator.occupationAlert, $("#alerts"));
				createNewElementAppend("p", "featuresAlert", heroCreator.featuresAlert, $("#alerts"));
				$("#nameAlert, #raceAlert, #occupationAlert, #featuresAlert").addClass("redText");

				//zdarzenia dla przycisku imię (name)
				$("#name").on("click", function () {
						$("#mainPart").empty();
						createNewElementAppend("p", "nameTitle", heroCreator.nameTitle, $("#mainPart"));
						$("#nameTitle").addClass("goldUnderline basicText");
						createNewElementAppend("p", "nameDescription", heroCreator.nameDescription, $("#mainPart"));
						createNewElementAppend("input", "giveName", "", $("#mainPart"));
						createNewElementAppend("button", "acceptName", "zatwierdź", $("#mainPart"));
						$("#acceptName").on("click", function () {
								var nameInput = $("#giveName").val().replace(/\d/g, '');
								if (nameInput == "") {
										$("#nameAlert").addClass("redText");
								} else {
										hero.splice(0, 1, nameInput);
										$("#nameAlert").addClass("greenText");
								}
						});
				}); //koniec zdarzeń dla przycisku imię

				//zdarzenia dla przyciku rasa (race)
				$("#race").on("click", function () {
						$("#mainPart").empty();
						createNewElementAppend("p", "raceTitle", heroCreator.raceTitle, $("#mainPart"));
						$("#raceTitle").addClass("goldUnderline basicText");
						createNewElementAppend("p", "raceDescription", heroCreator.raceDescription, $("#mainPart"));
						createNewElementAppend("button", "human", "człowiek", $("#mainPart"));
						createNewElementAppend("button", "elv", "elf", $("#mainPart"));
						createNewElementAppend("button", "dwarf", "krasnolud", $("#mainPart"));
						createNewElementAppend("button", "orc", "ork", $("#mainPart"));
						$("#human, #elv, #dwarf, #orc").addClass("basicBtn");
						createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

						$("#human").on("click", function () {
								hero.splice(1, 1, "człowiek");
								$("#raceAlert").addClass("greenText");
								$("#choosenDescription").text(heroCreator.human);
						});

						$("#elv").on("click", function () {
								hero.splice(1, 1, "elf");
								$("#raceAlert").addClass("greenText");
								$("#choosenDescription").text(heroCreator.elv);
						});

						$("#dwarf").on("click", function () {
								hero.splice(1, 1, "krasnolud");
								$("#raceAlert").addClass("greenText");
								$("#choosenDescription").text(heroCreator.dwarf);
						});

						$("#orc").on("click", function () {
								hero.splice(1, 1, "ork");
								$("#raceAlert").addClass("greenText");
								$("#choosenDescription").text(heroCreator.orc);
						});
				}); //koniec zdarzeń dla przycisku rasa

				//zdarzenia dla przyciku profesja (occupation)
				$("#occupation").on("click", function () {
						$("#mainPart").empty();
						createNewElementAppend("p", "occupationTitle", heroCreator.occupationTitle, $("#mainPart"));
						$("#occupationTitle").addClass("goldUnderline basicText");
						createNewElementAppend("p", "occupationDescription", heroCreator.occupationDescription, $("#mainPart"));
						createNewElementAppend("button", "warrior", "wojownik", $("#mainPart"));
						createNewElementAppend("button", "criminal", "złoczyńca", $("#mainPart"));
						createNewElementAppend("button", "wizard", "czarodziej", $("#mainPart"));
						$("#warrior, #criminal, #wizard").addClass("basicBtn");
						createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

						$("#warrior").on("click", function () {
								hero.splice(2, 1, "wojownik");
								$("#occupationAlert").addClass("greenText");
								$("#choosenDescription").text(heroCreator.warrior);
						});

						$("#criminal").on("click", function () {
								hero.splice(2, 1, "złoczyńca");
								$("#occupationAlert").addClass("greenText");
								$("#choosenDescription").text(heroCreator.criminal);
						});

						$("#wizard").on("click", function () {
								hero.splice(2, 1, "czarodziej");
								$("#occupationAlert").addClass("greenText");
								$("#choosenDescription").text(heroCreator.wizard);
						});
				}); //koniec zdarzeń dla przycisku profesja

				//przycisk cech część piewrsza - wybieranie siły, wytrzymałości, zręczności, inteligencji i charyzmy
				$("#features").on("click", function () {
						$("#mainPart").empty();
						createNewElementAppend("p", "featuresTitle", heroCreator.featuresTitle, $("#mainPart"));
						$("#feautresTitle").addClass("goldUnderline basicText");
						createNewElementAppend("p", "featuresDescription", heroCreator.featuresDescription, $("#mainPart"));
						createNewElementAppend("button", "force", "siła", $("#mainPart"));
						createNewElementAppend("button", "strength", "wytrzymałość", $("#mainPart"));
						createNewElementAppend("button", "dexterity", "zręczność", $("#mainPart"));
						createNewElementAppend("button", "intelligence", "inteligencja", $("#mainPart"));
						createNewElementAppend("button", "charisma", "charyzma", $("#mainPart"));
						$("#force, #strength, #dexterity, #intelligence, #charisma").addClass("basicBtn");
						createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

						$("#force").on("click", function () {
								var randomForcePoints = Math.round(Math.random() * 50);
								hero.splice(3, 1, randomForcePoints);
								$("#choosenDescription").text(heroCreator.force);
						});

						$("#strenght").on("click", function () {
								var randomStrengthPoints = Math.round(Math.random() * 50);
								hero.splice(4, 1, randomStrengthPoints);
								$("#choosenDescription").text(heroCreator.strength);
						});

						$("#dexterity").on("click", function () {
								var randomDexterityPoints = Math.round(Math.random() * 50);
								hero.splice(5, 1, randomDexterityPoints);
								$("#choosenDescription").text(heroCreator.dexterity);
						});

						$("#intelligence").on("click", function () {
								var randomIntelligencePoints = Math.round(Math.random() * 50);
								hero.splice(6, 1, randomIntelligencePoints);
								$("#choosenDescription").text(heroCreator.intelligence);
						});

						$("#charisma").on("click", function () {
								var randomCharismaPoints = Math.round(Math.random() * 50);
								hero.splice(7, 1, randomCharismaPoints);
								$("#choosenDescription").text(heroCreator.charisma);
						});
				}); //koniec zdarzeń dla przycisku cech (features) - siły, wytrzymałości, zręczności inteligencji i charyzmy
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

//---------------------------------------LOSOWANIE CECH-------------------------------------------------------//
module.exports.featuresTitle = "Losowanie cech.";
module.exports.featuresDescription = "Poniżej znajduje się pięć przycisków, dzięki którym wylosujesz wysokość cech, które będą odzwierciedlały fizyczne i psychiczne atrybuty Twojej postaci.";

//tekst dla losowania cech
module.exports.featuresAlert = "Wylosuj cechy.";

/***/ })
/******/ ]);