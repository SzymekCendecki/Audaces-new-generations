//funkcja, która tworzy nowy element DOM
module.exports.newElement = function(nameElement, idName, text, whereAppend){
  let newElement = document.createElement(nameElement);
  newElement.id = idName;
  newElement.innerText = text;
  whereAppend.append(newElement);
}

function newElement(nameElement, idName, text, whereAppend){
  let newElement = document.createElement(nameElement);
  newElement.id = idName;
  newElement.innerText = text;
  whereAppend.append(newElement);
}

//funkcja optymalizująca tworzenie inputów
function createNewInputAppend(nameElement, name, id, value, type, whereAppend){
	let newElement = document.createElement(nameElement);
  newElement.type = type;
	newElement.name = name;
  newElement.id = id;
  newElement.value = value;
  whereAppend.append(newElement);
}

//funkcja klik dla pierwszego menu
module.exports.clickFirstMenu = function(element, element2, idElement, textElement){
	element.on("click", () =>{
		element2.children("p").remove();
		newElement("p", idElement, textElement, element2);
    element2.addClass("basicText medievalText");
	});
}

//funkcja optymalizująca wybieranie rasy i profesji
  function clickRaceOccupation(element, text, number, sourceDescription, alert){
    element.on("click", ()=>{
      hero.splice(number, 1, text);
      alert.addClass("greenText");
      $("#choosenDescription").text(sourceDescription);

    if(text === "wojownik"){ choosenOccupation.splice(0, 1, 5);
      choosenOccupation.splice(1, 1, 5);
      choosenOccupation.splice(2, 1, 0);
      choosenOccupation.splice(3, 1, 0);
      choosenOccupation.splice(4, 1, 0);
    }else if(text === "złoczyńca"){
      choosenOccupation.splice(0, 1, 0);
      choosenOccupation.splice(1, 1, 0);
      choosenOccupation.splice(2, 1, 10);
      choosenOccupation.splice(3, 1, 0);
      choosenOccupation.splice(4, 1, 0);
    }else if(text === "czarodziej"){
      choosenOccupation.splice(0, 1, 0);
      choosenOccupation.splice(1, 1, 0);
      choosenOccupation.splice(2, 1, 0);
      choosenOccupation.splice(3, 1, 5);
      choosenOccupation.splice(4, 1, 5);
    }else if(text === "człowiek"){ choosenRace.splice(0, 1, 0);
      choosenRace.splice(1, 1, 0); choosenRace.splice(2, 1, 0);
      choosenRace.splice(3, 1, 0); choosenRace.splice(4, 1, 0);
    }else if(text === "elf"){ choosenRace.splice(0, 1, -5);
      choosenRace.splice(1, 1, -5); choosenRace.splice(2, 1, 0);
      choosenRace.splice(3, 1, 5); choosenRace.splice(4, 1, 5);
    }else if(text === "krasnolud"){ choosenRace.splice(0, 1, 4);
      choosenRace.splice(1, 1, 4); choosenRace.splice(2, 1, 0);
      choosenRace.splice(3, 1, -2); choosenRace.splice(4, 1, -3);
    }else if(text === "ork"){ choosenRace.splice(0, 1, 5);
      choosenRace.splice(1, 1, 5); choosenRace.splice(2, 1, 0);
      choosenRace.splice(3, 1, -5);	choosenRace.splice(4, 1, -5);
    } }); }
