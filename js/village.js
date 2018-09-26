let heroCreator = require("./heroCreator.js");
let functions = require("./functions.js"); //podstawowe funkcje

module.exports.arriveVillage = function(){
  //główny tekst opisowy dla paragrafu dojazd do wioski
  $("#mainPart").empty();
  $("#toVillage2").hide();
  $("#enterVillage, #outVillageLookAround").show().addClass("basicBtn");
  $("#enterVillage").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#outVillageLookAround").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
  $("#mainPart").html("<div class='basicText medievalText'>Po trzech dniach, dotarliście już bez przeszkód do Przygranicznej wioski. Rozbiliście obozowisko, przy starym młynie. Zaciekawieni mieszkańcy wyszli ze swych chałup i obleźli karawanę. Co robisz?</div><div id='description'></div>");
}

module.exports.outVillageLookAround = function(){
  $("#description").html("<p class='basicText medievalText'>Wioska jest dość duża, składa się z prawie 40 chałup. Otoczona jest wałem ziemnym, z wbitymi w niego, zaostrzonymi palikami. To typowe umocnienie w tym rejonie. Przy rzece stoi stary młyn. Wokół wioski, jak okiem sięgnąć rozciągają się pola.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", ()=>{ $("#description").empty(); });
}
//#monk, #tavern, #lookAtVillage").hide();
module.exports.arriveVillage = function(){
  //główny tekst opisowy dla paragrafu dojazd do wioski
  $("#mainPart").empty();
  $("#enterVillage, #outVillageLookAround").hide();
  $("#monk, #tavern, #lookAtVillage").show().addClass("basicBtn");
  $("#monk, #tavern").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#lookAtVillage").addClass("bckgBlue medievalText marginTop4 shadowForBtn");
  $("#mainPart").html("<div class='basicText medievalText'>Stoisz na placu pośrodku wioski. Przed sobą widzisz kamienną karczmę. Po Twojej lewej stronie jest mały 'kościółek'. Pewnie tam jest mnich, któremu musisz odda paczkę. Co robisz?</div><div id='description'></div>");
}
