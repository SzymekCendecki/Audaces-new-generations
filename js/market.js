let functions = require("./functions.js"); //podstawowe funkcje

module.exports.showBtns = function(){
  $("#lookAroundStreet, #toMarket, #inRoom, #lookAroundCaravans, #ask, #agree").hide();
  $("#buy, #sell, #lookAroundMarket, #toStreet, #toCaravans").show();

  $("#toStreet, #buy, #sell, #lookAroundMarket").addClass("basicBtn");
  $("#lookAroundMarket").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
  $("#buy, #toStreet").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#sell").addClass("bckgYellow medievalText marginTop4 shadowForBtn");
}

module.exports.textMarket = function(){
  //główny tekst opisowy dla paragrafu - karawany - paragraf postoju karawan
  $("#mainPart").html("<div class='basicText medievalText'>Stoisz na środku placu targowego. Wokół widzisz stragany, na których możesz kupić potrzebne rzeczy. Co robisz?</div><div id='description'></div>");
}
