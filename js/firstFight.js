let workingFile = require("./workingFile.js");

//funkcja, która tworzy nowy element DOM
function createNewElementAppend(nameElement, idName, text, whereAppend, addedClass){
let newElement = document.createElement(nameElement);
newElement.id = idName;	newElement.innerText = text;
whereAppend.append(newElement); newElement.classList.add(addedClass);
newElement.classList.remove("undefined"); }

//tekst pierwszej walki
let text = "Jedziecie sobie spokojnie. Czas mija na oglądaniu pejzaży z jadącego wozu. Niestety ta sielanka skończyła się wieczorem drugiego dnia. Zaczęło się od zawalonej, przez drzewa drogi. Gdy uczestnicy, z pierwszych wozów karawany uprzątali drzewa, nastąpił atak. Wszyscy muszą walczyć!. Ciebie atakuje jeden bandyta z wielkim mieczem.";

module.exports.firstFight = function(){
	$("#textP").text(text);
	$("#voyage").prop("disabled", true);
	  createNewElementAppend("button", "prepareToBattle", "przygotuj się", $("nav"));

		$("#prepareToBattle").on("click", ()=>{
			createNewElementAppend("p", "prepareToBattleTitle", "Wybierz maksymalnie trzy rzeczy, które będziesz używać w trakcie walki.", $("#description"));

			createNewElementAppend("p", "equipList", "", $("#description"));

			for(let i=0; i<workingFile.e.length; i++){
				let weaponBtn = document.createElement("button");
				weaponBtn.id = workingFile.e[i];
				weaponBtn.innerText = workingFile.e[i];
				$("#equipList").append(weaponBtn);
				$("#description button").addClass("weaponList");
	 }

	 	$("#paczka").prop("disabled", true);

		});
}
