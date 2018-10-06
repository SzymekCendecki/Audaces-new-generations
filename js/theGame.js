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
  //suma wszystkich puntktów bojowych 0 - cechy, 1 - ekwipunek, 2 - umiejętności
     let allPoints = [0, 0, 0];

//suma punktów z cech postaci
  let suma = (heroCreator.hero[4] + heroCreator.hero[5] + heroCreator.hero[6] + heroCreator.hero[7] + heroCreator.hero[8]);
allPoints.splice(0, 1, suma);

//suma punktów z wybranego ekwipunku
  let sumaEquip = [0];

  //tablica dla posiadanych umiejętnościach
  let activeSkills = [0];

//tablica dla punktów bojowych wynikających z umiejętności
let pointsSkills = [0];

//filtrowanie ekqwipunu oraz przypisanie do rzeczy wartości punktowych
  let equipPoints = defenseCaravans.fightWeapon.filter(function(el){
      if(el == "sztylet" || el == "proca" || el == "przeszywanica" || el == "puklerz" || el == "kostur"){
        sumaEquip.splice(0, 1, 5);

        if(heroCreator.skills.indexOf(el) !== -1){
            pointsSkills.splice(0, 1, 5);
            activeSkills.push(el);
          }
      }else if(el == "krótki miecz" || el == "drewniana pałka" || el == "łuk" || el == "zbroja skórzana" || el == "zbroja ćwiekowana" || el == "mała tarcza drewniana" || el == "mała tarcza drewniana"){
          sumaEquip.push(10);

          if(heroCreator.skills.indexOf(el) !== -1){
            pointsSkills.splice(0, 1, 10);
            activeSkills.push(el);
          }
      }else if(el == "szabla" || el == "włócznia"){
          sumaEquip.splice(0, 1, 15);

          if(heroCreator.skills.indexOf(el) !== -1){
            pointsSkills.splice(0, 1, 15);
            activeSkills.push(el);
        }
      }else if(el == "mieszek" || el == "torba podróżna" || el == "sakwa" || el == "plecak" || el == "manierka" || el == "sagan" || el == "koc" || el == "tuba na perg." || el == "pęk piór do pis." || el == "pergaminy 5szt." || el == "zwykłe ubranie" || el == "fikuśna czapka" || el == "płaszcz" || el == "skórzany płaszcz" || el == "igły i nici" || el == "derka" || el == "namiot" || el == "drewniana miska" || el == "drewniana łyżka" || el == "pochodnia" || el == "lampa oliwna" || el == "kaganek" || el == "lina 5m" || el == "hubka i krzesiwo"){
        sumaEquip.push(-10);

        if(heroCreator.skills.indexOf(el) !== -1){
          pointsSkills.splice(0, 1, -10);
          activeSkills.push(el);
        }
      }
  });

 //zliczanie punktów z wybranego ekwipunku
  let sumaPointEquip = 0;
   for(let i=0; i<sumaEquip.length; i++){
     sumaPointEquip += sumaEquip[i];
     allPoints.splice(1, 1, sumaPointEquip);
   }

   //zliczanie punktów z umiejętności
    let sumaPointSkills = 0;
     for(let i=0; i<pointsSkills.length; i++){
       sumaPointSkills += pointsSkills[i];
       allPoints.splice(2, 1, sumaPointSkills);
     }

let allHeroPoints = allPoints[0] + allPoints[1] + allPoints[2];

//informacja zbiorcza z ilością puntktów bojowych z rozbiciem na posczególne moduły: cechy, ekwipunek (ich sumy) oraz suma cech i ekwipunku
  $("#info").html("<div class='width75 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>WARTOŚCI BOJOWE</p><div class='width100 flexForBtns marginTop2'><p class='width90'><span class='blackText boldText fontSize12em textUnderlineGold'>cechy</span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>siła: <span class='navyText'>" + heroCreator.hero[4] +  "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>wytrzymałość: <span class='navyText'>" + heroCreator.hero[5] +  "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>zręczność: <span class='navyText'>" + heroCreator.hero[6] +  "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>inteligencja: <span class='navyText'>" + heroCreator.hero[7] +  "</span></span></p><p class='width33 center'><span class='blackText boldText fontSize12em'>charyzma: <span class='navyText'>" + heroCreator.hero[8] + "</span></span></p><p class='width90 center'><span class='blackText boldText fontSize12em textUnderlineGold'>suma punktów cech: <span class='navyText textUnderlineGold center'>" + suma +  "</span></span></p><p class='width90'><span class='blackText boldText fontSize12em textUnderlineGold'>wybrany sprzęt: </p><p id='equipToRemove' class='width90'><span class='navyText'>" + defenseCaravans.fightWeapon + "</span></span></p><p class='width90 center'><span class='blackText boldText fontSize12em textUnderlineGold'>suma punktów ekwipunku: <span class='navyText textUnderlineGold center'>" + sumaPointEquip +  "</span></span></p><p class='width90'><span class='blackText boldText fontSize12em textUnderlineGold'>umiejętności: </p><p id='equipToRemove' class='width90'><span class='navyText'>" + activeSkills + "</span></span></p><p class='width90 center'><span class='blackText boldText fontSize12em textUnderlineGold'>suma punktów umiejętności: <span class='navyText textUnderlineGold center'>" + sumaPointSkills +  "</span></span></p><p class='width90 center marginTop3'><span class='blackText boldText fontSize12em textUnderlineGold'>suma punktów bojowych: <span class='navyText textUnderlineGold center'>" + (suma + sumaPointEquip + sumaPointSkills) +  "</span></span></p></div><button id='removeEquip' class='bckgRed fontSize12em width20 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>usuń rzeczy</button><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button></div>");

$("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", true);

  $("#close").on("click", ()=>{ $("#info").empty(); $("#features, #equip, #skills, #tasks, #lookAroundRoom, #wardrobe, #chest, #package, #inRoom, #toCaravans, #toMarket, #lookAroundStreet, #ask, #lookAroundCaravans").prop("disabled", false); });

//usuwanie wybranego ekwipunku do walki
$("#removeEquip").on("click", ()=>{
  defenseCaravans.fightWeapon.splice(0, 3);
  activeSkills.splice(0, 3);
  $("#equipToRemove").empty();
  let przyciski = $("#btnsWeapon").find("button");
  przyciski.attr("disabled", false);
});

  let a = suma + sumaPointEquip + sumaPointSkills;
  module.exports.a = a;
}

//tablica dla sprawdzania wykonania zadania. index 0 - oznacza zadanie, więc wartość 1 to pasikonik, 2 - wilk, 3-trol
module.exports.taskArray = [0, 0];

//tablica dla zrobionych zadań
module.exports.taskDone = [0, 0, 0];
