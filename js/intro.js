//import funkcji z pliku zewnętrznego
let functions = require("./functions.js"); //podstawowe funkcje
let theGame = require("./theGame.js"); //gra
let heroCreator = require("./heroCreator.js");
let room = require("./room.js");
let street = require("./street.js");
let market = require("./market.js");
let caravans = require("./caravans.js");

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

    //utworzenie głownych przycisków: cechy, ekwipunek, umijętności i zadania
    functions.newElement("button", "features", "cechy", $("#heroBtns"));
    functions.newElement("button", "equip", "ekwipunek", $("#heroBtns"));
    functions.newElement("button", "skills", "umiejętności", $("#heroBtns"));
    functions.newElement("button", "tasks", "zadania", $("#heroBtns"));
    $("#features, #equip, #skills, #tasks").addClass("basicBtn btnNewGame");
    $("#equip, #skills").addClass("fontSize09em paddingUpDown1");

    //utworzenie przyciku wyjdź dla paragrafu pierwszego - pokoju - w tym miejscu zablokowane odpalenie zdarzenia
    functions.newElement("button", "outRoom", "wyjdź", $("#mainBtns"));
    $("#outRoom").prop("disabled", true);

    //utworzenie przycisków interakcji dla pierwszego paragrafu - pokoju
    functions.newElement("button", "lookAroundRoom", "rozejrzyj się", $("#interactionsBtns"));
    functions.newElement("button", "wardrobe", "szafa", $("#interactionsBtns"));
    functions.newElement("button", "chest", "skrzynia", $("#interactionsBtns"));
    functions.newElement("button", "package", "paczka", $("#interactionsBtns"));

    $("#outRoom, #lookAroundRoom, #wardrobe, #chest, #package").addClass("basicBtn");
    $("#outRoom").addClass("bckgRed medievalText marginTop4 shadowForBtn");
    $("#lookAroundRoom").addClass("bckgBlue medievalText marginTop4 shadowForBtn fontSize09em paddingUpDown1");
    $("#wardrobe, #chest").addClass("bckgGreen medievalText marginTop4 shadowForBtn");
    $("#package").addClass("bckgYellow medievalText marginTop4 shadowForBtn marginTop4");

    //utworzenie przycisków interakcji dla drugiego paragrafu - ulicy
    functions.newElement("button", "inRoom", "wejdź", $("#mainBtns"));
    functions.newElement("button", "toCaravans", "karawany", $("#mainBtns"));
    functions.newElement("button", "toMarket", "targ", $("#mainBtns"));
    functions.newElement("button", "lookAroundStreet", "rozejrzyj się", $("#interactionsBtns"));

    //ukrycie przycisków drugiego paragrafu
      $("#lookAroundStreet, #inRoom, #toCaravans, #toMarket").hide();

  //utworzenie przycisków dla paragrafu targ
    functions.newElement("button", "buy", "kup", $("#interactionsBtns"));
    functions.newElement("button", "sell", "sprzedaj", $("#interactionsBtns"));
    functions.newElement("button", "lookAroundMarket", "rozejrzyj się", $("#interactionsBtns"));

    $("#buy, #sell, #lookAroundMarket").hide();

  //utworzenie przycisków interakcji dla paragrafu - postoju karawan
    functions.newElement("button", "toStreet", "ulica", $("#mainBtns"));
    functions.newElement("button", "lookAroundCaravans", "rozejrzyj się", $("#interactionsBtns"));
    functions.newElement("button", "ask", "zapytaj", $("#interactionsBtns"));

    $("#toStreet, #lookAroundCaravans, #ask").hide();

    //główny tekst opisowy dla paragrafu - pokój - paragraf pierwszy
    room.textRoom();

//utworzenie "okna dialogowego"
    functions.newElement("div", "info", "", $("header"));

//utworzenie "pomocniczego" diva opisującego paragraf - lokację, w której znajduje się aktualnie gracz
    functions.newElement("div", "description", "", $("#mainPart"));

//zdarzenie dla przycisków głownych: cechy, ekwipunek, umiejętności zadania
  $("#features").on("click", ()=>{ theGame.btnFeatures(); });
  $("#equip").on("click", ()=>{ theGame.btnEquip(); });
  $("#skills").on("click", ()=>{ theGame.btnSkills(); });
  $("#tasks").on("click", ()=>{ theGame.btnTasks(); });

  //zdarzenia dla przycisków interakcji pierwszego paragrafu - pokój
  //zdarzenie rozglądania się
  $("#lookAroundRoom").on("click", ()=>{ room.lookAround(); });
  //zdarzenie dla szafy
  $("#wardrobe").on("click", ()=>{ room.wardrobe(); });
  //zdarzenie dla skrzyni
  $("#chest").on("click", ()=>{ room.chest(); });
  //zdarzenie dla paczki
  $("#package").on("click", ()=>{ room.package(); });
  //zdarzenie dla wyjścia z pokoju
  $("#outRoom").on("click", ()=> { room.outRoom(); street.showBtns(); street.textStreet(); });

  //zdarzenia dla przycisków interakcji drugiego paragrafu - ulica
  $("#inRoom").on("click", ()=>{ $("#inRoom, #toCaravans, #toMarket, #lookAroundStreet").hide();    $("#wardrobe, #chest, #outRoom").show(); room.textRoom(); });
  $("#lookAroundStreet").on("click", ()=>{ street.lookAroundStreet(); });

//zdarzenia dla interakcji paragrafu - targ
$("#toMarket").on("click", ()=>{ market.showBtns(); market.textMarket(); });
$("#buy").on("click", ()=>{ market.buy(); });
$("#sell").on("click", ()=>{ market.btnsSell(); });

//zdarzenia dla interakcji paragrafu - karawany
  $("#toCaravans").on("click", ()=>{ caravans.showBtns(); caravans.textCaravans(); });
  $("#lookAroundCaravans").on("click", ()=>{ caravans.lookAroundCaravans(); });
  $("#ask").on("click", ()=>{ caravans.ask(); });

$("#toStreet").on("click", ()=>{ $("#toStreet, #toMarket, #lookAroundCaravans, #ask, #agree, #buy, #sell, #lookAroundMarket").hide(); $("#inRoom, #toCaravans, #toMarket, #lookAroundStreet").show(); street.textStreet(); });


  }, 30000);
}
