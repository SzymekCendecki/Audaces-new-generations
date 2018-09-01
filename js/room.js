let heroCreator = require("./heroCreator.js");

//zawartość zdarzenia dla przycisku rozejrzyj się
module.exports.lookAround = function(){
  $("#description").html("<p class='basicText medievalText'>Rozglądasz się po pokoju. Widzisz drewnianą szafę, stojącą w rogu pokoju. Pod oknem stoi niewielka, drewniana skrzynia. Naprzeciw drzwi stoi łóżko. W pomieszczeniu niemiłosiernie wali stęchlizną i kupą szczurów.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginTop4'>zamknij</button>");
  $("#close").on("click", ()=>{ $("#description").empty(); });
}

//zawartość zdarzenia dla przycisku szafa
module.exports.wardrobe = function(){
  if(heroCreator.equip.indexOf('płaszcz') !== -1) {
    if(heroCreator.hero[1] === "kobieta"){
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłaś szafę. Jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#close").on("click", ()=>{
         $("#description").empty();
       });
    }else if(heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo"){
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłeś szafę. Jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#close").on("click", ()=>{
        $("#description").empty();
     });
    }
  }else{
    if(heroCreator.hero[1] === "kobieta"){
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłaś szafę, w której wisi płaszcz.</p><button id='coat' class='basicBtn bckgGreen medievalText whiteTextShadow11 width15 boldText'>weź płaszcz</button><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#coat").on("click", ()=>{
        heroCreator.equip.push("płaszcz");
        $("#coat").remove(); });
      $("#close").on("click", ()=>{
        $("#description").empty();
      });
    }else if(heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo"){
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłeś szafę, w której wisi płaszcz.</p><button id='coat' class='basicBtn bckgGreen medievalText whiteTextShadow11 width15 boldText'>weź płaszcz</button><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#coat").on("click", ()=>{
        heroCreator.equip.push("płaszcz");
        $("#coat").remove();
      });
      $("#close").on("click", ()=>{
        $("#description").empty();
      });
    }
  }
}

//zdarzenia dla przycisku skrzynia
module.exports.chest = function(){
  if(heroCreator.gold[0] > 0) {
    if(heroCreator.hero[1] === "kobieta"){
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłaś skrzynię. Jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#close").on("click", ()=>{
         $("#description").empty();
       });
    }else if(heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo"){
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłeś skrzynię. Jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#close").on("click", ()=>{
        $("#description").empty();
     });
    }
  }else{
    if(heroCreator.hero[1] === "kobieta"){
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłaś skrzynię, w której znajduje się 12 sztuk złota.</p><button id='coat' class='basicBtn bckgGreen medievalText whiteTextShadow11 width15 boldText'>weź złoto</button><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#coat").on("click", ()=>{
        heroCreator.gold.splice(0, 1, 12);
      $("#description").html("<p class='basicText medievalText boldText'>Skrzynia jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
        $("#close").on("click", ()=>{ $("#description").empty(); });
      });
      $("#close").on("click", ()=>{ $("#description").empty(); });
    }else if(heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo"){
      $("#description").html("<p class='basicText medievalText boldText'>Otworzyłeś skrzynię, w której znajduje się 12 sztuk złota.</p><button id='coat' class='basicBtn bckgGreen medievalText whiteTextShadow11 width15 boldText'>weź złoto</button><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
      $("#coat").on("click", ()=>{
        heroCreator.gold.splice(0, 1, 12);
        $("#description").html("<p class='basicText medievalText boldText'>Skrzynia jest pusta.</p><button id='close' class='bckgRed fontSize12em width15 boldText medievalText whiteTextShadow11 paddingUpDown1 marginLeft10 marginTop4'>zamknij</button>");
          $("#close").on("click", ()=>{ $("#description").empty(); });
      });
      $("#close").on("click", ()=>{ $("#description").empty(); });
    }
  }
}
