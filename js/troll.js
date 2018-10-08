let heroCreator = require("./heroCreator.js");
let functions = require("./functions.js"); //podstawowe funkcje
let theGame = require("./theGame.js");

module.exports.toTroll = function(){
   if(heroCreator.equip.indexOf("paczka") !== -1){
     $("#description").html("<p class='basicText medievalText'>Oddaj najpierw paczkę !!!!.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");

     $("#close").on("click", ()=>{ $("#description").empty();  });
   }else{
     $("#mainBtns button").hide();
     $("#interactionsBtns button").hide();
     $("#goTask1, #goTask2, #goTask3").show();

     $("#goTask3").prop("disabled", true);

     let text = [];

     //wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
     if(heroCreator.hero[1] == "kobieta"){
       text.splice(0, 1, "wykorzystałaś");
       text.splice(0, 1, "trafiłaś");
     }else if(heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo"){
       text.splice(0, 1, "Wykorzystałeś");
       text.splice(0, 1, "trafiłeś");
     }
     theGame.taskArray.splice(0, 1, 3);

       $("#mainPart").html(`<div class='basicText medievalText'>Idziesz w stronę mostu. Przez las, wąwóz. Wychodzisz na dużą polanę. Na drugim końcu widzisz już zarysy mostu. Z trudem dostrzegasz dużą postać - to chyba ten trol. Podchodzisz bliżej i widzisz jak jakieś osoby coś wykrzykują i machają rękami. Po chwili wszystko ucicha. Duża postać nadal stoi przy moście, reszta przechodzi. Jesteś już blisko mostu. Widzisz ogromnego trola siedzącego na kamieniu, wspartego o dużych rozmiarów maczugę. Gdy już jesteś całkiem blisko trol mówi do Ciebie: 'Opłata za przejście, albo zjeżdżaj!!'. 'Nie mam zamiaru płacićm, ani przechodzić. Jestem tutaj z twojego powodu.' -    odpowiadasz. 'Chce, żebyś zaprzestał pobierania nielegalnego myta. Jeżeli tego nie zrobisz będę musiał Cię zabić.' - mówisz dalej. 'Nic z Tego. To jest mój most i będę pobierał myto za jego przejście.' - odparł. Dyplomacja nie wyszła. Musisz z nim walczyć.</div><div id='description'></div>`);

           $("#prepare").show();
           $("#prepare").addClass("bckgGreen fontSize08em paddingUpDown1");
           $("#finishTask3").on("click", ()=>{

            theGame.taskDone.splice(2, 1, 1);
           $("#description").html(`<div class='basicText medievalText'>Walka nie była długa. Miałeś szczęście. Udało Ci się go zranić pod pachą. Trol zawył dziko. Przechylił się i stracił równowagę i stoczył się ze skarpy do rzeki. Spojrzałeś w dół i ujrzałeś go martwego z roztrzaskaną głową.</div>`);

             if (heroCreator.tasks.indexOf(' rozwiąż konflikt z trolem') !== -1) {
                   heroCreator.tasks.splice(heroCreator.tasks.indexOf(' rozwiąż konflikt z trolem'), 1);
             }

             //dodanie punktów do cech
             heroCreator.hero.splice(4, 1, (heroCreator.hero[4] + 5));
             heroCreator.hero.splice(5, 1, (heroCreator.hero[5] + 5));
             heroCreator.hero.splice(6, 1, (heroCreator.hero[6] + 5));
             heroCreator.hero.splice(7, 1, (heroCreator.hero[7] + 5));
             heroCreator.hero.splice(8, 1, (heroCreator.hero[8] + 5));

             if(theGame.taskDone[0] == 0){ $("#goTask1").prop("disabled", false);
             }else{ $("#goTask1").prop("disabled", true);
             }

             if(theGame.taskDone[1] == 0){ $("#goTask2").prop("disabled", false);
             }else{ $("#goTask2").prop("disabled", true);
             }

       $("#finishTask3").remove();

          if(theGame.taskDone[0] == 1 && theGame.taskDone[1] == 1 && theGame.taskDone[2] == 1){
                $("#toGameOver").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
          }
           });
  }
}
