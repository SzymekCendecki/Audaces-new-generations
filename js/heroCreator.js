//import funkcji z pliku zewnętrznego
let functions = require("./functions.js"); //podstawowe funkcje

//utworzenie przycisków wylosuj i wybierz postać
module.exports.randomChooseHeroBtns = function(){
  functions.newElement("button", "randomHero", "wylosuj", $("#mainBtns"));
  functions.newElement("button", "chooseHero", "wybierz", $("#mainBtns"));

  $("#randomHero, #chooseHero").addClass("basicBtn medievalText btnNewGame");
}

///utworzenie paragrafu z opisem przycisków wylosuj i wybierz.
module.exports.textDescription = function(){
  $("#mainPart").html("<p id='text'>Zanim zaczniesz grę, muszisz stworzyć swoją postać. Można to zrobić na dwa sposoby. Pierwszy to wylosowanie protagonisty. Jest to sposób całkowice automatyczny i wystarczy wcisnąć przycisk <span class='blueText'>'losuj'</span>. Drugim sposobem na stworzenie własnej postaci jest jej własnoręczne utworzenie za pomocą kreatora postaci. W tym celu należy wcisnąć przycisk <span class='blueText'>'wybierz'</span>. Co robisz?</p>");

  $("#text").addClass("basicText medievalText");
}
