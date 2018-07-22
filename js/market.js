//główny tekst opisu market
module.exports.market = "Stoisz na środku placu targowego. Wokół widzisz stragany, na których możesz kupić potrzebne rzeczy.";

//funkcja, która tworzy nowy element DOM
function createNewElementAppend(nameElement, idName, text, whereAppend, addedClass){
let newElement = document.createElement(nameElement); newElement.id = idName;	newElement.innerText = text; whereAppend.append(newElement); newElement.classList.add(addedClass); 	newElement.classList.remove("undefined"); }


function buyItem (item, price, gold, equip){
          if(gold[0] >= price){
             equip.push(item);
             let newGold = (gold[0] - price);
             gold.splice(0, 1, newGold);
             createNewElementAppend("p", "buyed", "kupiono: " + item, $("#alerts"));
             setTimeout(function(){
               $("#buyed").remove();
             }, 5000);
            }else{
              createNewElementAppend("p", "noGold", "brak złota", $("#alerts"));
              setTimeout(function(){
                $("#noGold").remove();
              }, 5000);
           }
        }

//funkcja tworząca przyciski rzeczy, które można kupić
module.exports.btnsBuy = function(gold, equip){
  $("#description").empty();
  createNewElementAppend("p", "buyItemMarket", "przedmioty do kupienia", $("#description"));
  createNewElementAppend("button", "tentM", "namiot - 5szt.", $("#description"));
	createNewElementAppend("button", "bagM", "torba - 1szt.", $("#description"));
	createNewElementAppend("button", "blanketM", "derka - 1szt.", $("#description"));
	createNewElementAppend("button", "lampM", "lampa - 1szt.", $("#description"));
	createNewElementAppend("button", "ropeM", "lina - 1szt.", $("#description"));
	createNewElementAppend("button", "foodM", "racja żyw. - 1szt.", $("#description"));
	createNewElementAppend("button", "daggerM", "sztylet - 8szt.", $("#description"));
	createNewElementAppend("button", "crossBowM", "kusza - 12szt.", $("#description"));
	createNewElementAppend("button", "saddleM", "siodło - 10szt.", $("#description"));
	createNewElementAppend("button", "woodenStickM", "drew. pałka - 4szt.", $("#description"));
	createNewElementAppend("button", "bucklerM", "puklerz - 12szt.", $("#description"));
  createNewElementAppend("button", "closeM", "zamknij", $("#description"));
  $("#closeM").on("click", ()=>{ $("#description").empty(); });

//zdarzenia dla przycisków kupowania
$("#tentM").on("click", function(){ buyItem("namiot", 5, gold, equip); });
$("#bagM").on("click", function(){ buyItem("torba", 1, gold, equip); });
$("#blanketM").on("click", function(){ buyItem("derka", 1, gold, equip); });
$("#lampM").on("click", function(){ buyItem("lampa", 1, gold, equip); });
$("#ropeM").on("click", function(){ buyItem("lina", 1, gold, equip); });
$("#foodM").on("click", function(){ buyItem("racja żyw", 1, gold, equip); });
$("#daggerM").on("click", function(){ buyItem("sztylet", 8, gold, equip); });
$("#crossBowM").on("click", function(){ buyItem("namiot", 10, gold, equip); });
$("#saddleM").on("click", function(){ buyItem("siodło", 12, gold, equip); });
$("#woodenStickM").on("click", function(){ buyItem("drew. pałka", 4, gold, equip);
$("#bucklerM").on("click", function(){ buyItem("puklerz", 12, gold, equip); }); });
}
