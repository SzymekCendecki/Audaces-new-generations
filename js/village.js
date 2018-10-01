let heroCreator = require("./heroCreator.js");
let functions = require("./functions.js"); //podstawowe funkcje

module.exports.arriveVillage = function(){
  //główny tekst opisowy dla paragrafu dojazd do wioski
  $("#mainPart").empty();
  $("#toVillage2").hide();
  $("#enterVillage, #outVillageLookAround").show().addClass("basicBtn");
  $("#enterVillage").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#outVillageLookAround").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
  $("#mainPart").html("<div class='basicText medievalText'>Po trzech dniach, dotarliście już bez przeszkód do Przygranicznej wioski. Rozbiliście obozowisko, przy starym młynie. Zaciekawieni mieszkańcy wyszli ze swych chałup i obleźli karawanę. Co robisz?</div><div id='description'></div>");
}

module.exports.outVillageLookAround = function(){
  $("#description").html("<p class='basicText medievalText'>Wioska jest dość duża, składa się z prawie 40 chałup. Otoczona jest wałem ziemnym, z wbitymi w niego, zaostrzonymi palikami. To typowe umocnienie w tym rejonie. Przy rzece stoi stary młyn. Wokół wioski, jak okiem sięgnąć rozciągają się pola.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", ()=>{ $("#description").empty(); });
}
//#monk, #tavern, #lookAtVillage").hide();
module.exports.enterVillage = function(){
  //główny tekst opisowy dla paragrafu dojazd do wioski
  $("#mainPart").empty();
  $("#enterVillage, #outVillageLookAround, #toVillage2").hide();
  $("#monk, #tavern, #lookAtVillage").show().addClass("basicBtn");
  $("#monk, #tavern").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#lookAtVillage").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em");
  $("#mainPart").html("<div class='basicText medievalText'>Stoisz na placu pośrodku wioski. Przed sobą widzisz kamienną karczmę. Po Twojej lewej stronie jest mały 'kościółek'. Pewnie tam jest mnich, któremu musisz odda paczkę. Co robisz?</div><div id='description'></div>");

  $("#lookAtVillage").on("click", ()=>{
    $("#description").html("<p class='basicText medievalText'>Wioska jakich wiele w regionie. Bydło i ptactwo jest wszędzie. W oddali słychać odgłosy kuźni. Uwagę przykuwa karczma, jedyny kamienny budynek we wiosce.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
    $("#close").on("click", ()=>{ $("#description").empty(); });
  });
}

// w kościele - rozmowa z mnichem
module.exports.talkMonk = function(){
  $("#mainPart").empty();
  $("#monk, #tavern, #lookAtVillage, #outVillageLookAround").hide();
  $("#outDoor, #give").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
  $("#give").addClass("fontSize08em paddingUpDown1");
  $("#lookAtChurch").show().addClass("basicBtn bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");

let text = [];
  if(heroCreator.hero[1] == "kobieta"){
    text.splice(0, 1, "Weszłaś do kościoła.");
    text.splice(1, 1, "Podeszłaś ");
  }else{
      text.splice(0, 1, "Wszedłeś do kościoła.");
      text.splice(1, 1, "Podszedłeś ");
  }

    $("#mainPart").html(`<div class='basicText medievalText'>${text[0]} Panuje w nim lekki zaduch i niewielki półmrok. ${text[1]} do stojącego przy ołtarzu mnicha. Mnich odwrócił się i powiedział: <span class='italic blueText'>Witaj! Spodziewałem się Ciebie. Ponoć masz dla mnie przesyłkę?</span> Co robisz?</div><div id='description'></div>`);

    $("#give").on("click", ()=>{
      if (heroCreator.equip.indexOf('paczka') !== -1) {
        heroCreator.equip.splice(heroCreator.equip.indexOf('paczka'), 1);
        $("#give").remove();

        $("#alerts").html("<p id='noGold' class='greenText medievalText boldText'>Paczka została oddana.</p>");
        setTimeout(function(){
         $("#noGold").remove();
       }, 5000);
      }

      if(heroCreator.tasks.indexOf('zanieś paczkę mnichowi') !== -1){
        heroCreator.tasks.splice(heroCreator.tasks.indexOf('zanieś paczkę mnichowi'), 1);
      }
    });

$("#lookAtChurch").on("click", ()=>{
  $("#description").html("<p class='basicText medievalText'>Jest to niewielki kościółek. Kilka prostych ław. Na końcu stoi niewielki ołtarz poświęcony lokalnemu Bogu.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", ()=>{ $("#description").empty(); });
});
}

module.exports.enterTavern = function(){
  $("#mainPart").empty();
  $("#monk, #lookAtVillage, #tavern").hide();
  $("#lookAtTavern, #blackboard, #outTavern").show();
  $("#blackboard, #outTavern").addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
  $("#lookAtTavern").addClass("basicBtn bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");

$("#mainPart").html(`<div class='basicText medievalText'>W karczmie jest dość przyjemnie. W powietrzu utrzymuje się zapach pieczonego mięsa. Kilku wieśniaków siedzi i popija z gąsiora. W kącie pomieszczenia siedzi niewielka trupa aktorska. Na ścianie obok kontuaru właściciela karczma jest tablica z ogłoszeniami. Co robisz?</div><div id='description'></div>`);

  $("#lookAtTavern").on("click", ()=>{
    $("#description").html("<p class='basicText medievalText'>Typowa karczma, w której można zjeść, wypić czy wynająć pokój.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
    $("#close").on("click", ()=>{ $("#description").empty(); });
  });

  let text = ["", "", ""];

  $("#blackboard").on("click", ()=>{
      if(heroCreator.tasks.indexOf(" ubij pasikonika") !== -1 && heroCreator.tasks.indexOf(" ubij wilka") !== -1 && heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1){
        text.splice(0, 1, "");
        text.splice(1, 1, "");
        text.splice(2, 1, "");
        text.splice(3, 1, "Brak ogłoszeń.");
      }else if(heroCreator.tasks.indexOf(" ubij pasikonika") !== -1){
        text.splice(0, 1, "");
        text.splice(1, 1, "<button id='task2' class='basicBtn medievalText width24 bckgGreen'>wilk</button>");
        text.splice(2, 1, "<button id='task3' class='basicBtn medievalText width24 bckgGreen'>trol</button>");
        text.splice(3, 1, "Wiszą na niej ogłoszenia.");
      }else if(heroCreator.tasks.indexOf(" ubij wilka") !== -1){
        text.splice(0, 1, "<button id='task1' class='basicBtn medievalText width24 bckgGreen'>pasikonik</button>");
        text.splice(1, 1, "");
        text.splice(2, 1, "<button id='task3' class='basicBtn medievalText width24 bckgGreen'>trol</button>");
        text.splice(3, 1, "Wiszą na niej ogłoszenia.");
      }else if(heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1){
        text.splice(0, 1, "<button id='task1' class='basicBtn medievalText width24 bckgGreen'>pasikonik</button>");
        text.splice(1, 1, "<button id='task2' class='basicBtn medievalText width24 bckgGreen'>wilk</button>");
        text.splice(2, 1, "");
        text.splice(3, 1, "Wiszą na niej ogłoszenia.");
      }else if(heroCreator.tasks.indexOf(" ubij pasikonika") !== -1 && heroCreator.tasks.indexOf(" ubij wilka") !== -1){
        text.splice(0, 1, "");
        text.splice(1, 1, "");
        text.splice(2, 1, "<button id='task3' class='basicBtn medievalText width24 bckgGreen'>trol</button>");
        text.splice(3, 1, "Wiszą na niej ogłoszenia.");
      }else if(heroCreator.tasks.indexOf(" ubij pasikonika") !== -1 && heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1){
        text.splice(0, 1, "");
        text.splice(1, 1, "<button id='task2' class='basicBtn medievalText width24 bckgGreen'>wilk</button>");
        text.splice(2, 1, "");
        text.splice(3, 1, "Wiszą na niej ogłoszenia.");
      }else if(heroCreator.tasks.indexOf(" ubij wilka") !== -1 && heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1){
        text.splice(0, 1, "<button id='task1' class='basicBtn medievalText width24 bckgGreen'>pasikonik</button>");
        text.splice(1, 1, "");
        text.splice(2, 1, "");
        text.splice(3, 1, "Wiszą na niej ogłoszenia.");
      }else{
        text.splice(0, 1, "<button id='task1' class='basicBtn medievalText width24 bckgGreen'>pasikonik</button>");
        text.splice(1, 1, "<button id='task2' class='basicBtn medievalText width24 bckgGreen'>wilk</button>");
        text.splice(2, 1, "<button id='task3' class='basicBtn medievalText width24 bckgGreen'>trol</button>");
        text.splice(3, 1, "Wiszą na niej ogłoszenia.");
      }

    $("#description").html(`<p class='basicText medievalText'>Podchodzisz do tablicy. ${text[3]} <p id='taskBtn' class='flexForBtns marginTop4'>${text[0]} ${text[1]} ${text[2]}</p></p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>`);
    $("#close").on("click", ()=>{ $("#description").empty(); });

//zdarzenia dla podjęcia się pracy
    $("#task1").on("click", ()=>{
      $("#task1").remove();
      heroCreator.tasks.push(" ubij pasikonika");
      $("#goTask1").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
    });

    $("#task2").on("click", ()=>{
      $("#task2").remove();
      heroCreator.tasks.push(" ubij wilka");
      $("#goTask2").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
    });
    $("#task3").on("click", ()=>{
      $("#task3").remove();
      heroCreator.tasks.push(" rozwiąż konflikt z trolem");
      $("#goTask3").show().addClass("basicBtn bckgGreen medievalText marginTop4 shadowForBtn");
    });

  });

}
