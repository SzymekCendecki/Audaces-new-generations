let functions = require("./functions.js"); //podstawowe funkcje

//tablica, która pomaga przy sprawdzaniu czy został wciśnięty przycisk zapytaj (ask)
let point = [0];

module.exports.showBtns = function(){
  if(point[0] == 0){
  $("#inRoom, #toCaravans, #toMarket, #lookAroundStreet, #buy, #sell, #lookAroundMarket").hide();
  $("#toStreet, #toMarket, #lookAroundCaravans, #ask").show();
  $("#toStreet, #toMarket, #lookAroundCaravans, #ask").addClass("basicBtn");
  $("#lookAroundCaravans").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
  $("#ask, #toStreet").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
}else{
  $("#inRoom, #toCaravans, #toMarket, #lookAroundStreet, #buy, #sell, #lookAroundMarket").hide();
  $("#toStreet, #toMarket, #lookAroundCaravans, #agree").show();
  $("#toStreet, #toMarket, #lookAroundCaravans, #agree").addClass("basicBtn");
  $("#lookAroundCaravans").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
  $("#ask, #toStreet").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
}
}

module.exports.textCaravans = function(){
  //główny tekst opisowy dla paragrafu - karawany - paragraf postoju karawan
  $("#mainPart").html("<div class='basicText medievalText'>Idziesz w kierunku głównej bramy. Mijasz ludzi, zwierzęta i taplające się w błocie dzieci. Gdy dochodzisz do bramy robi się coraz tłoczniej. Przez bramę przejeżdżają wozy, ludzie łażą w każdą stronę, wartownicy na murach ziewają z nudów. W końcu udało się wyjść z miasta. Przed sobą widzisz wielki plac, na którym jakaś karawana szykuje się właśnie do odjazdu. Może warto spytać się, czy jedzie do przygranicznej wioski? Co robisz?</div><div id='description'></div>");
}

module.exports.lookAroundCaravans = function(){
  $("#description").html("<p class='basicText medievalText'>Za sobą masz bramę do miasta oraz wysokie mury miasta Erharuf. Przed sobą widzisz wielki plac, na którym karawany mogą przygotować się do podróży. W dali widniej ciemna linia prastarego lasu.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", ()=>{ $("#description").empty(); });
}

module.exports.ask = function(){
  $("#description").html("<p class='basicText medievalText'>Podchodzisz bliżej. Widzisz postać krasnoluda, który wydziera się w niebo głosy i pogania wszystkich wokół. Gdy jesteś już blisko, pytasz: 'Mości krasnoludzie, czy ta karawana jedzie do wioski na pograniczu?' 'Że co? Aaaa... Tak! Jedziemy dalej, ale będziemy przez nią przejeżdżać. Jak chcesz się zabrać to musisz się pospiesz z wsiadaniem. Na ostatnim wozie jest jeszcze trochę miejsca.'- odpowiedział i wrócił do swoich obowiązków.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", ()=>{ $("#description").empty(); });

  $("#ask").remove();
  functions.newElement("button", "agree", "zgódź się", $("#interactionsBtns"));
  $("#agree").addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
  point.splice(0, 1, 1);

  $("#agree").on("click", ()=>{
    $("#mainPart").html("<div class='basicText medievalText'>Na ostatnim wozie okazało się, że jest jeszcze sporo miejsca, dzięki czemu będzie można podróżować dość wygodnie. Po kilkunastu minutach karawana ruszyła...</div><div id='description'></div>");
    $("#toStreet, #toMarket, #lookAroundCaravans, #ask, #agree, #buy, #sell, #lookAroundMarket").hide();
    $("#go, #lookAroundWaggon").show();
    $("#go").addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
    $("#lookAroundWaggon").addClass("basicBtn bckgBlue medievalText marginTop4 shadowForBtn fontSize09em");
  })
}
