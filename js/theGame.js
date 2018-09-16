//import funkcji z pliku zewnętrznego
let functions = require("./functions.js"); //podstawowe funkcje
let heroCreator = require("./heroCreator.js");
let defenseCaravans = require("./defenseCaravans.js");

//zdarzenie dla przycisku "cechy"
module.exports.btnFeatures = function(){
  $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>TWÓJ PROTAGONISTA</p><div class='width90 flexForBtns marginTop2'><p class='width24 navyText'>imię: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[0] + "</span></p><p class='width24 navyText'>płeć: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[1] + "</span></p><p class='width24 navyText'>rasa: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[2] + "</span></p><p class='width24 navyText'>profesja: <span class='blackText fontSize12em'>" + heroCreator.hero[3] + "</p></div><div class='width90 flexForBtns marginTop2'><p class='width33 navyText'>siła: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[4] + "</span></p><p class='width33 navyText'>wytrzymałość: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[5] + "</span></p><p class='width33 navyText'>zręczność: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[6] + "</span></p><p class='width33 navyText'>inteligencja: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[7] + "</span></p><p class='width33 navyText'>charyzma: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[8] + "</span></p></div><div class='width90 flexForBtns marginTop2'><p class='width33 navyText'>kolor oczu: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[9] + "</span></p><p class='width33 navyText'>kolor włosów: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[10] + "</span></p><p class='width33 navyText'>kolor skóry: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[11] + "</span></p><p class='width33 navyText'>waga: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[12] + "</span></p><p class='width33 navyText'>wzrost: <span class='blackText boldText fontSize12em'>" + heroCreator.hero[13] + "</span></p></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");
$("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", true);

  $("#close").on("click", ()=>{ $("#info").empty(); $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", false); });
}

//zdarzenie dla przycisku "ewipunku"
module.exports.btnEquip = function(){
  $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>EKWIPUNEK</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em'>" + heroCreator.equip +  "</span></p><p class='width90 navyText'>złoto: <span class='blackText boldText fontSize12em'>" + heroCreator.gold +  "</span></p</div></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
$("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", true);

  $("#close").on("click", ()=>{ $("#info").empty(); $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", false); });
}

//zdarzenie dla przycisku "umiejętności"
  module.exports.btnSkills = function(){
    $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>UMIEJĘTNOŚCI</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em'>" + heroCreator.skills +  "</span></p></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");
  $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", true);

    $("#close").on("click", ()=>{ $("#info").empty(); $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", false); });
  }

  //zdarzenie dla przycisku "zadania"
    module.exports.btnTasks = function(){
      $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>ZADANIA</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em'>" + heroCreator.tasks +  "</span></p></div><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");
    $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", true);

      $("#close").on("click", ()=>{ $("#info").empty(); $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", false); });
    }

//zdarzenie dla przycisku "punkty bojowe"
module.exports.powerHero = function(){
  //suma wszystkich puntktów bojowych
     let allPoints = [];

  let suma = (heroCreator.hero[4] + heroCreator.hero[5] + heroCreator.hero[6] + heroCreator.hero[7] + heroCreator.hero[8]);
allPoints.push(suma);


  let sumaEquip = [];

  let equipPoints = defenseCaravans.fightWeapon.filter(function(el){
      if(el == "sztylet"){
        sumaEquip.push(5);
      }else if(el == "krótki miecz" || el == "drewniana pałka"){
          sumaEquip.push(10);
      }else if(el == "szabla" || el == "włócznia"){
          sumaEquip.push(15);
      }
  });

  let sumaPointEquip = 0;
   for(let i=0; i<sumaEquip.length; i++){
     sumaPointEquip += sumaEquip[i];
     allPoints.splice(1, 1, sumaPointEquip);
   }

console.log(allPoints);

  $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>WARTOŚCI BOJOWE</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em textUnderlineGold'>cechy</span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>siła: <span class='navyText'>" + heroCreator.hero[4] +  "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>wytrzymałość: <span class='navyText'>" + heroCreator.hero[5] +  "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>zręczność: <span class='navyText'>" + heroCreator.hero[6] +  "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>inteligencja: <span class='navyText'>" + heroCreator.hero[7] +  "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>charyzma: <span class='navyText'>" + heroCreator.hero[8] + "</span></span></p><p class='width90 center'><span class='blackText boldText fontSize12em textUnderlineGold'>suma punktów cech: <span class='navyText textUnderlineGold center'>" + suma +  "</span></span></p><p class='width90'><span class='blackText boldText fontSize12em textUnderlineGold'>wybrany sprzęt: </p><p id='equipToRemove' class='width90'><span class='navyText'>" + defenseCaravans.fightWeapon + "</span></span></p><p class='width90 center'><span class='blackText boldText fontSize12em textUnderlineGold'>suma punktów ekwipunku: <span class='navyText textUnderlineGold center'>" + sumaPointEquip +  "</span></span></p></div><button id='removeEquip' class='bckgRed fontSize12em width20 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>usuń rzeczy</button><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");

$("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", true);

  $("#close").on("click", ()=>{ $("#info").empty(); $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", false); });

$("#removeEquip").on("click", ()=>{
  defenseCaravans.fightWeapon.splice(0, 3);
  $("#equipToRemove").empty();
  let przyciski = $("#btnsWeapon").find("button");
  przyciski.attr("disabled", false);
});

  }
