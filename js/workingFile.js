//import z plików zewnętrznych
let functions = require("./functions.js"); //podstawowe funkcje
let introFirstMenu = require("./introFirstMenu.js"); //plik z częścią intro oraz pierwszym menu
let heroCreator = require("./heroCreator.js");
let introGame = require("./introGame.js");

document.addEventListener("DOMContentLoaded", () => { console.log("NIEWIERNE PSY RULEZ!!!!");

//intro i pierwsze menu
	introFirstMenu.gameTitle();

//przejście z nazwy gry do pierwszego toFirstMenu
	introFirstMenu.toFirstMenu();

//utworzenie przycisków pierwszego menu
	introFirstMenu.btnsMenuFirst();

//funkcje zdarzeń (kliknięcia w przyciski) dla pierwszego menu
	introFirstMenu.clicksFirstMenu();

});//koniec DOMContentLoaded
