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

  //showanie przycisków pierszego menu
  $("#info, #licence, #tutorial, #newGame, #titleGameHeader, #subTitleGameHeader").hide();

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
    $("#mainPart").children("p").remove();
    $("nav").children("button").remove();
    createNewElementAppend("button", "prev", "poprzedni", $("nav"));
    createNewElementAppend("button", "next", "następny", $("nav"));
    $("#prev, #next").addClass("basicBtn");
  });
});

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

/***/ })
/******/ ]);