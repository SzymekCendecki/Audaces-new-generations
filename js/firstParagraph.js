let workingFile = require("./workingFile.js");

module.exports.text = "Stoisz w swoim pokoju, w którym znajduje się tylko łóżko, szafa, mały stolik i drewniana skrzynia. Na stoliku leży zawniątko, które musisz oddać mnichowi w przygranicznej wiosce. Co robisz?";

module.exports.lookRoom = "Pokój jak pokój. Stół, łóżko, szafa, skrzynia.";

//funkcje dla szafy
//funkcja zamykania szafy
function closeWardrobe(where){
  let closeWardrobe = document.createElement("button");
  closeWardrobe.id = "closeWardrobe";
  closeWardrobe.innerText = "zamknij szafę";
  where.append(closeWardrobe);
}

//funkcja tworzenia przycisku zabierania płaszcza
function btnTakeCoat(where){
  let takeCoat = document.createElement("button");
  takeCoat.id = "takeCoatWardrobe";
  takeCoat.innerText = "weź płaszcz";
  where.append(takeCoat);
}

//zamykanie szafy
module.exports.closeWardrobe = function(){
  $("#closeWardrobe").on("click", function(){
     $("#description").empty();
   });
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

//zabieranie płaszcza
module.exports.takeCoat = function(equip){
	$("#takeCoatWardrobe").on("click", function(){
    equip.push("płaszcz");
    $(this).remove();
	});
}

//funkcje dla skrzyni
//zamykanie skrzyni
module.exports.closeChest = function(where){
  $("#closeChest").on("click", function(){
     $("#description").empty();
   });
 }

//funkcja brania pieniędzy ze skryni
function takeGold(equip, gold, amountGold, where){
$("#takeGoldChest").on("click", function(){
  amountGold = amountGold + 12;
  gold = "złoto: " + amountGold;
  equip.splice(0, 1, gold);
  $("#description").text("Niewielka drewniana skrzynia, bez żadnych żelaznych okuć. Jest pusta.");
  closeChest(where);
  $(this).remove();
});
}

 //funkcja tworzenia przycisku zamykania skrzyni
 function closeChest(where){
   let closeChest = document.createElement("button");
   closeChest.id = "closeChest";
   closeChest.innerText = "zamknij skrzynię";
   where.append(closeChest);
 }

//funkcja tworzenia przycisku zabierania złota
function btnTakeGold(where){
  let takeGold = document.createElement("button");
  takeGold.id = "takeGoldChest";
  takeGold.innerText = "weź złoto";
  where.append(takeGold);
}

module.exports.chest = function(equip, gold, amountGold, where){
if (amountGold === 0) {
  where.text("Niewielka drewniana skrzynia, bez żadnych żelaznych okuć. W środku znajduje się 12 sztuk złotych monet.");
takeGold(equip, gold, amountGold, where)
btnTakeGold(where);
closeChest(where);
}else if(amountGold > 0){
  where.text("Niewielka drewniana skrzynia, bez żadnych żelaznych okuć. Jest pusta.");
  closeChest(where);
  }
}
