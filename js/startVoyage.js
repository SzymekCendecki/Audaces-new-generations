let firstFight = require("./firstFight.js");

//tekst startu podróży
let text = "Na ostatnim wozie okazało się, że jest jeszcze sporo miejsca, dzięki czemu będzie można podróżować dość wygodnie. Po kilkunastu minutach karawana ruszyła...";

module.exports.startVoyageText = function(){
	$("#textP").append(text);
}

module.exports.further = function(){
	$("#further").on("click", ()=>{
		$("#textP").empty();
		$("#further").hide();
		$("#voyage").show();
		firstFight.firstFight();
	});
}
