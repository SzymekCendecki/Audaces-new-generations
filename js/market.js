let functions = require("./functions.js"); //podstawowe funkcje
let heroCreator = require("./heroCreator.js");

//funkcja kupowania przedmiotów
function buyItem (item, price, gold, equip){
          if(heroCreator.gold[0] >= price){
             heroCreator.equip.push(item);
             let newGold = (gold[0] - price);
             let newGoldFixed = newGold.toFixed(2);
             heroCreator.gold.splice(0, 1, newGoldFixed);

             $("#alerts").html("<p id='buyed' class='greenText medievalText boldText'>kupiono: <span class='blueText'>" + item + "</span></p>");
               setTimeout(function(){
               $("#buyed").remove();
             }, 5000);
            }else{
               $("#alerts").html("<p id='noGold' class='redText medievalText boldText'>brak złota</p>");
               setTimeout(function(){
                $("#noGold").remove();
              }, 5000);
           }
        }

//funkcja tworząca przyciski rzeczy, które można sprzedać
module.exports.btnsSell = function(gold, equip){
    $("#description").empty();
      functions.newElement("p", "sellItemMarket", "PRZEDMIOTY DO SPRZEDANIA", $("#description"));
      $("#sellItemMarket").addClass("boldText medievalText textUnderlineGold center width100 marginTop3 fontSize12em");

        for(let i=0; i<heroCreator.equip.length; i++){
          functions.newElement("button", heroCreator.equip[i], heroCreator.equip[i], $("#description"));
		  //.addClass("basicBtn width15 bckgGreen medievalText");
		    document.querySelectorAll("#description button")[i].onclick = function(){
                let newGold = (heroCreator.gold[0] + 0.5);
                heroCreator.gold.splice(0, 1, newGold);
                let thisText = $(this).text();
                if(heroCreator.equip.indexOf(thisText) !== -1){
                  heroCreator.equip.splice(heroCreator.equip.indexOf(thisText), 1);
                }

                $("#alerts").html("<p id='itSell' class='redText medievalText boldText'>sprzedano: <span class='blueText'>" + thisText + " za 0,35 szt. zł.</span></p>");
                $(this).remove();
                setTimeout(function(){
                    $("#itSell").remove();
                }, 5000);
              }
				$("#description button").addClass("basicBtn width15 bckgGreen medievalText");
				$("#paczka").addClass("bckgRed").prop("disabled", true);
          
            }
			functions.newElement("button", "closeBuy", "zamknij", $("#description"));
			$("#closeBuy").addClass("basicBtn bckgRed width15 bckgGreen medievalText").on("click", ()=>{ $("#description").empty(); });;
			
}
//pokazanie przycisków dla paragrafu targu
module.exports.showBtns = function(){
  $("#lookAroundStreet, #toMarket, #inRoom, #lookAroundCaravans, #ask, #agree").hide();
  $("#buy, #sell, #lookAroundMarket, #toStreet, #toCaravans").show();

  $("#toStreet, #buy, #sell, #lookAroundMarket").addClass("basicBtn");
  $("#lookAroundMarket").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
  $("#buy, #toStreet").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
  $("#sell").addClass("bckgYellow medievalText marginTop4 shadowForBtn");
}

//teks główny dla paragrafu targ
module.exports.textMarket = function(){
  $("#mainPart").html("<div class='basicText medievalText'>Stoisz na środku placu targowego. Wokół widzisz stragany, na których możesz kupić potrzebne rzeczy. Co robisz?</div><div id='description'></div>");
}

//zdarzenie dla przyciku kup
module.exports.buy = function(){
  $("#description").html("<div class='basicText medievalText flexForBtns'><p class='boldText medievalText textUnderlineGold center width100'>TOWAR DO KUPIENIA</p><button id='tent' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>namiot - 5szt.</button><button id='bag' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1'>torba - 1szt.</button><button id='saddleCloth' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1'>derka - 1szt.</button><button id='lamp' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1'>lampa - 1szt.</button><button id='rope' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1'>lina - 1szt.</button><button id='food' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>racja żyw. - 1szt.</button><button id='dagger' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>sztylet - 8szt.</button><button id='crossbow' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>kusza - 12szt.</button><button id='saddle' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>siodło - 10szt.</button><button id='wooddenStick' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>drew. pałka - 4szt.</button><button id='buckler' class='basicBtn bckgGreen medievalText marginTop4 shadowForBtn width15 fontSize08em paddingUpDown1'>puklerz - 12szt.</button><button id='closeBuy' class='basicBtn bckgRed medievalText marginTop4 shadowForBtn width15 fontSize09em paddingUpDown1'>zamknij</button></div>");

  //zdarzenia dla przycisków kupowania
  $("#tent").on("click", function(){ buyItem("namiot", 5, heroCreator.gold, heroCreator.equip); });
  $("#bag").on("click", function(){ buyItem("torba", 1, heroCreator.gold, heroCreator.equip); });
  $("#saddleCloth").on("click", function(){ buyItem("derka", 1, heroCreator.gold, heroCreator.equip); });
  $("#lamp").on("click", function(){ buyItem("lampa", 1, heroCreator.gold, heroCreator.equip); });
  $("#rope").on("click", function(){ buyItem("lina", 1, heroCreator.gold, heroCreator.equip); });
  $("#food").on("click", function(){ buyItem("racja żyw.", 1, heroCreator.gold, heroCreator.equip); });
  $("#dagger").on("click", function(){ buyItem("sztylet", 8, heroCreator.gold, heroCreator.equip); });
  $("#crossbow").on("click", function(){ buyItem("namiot", 10, heroCreator.gold, heroCreator.equip); });
  $("#saddle").on("click", function(){ buyItem("siodło", 12, heroCreator.gold, heroCreator.equip); });
  $("#woodenStick").on("click", function(){ buyItem("drew. pałka", 4, heroCreator.gold, heroCreator.equip); });
  $("#buckler").on("click", function(){ buyItem("puklerz", 12, heroCreator.gold, heroCreator.equip); });
  $("#closeBuy").on("click", ()=>{ $("#description").empty(); });
}
