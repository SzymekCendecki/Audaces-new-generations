let heroCreator = require("./heroCreator.js");
let functions = require("./functions.js"); //podstawowe funkcje
let theGame = require("./theGame.js");

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
                     let fightStyle = ["brak"];
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
                      console.log(fightStyle);
                     });

 //zdarzenie dla stylu defensywnego
                    $("#defensive").on("click", ()=>{
                      fightStyle.splice(0, 1, "defensywny");

                      $("#alerts").html("<p id='stylesFight' class='greenText medievalText boldText'>wybrany styl walki: <span class='blueText'>defensywny</span></p>");
                        setTimeout(function(){
                          $("#alerts").empty();
                      }, 5000);
                      console.log(fightStyle);
                    });

//zdarzenie dla stylu ofensywnego
                   $("#agresive").on("click", ()=>{
                      fightStyle.splice(0, 1, "ofensywny");
                      $("#alerts").html("<p id='stylesFight' class='greenText medievalText boldText'>wybrany styl walki: <span class='blueText'>ofensywny</span></p>");
                        setTimeout(function(){
                          $("#alerts").empty();
                      }, 5000);
                      console.log(fightStyle);
                   });

                   });
  });
}
