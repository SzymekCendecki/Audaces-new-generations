let workingFile = require("./workingFile.js");

module.exports.text = "Stoisz w swoim pokoju, w którym znajduje się tylko łóżko, szafa, mały stolik i drewniana skrzynia. Na stoliku leży zawniątko, które musisz oddać mnichowi w przygranicznej wiosce. Co robisz?";

module.exports.lookRoom = "Pokój jak pokój. Stół, łóżko, szafa, skrzynia.";

//funkcja dla badania szafy
module.exports.wardrobe = function (sex, where, equip){
  //gdy płaszcz jest ekwipunku
  if (equip.indexOf('płaszcz') !== -1) {
    if(sex === "kobieta"){
      where.text( "Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłaś szafę. Jest pusta.");
  }else if(sex === "mężczyzna" || sex === "nie wiadomo"){
      where.text("Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłeś szafę. Jest pusta.");
    }
  }

//gdy nie płaszcza w ekwipunku
  else{
    if(sex === "kobieta"){
      where.text( "Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłaś szafę, w której wisi płaszcz.");

      let takeCoat = document.createElement("button");
      takeCoat.id = "coatWardrobe";
      takeCoat.innerText = "weź płaszcz";
      where.append(takeCoat);

      let closeWardrobe = document.createElement("button");
      closeWardrobe.id = "closeWardrobe";
      closeWardrobe.innerText = "zamknij szafę";
      where.append(closeWardrobe);

    }else if(sex === "mężczyzna" || sex === "nie wiadomo"){
    	where.text("Stara, drewniana szafa, śmierdząca kurzem, pleśnią i niewiadomo czym jeszcze. Otworzyłeś szafę, w której wisi płaszcz.");

      let takeCoat = document.createElement("button");
      takeCoat.id = "coatWardrobe";
      takeCoat.innerText = "weź płaszcz";
      where.append(takeCoat);

      let closeWardrobe = document.createElement("button");
      closeWardrobe.id = "closeWardrobe";
      closeWardrobe.innerText = "zamknij szafę";
      where.append(closeWardrobe);
    }
  }
}

//zamykanie szafy
module.exports.closeWardrobe = function(){
  $("#closeWardrobe").on("click", function(){
    $("#description").empty();
  });
}
