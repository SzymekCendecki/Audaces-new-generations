let heroCreator = require("./heroCreator.js");
let functions = require("./functions.js"); //podstawowe funkcje


module.exports.textCaravans = function(){
  //główny tekst opisowy dla paragrafu - karawany - paragraf postoju karawan
  $("#mainPart").html("<div class='basicText medievalText'>Jedziecie sobie spokojnie. Czas mija na oglądaniu pejzaży z jadącego wozu. Niestety ta sielanka skończyła się wieczorem drugiego dnia. Zaczęło się od zawalonej, przez drzewa drogi. Gdy uczestnicy, z pierwszych wozów karawany uprzątali drzewa, nastąpił atak. Wszyscy muszą walczyć!. Ciebie atakuje jeden bandyta z wielkim mieczem. <span class='normalText italic'>Po lewej stronie znajduje się przycisk <span class='blueText boldText'>'przygotuj się'</span>, aby wybrać ekwipunek.</span></div><div id='description'></div>");

  $("#toVillage, #prepare").show().addClass("basicBtn medievalText shadowForBtn marginTop4");
  $("#toVillage").addClass("bckgRed");
  $("#toVillage").prop("disabled", true);
  $("#prepare").addClass("bckgGreen fontSize08em paddingUpDown1");
}
