function createNewElementAppend(nameElement, idName, text, whereAppend, addedClass){
let newElement = document.createElement(nameElement);
newElement.id = idName;	newElement.innerText = text;
whereAppend.append(newElement); newElement.classList.add(addedClass);
newElement.classList.remove("undefined");
}

let text = "Na ostatnim wozie okazało się, że jest jeszcze sporo miejsca, dzięki czemu będzie można podróżować dość wygodnie. Po kilkunastu minutach karawana ruszyła...";


module.exports.startVoyageText = function(){
  createNewElementAppend("p", "startVoyageText", text, $("#mainPart"));
}
