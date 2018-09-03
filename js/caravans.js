module.exports.showBtns = function(){
  $("#inRoom, #toCaravans, #toMarket, #lookAroundStreet").hide();

    $("#toStreet, #toMarket, #lookAroundCaravans, #ask").show();

    $("#toStreet, #toMarket, #lookAroundCaravans, #ask").addClass("basicBtn");
    $("#lookAroundCaravans").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
    $("#ask, #toStreet").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
}

module.exports.textCaravans = function(){
  //główny tekst opisowy dla paragrafu - karawany - paragraf postoju karawan
  $("#mainPart").html("<div class='basicText medievalText'>Idziesz w kierunku głównej bramy. Mijasz ludzi, zwierzęta i taplające się w błocie dzieci. Gdy dochodzisz do bramy robi się coraz tłoczniej. Przez bramę przejeżdżają wozy, ludzie łażą w każdą stronę, wartownicy na murach ziewają z nudów. W końcu udało się wyjść z miasta. Przed sobą widzisz wielki plac, na którym jakaś karawana szykuje się właśnie do odjazdu. Może warto spytać się, czy jedzie do przygranicznej wioski? Co robisz?</div><div id='description'></div>");
}
