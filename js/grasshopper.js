let heroCreator = require("./heroCreator.js");
let functions = require("./functions.js"); //podstawowe funkcje
let theGame = require("./theGame.js");

module.exports.toGrasshopper = function(){
   if(heroCreator.equip.indexOf("paczka") !== -1){
     $("#description").html("<p class='basicText medievalText'>Oddaj najpierw paczkę !!!!.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");

     $("#close").on("click", ()=>{ $("#description").empty();  });
   }else{
      $("#mainBtns button").hide();
      $("#interactionsBtns button").hide();
      $("#goTask1, #goTask2, #goTask3").show();

      $("#goTask1").prop("disabled", true);

      let text = [];

      //wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
      if(heroCreator.hero[1] == "kobieta"){
        text.splice(0, 1, "Doszłaś");
        text.splice(1, 1, "niedostrzegłaś");
        text.splice(2, 1, "Uznałaś");
        text.splice(3, 1, "uszłyszałaś");
        text.splice(4, 1, "Zaczęłaś");
        text.splice(5, 1, "ujrzałaś");
      }else if(heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo"){
        text.splice(0, 1, "Doszedłeś");
        text.splice(1, 1, "niedostrzegłeś");
        text.splice(2, 1, "Uznałeś");
        text.splice(3, 1, "uszłyszałeś");
        text.splice(4, 1, "Zacząłeś");
        text.splice(5, 1, "ujrzałeś");
      }

theGame.taskArray.splice(0, 1, 1);
      $("#mainPart").html(`<div class='basicText medievalText'>Idziesz na pola. Jest ciepło, łany zbóż kołyszą się na wietrze. Jest spokój. Zastanawiasz się czy ten polny stwór to nie majaki pijanych farmerów. Jednak dla świętego spokoju idziesz dalej i rozglądasz się po okolicy. ${text[0]} prawie do końca pól. Niczego niepokojącego ${text[1]}. ${text[2]}, że trzeba się zająć następnym zadaniem. Wtem ${text[3]} dziwne, suche trzaski. ${text[4]} się rozglądać i ${text[5]} jak z pobliskiego rowu zaczął wstawać stwór, wielki jak dorodny bawół. Przecierasz oczy ze zdumienia i nie wierzysz. Ten potwór wygląda jak gigantyczny PASIKONIK!!!!</div><div id='description'></div>`);

      $("#prepare").show();
      $("#prepare").addClass("bckgGreen fontSize08em paddingUpDown1");

    $("#finishTask1").on("click", ()=>{
      $("#description").html("<p class='basicText medievalText'>Pasikonik wykończony. Twoje cechy podniosły się. Wybierz kolejne zadanie.</p>");
      theGame.taskDone.splice(0, 1, 1);
      console.log(theGame.taskDone);

      //dodanie punktów do cech
      console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);
      heroCreator.hero.splice(4, 1, (heroCreator.hero[4] + 5));
      heroCreator.hero.splice(5, 1, (heroCreator.hero[5] + 5));
      heroCreator.hero.splice(6, 1, (heroCreator.hero[6] + 5));
      heroCreator.hero.splice(7, 1, (heroCreator.hero[7] + 5));
      heroCreator.hero.splice(8, 1, (heroCreator.hero[8] + 5));
      console.log(heroCreator.hero[4], heroCreator.hero[5], heroCreator.hero[6], heroCreator.hero[7], heroCreator.hero[8]);

      if(theGame.taskDone[1] == 0){
        $("#goTask2").prop("disabled", false);
      }else{
        $("#goTask2").prop("disabled", true);
      }

      if(theGame.taskDone[2] == 0){
        $("#goTask3").prop("disabled", false);
      }else{
        $("#goTask3").prop("disabled", true);
      }

$("#finishTask1").remove();
    });

  }
}
