//import funkcji z pliku zewnętrznego
let functions = require("./functions.js"); //podstawowe funkcje
let theGame = require("./theGame.js"); //gra
let heroCreator = require("./heroCreator.js");

let text1 = "Mówią, że Dzikie Pustkowia to kraina opuszczona przez Bogów.";

let text2 = "Pełna siedzib mrocznych kultów, wyrzutków społeczeństwa, krwiożerczych bestii i demonów, przywołanych czarną magią z innych wymiarów.";

let text3 = " Krąży wiele legend o ukrytych, nieprzebranych skarbach, o herosach - smokobójcach.";

let text4 = "Dzikie Pustkowia fascynuję i przerażają, jednak wielu śmiałków wędruje w tą część świata w poszukiwaniu bogactw i chwały.";

let text5 = "Większość nie wraca... ";

let text6 = "Twoja historia zaczyna się w mieście Erharuf.";

let text7 = " W ostatnim bezpiecznym mieście przed Dzikimi Pustkowiami.";

let text8 = "Na usilną prośbę znajomego kapłana zgadzasz się dostarczyć małą paczkę dla tamtejszego mnicha, rezydującego w niewielkiej wiosce, która leży tuż przy granicy z Dzikimi Pustkowiami.";

module.exports.intro = function(){
  setTimeout(function(){
    functions.newElement("p", "text1", text1, $("#mainPart"));
    functions.newElement("p", "text2", text2, $("#mainPart"));
    functions.newElement("p", "text3", text3, $("#mainPart"));
	  functions.newElement("p", "text4", text4, $("#mainPart"));
	  functions.newElement("p", "text5", text5, $("#mainPart"));
    functions.newElement("p", "text6", text6, $("#mainPart"));
	  functions.newElement("p", "text7", text7, $("#mainPart"));
	  functions.newElement("p", "text8", text8, $("#mainPart"));
      $("#text1, #text2, #text3, #text4, #text5, #text6, #text7, #text8").addClass("basicText center width100 medievalText fontSize11em");
  }, 100);

  setTimeout(function(){
    $("#text1, #text2, #text3, #text4, #text5, #text6, #text7, #text8").hide();
    functions.newElement("button", "features", "cechy", $("#heroBtns"));
    functions.newElement("button", "equip", "ekwipunek", $("#heroBtns"));
    functions.newElement("button", "skills", "umiejętności", $("#heroBtns"));
    functions.newElement("button", "tasks", "zadania", $("#heroBtns"));

    $("#features, #equip, #skills, #tasks").addClass("basicBtn btnNewGame");
    $("#equip, #skills").addClass("fontSize09em paddingUpDown1");

    functions.newElement("div", "info", "", $("#mainPart"));

  $("#features").on("click", ()=>{
    $("#info").html("<div class='width100 flexForBtns medievalText greenText, boldText fontSize1em zindex1 bckgGreen'><p>imię: <span class='blueText'>" + heroCreator.hero[0] + "</span></p><p>płeć: <span class='blueText'>" + heroCreator.hero[1] + "</span></p><p>rasa: <span class='blueText'>" + heroCreator.hero[2] + "</span></p><p>profesja: <span class='blueText'>" + heroCreator.hero[3] + "</p><button id='close'>zamknij</button></div>");

    $("#close").on("click", ()=>{ $("#info").empty(); });
  });

  $("#mainPart").append("<div class='basicText medievalText'>Stoisz w swoim pokoju, w którym znajduje się tylko łóżko, szafa, mały stolik i drewniana skrzynia. Na stoliku leży zawniątko, które musisz oddać mnichowi w przygranicznej wiosce. Co robisz?</div>");

  }, 30000);
}
