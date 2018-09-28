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
    });

$("#lookAtChurch").on("click", ()=>{
  $("#description").html("<p class='basicText medievalText'>Jest to niewielki kościółek. Kilka prostych ław. Na końcu stoi niewielki ołtarz poświęcony lokalnemu Bogu.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", ()=>{ $("#description").empty(); });
});

}
