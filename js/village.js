let heroCreator = require("./heroCreator.js");
let functions = require("./functions.js"); //podstawowe funkcje

module.exports.arriveVillage = function(){
  //główny tekst opisowy dla paragrafu dojazd do wioski
  $("#mainPart").empty();
  $("#toVillage2").hide();
  $("#enterVillage, #outVillageLookAround").show().addClass("basicBtn");
  $("#enterVillage").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#outVillageLookAround").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
  $("#mainPart").html("<div class='basicText medievalText'>Po trzech dniach podróży dojeżdżacie w spokoju do przygranicznej wioski. Celu Twojej podróży. Co robisz?</div><div id='description'></div>");
}
