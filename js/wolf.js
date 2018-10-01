let heroCreator = require("./heroCreator.js");
let room = require("./room.js");

module.exports.toWolf = function(){
   if(heroCreator.equip.indexOf("paczka") !== -1){
     $("#description").html("<p class='basicText medievalText'>Oddaj najpierw paczkę !!!!.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");

     $("#close").on("click", ()=>{ $("#description").empty();  });
   }else{
      $("#mainBtns button").hide();
      $("#interactionsBtns button").hide();
      $("#goTask1, #goTask3").show();
  }
}
