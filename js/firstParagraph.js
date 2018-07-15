let workingFile = require("./workingFile.js");

module.exports.text = "Stoisz w swoim pokoju, w którym znajduje się tylko łóżko, szafa, mały stolik i drewniana skrzynia. Na stoliku leży zawniątko, które musisz oddać mnichowi w przygranicznej wiosce. Co robisz?";

module.exports.lookRoom = "Pokój jak pokój. Stół, łóżko, szafa, skrzynia.";

//funkcja zamykania szafy
function closeWardrobe(where){
  let closeWardrobe = document.createElement("button");
  closeWardrobe.id = "closeWardrobe";
  closeWardrobe.innerText = "zamknij szafę";
  where.append(closeWardrobe);
}

//funkcja zabierania płaszcza
function btnTakeCoat(where){
  let takeCoat = document.createElement("button");
  takeCoat.id = "takeCoatWardrobe";
  takeCoat.innerText = "weź płaszcz";
  where.append(takeCoat);
}


//funkcja dla badania szafy
module.exports.wardrobe = function (sex, where, equip){
  //gdy płaszcz jest ekwipunku
  if (equip.indexOf('płaszcz') !== -1) {
    if(sex === "kobieta"){
      where.text( "Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłaś szafę. Jest pusta.");
	  closeWardrobe(where);

  }else if(sex === "mężczyzna" || sex === "nie wiadomo"){
      where.text("Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłeś szafę. Jest pusta.");
	   closeWardrobe(where);
    }
  }
//gdy nie płaszcza w ekwipunku
  else{ if(sex === "kobieta"){
     where.text( "Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłaś szafę, w której wisi płaszcz.");
  btnTakeCoat(where);
  closeWardrobe(where);
 }else if(sex === "mężczyzna" || sex === "nie wiadomo"){
   where.text("Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłeś szafę, w której wisi płaszcz.");
   btnTakeCoat(where);
   closeWardrobe(where);}
  }
}

//zamykanie szafy
module.exports.closeWardrobe = function(){
  $("#closeWardrobe").on("click", function(){
     $("#description").empty();
   });
 }

//zabieranie płaszcza
module.exports.takeCoat = function(equip){
	$("#takeCoatWardrobe").on("click", function(){
    equip.push("płaszcz");
    $(this).remove();
	});
}
