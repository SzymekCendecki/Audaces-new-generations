let heroCreator = require("./heroCreator.js");
let functions = require("./functions.js"); //podstawowe funkcje
let theGame = require("./theGame.js");

module.exports.toWolf = function(){
   if(heroCreator.equip.indexOf("paczka") !== -1){
     $("#description").html("<p class='basicText medievalText'>Oddaj najpierw paczkę !!!!.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");

     $("#close").on("click", ()=>{ $("#description").empty();  });
   }else{
     $("#mainBtns button").hide();
     $("#interactionsBtns button").hide();
     $("#goTask1, #goTask2, #goTask3").show();

     $("#goTask2").prop("disabled", true);

     let text = [];

     //wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
     if(heroCreator.hero[1] == "kobieta"){
       text.splice(0, 1, "wykorzystałaś");
       text.splice(0, 1, "trafiłaś");
     }else if(heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo"){
       text.splice(0, 1, "Wykorzystałeś");
       text.splice(0, 1, "trafiłeś");
     }

     theGame.taskArray.splice(0, 1, 2);

           $("#mainPart").html(`<div class='basicText medievalText'>Idąc drogą w stronę kolejnego zadania, wchodzisz w las. Pachnie igliwiem, ptaki śpiewają. Przechodzisz koło sporej polany. Na jej końcu widzisz łanie z młodymi. Spostrzegła Cię i szybkimi susami zniknęła z młodymi w lesie. Idziesz dalej. W końcu docieraszdo pieczary. Przed nią widzisz resztki zwierząt. W powietrzu unosi się zapach gnijącego mięsa, który potrafi zemdlić nawet takiego twardziela jak Ty. 'No cóż. Zadanie trzeba wykonać, pomimo zapachu. Tego dziwnego pasikonika w sumie się pokonało.' - przemknęła myś w Twojej głowie. Jaskinia jest większa i dość dobrze oświetlona niż wydawało się to z zewnątrz. Po kilku krokach dochodzisz prawie do jej środka. Wtem, zza sporego głazu, który stał przy wejściu wyszedł bardzo duży wilk i tarasuje wyjście. Nie możesz ucieć. Musisz walczyć.Wchodzisz do jaskini.</div><div id='description'></div>`);

           $("#prepare").show();
           $("#prepare").addClass("bckgGreen fontSize08em paddingUpDown1");

           $("#finishTask2").on("click", ()=>{
             $("#description").html(`<p class='basicText medievalText'>To była dzika walka. Nie było 'zlituj się'. Niestety wilk popełnił błąd. Fatalny dla niego w skutkach. Źle się ustawił, a Ty bez skrupółów ${text[0]} jego błąd i z całej siły ${text[1]} w jego kręgosłup. Tylko gruchnęło. Wilk momentalnie padł i zginął w konwulsjach, z pianą na pysku. Po odpoczynku czas na kolejne zadanie</p>`);
             theGame.taskDone.splice(1, 1, 1);
             console.log(theGame.taskDone);

             //dodanie punktów do cech
             console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);
             heroCreator.hero.splice(4, 1, (heroCreator.hero[4] + 5));
             heroCreator.hero.splice(5, 1, (heroCreator.hero[5] + 5));
             heroCreator.hero.splice(6, 1, (heroCreator.hero[6] + 5));
             heroCreator.hero.splice(7, 1, (heroCreator.hero[7] + 5));
             heroCreator.hero.splice(8, 1, (heroCreator.hero[8] + 5));
             console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);

             if(theGame.taskDone[0] == 0){
               $("#goTask1").prop("disabled", false);
             }else{
               $("#goTask1").prop("disabled", true);
             }

             if(theGame.taskDone[2] == 0){
               $("#goTask3").prop("disabled", false);
             }else{
               $("#goTask3").prop("disabled", true);
             }

       $("#finishTask2").remove();
           });

  }
}
