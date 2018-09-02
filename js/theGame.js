//import funkcji z pliku zewnętrznego
let functions = require("./functions.js"); //podstawowe funkcje
let heroCreator = require("./heroCreator.js");

//zdarzenie dla przycisku "cechy"
module.exports.btnFeatures = function(){
  $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>TWÓJ PROTAGONISTA</p><div class='width90 flexForBtns marginTop2'><p class='width24 navyText'>imię: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[0] + "</span></p><p class='width24 navyText'>płeć: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[1] + "</span></p><p class='width24 navyText'>rasa: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[2] + "</span></p><p class='width24 navyText'>profesja: <span class='blackText fontSize12em'>" + heroCreator.hero[3] + "</p></div><div class='width90 flexForBtns marginTop2'><p class='width33 navyText'>siła: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[4] + "</span></p><p class='width33 navyText'>wytrzymałość: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[5] + "</span></p><p class='width33 navyText'>zręczność: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[6] + "</span></p><p class='width33 navyText'>inteligencja: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[7] + "</span></p><p class='width33 navyText'>charyzma: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[8] + "</span></p></div><div class='width90 flexForBtns marginTop2'><p class='width33 navyText'>kolor oczu: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[9] + "</span></p><p class='width33 navyText'>kolor włosów: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[10] + "</span></p><p class='width33 navyText'>kolor skóry: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[11] + "</span></p><p class='width33 navyText'>waga: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[12] + "</span></p><p class='width33 navyText'>wzrost: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[13] + "</span></p></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");
$("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet").prop("disabled", true);

  $("#close").on("click", ()=>{ $("#info").empty(); $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet").prop("disabled", false); });
}

//zdarzenie dla przycisku "ewipunku"
module.exports.btnEquip = function(){
  $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>EKWIPUNEK</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em'>" + heroCreator.equip +  "</span></p><p class='width90 navyText'>złoto: <span class='blackText boldText fontSize12em'>" + heroCreator.gold +  "</span></p</div></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
$("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet").prop("disabled", true);

  $("#close").on("click", ()=>{ $("#info").empty(); $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet").prop("disabled", false); });
}

//zdarzenie dla przycisku "umiejętności"
  module.exports.btnSkills = function(){
    $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>UMIEJĘTNOŚCI</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em'>" + heroCreator.skills +  "</span></p></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");
  $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet").prop("disabled", true);

    $("#close").on("click", ()=>{ $("#info").empty(); $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet").prop("disabled", false); });
  }

  //zdarzenie dla przycisku "zadania"
    module.exports.btnTasks = function(){
      $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>ZADANIA</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em'>" + heroCreator.tasks +  "</span></p></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");
    $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet").prop("disabled", true);

      $("#close").on("click", ()=>{ $("#info").empty(); $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet").prop("disabled", false); });
    }
