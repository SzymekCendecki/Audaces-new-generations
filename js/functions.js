//funkcja, która tworzy nowy element DOM
module.exports.newElement = function(nameElement, idName, text, whereAppend){
  let newElement = document.createElement(nameElement); newElement.id = idName;
  newElement.innerText = text; whereAppend.append(newElement); }

function newElement(nameElement, idName, text, whereAppend){ let newElement = document.createElement(nameElement); newElement.id = idName; newElement.innerText = text;
  whereAppend.append(newElement); }

//funkcja optymalizująca tworzenie inputów
function createNewInputAppend(nameElement, name, id, value, type, whereAppend){ let newElement = document.createElement(nameElement); newElement.type = type; newElement.name = name; newElement.id = id; newElement.value = value; whereAppend.append(newElement); }

//funkcja klik dla pierwszego menu
module.exports.clickFirstMenu = function(element, element2, idElement, textElement){
element.on("click", () =>{ element2.children("p").remove(); newElement("p", idElement, textElement, element2); element2.addClass("basicText medievalText"); }); }

//-----------------funkcje "ręcznego" tworzenia postaci----------------//
//funkcja czyszczenia diva interactionCreator, dodawania diva description oraz tytułu głównego
module.exports.clearStart = function(text){ $("#interactionCreator").empty();    newElement("div", "description", "", $("#interactionCreator"));    $("#interactionCreator").addClass("width100"); newElement("p", "title", text, $("#interactionCreator")); $("#title").addClass("basicText medievalText textUnderlineGold"); }

//funkcja tworzenia opisu głównego w "ręcznym" tworzeniu postaci
module.exports.description = function(text2){ newElement("p", "descriptionName", "", $("#interactionCreator")); $("#descriptionName").html("<p id='text'>" + text2 + "</p>");
$("#descriptionName").addClass("medievalText boldText marginTop3"); }

//jedna funkcja dla wyboru rasy
module.exports.oneRace = function(hero, text){ hero.splice(2, 1, text); $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>" + text + "</span></p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); }

//jedna funkcja dla wyboru profesji
module.exports.oneOccupation = function(hero, text){ hero.splice(3, 1, text); $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana profesja to: <span class='blueText'>" + text + "</span></p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); }

//funckcja zliczająca punkty cech w zależności od rasy, profesji oraz wylosowanej liczby
module.exports.randomPoints = function(occupationsPoints, racePoints, text, table, tablePosition){ let randomPoints = Math.round(Math.random()*50); let allPoints = randomPoints + occupationsPoints + racePoints;	$("#drawnCharacter").append(`<p class = "basicText center width20 medievalText fontSize11em">` + text + `: <span class="greenText">${allPoints}</span></p>`); table.splice(tablePosition, 1, allPoints); }

//funkcja optymalizująca wybieranie rasy i profesji
  function clickRaceOccupation(element, text, number, sourceDescription, alert){
  element.on("click", ()=>{ hero.splice(number, 1, text); alert.addClass("greenText");
  $("#choosenDescription").text(sourceDescription);

  if(text === "wojownik"){ choosenOccupation.splice(0, 1, 5); choosenOccupation.splice(1, 1, 5); choosenOccupation.splice(2, 1, 0); choosenOccupation.splice(3, 1, 0);     choosenOccupation.splice(4, 1, 0);
  }else if(text === "złoczyńca"){choosenOccupation.splice(0, 1, 0); choosenOccupation.splice(1, 1, 0); choosenOccupation.splice(2, 1, 10);
  choosenOccupation.splice(3, 1, 0); choosenOccupation.splice(4, 1, 0);
  }else if(text === "czarodziej"){ choosenOccupation.splice(0, 1, 0);       choosenOccupation.splice(1, 1, 0);choosenOccupation.splice(2, 1, 0);
  choosenOccupation.splice(3, 1, 5); choosenOccupation.splice(4, 1, 5);
  }else if(text === "człowiek"){ choosenRace.splice(0, 1, 0); choosenRace.splice(1, 1, 0);   choosenRace.splice(2, 1, 0); choosenRace.splice(3, 1, 0); choosenRace.splice(4, 1, 0);
  }else if(text === "elf"){ choosenRace.splice(0, 1, -5); choosenRace.splice(1, 1, -5);
  choosenRace.splice(2, 1, 0); choosenRace.splice(3, 1, 5); choosenRace.splice(4, 1, 5);
  }else if(text === "krasnolud"){ choosenRace.splice(0, 1, 4); choosenRace.splice(1, 1, 4);
  choosenRace.splice(2, 1, 0); choosenRace.splice(3, 1, -2); choosenRace.splice(4, 1, -3);
  }else if(text === "ork"){ choosenRace.splice(0, 1, 5); choosenRace.splice(1, 1, 5); choosenRace.splice(2, 1, 0); choosenRace.splice(3, 1, -5);	choosenRace.splice(4, 1, -5);
} }); }

//funkcja akceptowania imienia
module.exports.acceptName = function(hero){$("#acceptName").on("click", () =>{ let nameInput = $("#giveName").val().replace(/\d/g,''); if(nameInput == ""){ $("#alerts").html("<p class='redText boldText fontSize12em medievalText'>nie wybrano imienia</p>");
}else{ hero.splice(0, 1, nameInput); $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrane imię to: <span class='blueText'>" + nameInput + "</span></p>"); } setTimeout(function(){ $("#alerts").empty(); }, 5000);}); }
