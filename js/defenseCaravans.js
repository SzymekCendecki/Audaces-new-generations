let heroCreator = require("./heroCreator.js");
let functions = require("./functions.js"); //podstawowe funkcje
let theGame = require("./theGame.js");

//tablica dla ustalania stylu walki
let fightStyle = ["brak"];

module.exports.textCaravans = function(){
  //główny tekst opisowy dla paragrafu - karawany - paragraf postoju karawan
  $("#mainPart").html("<div class='basicText medievalText'>Jedziecie sobie spokojnie. Czas mija na oglądaniu pejzaży z jadącego wozu. Niestety ta sielanka skończyła się wieczorem drugiego dnia. Zaczęło się od zawalonej, przez drzewa drogi. Gdy uczestnicy, z pierwszych wozów karawany uprzątali drzewa, nastąpił atak. Wszyscy muszą walczyć!. Ciebie atakuje jeden bandyta z wielkim mieczem. <span class='normalText italic'>Po lewej stronie znajduje się przycisk <span class='blueText boldText'>'przygotuj się'</span>, aby wybrać ekwipunek.</span></div><div id='description'></div>");

  $("#toVillage, #prepare").show().addClass("basicBtn medievalText shadowForBtn marginTop4");
  $("#toVillage").addClass("bckgRed");
  $("#toVillage").prop("disabled", true);
  $("#prepare").addClass("bckgGreen fontSize08em paddingUpDown1");

  $("#prepare").on("click", ()=>{
    $("#description").html("<p class='textUnderlineGold boldText medievalText width100 center marginTop5 fontSize11em'>WYBIERZ EKWIPUNEK DO WALKI</p><div id='btnsWeapon' class='flexForBtns'></div>");
    //wybór przedmiotów do walki
    //przyciski z rzeczmi do wyboru
          for(let i=0; i<heroCreator.equip.length; i++){
              let weaponBtn = document.createElement("button");
              weaponBtn.id = heroCreator.equip[i];
              weaponBtn.innerText = heroCreator.equip[i];
              $("#btnsWeapon").append(weaponBtn);
         }

      let allBtns = document.querySelectorAll("#description button");
      $("#btnsWeapon").find("button").addClass("basicBtn medievalText bckgGreen width20 marginTop4");
      let fightWeapon = []; //tablica pomocnicza, dzięki której jest możliwa walidacja wuboru 3 rzeczy do walki oraz oblicznia wartości bojowej

             for(let i=0; i<allBtns.length; i++) {
                   allBtns[i].onclick = function () {
                     if(fightWeapon.length < 3 ){
                       let item = $(this).text();
                       fightWeapon.push(item);
                       $(this).prop("disabled", true);
                       $("#alerts").html("<p id='buyed' class='greenText medievalText boldText'>Został wybrany: <span class='blueText'>" + $(this).text() + "</span></p>");
                         setTimeout(function(){
                           $("#alerts").empty();
                       }, 5000);
                   }else if(fightWeapon.length >= 3){
                      $("#alerts").html("<p id='buyed' class='redText medievalText boldText'>Nie możesz wybrać więcej rzeczy.</p>");
                       setTimeout(function(){
                         $("#alerts").empty();
                     }, 5000);
                         }
                     }
                       module.exports.fightWeapon = fightWeapon;
                   }

                   //przycisk sprawdzający punkty bojowe postaci
                   let powerHero = document.createElement("button");
                   powerHero.id = "powerHero";
                   powerHero.innerText = "punkty bojowe";
                   $("#btnsWeapon").append(powerHero);
                   $("#powerHero").addClass("basicBtn medievalText bckgGreen width20 marginTop4");

                   $("#powerHero").on("click", ()=>{ theGame.powerHero(); });

                   //przycisk kończący - zatwierdzający wybieranie
                   let btnAccept = document.createElement("button");
                   btnAccept.id = "chooseFinish";
                   btnAccept.innerText = "zakończ wybieranie";
                   $("#btnsWeapon").append(btnAccept);
                   $("#chooseFinish").addClass("basicBtn medievalText bckgGreen width20 marginTop4");

                   $("#paczka").remove();

//koniec wybierania ekwipunku oraz wybranie stylu walki
                   $("#chooseFinish").on("click", ()=>{
                     $("#description").empty();
                     $("#description").html("<p class='textUnderlineGold boldText medievalText width100 center marginTop5 fontSize11em'>WYBIERZ STYL WALKI</p><div id='btnsStyles' class='flexForBtns'></div>");

                     functions.newElement("button", "none", "brak", $("#btnsStyles"));
                     functions.newElement("button", "defensive", "defensywny", $("#btnsStyles"));
                     functions.newElement("button", "agresive", "ofensywny", $("#btnsStyles"));
                     functions.newElement("button", "finish", "zakończ wybieranie", $("#btnsStyles"));

                     $("#none, #defensive, #agresive, #finish").addClass("basicBtn medievalText bckgGreen width20 marginTop4");

//zdarzenie dla braku stylu
                     $("#none").on("click", ()=>{
                      fightStyle.splice(0, 1, "brak");

                      $("#alerts").html("<p id='stylesFight' class='greenText medievalText boldText'>wybrany styl walki: <span class='blueText'>brak</span></p>");
                        setTimeout(function(){
                          $("#alerts").empty();
                      }, 5000);
                     });

 //zdarzenie dla stylu defensywnego
                    $("#defensive").on("click", ()=>{
                      fightStyle.splice(0, 1, "defensywny");

                      $("#alerts").html("<p id='stylesFight' class='greenText medievalText boldText'>wybrany styl walki: <span class='blueText'>defensywny</span></p>");
                        setTimeout(function(){
                          $("#alerts").empty();
                      }, 5000);
                    });

//zdarzenie dla stylu ofensywnego
                   $("#agresive").on("click", ()=>{
                      fightStyle.splice(0, 1, "ofensywny");
                      $("#alerts").html("<p id='stylesFight' class='greenText medievalText boldText'>wybrany styl walki: <span class='blueText'>ofensywny</span></p>");
                        setTimeout(function(){
                          $("#alerts").empty();
                      }, 5000);
                   });
  //zakończenie wybierania stylu WALKI
                  $("#finish").on("click", ()=>{
                       theGame.powerHero();

//część kodu walki umożliwiająca walkę podczas wyonywania zadań: pasikonik, wilk i troll
                        if(theGame.taskArray[0] == 1){
                          theGame.taskArray.splice(1, 1, 1);
                        }else if(theGame.taskArray[0] == 2){
                          theGame.taskArray.splice(1, 1, 2);
                        }


if(theGame.taskArray[0] == 1 && theGame.taskArray[1] == 1){
  $("#finishTask1").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
}else if(theGame.taskArray[0] == 2 && theGame.taskArray[1] == 2){
  $("#finishTask2").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
}
//koniec części kodu walki umożliwiająca walkę podczas wyonywania zadań: pasikonik, wilk i troll

                    $("#info").empty();
                    $("#features, #equip, #skills, #tasks").prop("disabled", false);

                      $("#toVillage").removeClass("bckgRed").addClass("bckgGreen").prop("disabled", false);

                      $("#prepare").hide();

              //wyliczanie trafienia dla gracza i przeciwnika
                      let hitting = theGame.a;
                      let hitting1 = theGame.a/2;

                //losowanie czy gracz trafił

                  let hits = [];

                      if(hitting1 < hitting ){
                        hits.splice(0, 1, " trafiony");
                      }else{
                          hits.splice(0, 1, " nie trafiony");
                      }

                    $("#description").empty();
                      $("#description").html(`<div class='width75 flexForBtns medievalText greenText boldText fontSize1em marginTop4'><p class='width100 textUnderlineGold medievalText center paddingUpDown1 fontSize13em'>WALKA</p><p class='width100 center'><span class='blackText boldText fontSize12em textUnderlineGold'>Twoje trafienie</span></p><p class='width100 center'><span class='blackText boldText fontSize12em'><span class='navyText'> ${hitting} </span></span></p><p class='width100 center'><span class='blackText boldText fontSize12em'><span id='result' class='navyText'> ${hits}</span></span></p><p class='width100 center'><span class='blackText boldText fontSize12em textUnderlineGold'>Trafienie przeciwnika </span></p><p class='width100 center'><span class='blackText boldText fontSize12em'><span class='navyText'> ${hitting1} </span></span></p><p class='width100 center'><span class='blackText boldText fontSize12em'><span id='result' class='navyText'>nie trafiony</span></span></p></div>`);

                      $("#toVillage").on("click", ()=>{
                        $("#toVillage").hide();
                        $("#toVillage2").show().addClass("basicBtn medievalText bckgGreen width49 marginTop4");
let text = [];

//wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
if(heroCreator.hero[1] == "kobieta"){
  text.splice(0, 1, "przeżyłaś");
  text.splice(1, 1, "Rozejrzałaś się");
}else if(heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo"){
  text.splice(0, 1, "przeżyłeś");
  text.splice(1, 1, "Rozejrzałeś się");
}

//wyszukanie w tablicy trafienia (lub nie) i przypisanie go do zmiennej
if(hits.indexOf(" trafiony") !== -1 && heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo"){
  text.splice(2, 1, "Jednym z ciosów, trafiłeś swojego przeciwnika i wysłałeś go do piachu");
}else if(hits.indexOf(" trafiony") !== -1 && heroCreator.hero[1] == "kobieta"){
    text.splice(2, 1, "Jednym z ciosów, trafiłaś swojego przeciwnika i wysłałaś go do piachu");
}else{
  text.splice(2, 1, "Twój przeciwnik nagle odwrócił się i uciekł");
}

$("#mainPart").html(`<p class="basicText medievalText">Szczęśliwie ${text[0]} walkę. ${text[2]}. ${text[1]}. Walka równie szybko się skończyła jak zaczęła. Karawana odczeała w gotowości jescze kilka minut. Po nich pochowaliście ciała poległych obrońców i atakujących w jednej, zbiorowej mogile, niedaleko drogi. Po krótkich modlitwach odjechaliście. Twoje cechy podniosły się.<p>`);

//dodanie punktów do cech
console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);
heroCreator.hero.splice(4, 1, (heroCreator.hero[4] + 5));
heroCreator.hero.splice(5, 1, (heroCreator.hero[5] + 5));
heroCreator.hero.splice(6, 1, (heroCreator.hero[6] + 5));
heroCreator.hero.splice(7, 1, (heroCreator.hero[7] + 5));
heroCreator.hero.splice(8, 1, (heroCreator.hero[8] + 5));
console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);
                      });


                  });
                 });
  });
}
