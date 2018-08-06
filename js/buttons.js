//import funkcji z pliku zewnętrznego
let functions = require("./functions.js"); //podstawowe funkcje

//przyciski pierwszego menu
module.exports.firstMenuBtns = function(){
  functions.newElement("button", "info", "info", $("#mainBtns"));
  functions.newElement("button", "licence", "licencja", $("#mainBtns"));
  functions.newElement("button", "tutorial", "tutorial", $("#mainBtns"));
  functions.newElement("button", "newGame", "Nowa Gra", $("#mainBtns"));
}
