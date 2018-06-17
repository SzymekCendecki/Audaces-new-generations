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

	//tablice
	// tablica postaci 0 - imię, 1 - rasa, 2 - profesja, 3 - siła, 4 - wytrzymałość, 5 - zręczność, 6 - inteligencja, 7 - charyzma, 8 - płeć, 9 - kolor włosów, 10 - kolor oczu, 11 - waga, 12 - wzrost, 13 - kolor skóry
	let hero = [];

	//tablica ekwipunku max 5 elementów
	let equip = [];

	//tablica umiejętności max 3 elementy
	let skills = [];

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
	$("#mainPart").empty();
	$("#info, #licence, #tutorial, #newGame").fadeOut();
	$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").fadeIn();
	$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").addClass("basicBtn");

//tworzenie czerwonych paragrafów w części alertowej - zmieniają kolor na zielony po wybraniu
	createNewElementAppend("p", "nameAlert", heroCreator.nameAlert, $("#alerts"));
	createNewElementAppend("p", "raceAlert", heroCreator.raceAlert, $("#alerts"));
	createNewElementAppend("p", "occupationAlert", heroCreator.occupationAlert, $("#alerts"));
	$("#nameAlert, #raceAlert, #occupationAlert").addClass("redText");

//zdarzenia dla przycisku imię (name)
	$("#name").on("click", ()=>{
		$("#mainPart").empty();
		createNewElementAppend("p", "nameTitle", heroCreator.nameTitle, $("#mainPart"));
		$("#nameTitle").addClass("goldUnderline basicText");
		createNewElementAppend("p", "nameDescription", heroCreator.nameDescription, $("#mainPart"));
		createNewElementAppend("input", "giveName", "", $("#mainPart"));
		createNewElementAppend("button", "acceptName", "zatwierdź", $("#mainPart"));
		$("#acceptName").on("click", () =>{
			let nameInput = $("#giveName").val().replace(/\d/g,'');
			if(nameInput == ""){
				$("#nameAlert").addClass("redText");
			}else{
			hero.splice(0, 1, nameInput);
			$("#nameAlert").addClass("greenText");
		}
		});
	});//koniec zdarzeń dla przycisku imię

	//zdarzenia dla przyciku rasa (race)
	$("#race").on("click", ()=>{
		$("#mainPart").empty();
		createNewElementAppend("p", "raceTitle", heroCreator.raceTitle, $("#mainPart"));
		$("#raceTitle").addClass("goldUnderline basicText");
		createNewElementAppend("p", "raceDescription", heroCreator.raceDescription, $("#mainPart"));
		createNewElementAppend("button", "human", "człowiek", $("#mainPart"));
		createNewElementAppend("button", "elv", "elf", $("#mainPart"));
		createNewElementAppend("button", "dwarf", "krasnolud", $("#mainPart"));
		createNewElementAppend("button", "orc", "ork", $("#mainPart"));
		$("#human, #elv, #dwarf, #orc").addClass("basicBtn");
		createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

		$("#human").on("click", ()=>{
				hero.splice(1, 1, "człowiek");
				$("#raceAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.human);
		});

		$("#elv").on("click", ()=>{
				hero.splice(1, 1, "elf");
				$("#raceAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.elv);
		});

		$("#dwarf").on("click", ()=>{
				hero.splice(1, 1, "krasnolud");
				$("#raceAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.dwarf);
		});

		$("#orc").on("click", ()=>{
				hero.splice(1, 1, "ork");
				$("#raceAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.orc);
		});
	});//koniec zdarzeń dla przycisku rasa

//zdarzenia dla przyciku profesja (occupation)
	$("#occupation").on("click", ()=>{
		$("#mainPart").empty();
		createNewElementAppend("p", "occupationTitle", heroCreator.occupationTitle, $("#mainPart"));
		$("#occupationTitle").addClass("goldUnderline basicText");
		createNewElementAppend("p", "occupationDescription", heroCreator.occupationDescription, $("#mainPart"));
		createNewElementAppend("button", "warrior", "wojownik", $("#mainPart"));
		createNewElementAppend("button", "criminal", "złoczyńca", $("#mainPart"));
		createNewElementAppend("button", "wizard", "czarodziej", $("#mainPart"));
		$("#warrior, #criminal, #wizard").addClass("basicBtn");
		createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

		$("#warrior").on("click", ()=>{
				hero.splice(2, 1, "wojownik");
				$("#occupationAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.warrior);
		});

		$("#criminal").on("click", ()=>{
				hero.splice(2, 1, "złoczyńca");
				$("#occupationAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.criminal);
		});

		$("#wizard").on("click", ()=>{
				hero.splice(2, 1, "czrodziej");
				$("#occupationAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.wizard);
		});

	});//koniec zdarzeń dla przycisku profesja
}); //koniec przycisku nowa gra (newGame)


});//koniec DOMContentLoaded
