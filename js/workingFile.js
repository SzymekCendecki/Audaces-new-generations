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

//showanie przycisków pierszego menu
$("#info, #licence, #tutorial, #newGame, #titleGameHeader, #subTitleGameHeader").hide();

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
}, 20000);



});
