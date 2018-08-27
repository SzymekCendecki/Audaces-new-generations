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

//funkcja losowania punktów cech postaci w oparciu o rasę, profesję i wylosowaną liczbę
module.exports.randomPoints = function(occupationsPoints, racePoints, text, table, tablePosition){ let randomPoints = Math.round(Math.random()*50); let allPoints = randomPoints + occupationsPoints + racePoints;	$("#drawnCharacter").append(`<p class = "basicText center width20 medievalText fontSize11em">` + text + `: <span class="greenText">${allPoints}</span></p>`); table.splice(tablePosition, 1, allPoints); }

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

//funkcja losując punkty cechy - "ręczne" tworzenie postaci
module.exports.randomPointsFeatures = function(element, name, number, randomFeatures){
element.on("click", ()=>{ let name = Math.round(Math.random()*50);   randomFeatures.splice(number, 1, name); if(randomFeatures[0] !== 0 && randomFeatures[1] !== 0 && randomFeatures[2] !== 0 && randomFeatures[3] !== 0 && randomFeatures[4] !== 0){
$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wylosowano wszystkie cechy</p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); } }); }

//zdarzenie wyboru płci
module.exports.sex = function(hero, text){ hero.splice(1, 1, text);
$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano płeć: <span class='blueText'> "+ text + "</span></p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); }

//zdarzenie wyboru koloru oczu
module.exports.eyes = function(hero, text){ hero.splice(9, 1, text);
$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor oczu: <span class='blueText'> " + text + "</span></p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000);}

//zdarzenie wyboru koloru włosów
module.exports.hair = function(hero, text){ hero.splice(10, 1, text);
$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor włosów: <span class='blueText'> " + text + "</span></p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000);}

//zdarzenie wyboru koloru skóry
module.exports.skin = function(hero, text){ hero.splice(11, 1, text);
$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano kolor skóry: <span class='blueText'> " + text + "</span></p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); }

//zdarzenie wyboru koloru wagi
module.exports.weight = function(hero, text){ hero.splice(12, 1, text);
$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano wagę: <span class='blueText'> " + text + "</span></p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); }

//zdarzenie wyboru wzrostu
module.exports.height = function(hero, text){ hero.splice(13, 1, text);
$("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano wzrost: <span class='blueText'> "+ text + "</span></p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); }

//funkcja dodawania i usuwania rzeczy do ekwipunku
module.exports.itemsAddRemove = function(whatClick, whatPush, equip){
if(equip.length < 5){ if(equip.indexOf(whatPush) !== -1){ let number = 0; number = number + equip.length; $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano rzecz: <span class='blueText'> " + whatPush + "</span></p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); $("#btnToRemove").text(newElement("button", whatPush + number, whatPush, $("#btnToRemove"))); }else{ $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'> wybrano rzecz: <span class='blueText'> " + whatPush + "</span></p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000);  $("#btnToRemove").text(newElement("button", whatPush,  whatPush, $("#btnToRemove"))); }
$("#btnToRemove").find("button").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5"); equip.push(whatPush); let allBtnRemove = document.querySelectorAll("#btnToRemove button"), i; for(i=0; i<allBtnRemove.length; i++){ allBtnRemove[i].addEventListener("click", function(e){ equip.splice(equip.indexOf(this.id), 1); this.remove(); $("#alerts").html("<p class='redText boldText fontSize12em medievalText'>usunięto: <span class='blueText'>" + this.id + "</span>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); }); }
}else{ $("#alerts").html("<p class='redText boldText fontSize12em medievalText'>Już zostało wybrane pięć przedmiotów."); setTimeout(function(){ $("#alerts").empty(); }, 5000); equip.splice(5, 1); } }

//"funkcja" dodawania i usuwania umiejętności
module.exports.skillsAddRemove = function(whatClick, whatPush, skills){ if(skills.length <= 2){
if(skills.indexOf(whatPush) !== -1){ $("#alerts").html("<p class='redText boldText fontSize12em medievalText'>Ta umiejętność została już wybrana.</p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); }else{ skills.push(whatPush); newElement("button", whatPush, whatPush, $("#btnToRemove"), "bold"); $("#alerts").html("<p class='greenText boldText fontSize12em medievalText'>wybrana rasa to: <span class='blueText'>" + whatPush + "</span></p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); } }else if(skills.length > 2){ $("#alerts").html("<p class='redText boldText fontSize12em medievalText'>Już zostały wybrane trzy umiejętności.</p>"); setTimeout(function(){ $("#alerts").empty(); }, 5000); }
 let allBtnRemove = document.querySelectorAll("#btnToRemove button"), i;  $("#btnToRemove").find("button").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5"); for(i=0; i<allBtnRemove.length; i++){ allBtnRemove[i].addEventListener("click", function(e) { if(skills.indexOf(this.id) !== -1){ skills.splice(skills.indexOf(this.id), 1);  this.remove(); } }); } }

//pętla dla przycisków usuwania przedmiotów, gdy pownownie wejdzie się w opcje wybiernia przedmiotów
module.exports.itemForRemove = function(equip){ for(let j=0; j<equip.length; j++){    newElement("button", j, equip[j], $("#btnToRemove"));  $("#btnToRemove").find("button").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5"); let allBtnRemove = document.querySelectorAll("#btnToRemove button"), i;
for(i=0; i<allBtnRemove.length; i++){ allBtnRemove[i].addEventListener("click", function(e){   if(equip.indexOf($(this).text()) !== -1){ equip.splice(equip.indexOf($(this).text()), 1);      this.remove(); } this.remove(); }); } } }

//pętla dla przycisków usuwania umiejętności, gdy pownownie wejdzie się w opcje wybiernia umiejętności
module.exports.skillsToRemove = function(skills){ for(let j=0; j<skills.length; j++){    newElement("button", j, skills[j], $("#btnToRemove"));  $("#btnToRemove").find("button").addClass("basicBtn btnNewGame medievalText width20 marginTop1 marginLeft5"); let allBtnRemove = document.querySelectorAll("#btnToRemove button"), i;
for(i=0; i<allBtnRemove.length; i++){ allBtnRemove[i].addEventListener("click", function(e){   if(skills.indexOf($(this).text()) !== -1){ skills.splice(skills.indexOf($(this).text()), 1);  this.remove(); } this.remove(); }); } } }

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
