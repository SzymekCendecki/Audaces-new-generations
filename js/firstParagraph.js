let workingFile = require("./workingFile.js");

module.exports.text = "Stoisz w swoim pokoju, w którym znajduje się tylko łóżko, szafa, mały stolik i drewniana skrzynia. Na stoliku leży zawniątko, które musisz oddać mnichowi w przygranicznej wiosce. Co robisz?";

module.exports.lookRoom = "Pokój jak pokój. Stół, łóżko, szafa, skrzynia.";

//funkcja dla badania szafy
module.exports.wardrobe = function (sex, where){
  if(sex === "kobieta"){
		where.text( "Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłaś szafę, w której wisi płaszcz.");
	}else if(sex === "mężczyzna" || sex === "nie wiadomo"){
		where.text("Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłeś szafę, w której wisi płaszcz.");
	}
}
