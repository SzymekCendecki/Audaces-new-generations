let heroCreator = require("./heroCreator.js");
let room = require("./room.js");

module.exports.showBtns = function(){
  $("#lookAroundStreet, #inRoom, #toCaravans, #toMarket").show();
  $("#lookAroundStreet, #inRoom, #toCaravans, #toMarket").addClass("basicBtn");
  $("#inRoom, #toCaravans, #toMarket").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#lookAroundStreet").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
}

module.exports.textStreet = function(){
  //główny tekst opisowy dla paragrafu - ulica - paragraf drugi
  $("#mainPart").html("<div class='basicText medievalText'>Stoisz przed domem. Aby udać się do wyznaczonego celu, najlepiej zabrać się z jakąś karawaną. Idziesz w kierunku bramy miasta. Przy bramie znajduje się targ. To dobry czas i miejsce, aby uzupełnić zapasy na dalszą podróż. Co robisz?</div><div id='description'></div>");
}

module.exports.lookAroundStreet = function(){
  $("#description").html("<p class='basicText medievalText'>Typowa ulica dzielnicy Najemników, miasta Erharuf. Częściowo brukowana. Pobliskie budynki są niskie i drewniane, maksymalnie jednopiętrowe. Nic specjalnego.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", ()=>{ $("#description").empty(); });
}
