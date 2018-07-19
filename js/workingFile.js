let intro = require("./firstMenu.js");
let heroCreator = require("./heroCreator.js");
let introGame = require("./introGame.js");
let firstP = require("./firstParagraph");
let street = require("./secondParagraph");

document.addEventListener("DOMContentLoaded", () => { console.log("NIEWIERNE PSY RULEZ!!!!");

//funkcja, która tworzy nowy element DOM
function createNewElementAppend(nameElement, idName, text, whereAppend, addedClass){
let newElement = document.createElement(nameElement); newElement.id = idName;	newElement.innerText = text; whereAppend.append(newElement); newElement.classList.add(addedClass); 	newElement.classList.remove("undefined"); }

//funkcja optymalizująca tworzenie inputów
function createNewInputAppend(nameElement, name, id, value, type, whereAppend, addedClass){
			let newElement = document.createElement(nameElement); newElement.type = type;
			newElement.name = name; newElement.id = id; newElement.value = value;
			whereAppend.append(newElement);	newElement.classList.add(addedClass);
			newElement.classList.remove("undefined"); }

		//funkcja optymalizująca wybieranie rasy i profesji
			function clickRaceOccupation(element, text, number, sourceDescription, alert){
				element.on("click", ()=>{ hero.splice(number, 1, text); alert.addClass("greenText");
				$("#choosenDescription").text(sourceDescription);

				if(text === "wojownik"){ choosenOccupation.splice(0, 1, 5);
				choosenOccupation.splice(1, 1, 5); choosenOccupation.splice(2, 1, 0); 	choosenOccupation.splice(3, 1, 0); choosenOccupation.splice(4, 1, 0);
				}else if(text === "złoczyńca"){ choosenOccupation.splice(0, 1, 0);
					choosenOccupation.splice(1, 1, 0); choosenOccupation.splice(2, 1, 10);
					choosenOccupation.splice(3, 1, 0); choosenOccupation.splice(4, 1, 0);
				}else if(text === "czarodziej"){ choosenOccupation.splice(0, 1, 0);
					choosenOccupation.splice(1, 1, 0); choosenOccupation.splice(2, 1, 0);
					choosenOccupation.splice(3, 1, 5); choosenOccupation.splice(4, 1, 5);
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

//utworzenie przycisków pierwszego menu
  createNewElementAppend("p", "titleGameHeader", "AUDACES", $("header"));
  createNewElementAppend("p", "subTitleGameHeader", "serce ze stali", $("#titleGameHeader"));
  createNewElementAppend("button", "info", "info", $("nav"));
  createNewElementAppend("button", "licence", "licencja", $("nav"));
  createNewElementAppend("button", "tutorial", "tutorial", $("nav"));
  createNewElementAppend("button", "newGame", "Nowa Gra", $("nav"));

	//utworzenie przycisków kreatora
	createNewElementAppend("button", "name", "imię", $("nav"));
	createNewElementAppend("button", "race", "rasa", $("nav"));
	createNewElementAppend("button", "occupation", "profesja", $("nav"));
	createNewElementAppend("button", "features", "cechy", $("nav"));
	createNewElementAppend("button", "features2", "cechy 2", $("nav"));
	createNewElementAppend("button", "equipment", "ekwipunek", $("nav"));
	createNewElementAppend("button", "skills", "umiejętności", $("nav"));
	createNewElementAppend("button", "infoCreator", "info", $("nav"));
	createNewElementAppend("button", "startGame", "start", $("nav"));
	createNewElementAppend("button", "outRoom", "wyjdź", $("nav"));

	//tablice
	// tablica postaci 0 - imię, 1 - rasa, 2 - profesja
	let hero = ["nie wybrano", "nie wybrano", "nie wybrano"];

	//tablica wylosowanych punktów cech 0 - siła, 1 - wytrzymałość, 2 - zręczność, 3 - inteligencja, 4 - charyzma
	let randomFeatures = [0, 0, 0, 0, 0];

	//tablica dla wybieralnych cech postaci 0 - płeć, 1 - kolor włosów, 2 - kolor oczu, 3 - kolor skóry, 4 - waga, 5 - wzrost
	let choosenFeatures = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano"];

	//tablica ekwipunku max 5 elementów
	let equip = [];

	//tablica umiejętności max 3 elementy
	let skills = [];

	//tablice ze modyfikatorami rasy i profesji - dla określenia ostatecznej ilości punktów postaci
	let warrior = [5, 5, 0, 0, 0]; let criminal = [0, 0, 10, 0, 0]; let wizard = [0, 0, 0, 5, 5];

	let human = [0, 0, 0, 0, 0]; let elf = [-5, -5, 0, 5, 5];
	let dwarf = [4, 4, 0, -2, -3]; let orc = [5, 5, 0, -5, -5];

//tablice pomocnicze dla walidacji wylosowanych punktów cech, rasy i pofesji
let choosenOccupation = []; let choosenRace = [];

//suma wszystkich punktów
let amountAllPoint = [];

//tablica zadań
let tasks =["zanieś paczkę mnichowi"];

//początkowa ilosć złota
let gold = [0];

//showanie przycisków pierszego menu
$("#info, #licence, #tutorial, #newGame, #titleGameHeader, #subTitleGameHeader").hide();

//schowanie przycisków kreatora
$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator, #startGame, #outRoom").hide();

//schowanie i usunięcie nazwy studia oraz sentencji
$("#studioTitle").fadeOut(6000);

//pokazanie tytułu i podtytułu gry
setTimeout(() =>{
  $("#studioTitle h2").replaceWith("<p class='medievalText gameTitle'>Audaces</p>");
  $("#studioTitle h3").replaceWith("<p class='medievalText subGameTitle'>serce z żelaza</p>");
  $("#studioTitle").fadeIn(6000); $("#studioTitle").delay(2000).fadeOut(6000); }, 6200);

//zmiana koloru tła na beżowy
setTimeout(() =>{ $("body").css("backgroundColor", "beige"); }, 19000);

//usunięcie diva o id studioTitle
setTimeout(()=>{
  $("#studioTitle").remove(); $("#titleGameHeader, #subTitleGameHeader").fadeIn(1500);
    $("#info, #licence, #tutorial, #newGame").fadeIn(1500).addClass("basicBtn");
    $("#info").addClass("btnInfo"); $("#licence").addClass("btnLicence");
    $("#tutorial").addClass("btnTutorial"); $("#newGame").addClass("btnNewGame");
		createNewElementAppend("p", "textHello", intro.textHello, $("#mainPart"));
		$("#textHello").addClass("basicText"); }, 20000);

//funkcja klik dla pierwszego menu
function clickFirstMenu(element, element2, idElement, textElement){
	element.on("click", () =>{ element2.children("p").remove(); createNewElementAppend("p", idElement, textElement, element2); element2.addClass("basicText"); }); }

//funkcje tworzenia dla pierwszego menu
clickFirstMenu($("#info"), $("#mainPart"), "textElement", intro.textInfo);
clickFirstMenu($("#licence"), $("#mainPart"), "textLicence", intro.textLicence);
clickFirstMenu($("#tutorial"), $("#mainPart"), "textTutorial", intro.textTutorial);

//funkcje tworzenia dla menu gry
createNewElementAppend("button", "featuresGame", "cechy", $("nav"));
createNewElementAppend("button", "equipGame", "ekwipunek", $("nav"));
createNewElementAppend("button", "skillsGame", "umiejętności", $("nav"));
createNewElementAppend("button", "taskGame", "zadania", $("nav"));
$("#featuresGame, #equipGame, #skillsGame, #taskGame").hide();

//przycisk nowej gry - tworzenie kretora postaci
$("#newGame").on("click", () =>{ 	$("#mainPart").empty().removeClass("basicText");
	$("#info, #licence, #tutorial, #newGame").fadeOut();
	$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").fadeIn();
	$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").addClass("basicBtn");

//tworzenie czerwonych paragrafów w części alertowej - zmieniają kolor na zielony po wybraniu
	createNewElementAppend("p", "nameAlert", heroCreator.nameAlert, $("#alerts"));
	createNewElementAppend("p", "raceAlert", heroCreator.raceAlert, $("#alerts"));
	createNewElementAppend("p", "occupationAlert", heroCreator.occupationAlert, $("#alerts"));
	createNewElementAppend("p", "featuresAlert", heroCreator.featuresAlert, $("#alerts"));
	createNewElementAppend("p", "features2Alert", heroCreator.features2Alert, $("#alerts"));
	createNewElementAppend("p", "equipmentAlert", heroCreator.equipmentAlert, $("#alerts"));
	createNewElementAppend("p", "skillAlert", heroCreator.skillsAlert, $("#alerts"));
	$("#nameAlert, #raceAlert, #occupationAlert, #featuresAlert, #features2Alert, #equipmentAlert, #skillAlert").addClass("redText");

//zdarzenia dla przycisku imię (name)
	$("#name").on("click", ()=>{ $("#mainPart").empty();

		//elementy wyboru imienia
		createNewElementAppend("p", "nameTitle", heroCreator.nameTitle, $("#mainPart"));
		$("#nameTitle").addClass("goldUnderline basicText");
		createNewElementAppend("p", "nameDescription", heroCreator.nameDescription, $("#mainPart"));

		createNewElementAppend("input", "giveName", "", $("#mainPart"));
		createNewElementAppend("button", "acceptName", "zatwierdź", $("#mainPart"));

		//funkcja wpisywania imienia
		$("#acceptName").on("click", () =>{ let nameInput = $("#giveName").val().replace(/\d/g,'');
	if(nameInput == ""){ $("#nameAlert").addClass("redText"); }else{ hero.splice(0, 1, nameInput); $("#nameAlert").addClass("greenText"); } }); });//koniec zdarzeń dla przycisku imię

	//zdarzenia dla przyciku rasa (race)
	$("#race").on("click", ()=>{ $("#mainPart").empty();

		//elementy wyboru rasy
		createNewElementAppend("p", "raceTitle", heroCreator.raceTitle, $("#mainPart"));
		$("#raceTitle").addClass("goldUnderline basicText");
		createNewElementAppend("p", "raceDescription", heroCreator.raceDescription, $("#mainPart"));

		createNewElementAppend("button", "human", "człowiek", $("#mainPart"));
		createNewElementAppend("button", "elv", "elf", $("#mainPart"));
		createNewElementAppend("button", "dwarf", "krasnolud", $("#mainPart"));
		createNewElementAppend("button", "orc", "ork", $("#mainPart"));
		$("#human, #elv, #dwarf, #orc").addClass("basicBtn");
		createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

		//funkcje dla wyboru rasy
		clickRaceOccupation($("#human"), "człowiek", 1, heroCreator.human, $("#raceAlert"));
		clickRaceOccupation($("#elv"), "elf", 1, heroCreator.elv, $("#raceAlert"));
		clickRaceOccupation($("#dwarf"), "krasnolud", 1, heroCreator.dwarf, $("#raceAlert"));
		clickRaceOccupation($("#orc"), "ork", 1, heroCreator.orc, $("#raceAlert"));
	});//koniec zdarzeń dla przycisku rasa

//zdarzenia dla przyciku profesja (occupation)
	$("#occupation").on("click", ()=>{ $("#mainPart").empty();

		//elementy wyboru profesji
		createNewElementAppend("p", "occupationTitle", heroCreator.occupationTitle, $("#mainPart"));
		$("#occupationTitle").addClass("goldUnderline basicText");
		createNewElementAppend("p", "occupationDescription", heroCreator.occupationDescription, $("#mainPart"));

		createNewElementAppend("button", "warrior", "wojownik", $("#mainPart"));
		createNewElementAppend("button", "criminal", "złoczyńca", $("#mainPart"));
		createNewElementAppend("button", "wizard", "czarodziej", $("#mainPart"));
		$("#warrior, #criminal, #wizard").addClass("basicBtn");
		createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

		//funkcje wyboru profesji
		clickRaceOccupation($("#warrior"), "wojownik", 2, heroCreator.warrior, $("#occupationAlert"));
		clickRaceOccupation($("#criminal"), "złoczyńca", 2, heroCreator.criminal, $("#occupationAlert"));
		clickRaceOccupation($("#wizard"), "czarodziej", 2, heroCreator.wizard,$("#occupationAlert"));
	});//koniec zdarzeń dla przycisku profesja

//przycisk cech część piewrsza - wybieranie siły, wytrzymałości, zręczności, inteligencji i charyzmy
	$("#features").on("click", function(){ $("#mainPart").empty();

			//elementy losowania cech
			createNewElementAppend("p", "featuresTitle", heroCreator.featuresTitle, $("#mainPart"));
			$("#featuresTitle").addClass("goldUnderline basicText");
			createNewElementAppend("p", "featuresDescription", heroCreator.featuresDescription, $("#mainPart"));

			createNewElementAppend("button", "force", "siła", $("#mainPart"));
			createNewElementAppend("button", "strength", "wytrzymałość", $("#mainPart"));
			createNewElementAppend("button", "dexterity", "zręczność", $("#mainPart"));
			createNewElementAppend("button", "intelligence", "inteligencja", $("#mainPart"));
			createNewElementAppend("button", "charisma", "charyzma", $("#mainPart"));
			$("#force, #strength, #dexterity, #intelligence, #charisma").addClass("basicBtn");
			createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

			//funkcja optymalizująca losowanie cechy
			function randomPointsFeatures(element, name, number, source){
				element.on("click", ()=>{ let name = Math.round(Math.random()*50);
				randomFeatures.splice(number, 1, name);	$("#choosenDescription").text(source);
				$("#featuresAlert").addClass("redText");if(randomFeatures[0] !== 0 && randomFeatures[1] !== 0 && randomFeatures[2] !== 0 && randomFeatures[3] !== 0 && randomFeatures[4] !== 0){
				$("#featuresAlert").addClass("greenText"); } }); }

			//funkcje losujące punkty cech
			randomPointsFeatures($("#force"), "randomForcePoints", 0, heroCreator.force);
			randomPointsFeatures($("#strength"), "randomStrenghtPoints", 1, heroCreator.strenght);
			randomPointsFeatures($("#dexterity"), "randomDexterityPoints", 2, heroCreator.dexterity);
			randomPointsFeatures($("#intelligence"), "randomIntelligencePoints", 3, heroCreator.intelligence);
			randomPointsFeatures($("#charisma"), "randomCharismaPoints", 4, heroCreator.charisma);
		});//koniec zdarzeń dla przycisku cech (features) - siły, wytrzymałości, zręczności inteligencji i charyzmy

//zdarzenia dla przycisku cechy 2 - płeć, kolor włosów, oczu, skóry, waga, wzrost,
$("#features2").on("click", ()=>{ $("#mainPart").empty();

		//elementy wyboru płci
		createNewElementAppend("p", "features2Title", heroCreator.features2Title, $("#mainPart"));
		$("#features2Title").addClass("goldUnderline basicText");
		createNewElementAppend("p", "features2Description", heroCreator.features2Description, $("#mainPart"));

		createNewElementAppend("div", "features2Main", "", $("#mainPart"));
		createNewElementAppend("p", "features2MainSex", "Płeć", $("#features2Main"));
		createNewElementAppend("button", "features2MainWomen", "Kobieta", $("#features2Main"));
		createNewElementAppend("button", "features2MainMen", "Mężczyzna", $("#features2Main"));
		createNewElementAppend("button", "features2MainOther", "Nie wiadomo", $("#features2Main"));

		$("#features2MainWomen, #features2MainMen, #features2MainOther").addClass("btnsFeatures2");

		//funkcja optymalizująca wybieranie drugiego zestawu cech
		function features2(element, number, text){element.on("click",()=>{ choosenFeatures.splice(number, 1, text); if( choosenFeatures[0] == "nie wybrano" || choosenFeatures[1] == "nie wybrano" || choosenFeatures[2] == "nie wybrano" || choosenFeatures[3] == "nie wybrano" || choosenFeatures[4] == "nie wybrano" || choosenFeatures[5] == "nie wybrano"){$("#features2Alert").addClass("redText");
			}else{ $("#features2Alert").addClass("greenText"); } }); }

		//funkcje wyboru płci
		features2($("#features2MainWomen"), 0, "kobieta"); features2($("#features2MainMen"), 0, "mężczyzna"); features2($("#features2MainOther"), 0, "nie wiadomo");

		//elementy wyboru koloru włosów
		createNewElementAppend("p", "features2MainHair", "Kolor włosów", $("#features2Main"));
		createNewElementAppend("button", "features2MainBlond", "blond", $("#features2Main"));
		createNewElementAppend("button", "features2MainRed", "rude", $("#features2Main"));
		createNewElementAppend("button", "features2MainBlack", "czarne", $("#features2Main"));
		createNewElementAppend("button", "features2MainDyed", "farbowane", $("#features2Main"));

		$("#features2MainBlond, #features2MainRed, #features2MainBlack, #features2MainDyed").addClass("btnsFeatures2");

		//funkcje wyboru kolorów włosów
		features2($("#features2MainBlond"), 1, "blond"); features2($("#features2MainRed"), 1, "rude");
		features2($("#features2MainBlack"), 1, "czarne"); features2($("#features2MainDyed"), 1, "farbowane");

		//elementy wyboru koloru oczu
		createNewElementAppend("p", "features2MainEyes", "Kolor oczu", $("#features2Main"));
		createNewElementAppend("button", "features2MainHazel", "piwne", $("#features2Main"));
		createNewElementAppend("button", "features2MainGrey", "szare", $("#features2Main"));
		createNewElementAppend("button", "features2MainBrown", "brązowe", $("#features2Main"));
		createNewElementAppend("button", "features2MainBlue", "niebieskie", $("#features2Main"));

		$("#features2MainHazel, #features2MainGrey, #features2MainBrown, #features2MainBlue").addClass("btnsFeatures2");

		//funkcje wyboru koloru oczu
		features2($("#features2MainHazel"), 2, "piwne"); features2($("#features2MainGrey"), 2, "szare");
		features2($("#features2MainBrown"), 2, "brązowe"); features2($("#features2MainBlue"), 2, "niebieskie");

		//elementy wyboru koloru skóry
		createNewElementAppend("p", "features2MainSkins", "Kolor skóry", $("#features2Main"));
		createNewElementAppend("button", "features2MainWhite", "biała", $("#features2Main"));
		createNewElementAppend("button", "features2MainBrownSkin", "brązowa", $("#features2Main"));
		createNewElementAppend("button", "features2MainBlack", "czarna", $("#features2Main"));
		createNewElementAppend("button", "features2MainRed", "czerwona", $("#features2Main"));
		createNewElementAppend("button", "features2MainYellow", "żółta", $("#features2Main"));
		createNewElementAppend("button", "features2MainGreen", "zielona", $("#features2Main"));
		createNewElementAppend("button", "features2MainTawny", "brunatna", $("#features2Main"));
		createNewElementAppend("button", "features2MainAzure", "błękitna", $("#features2Main"));

		$("#features2MainWhite, #features2MainBrown, #features2MainBrownSkin, #features2MainBlack, #features2MainRed, #features2MainYellow, #features2MainGreen, #features2MainTawny, #features2MainAzure").addClass("btnsFeatures2");

		//funkcje wyboru koloru skóry
		features2($("#features2MainWhite"), 3, "biała"); features2($("#features2MainBrownSkin"), 3, "brązowa"); features2($("#features2MainBlack"), 3, "czarna");	features2($("#features2MainRed"), 3, "czerwona"); features2($("#features2MainYellow"), 3, "żółta");
		features2($("#features2MainGreen"), 3, "zielona"); features2($("#features2MainTawny"), 3, "brunatna"); features2($("#features2MainAzure"), 3, "błękitna");

		//elementy wyboru wagi
		createNewElementAppend("p", "features2MainWeight", "Waga", $("#features2Main"));
		createNewElementAppend("button", "features2MainUnderweight", "niedowaga", $("#features2Main"));
		createNewElementAppend("button", "features2MainNormalweight", "normalna", $("#features2Main"));
		createNewElementAppend("button", "features2MainOverweight", "nadwaga", $("#features2Main"));

		$("#features2MainUnderweight, #features2MainNormalweight, #features2MainOverweight").addClass("btnsFeatures2");

		//funkcje wyboru wagi
		features2($("#features2MainUnderweight"), 4, "niedowaga"); features2($("#features2MainNormalweight"), 4, "normalna");
		features2($("#features2MainOverweight"), 4, "nadwaga");

		//elementy wyboru wzrostu
		createNewElementAppend("p", "features2MainGrowth", "Wzrost", $("#features2Main"));
		createNewElementAppend("button", "features2MainShort", "niski", $("#features2Main"));
		createNewElementAppend("button", "features2MainNormalGrowth", "normalny", $("#features2Main"));
		createNewElementAppend("button", "features2MainTall", "wysoki", $("#features2Main"));

		$("#features2MainShort, #features2MainNormalGrowth, #features2MainTall").addClass("btnsFeatures2");

		//funkcje wyboru wzrostu
		features2($("#features2MainShort"), 5, "niski"); features2($("#features2MainNormalGrowth"), 5, "normalny"); features2($("#features2MainTall"), 5, "wysoki"); });//koniec zdarzeń dla przycisku cechy 2 (features2)

	//zdarzenia dla przycisku ekwipunek
		$("#equipment").on("click", ()=>{
			$("#mainPart").empty();

			//elementy wyboru ekwipunku
				createNewElementAppend("p", "equipmentTitle", heroCreator.equipmentTitle, $("#mainPart"));
				$("#equipmentTitle").addClass("goldUnderline basicText");
				createNewElementAppend("p", "equipmentDescription", heroCreator.equipmentDescription, $("#mainPart"));
				createNewElementAppend("p", "weaponTitle", "broń", $("#mainPart"), "bold");

		function chooseItem(whatClick, whatPush){ whatClick.on("click", () =>{ if(equip.length <= 4){ equip.push(whatPush); $("#alerts #equipmentAlert").removeClass("redText"); $("#alerts #equipmentAlert").addClass("greenText");

		$("#btnToRemove").text(createNewElementAppend("button", whatPush, whatPush, $("#btnToRemove")));
		$("#btnToRemove").find("button").addClass("width15 bold");

		let allBtnRemove = document.querySelectorAll("#btnToRemove button"), i;
		for(i=0; i<allBtnRemove.length; i++){	allBtnRemove[i].addEventListener("click", function(e) {
		if(equip.indexOf(this.id) !== -1){ equip.splice(equip.indexOf(this.id), 1); this.remove(); }
		if(equip.length === 0){ $("#alerts #equipmentAlert").removeClass("greenText"); $("#alerts #equipmentAlert").addClass("redText"); }else if(equip.length < 5){$("#subAlert").text("").removeClass("redText"); } }); } }else{ $("#subAlert").text("Już zostało wybrane pięć przedmiotów").addClass("redText"); }
	}); //koniec funkcji kliknięcia w przycisk
}//koniec funkcji chooseItem

	//broń
	createNewElementAppend("button", heroCreator.equipWeaponENG[0], heroCreator.equipWeaponPL[0], $("#mainPart"), "bold"); 	chooseItem($("#dagger"), "sztylet");
	createNewElementAppend("button", heroCreator.equipWeaponENG[1], heroCreator.equipWeaponPL[1], $("#mainPart"), "bold"); chooseItem($("#woddenStick"), "drewniana pałka");
	createNewElementAppend("button", heroCreator.equipWeaponENG[2], heroCreator.equipWeaponPL[2], $("#mainPart"), "bold"); chooseItem($("#shortSword"), "krótki miecz");
	createNewElementAppend("button", heroCreator.equipWeaponENG[3], heroCreator.equipWeaponPL[3], $("#mainPart"), "bold"); chooseItem($("#sabre"), "szabla");
	createNewElementAppend("button", heroCreator.equipWeaponENG[4], heroCreator.equipWeaponPL[4], $("#mainPart"), "bold"); chooseItem($("#spear"), "włócznia");
	createNewElementAppend("button", heroCreator.equipWeaponENG[5], heroCreator.equipWeaponPL[5], $("#mainPart"), "bold"); chooseItem($("#slingshot"), "proca");
	createNewElementAppend("button", heroCreator.equipWeaponENG[6], heroCreator.equipWeaponPL[6], $("#mainPart"), "bold"); chooseItem($("#bow"), "łuk");

	//zbroje
	createNewElementAppend("p", "armorTitle", "zbroje", $("#mainPart"), "bold");
	createNewElementAppend("button", heroCreator.equipArmorENG[0], heroCreator.equipArmorPL[0], $("#mainPart"), "bold"); chooseItem($("#gambison"), "przeszywanica");
	createNewElementAppend("button", heroCreator.equipArmorENG[1], heroCreator.equipArmorPL[1], $("#mainPart"), "bold"); chooseItem($("#leather"), "zbr. skórzana");
	createNewElementAppend("button", heroCreator.equipArmorENG[2], heroCreator.equipArmorPL[2], $("#mainPart"), "bold"); chooseItem($("#studded"), "zbr. ćwiekowana");

	//tarcze
	createNewElementAppend("p", "shieldTitle", "tarcze", $("#mainPart"), "bold");
createNewElementAppend("button", heroCreator.equipShieldENG[0], heroCreator.equipShieldPL[0], $("#mainPart"), "bold"); chooseItem($("#buckler"), "puklerz");
createNewElementAppend("button", heroCreator.equipShieldENG[1], heroCreator.equipShieldPL[1], $("#mainPart"), "bold"); chooseItem($("#smallWooden"), "tarcza mała drew.");
createNewElementAppend("button", heroCreator.equipShieldENG[2], heroCreator.equipShieldPL[2], $("#mainPart"), "bold"); chooseItem($("#smallMetal"), "tarcza mała metal.");

//inne
createNewElementAppend("p", "otherTitle", "inne", $("#mainPart"), "bold");
createNewElementAppend("button", heroCreator.equipOtherENG[0], heroCreator.equipOtherPL[0], $("#mainPart"), "bold"); chooseItem($("#stick"), "kostur");
createNewElementAppend("button", heroCreator.equipOtherENG[1], heroCreator.equipOtherPL[1], $("#mainPart"), "bold"); chooseItem($("#moneyBag"), "mieszek");
createNewElementAppend("button", heroCreator.equipOtherENG[2], heroCreator.equipOtherPL[2], $("#mainPart"), "bold"); chooseItem($("#travelBag"), "torba podróżna");
createNewElementAppend("button", heroCreator.equipOtherENG[3], heroCreator.equipOtherPL[3], $("#mainPart"), "bold"); chooseItem($("#purse"), "sakwa");
createNewElementAppend("button", heroCreator.equipOtherENG[4], heroCreator.equipOtherPL[4], $("#mainPart"), "bold"); chooseItem($("#backpack"), "plecak");
createNewElementAppend("button", heroCreator.equipOtherENG[5], heroCreator.equipOtherPL[5], $("#mainPart"), "bold"); chooseItem($("#canteen"), "manierka");
createNewElementAppend("button", heroCreator.equipOtherENG[6], heroCreator.equipOtherPL[6], $("#mainPart"), "bold"); chooseItem($("#pot"), "sagan");
createNewElementAppend("button", heroCreator.equipOtherENG[7], heroCreator.equipOtherPL[7], $("#mainPart"), "bold"); chooseItem($("#blanket"), "koc");
createNewElementAppend("button", heroCreator.equipOtherENG[8], heroCreator.equipOtherPL[8], $("#mainPart"), "bold"); chooseItem($("#tubeParchments"), "tuba na pergaminy");
createNewElementAppend("button", heroCreator.equipOtherENG[9], heroCreator.equipOtherPL[9], $("#mainPart"), "bold"); chooseItem($("#penWriting"), "pęk piór do pisania");
createNewElementAppend("button", heroCreator.equipOtherENG[10], heroCreator.equipOtherPL[10], $("#mainPart"), "bold"); chooseItem($("#parchments5pieces"), "pergaminy 5szt.");
createNewElementAppend("button", heroCreator.equipOtherENG[11], heroCreator.equipOtherPL[11], $("#mainPart"), "bold"); chooseItem($("#ordinaryClothing"), "zwykłe ubranie");
createNewElementAppend("button", heroCreator.equipOtherENG[12], heroCreator.equipOtherPL[12], $("#mainPart"), "bold"); chooseItem($("#fussyHat"), "fikuśna czapka");
createNewElementAppend("button", heroCreator.equipOtherENG[13], heroCreator.equipOtherPL[13], $("#mainPart"), "bold"); chooseItem($("#coat"), "płaszcz");
createNewElementAppend("button", heroCreator.equipOtherENG[14], heroCreator.equipOtherPL[14], $("#mainPart"), "bold"); chooseItem($("#leatherBelt"), "skórzany pas");
createNewElementAppend("button", heroCreator.equipOtherENG[15], heroCreator.equipOtherPL[15], $("#mainPart"), "bold"); chooseItem($("#needlesThread"), "igły i nici");
createNewElementAppend("button", heroCreator.equipOtherENG[16], heroCreator.equipOtherPL[16], $("#mainPart"), "bold"); chooseItem($("#saddleCloth"), "derka");
createNewElementAppend("button", heroCreator.equipOtherENG[17], heroCreator.equipOtherPL[17], $("#mainPart"), "bold"); chooseItem($("#tent"), "namiot");
createNewElementAppend("button", heroCreator.equipOtherENG[18], heroCreator.equipOtherPL[18], $("#mainPart"), "bold"); chooseItem($("#woodenBowl"), "drewniana miska");
createNewElementAppend("button", heroCreator.equipOtherENG[19], heroCreator.equipOtherPL[19], $("#mainPart"), "bold"); chooseItem($("#woodenSpoon"), "drewniana łyżka");
createNewElementAppend("button", heroCreator.equipOtherENG[20], heroCreator.equipOtherPL[20], $("#mainPart"), "bold"); chooseItem($("#torch"), "pochodnia");
createNewElementAppend("button", heroCreator.equipOtherENG[21], heroCreator.equipOtherPL[21], $("#mainPart"), "bold"); chooseItem($("#oliveLamp"), "lampa oliwna");
createNewElementAppend("button", heroCreator.equipOtherENG[22], heroCreator.equipOtherPL[22], $("#mainPart"), "bold"); chooseItem($("#oilLamp"), "kaganek");
createNewElementAppend("button", heroCreator.equipOtherENG[23], heroCreator.equipOtherPL[23], $("#mainPart"), "bold"); chooseItem($("#rope5m"), "lina 5m");
createNewElementAppend("button", heroCreator.equipOtherENG[24], heroCreator.equipOtherPL[24], $("#mainPart"), "bold"); chooseItem($("#tinders"), "hubka i krzesiwo");

$("#mainPart button").addClass("width15");

	//paragraf do wyświetlania opisu wybranego elementu ekwipunku
	createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));
	createNewElementAppend("p", "btnToRemoveTitle", "Przedmioty do usunięcia", $("#choosenDescription"));
	createNewElementAppend("p", "btnToRemove", "", $("#choosenDescription"));
	createNewElementAppend("p", "subAlert", "", $("#choosenDescription"));

//pętla dla przycisków usuwania przedmiotów, gdy pownownie wejdzie się w opcje wybiernia przedmiotów
	for(let j=0; j<equip.length; j++){ createNewElementAppend("button", j, equip[j], $("#btnToRemove")); let allBtnRemove = document.querySelectorAll("#btnToRemove button"), i;
	for(i=0; i<allBtnRemove.length; i++){	allBtnRemove[i].addEventListener("click", function(e) {
		if(equip.indexOf($(this).text()) !== -1){	equip.splice(equip.indexOf($(this).text()), 1); this.remove();}	this.remove();});}} $("#btnToRemoveTitle").addClass("goldUnderline bold");
});//koniec zdarzeń dla kreatora postaci - ekwipunku

//początek zdarzeń dla przycisku umiejętności - kreator postaci
$("#skills").on("click", ()=>{ $("#mainPart").empty();
	//elementy wyboru umiejętności
		createNewElementAppend("p", "skillsTitle", heroCreator.skillsTitle, $("#mainPart"));
		$("#skillsTitle").addClass("goldUnderline basicText");
		createNewElementAppend("p", "skillsDescription", heroCreator.skillsDescription, $("#mainPart"));

function chooseSkill(whatClick, whatPush){ whatClick.on("click", () =>{ if(skills.length <= 2){
if(skills.indexOf(whatPush) !== -1){ $("#subAlert").text("Ta umiejętność została już wybrana.").addClass("redText"); }else{ skills.push(whatPush); 					createNewElementAppend("button", whatPush, whatPush, $("#btnToRemove"), "bold");					$("#alerts #skillAlert").removeClass("redText"); $("#alerts #skillAlert").addClass("greenText"); }
}else if(skills.length > 2){ $("#subAlert").text("Już zostały wybrane trzy umiejętności.").addClass("redText");}

let allBtnRemove = document.querySelectorAll("#btnToRemove button"), i; for(i=0; i<allBtnRemove.length; i++){ allBtnRemove[i].addEventListener("click", function(e) { 							if(skills.indexOf(this.id) !== -1){ skills.splice(skills.indexOf(this.id), 1); this.remove(); }
if(skills.length === 0){ $("#alerts #skillAlert").removeClass("greenText"); 										 $("#alerts #skillAlert").addClass("redText"); }else if(skills.length < 3){ 		 										$("#subAlert").text("").removeClass("redText");	} }); } }); }

//umiejętności wojownika
		createNewElementAppend("p", "warriorTitle", "wojownik", $("#mainPart"), "bold");
		createNewElementAppend("button", heroCreator.warriorENG[0], heroCreator.warriorPL[0], $("#mainPart"), "bold"); 	chooseSkill($("#survival"), "szt. przetrwania");
		createNewElementAppend("button", heroCreator.warriorENG[1], heroCreator.warriorPL[1], $("#mainPart"), "bold"); 	chooseSkill($("#discipline"), "dyscyplina");
		createNewElementAppend("button", heroCreator.warriorENG[2], heroCreator.warriorPL[2], $("#mainPart"), "bold"); 	chooseSkill($("#argumentation"), "dowodzenie");
		createNewElementAppend("button", heroCreator.warriorENG[3], heroCreator.warriorPL[3], $("#mainPart"), "bold"); 	chooseSkill($("#impactShield"), "uderzenie tarczą");
		createNewElementAppend("button", heroCreator.warriorENG[4], heroCreator.warriorPL[4], $("#mainPart"), "bold"); 	chooseSkill($("#horsebackRiding"), "jeździectwo");
		createNewElementAppend("button", heroCreator.warriorENG[5], heroCreator.warriorPL[5], $("#mainPart"), "bold"); 	chooseSkill($("#dagger"), "sztylet");
		createNewElementAppend("button", heroCreator.warriorENG[6], heroCreator.warriorPL[6], $("#mainPart"), "bold"); 	chooseSkill($("#shortSword"), "krótki miecz");
		createNewElementAppend("button", heroCreator.warriorENG[7], heroCreator.warriorPL[7], $("#mainPart"), "bold"); 	chooseSkill($("#sabre"), "szabla");
		createNewElementAppend("button", heroCreator.warriorENG[8], heroCreator.warriorPL[8], $("#mainPart"), "bold"); 	chooseSkill($("#spear"), "włócznia");
		createNewElementAppend("button", heroCreator.warriorENG[9], heroCreator.warriorPL[9], $("#mainPart"), "bold"); 	chooseSkill($("#bow"), "łuk");
		createNewElementAppend("button", heroCreator.warriorENG[10], heroCreator.warriorPL[10], $("#mainPart"), "bold"); 	chooseSkill($("#buckler"), "puklerz");
		createNewElementAppend("button", heroCreator.warriorENG[11], heroCreator.warriorPL[11], $("#mainPart"), "bold"); 	chooseSkill($("#smallWoodenShield"), "mała tarcza drew.");
		createNewElementAppend("button", heroCreator.warriorENG[12], heroCreator.warriorPL[12], $("#mainPart"), "bold"); 	chooseSkill($("#smallMetalShield"), "mała tarcza metal.");

		//umiejętności złoczyńcy
		createNewElementAppend("p", "criminalTitle", "złoczyńca", $("#mainPart"), "bold");
		createNewElementAppend("button", heroCreator.criminalENG[0], heroCreator.criminalPL[0], $("#mainPart"), "bold"); 	chooseSkill($("#poison"), "trucizny");
		createNewElementAppend("button", heroCreator.criminalENG[1], heroCreator.criminalPL[1], $("#mainPart"), "bold"); 	chooseSkill($("#climb"), "wspinaczka");
		createNewElementAppend("button", heroCreator.criminalENG[2], heroCreator.criminalPL[2], $("#mainPart"), "bold"); 	chooseSkill($("#acting"), "aktorstwo");
		createNewElementAppend("button", heroCreator.criminalENG[3], heroCreator.criminalPL[3], $("#mainPart"), "bold"); 	chooseSkill($("#acrobatics"), "akrobatyka");
		createNewElementAppend("button", heroCreator.criminalENG[4], heroCreator.criminalPL[4], $("#mainPart"), "bold"); 	chooseSkill($("#traps"), "pułapki");
		createNewElementAppend("button", heroCreator.criminalENG[5], heroCreator.criminalPL[5], $("#mainPart"), "bold"); 	chooseSkill($("#sneak"), "skradanie się");
		createNewElementAppend("button", heroCreator.criminalENG[6], heroCreator.criminalPL[6], $("#mainPart"), "bold"); 	chooseSkill($("#theft"), "kradzież");
		createNewElementAppend("button", heroCreator.criminalENG[7], heroCreator.criminalPL[7], $("#mainPart"), "bold"); 	chooseSkill($("#dodge"), "uniki");
		createNewElementAppend("button", heroCreator.criminalENG[8], heroCreator.criminalPL[8], $("#mainPart"), "bold"); 	chooseSkill($("#bluff"), "blefowanie");
		createNewElementAppend("button", heroCreator.criminalENG[9], heroCreator.criminalPL[9], $("#mainPart"), "bold"); 	chooseSkill($("#poison"), "trucizny");
		createNewElementAppend("button", heroCreator.criminalENG[10], heroCreator.criminalPL[10], $("#mainPart"), "bold"); 	chooseSkill($("#woddenStick"), "drewniana pałka");

//umiejętności złoczyńca
createNewElementAppend("p", "wizardTitle", "czarodziej", $("#mainPart"), "bold");
createNewElementAppend("button", heroCreator.wizardENG[0], heroCreator.wizardPL[0], $("#mainPart"), "bold"); 	chooseSkill($("#writingRead"), "pisanie i czytanie");
createNewElementAppend("button", heroCreator.wizardENG[1], heroCreator.wizardPL[1], $("#mainPart"), "bold"); 	chooseSkill($("#summonOvertake"), "przyw./odp. demona");
createNewElementAppend("button", heroCreator.wizardENG[2], heroCreator.wizardPL[2], $("#mainPart"), "bold"); 	chooseSkill($("#divination"), "wróżbiarstwo");
createNewElementAppend("button", heroCreator.wizardENG[3], heroCreator.wizardPL[3], $("#mainPart"), "bold"); 	chooseSkill($("#healig"), "leczenie ran");
createNewElementAppend("button", heroCreator.wizardENG[4], heroCreator.wizardPL[4], $("#mainPart"), "bold"); 	chooseSkill($("#castSpell"), "rzucanie czarów");
createNewElementAppend("button", heroCreator.wizardENG[5], heroCreator.wizardPL[5], $("#mainPart"), "bold"); 	chooseSkill($("#createPotion"), "tworz. eliksirów");
createNewElementAppend("button", heroCreator.wizardENG[6], heroCreator.wizardPL[6], $("#mainPart"), "bold"); 	chooseSkill($("#createMagItem"), "tworz. mag. przedmiotów");
createNewElementAppend("button", heroCreator.wizardENG[7], heroCreator.wizardPL[7], $("#mainPart"), "bold"); 	chooseSkill($("#createBalm"), "tworzenie maści");
createNewElementAppend("button", heroCreator.wizardENG[8], heroCreator.wizardPL[8], $("#mainPart"), "bold"); 	chooseSkill($("#createRunes"), "tworzenie run");
createNewElementAppend("button", heroCreator.wizardENG[9], heroCreator.wizardPL[9], $("#mainPart"), "bold"); 	chooseSkill($("#astrology"), "pisanie i czytanie");
createNewElementAppend("button", heroCreator.wizardENG[0], heroCreator.wizardPL[0], $("#mainPart"), "bold"); 	chooseSkill($("#herbalism"), "zielarstwo");

//paragraf do wyświetlania opisu wybranej umiejętności
$("#mainPart button").addClass("width15");

// część do usuwania wybranej umiejętności i komunikacji o błędzie
createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));
createNewElementAppend("p", "btnToRemoveTitle", "Umiejętności do usunięcia", $("#choosenDescription"));
createNewElementAppend("p", "btnToRemove", "", $("#choosenDescription"));
createNewElementAppend("p", "subAlert", "", $("#choosenDescription"));

//pętla dla przycisków usuwania umiejetności, gdy pownownie wejdzie się w opcje wybiernia umiejętności
function skillsToRemove(skills){ if(skills.length > 0){ for (let i=0; i<skills.length; i++){
createNewElementAppend("button", i, skills[i], $("#btnToRemove"), "bold");
let allBtnRemove = document.querySelectorAll("#btnToRemove button"), j;
for(j=0; j<allBtnRemove.length; j++){allBtnRemove[j].addEventListener("click", function(e) {
if(skills.indexOf($(this).text()) !== -1){ skills.splice(equip.indexOf($(this).text()), 1);
this.remove();} this.remove(); }); } } } } skillsToRemove(skills);
});//koniec zdarzeń dla kreatora postaci - umiejętności

//funkcja optymalizująca tworzenie elementów informacji zbiorczej
function infoCreator(titleId, textTitle, nameInfoSubId, what, where){ createNewElementAppend("p", titleId, textTitle, where); createNewElementAppend("p", nameInfoSubId, what, where); if(what == "nie wybrano"){ $("#" + nameInfoSubId).addClass("redText");}else if(what !== "nie wybrano"){ $("#" + nameInfoSubId).addClass("greenText"); } }

//zdarzenia dla przycisku info - w kreatorze postaci
$("#infoCreator").on("click", () =>{ $("#mainPart").empty();

	createNewElementAppend("p", "infoTitle", heroCreator.infoTitle, $("#mainPart"));
	$("#infoTitle").addClass("goldUnderline basicText");
	createNewElementAppend("p", "infoDescription", heroCreator.infoDescription, $("#mainPart"));

//część pierwsza - imię, rasa i profesja
	createNewElementAppend("div", "divInfoOne", "", $("#mainPart"));
//imię
	createNewElementAppend("div", "nameResult", "", $("#divInfoOne"));
	infoCreator("nameInfo", "imię", "nameInfoSub", hero[0], $("#nameResult"));
//rasa
	createNewElementAppend("div", "raceResult", "", $("#divInfoOne"));
	infoCreator("raceInfo", "rasa", "raceInfoSub", hero[1], $("#raceResult"));
//profesja
	createNewElementAppend("div", "occupationResult", "", $("#divInfoOne"));
	infoCreator("occupationInfo", "profesja", "occupationInfoSub", hero[2], $("#occupationResult"));

//część druga - losowane cechy
createNewElementAppend("div", "divInfoTwo", "", $("#mainPart"));

//siła
createNewElementAppend("div", "forceResult", "", $("#divInfoTwo"));
infoCreator("forceInfo", "siła", "forceInfoSub", "nie wylosowano", $("#forceResult"));

//wytrzymałość
createNewElementAppend("div", "strengthResult", "", $("#divInfoTwo"));
infoCreator("strengthInfo", "wytrzymałość", "strengthInfoSub", "nie wylosowano", $("#strengthResult"));

//zręczność
createNewElementAppend("div", "dexterityResult", "", $("#divInfoTwo"));
infoCreator("dexterityInfo", "zręczność", "dexterityInfoSub", "nie wylosowano", $("#dexterityResult"));

//inteligencja
createNewElementAppend("div", "intelligenceResult", "", $("#divInfoTwo"));
infoCreator("intelligenceInfo", "inteligencja", "intelligenceInfoSub", "nie wylosowano", $("#intelligenceResult"));

//charyzma
createNewElementAppend("div", "charismaResult", "", $("#divInfoTwo"));
infoCreator("charismaInfo", "charyzma", "charismaInfoSub", "nie wylosowano", $("#charismaResult"));

//część trzecia - wybór pozostałych cech - przycisk CECHY 2
createNewElementAppend("div", "divInfoThree", "", $("#mainPart"));

//płeć
createNewElementAppend("div", "sexResult", "", $("#divInfoThree"));
infoCreator("sexInfo", "płeć", "sexInfoSub", choosenFeatures[0], $("#sexResult"));

//kolor włosów
createNewElementAppend("div", "hairResult", "", $("#divInfoThree"));
infoCreator("hairInfo", "kolor włosów", "hairInfoSub", choosenFeatures[1], $("#hairResult"));

//kolor oczu
createNewElementAppend("div", "eyesResult", "", $("#divInfoThree"));
infoCreator("eyesInfo", "kolor oczu", "eyesInfoSub", choosenFeatures[2], $("#eyesResult"));

//kolor skóry
createNewElementAppend("div", "skinResult", "", $("#divInfoThree"));
infoCreator("skinInfo", "kolor skóry", "skinInfoSub", choosenFeatures[3], $("#skinResult"));

//waga
createNewElementAppend("div", "weightResult", "", $("#divInfoThree"));
infoCreator("weightInfo", "waga", "weightInfoSub", choosenFeatures[4], $("#weightResult"));

//wzrost
createNewElementAppend("div", "heightResult", "", $("#divInfoThree"));
infoCreator("heightInfo", "wzrost", "heightInfoSub", choosenFeatures[5], $("#heightResult"));

//część czwarta - wybrany ekwipunek
createNewElementAppend("div", "divInfoFour", "", $("#mainPart"));

createNewElementAppend("div", "equipResult", "", $("#divInfoFour"));
infoCreator("equipInfo", "ekwipunek", "equipInfoSub", equip, $("#equipResult"));

//część piąta- wybrane umiejętności
createNewElementAppend("div", "divInfoFive", "", $("#mainPart"));

createNewElementAppend("div", "skillsResult", "", $("#divInfoFour"));
infoCreator("skillsInfo", "umiejętności", "skillsInfoSub", skills, $("#skillsResult"));

createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));
});//koniec zdarzeń dla przycisku info - w kreatorze postaci

let allgreen = document.querySelectorAll("#alerts .greenText");
checkGreen();
}); //koniec przycisku nowa gra (newGame)

//funkcja optymalizująca zliczanie punktów cech
	function resultRandomFeatures(features, race, occupation, where, tablePosition){
		if(!isNaN(features) && isNaN(race) && isNaN(occupation)){// jest tylko cecha
			let result = features; amountAllPoint.splice(tablePosition, 1, result); where.text(result);
		}else if(!isNaN(features) && !isNaN(race) && isNaN(occupation)){// jest cecha + rasa
			let result = features + race; amountAllPoint.splice(tablePosition, 1, result); where.text(result);
		}else if(isNaN(features) && !isNaN(race) && isNaN(occupation)){// jest rasa
			let result = race; amountAllPoint.splice(tablePosition, 1, result); where.text(result);
		}else if(isNaN(features) && !isNaN(race) && !isNaN(occupation)){// jest rasa + profesja
			let result = race + occupation; amountAllPoint.splice(tablePosition, 1, result); where.text(result);
		}else if(isNaN(features) && isNaN(race) && !isNaN(occupation)){// jest profesja
				let result = occupation; amountAllPoint.splice(tablePosition, 1, result); 		where.text(result);
		}else if(!isNaN(features) && isNaN(race) && !isNaN(occupation)){// jest cecha + profesja
				let result = features + occupation; amountAllPoint.splice(tablePosition, 1, result);
				where.text(result);
		}else if(!isNaN(features) && !isNaN(race) && !isNaN(occupation)){ //cecha + rasa + profesja
				let result = features + race + occupation; amountAllPoint.splice(tablePosition, 1, result);
				where.text(result); } }

//interwał dla zliczania punktów cech Postaci
let stopPoints = setInterval(function(){ resultRandomFeatures(randomFeatures[0], choosenRace[0], choosenOccupation[0], $("#forceInfoSub"), 0); resultRandomFeatures(randomFeatures[1], choosenRace[1], choosenOccupation[1], $("#strengthInfoSub"), 1); resultRandomFeatures(randomFeatures[2], choosenRace[2], choosenOccupation[2], $("#dexterityInfoSub"), 2); resultRandomFeatures(randomFeatures[3], choosenRace[3], choosenOccupation[3], $("#intelligenceInfoSub"), 3); resultRandomFeatures(randomFeatures[4], choosenRace[4], choosenOccupation[4], $("#charismaInfoSub"), 4); }, 100);

//funkcja dla interwału, sprawdzającego wybranie wszystkich potrzebnych rzeczy
let stopAll = setInterval(function(){ checkGreen() }, 100);
function checkGreen() { let allgreen = document.querySelectorAll("#alerts .greenText");
if(allgreen.length < 7 || equip.length == 0 || skills.length == 0){ $("#startGame").hide();
}else if(allgreen.length == 7 && equip.length > 0 && skills.length > 0){  			$("#startGame").show().addClass("basicBtn").addClass("start"); } }



















//zdarzenie dla przycisku cechy - wyświetlanym w oknie alertowym
$("#featuresGame").on("click", () =>{
	createNewElementAppend("p", "nameTitle", "imię", $("#alerts"));
	createNewElementAppend("p", "nameTable", hero[0], $("#alerts"));

	createNewElementAppend("p", "raceTitle", "rasa", $("#alerts"));
	createNewElementAppend("p", "raceTable", hero[1], $("#alerts"));

	createNewElementAppend("p", "occupationTitle", "profesja", $("#alerts"));
	createNewElementAppend("p", "occupationTable", hero[2], $("#alerts"));

	createNewElementAppend("p", "forceTitle", "siła", $("#alerts"));
	createNewElementAppend("p", "forceTable", amountAllPoint[0], $("#alerts"));

	createNewElementAppend("p", "strenghtTitle", "wytrzymałość", $("#alerts"));
	createNewElementAppend("p", "strenghtTable", amountAllPoint[1], $("#alerts"));

	createNewElementAppend("p", "dexterityTitle", "zręczność", $("#alerts"));
	createNewElementAppend("p", "dexterityTable", amountAllPoint[2], $("#alerts"));

	createNewElementAppend("p", "intelligenceTitle", "inteligencja", $("#alerts"));
	createNewElementAppend("p", "intelligenceTable", amountAllPoint[3], $("#alerts"));

	createNewElementAppend("p", "charismaTitle", "charyzma", $("#alerts"));
	createNewElementAppend("p", "charismaTable", amountAllPoint[4], $("#alerts"));

	createNewElementAppend("p", "sexTitle", "płeć", $("#alerts"));
	createNewElementAppend("p", "sexTable", choosenFeatures[0], $("#alerts"));

	createNewElementAppend("p", "hairTitle", "kolor włosów", $("#alerts"));
	createNewElementAppend("p", "hairTable", choosenFeatures[1], $("#alerts"));

	createNewElementAppend("p", "eyesTitle", "kolor oczu", $("#alerts"));
	createNewElementAppend("p", "eyesTable", choosenFeatures[2], $("#alerts"));

	createNewElementAppend("p", "skinTitle", "kolor skóry", $("#alerts"));
	createNewElementAppend("p", "skinTable", choosenFeatures[3], $("#alerts"));

	createNewElementAppend("p", "weightTitle", "waga", $("#alerts"));
	createNewElementAppend("p", "weightTable", choosenFeatures[4], $("#alerts"));

	createNewElementAppend("p", "heightTitle", "wzrost", $("#alerts"));
	createNewElementAppend("p", "heightTable", choosenFeatures[5], $("#alerts"));

	$("#featuresGame").prop("disabled", true);
	$("#alerts").addClass("arrange");

	$("#nameTitle, #nameTable, #raceTitle, #raceTable, #occupationTitle, #occupationTable, #forceTitle, #forceTable, #strenghtTitle, #strenghtTable, #dexterityTitle, #dexterityTable, #intelligenceTitle, #intelligenceTable, #charismaTitle, #charismaTable, #sexTitle, #sexTable, #hairTitle, #hairTable, #eyesTitle, #eyesTable, #skinTitle, #skinTable, #weightTitle, #weightTable, #heightTitle, #heightTable").addClass("centerBold");

	$("#nameTable, #raceTable, #occupationTable, #forceTable, #strenghtTable, #dexterityTable, #intelligenceTable, #charismaTable, #sexTable, #hairTable, #eyesTable, #skinTable, #weightTable,  #heightTable").addClass("font12emGreen");

	createNewElementAppend("button", "closeFeatures", "zamknij", $("#alerts"));

	//zdarzenie przycisku zamykania
	$("#closeFeatures").addClass("closeBtn"); $("#closeFeatures").on("click", () => {
	$("#alerts").removeClass("arrange").empty(); $("#taskGame, #skillsGame, #equipGame, #featuresGame").prop("disabled", false); });
});//koniec zdarzenia dla przycisku cechy - wyświetlanym w oknie alertowym

//zdarzenie wyświetlania ekwipunku (gra);
$("#equipGame").on("click", () =>{
	createNewElementAppend("p", "equipTitle", "ekwipunek", $("#alerts"));
	createNewElementAppend("p", "equipTable", equip, $("#alerts"));
	createNewElementAppend("p", "goldTitle", "złoto", $("#alerts"));
	createNewElementAppend("p", "goldTable", gold, $("#alerts"));
	createNewElementAppend("button", "closeEquip", "zamknij", $("#alerts"));

$("#equipTable, #equipTitle, #goldTitle, #goldTable").addClass("centerBold2");
$("#equipTable, #goldTable").addClass("font12emGreen");

$("#equipGame").prop("disabled", true);

//zdarzenie przycisku zamykania
$("#closeEquip").addClass("closeBtn");
$("#closeEquip").on("click", () => {
	$("#alerts").empty();
$("#taskGame, #skillsGame, #equipGame, #featuresGame").prop("disabled", false);
}); });
//koniec zdarzenia wyświetlania ekwipunku (gra)

//zdarzenie dla wyświetlania umiejętności (gra);
$("#skillsGame").on("click", () =>{ createNewElementAppend("p", "skillsTitle", "umiejętności", $("#alerts")); createNewElementAppend("p", "skillsTable", skills, $("#alerts"));	createNewElementAppend("button", "closeSkills", "zamknij", $("#alerts"));

$("#skillsTitle, #skillsTable").addClass("centerBold2");
$("#skillsTable").addClass("font12emGreen");

$("#skillsGame").prop("disabled", true);

	//zdarzenie przycisku zamykania
$("#closeSkills").addClass("closeBtn"); $("#closeSkills").on("click", () => {
	$("#alerts").empty();
$("#taskGame, #skillsGame, #equipGame, #featuresGame").prop("disabled", false);
}); });
//koniec zdarzenia wyświetlania umiejętności (gra)

//zdarzenie dla wyśwetlania zadań w grze (gra)
$("#taskGame").on("click", () =>{
	 createNewElementAppend("p", "taskTitle", "zadania", $("#alerts"));
for(let i=0; i<tasks.length; i++){
	 createNewElementAppend("p", "taskId" + i, tasks[i], $("#alerts"), "font12emGreen"); }
	  createNewElementAppend("button", "closeTasks", "zamknij", $("#alerts"));
		$("#alerts > p").addClass("centerBold2");
$("#taskGame").prop("disabled", true);
//zdarzenie przycisku zamykania
$("#closeTasks").addClass("closeBtn");
$("#closeTasks").on("click", () => {
	$("#alerts").empty();
	$("#taskGame, #skillsGame, #equipGame, #featuresGame").prop("disabled", false);
});
}); //koniec zdarzenia wyświetlania zadań (gra)
















//zdarzenie dla przycisku start w kreatorze postaci
$("#startGame").on("click", () =>{

clearInterval(stopAll); // zatrzymanie interwału - sprawdzenia poprawnego dokonania wyborów
clearInterval(stopPoints); // zatrzymanie interwału - dla zliczania punktów cech postaci
$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator, #startGame").hide(); $("#mainPart").empty(); $("#alerts").empty();

setTimeout(function(){ createNewElementAppend("p", "text1", introGame.text1, $("#mainPart"));	createNewElementAppend("p", "text2", introGame.text2, $("#mainPart")); createNewElementAppend("p", "text3", introGame.text3, $("#mainPart"));
	createNewElementAppend("p", "text4", introGame.text4, $("#mainPart"));
	createNewElementAppend("p", "text5", introGame.text5, $("#mainPart"));
	createNewElementAppend("p", "text6", introGame.text6, $("#mainPart"));
	createNewElementAppend("p", "text7", introGame.text7, $("#mainPart"));
	createNewElementAppend("p", "text8", introGame.text8, $("#mainPart")); }, 100);

setTimeout(() =>{ $("#mainPart").empty();
$("#featuresGame, #equipGame, #skillsGame, #taskGame").show().addClass("basicBtn correctStyles");
$("#skillsGame").addClass("correctSkills"); }, 30000);

setTimeout(()=>{
	createNewElementAppend("div", "btnsP1", "", $("nav"));

	//tworzenie przycisków dla pierwszego paragrafu - pokój
	createNewElementAppend("button", "lookAround", "rozejrzyj się", $("#btnsP1"));
	createNewElementAppend("button", "wardrobe", "zbadaj szafę", $("#btnsP1"));
	createNewElementAppend("button", "chest", "zbadaj skrzynię", $("#btnsP1"));
	createNewElementAppend("button", "package", "weź paczkę", $("#btnsP1"));

	//tworzenie przycisków dla paragrafu drugiego - ulica
	createNewElementAppend("button", "lookAroundStreet", "rozejrzyj się", $("#btnsP1"));
	createNewElementAppend("button", "marketPlace", "targ", $("#btnsP1"));
	createNewElementAppend("button", "inRoom", "do domu", $("#btnsP1"));
	createNewElementAppend("button", "caravans", "karawany", $("#btnsP1"));
	$("#lookAroundStreet, #marketPlace, #inRoom, #caravans").hide();

	createNewElementAppend("p", "textP", firstP.text, $("#mainPart"));
	createNewElementAppend("p", "description", "", $("#mainPart"));
$("#btnsP1").after($("#outRoom").show().addClass("outRoomRed").prop("disabled", true));

//zdarzenie dla rozglądania się
$("#lookAround").on("click", function(){
	firstP.lookAround();
});
//koniec zdarzenia rozglądania się

//zdarzenie dla zbadania szafy
$("#wardrobe").on("click", function(){
	firstP.wardrobe(choosenFeatures[0],
	$("#description"), equip);
	firstP.closeWardrobe(); firstP.takeCoat(equip); });
//koniec zdarzenia badania szafy

//zdarzenie dla zbadania skrzynię
$("#chest").on("click", function(){ firstP.chest(gold, $("#description")); firstP.closeChest($("#description")); });
//koniec zdarzenia dla zbadania skrzyni

//zdarzenie dla zabrania paczki
$("#package").on("click", function(){ equip.push("paczka"); $("#outRoom").removeClass("outRoomRed").addClass("outRoomGreen").prop("disabled", false); $(this).remove(); });
//koniec zdarzenia dla zabrania paczki
}, 30100);
});//koniec zdarzenia dla przycisku start w kreatorze postaci

//zdarzenie dla wyjścia z pokoju - ulica
$("#outRoom").on("click", ()=>{
	$("#mainPart").empty();
	$("#lookAround, #wardrobe, #chest, #outRoom").hide();
	$("#lookAroundStreet, #marketPlace, #inRoom, #caravans").show().addClass("basicBtn");
	createNewElementAppend("p", "textP", street.text, $("#mainPart"));
	createNewElementAppend("p", "description", "", $("#mainPart"));

//zdarzenie dla rozglądania się na ulicy
$("#lookAroundStreet").on("click", () => { street.lookAround(); });

//zdarzenie dla wejścia do domu
$("#inRoom").on("click", () =>{
	$("#mainPart").empty();
	$("#lookAroundStreet, #marketPlace, #inRoom, #caravans").hide();
	$("#lookAround, #wardrobe, #chest, #outRoom").show();
	createNewElementAppend("p", "textP", firstP.text, $("#mainPart"));
	createNewElementAppend("p", "description", "", $("#mainPart"));
});

});




});//koniec DOMContentLoaded
