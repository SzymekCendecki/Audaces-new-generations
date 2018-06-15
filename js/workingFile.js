let intro = require("./firstMenu.js");
let heroCreator = require("./heroCreator.js");

document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

//funkcja, która tworzy nowy element DOM
function createNewElementAppend(nameElement, idName, text, whereAppend){
		let newElement = document.createElement(nameElement);
		newElement.id = idName;
		newElement.innerText = text;
		whereAppend.append(newElement);
	}

//utworzenie przycisków pierwszego menu
  createNewElementAppend("p", "titleGameHeader", "AUDACES", $("header"));
  createNewElementAppend("p", "subTitleGameHeader", "serce ze stali", $("#titleGameHeader"));
  createNewElementAppend("button", "info", "info", $("nav"));
  createNewElementAppend("button", "licence", "licencja", $("nav"));
  createNewElementAppend("button", "tutorial", "tutorial", $("nav"));
  createNewElementAppend("button", "newGame", "Nowa Gra", $("nav"));

	//utworzenie przycisków kreatora
	createNewElementAppend("button", "name", "imię", $("nav"));
	createNewElementAppend("button", "race", "rasa", $("nav"));
	createNewElementAppend("button", "occupation", "profesja", $("nav"));
	createNewElementAppend("button", "features", "cechy", $("nav"));
	createNewElementAppend("button", "features2", "cechy 2", $("nav"));
	createNewElementAppend("button", "equipment", "ekwipunek", $("nav"));
	createNewElementAppend("button", "skills", "umiejętności", $("nav"));
	createNewElementAppend("button", "infoCreator", "info", $("nav"));

//showanie przycisków pierszego menu
$("#info, #licence, #tutorial, #newGame, #titleGameHeader, #subTitleGameHeader").hide();

//schowanie przycisków kreatora
$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").hide();

//schowanie i usunięcie nazwy studia oraz sentencji
$("#studioTitle").fadeOut(6000);

//pokazanie tytułu i podtytułu gry
setTimeout(() =>{
  $("#studioTitle h2").replaceWith("<p class='medievalText gameTitle'>Audaces</p>");
  $("#studioTitle h3").replaceWith("<p class='medievalText subGameTitle'>serce z żelaza</p>");
  $("#studioTitle").fadeIn(6000);
  $("#studioTitle").delay(2000).fadeOut(6000);
}, 6200);

//zmiana koloru tła na beżowy
setTimeout(() =>{
  $("body").css("backgroundColor", "beige");
}, 19000);

//usunięcie diva o id studioTitle
setTimeout(()=>{
  $("#studioTitle").remove();
    $("#titleGameHeader, #subTitleGameHeader").fadeIn(1500);
    $("#info, #licence, #tutorial, #newGame").fadeIn(1500).addClass("basicBtn");
    $("#info").addClass("btnInfo");
    $("#licence").addClass("btnLicence");
    $("#tutorial").addClass("btnTutorial");
    $("#newGame").addClass("btnNewGame");
		createNewElementAppend("p", "textHello", intro.textHello, $("#mainPart"));
		$("#textHello").addClass("basicText");
}, 20000);

//funkcje dla pierwszego menu
$("#info").on("click", () =>{
	$("#mainPart").children("p").remove();
  createNewElementAppend("p", "textInfo", intro.textInfo, $("#mainPart"));
	$("#textInfo").addClass("basicText");
});

$("#licence").on("click", () =>{
	$("#mainPart").children("p").remove();
  createNewElementAppend("p", "textLicence", intro.textLicence, $("#mainPart"));
	$("#textLicence").addClass("basicText");
});

$("#tutorial").on("click", () =>{
	$("#mainPart").children("p").remove();
  createNewElementAppend("p", "textTutorial", intro.textTutorial, $("#mainPart"));
	$("#textTutorial").addClass("basicText");
});

//przycisk nowej gry - tworzenie kretora postaci
$("#newGame").on("click", () =>{
	$("#mainPart").children("p").remove();
	$("#info, #licence, #tutorial, #newGame").fadeOut();
	$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").fadeIn();
	$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").addClass("basicBtn");

	$("#name").on("click", function(){
		createNewElementAppend("p", "nameTitle", heroCreator.nameTitle, $("#mainPart"));
		createNewElementAppend("p", "nameDescription", heroCreator.nameDescription, $("#mainPart"));
		$("#nameTitle").addClass("goldUnderline basicText");
		createNewElementAppend("input", "giveName", "", $("#mainPart"));
		createNewElementAppend("button", "acceptName", "zatwierdź", $("#mainPart"));
	});
});


});
