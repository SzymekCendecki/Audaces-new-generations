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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import z plików zewnętrznych
var functions = __webpack_require__(0); //podstawowe funkcje
var introFirstMenu = __webpack_require__(5); //plik z częścią intro oraz pierwszym menu
var heroCreator = __webpack_require__(6);
var introGame = __webpack_require__(7);

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
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import funkcji z pliku zewnętrznego
var functions = __webpack_require__(0); //podstawowe funkcje
var heroCreator = __webpack_require__(6); //plik tworzenia postaci

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import funkcji z pliku zewnętrznego
var functions = __webpack_require__(0); //podstawowe funkcje

//utworzenie przycisków wylosuj i wybierz postać
module.exports.randomChooseHeroBtns = function () {
  functions.newElement("button", "randomHero", "wylosuj", $("#mainBtns"));
  functions.newElement("button", "chooseHero", "wybierz", $("#mainBtns"));

  $("#randomHero, #chooseHero").addClass("basicBtn medievalText btnNewGame");
};

///utworzenie paragrafu z opisem przycisków wylosuj i wybierz.
module.exports.textDescription = function () {
  $("#mainPart").html("<p id='text'>Zanim zaczniesz grę, muszisz stworzyć swoją postać. Można to zrobić na dwa sposoby. Pierwszy to wylosowanie protagonisty. Jest to sposób całkowice automatyczny i wystarczy wcisnąć przycisk <span class='blueText'>'losuj'</span>. Drugim sposobem na stworzenie własnej postaci jest jej własnoręczne utworzenie za pomocą kreatora postaci. W tym celu należy wcisnąć przycisk <span class='blueText'>'wybierz'</span>. Co robisz?</p>");

  $("#text").addClass("basicText medievalText");
};

/***/ }),
/* 7 */
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