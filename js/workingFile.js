let intro = require("./firstMenu.js");
let heroCreator = require("./heroCreator.js");

document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

//funkcja, która tworzy nowy element DOM
function createNewElementAppend(nameElement, idName, text, whereAppend, addedClass){
		let newElement = document.createElement(nameElement);
		newElement.id = idName;
		newElement.innerText = text;
		whereAppend.append(newElement);
		newElement.classList.add(addedClass);
		newElement.classList.remove("undefined");
	}

//funkcja optymalizująca tworzenie inputów
	function createNewInputAppend(nameElement, name, id, value, type, whereAppend, addedClass){
			let newElement = document.createElement(nameElement);
			newElement.type = type;
			newElement.name = name;
			newElement.id = id;
			newElement.value = value;
			whereAppend.append(newElement);
			newElement.classList.add(addedClass);
			newElement.classList.remove("undefined");
		}

	//funkcja optymalizująca wyświetlanie pozostałych (innych) elementów wybory rzeczy z ekwipunku
		function arrayEquip(arrayENG, arrayPL, type, addClass){
			for (let i= 0; i<arrayPL.length; i++){
				createNewInputAppend("input", "item", arrayENG[i], arrayPL[i], type, $("#weapon"), addClass);
				createNewElementAppend("div", arrayENG[i], arrayPL[i], $("#weapon"), addClass);
			}
		}

		//funkcja optymalizująca wybieranie rasy i profesji
			function clickRaceOccupation(element, text, number, sourceDescription, alert){
				element.on("click", ()=>{ hero.splice(number, 1, text); alert.addClass("greenText");
				$("#choosenDescription").text(sourceDescription); });
			}

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

	//tablice
	// tablica postaci 0 - imię, 1 - rasa, 2 - profesja
	let hero = [];

	//wylosowanych punktów cech 0 - siła, 1 - wytrzymałość, 2 - zręczność, 3 - inteligencja, 4 - charyzma
	let randomFeatures = [];

	//tablica dla wybieralnych cech postaci 0 - płeć, 1 - kolor włosów, 2 - kolor oczu, 3 - waga, 4 - wzrost, 5 - kolor skóry
	let choosenFeatures = [];

	//tablica ekwipunku max 5 elementów
	let equip = [];

	//tablice wybierania EKWIPUNKU
	//broń
	let equipWeaponPL = ["sztylet", "drewniana pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];
	let equipWeaponENG = ["dagger", "woddenStick", "shortSword", "sabre", "spear", "slingshot", "bow"];

	//zbroje
	let equipArmorPL = ["przeszywanica", "skórzana", "ćwiekowana"];
	let equipArmorENG = ["gambison", "leather", "studded"];

	//tarcze
	let equipShieldPL = ["puklerz", "mała drewniana", "mała metalowa"];
	let equipShieldENG = ["buckler", "smallWooden", "smallMetal"];

	//pozostały ekwipunek
	let equipOtherPL = ["hubka i krzesiwo", "mieszek", "skórzany pas", "igły i nici", "tuba na pergaminy", "pęk piór do pisania", "pergamniny 5szt.", "zwykłe ubranie", "płaszcz", "fikuśna czapka", "torba podróżna", "sakwa", "koc", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m"];

	let equipOtherENG = ["tinders", "moneyBag", "leatherBelt", "needlesThread", "tubeParchments", "penWriting", "parchments5pieces", "ordinaryClothing", "coat", "fussyHat", "travelBag", "purse", "blanket", "tent", "woodenBowl", "woodenSpoon", "torch", "oliveLamp", "oilLamp", "rope5m"];

	//tablica umiejętności max 3 elementy
	let skills = [];

//showanie przycisków pierszego menu
$("#info, #licence, #tutorial, #newGame, #titleGameHeader, #subTitleGameHeader").hide();

//schowanie przycisków kreatora
$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").hide();

//schowanie i usunięcie nazwy studia oraz sentencji
$("#studioTitle").fadeOut(6000);

//pokazanie tytułu i podtytułu gry
setTimeout(() =>{
  $("#studioTitle h2").replaceWith("<p class='medievalText gameTitle'>Audaces</p>");
  $("#studioTitle h3").replaceWith("<p class='medievalText subGameTitle'>serce z żelaza</p>");
  $("#studioTitle").fadeIn(6000);
  $("#studioTitle").delay(2000).fadeOut(6000);
}, 6200);

//zmiana koloru tła na beżowy
setTimeout(() =>{ $("body").css("backgroundColor", "beige"); }, 19000);

//usunięcie diva o id studioTitle
setTimeout(()=>{
  $("#studioTitle").remove();
    $("#titleGameHeader, #subTitleGameHeader").fadeIn(1500);
    $("#info, #licence, #tutorial, #newGame").fadeIn(1500).addClass("basicBtn");
    $("#info").addClass("btnInfo");
    $("#licence").addClass("btnLicence");
    $("#tutorial").addClass("btnTutorial");
    $("#newGame").addClass("btnNewGame");
		createNewElementAppend("p", "textHello", intro.textHello, $("#mainPart"));
		$("#textHello").addClass("basicText");
}, 20000);

//funkcja klik dla pierwszego menu
function clickFirstMenu(element, element2, idElement, textElement){
	element.on("click", () =>{ element2.children("p").remove(); createNewElementAppend("p", idElement, textElement, element2); element2.addClass("basicText"); });
}

//funkcje dla pierwszego menu
clickFirstMenu($("#info"), $("#mainPart"), "textElement", intro.textInfo);
clickFirstMenu($("#licence"), $("#mainPart"), "textLicence", intro.textLicence);
clickFirstMenu($("#tutorial"), $("#mainPart"), "textTutorial", intro.textTutorial);

//przycisk nowej gry - tworzenie kretora postaci
$("#newGame").on("click", () =>{
	$("#mainPart").empty().removeClass("basicText");
	$("#info, #licence, #tutorial, #newGame").fadeOut();
	$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").fadeIn();
	$("#name, #race, #occupation, #features, #features2, #equipment, #skills, #infoCreator").addClass("basicBtn");

//tworzenie czerwonych paragrafów w części alertowej - zmieniają kolor na zielony po wybraniu
	createNewElementAppend("p", "nameAlert", heroCreator.nameAlert, $("#alerts"));
	createNewElementAppend("p", "raceAlert", heroCreator.raceAlert, $("#alerts"));
	createNewElementAppend("p", "occupationAlert", heroCreator.occupationAlert, $("#alerts"));
	createNewElementAppend("p", "featuresAlert", heroCreator.featuresAlert, $("#alerts"));
	createNewElementAppend("p", "features2Alert", heroCreator.features2Alert, $("#alerts"));
	$("#nameAlert, #raceAlert, #occupationAlert, #featuresAlert, #features2Alert").addClass("redText");

//zdarzenia dla przycisku imię (name)
	$("#name").on("click", ()=>{
		$("#mainPart").empty();

		//elementy wyboru imienia
		createNewElementAppend("p", "nameTitle", heroCreator.nameTitle, $("#mainPart"));
		$("#nameTitle").addClass("goldUnderline basicText");
		createNewElementAppend("p", "nameDescription", heroCreator.nameDescription, $("#mainPart"));
		
		createNewElementAppend("input", "giveName", "", $("#mainPart"));
		createNewElementAppend("button", "acceptName", "zatwierdź", $("#mainPart"));

		//funkcja wpisywania imienia
		$("#acceptName").on("click", () =>{ let nameInput = $("#giveName").val().replace(/\d/g,'');
				if(nameInput == ""){ $("#nameAlert").addClass("redText");
			}else{ hero.splice(0, 1, nameInput); $("#nameAlert").addClass("greenText"); }
		});
	});//koniec zdarzeń dla przycisku imię

	//zdarzenia dla przyciku rasa (race)
	$("#race").on("click", ()=>{
		$("#mainPart").empty();

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
	$("#occupation").on("click", ()=>{
		$("#mainPart").empty();

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
	$("#features").on("click", function(){
			$("#mainPart").empty();

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
					randomFeatures.splice(number, 1, name); $("#choosenDescription").text(source);
					if( randomFeatures.length < 5 ){$("#featuresAlert").addClass("redText");
					}else{ $("#featuresAlert").addClass("greenText"); } });
			}

			//funkcje losujące punkty cech
			randomPointsFeatures($("#force"), "randomForcePoints", 0, heroCreator.force);
			randomPointsFeatures($("#strength"), "randomStrenghtPoints", 1, heroCreator.strenght);
			randomPointsFeatures($("#dexterity"), "randomDexterityPoints", 2, heroCreator.dexterity);
			randomPointsFeatures($("#intelligence"), "randomIntelligencePoints", 3, heroCreator.intelligence);
			randomPointsFeatures($("#charisma"), "randomCharismaPoints", 4, heroCreator.charisma);
		});//koniec zdarzeń dla przycisku cech (features) - siły, wytrzymałości, zręczności inteligencji i charyzmy

//zdarzenia dla przycisku cechy 2 - płeć, kolor włosów, oczu, skóry, waga, wzrost,
$("#features2").on("click", ()=>{
		$("#mainPart").empty();

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
		function features2(element, number, text){
			element.on("click",()=>{ choosenFeatures.splice(number, 1, text);
				if( choosenFeatures.length < 6){ $("#features2Alert").addClass("redText");
				}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); } });
		}

		//funkcje wyboru płci
		features2($("#features2MainWomen"), 0, "kobieta");
		features2($("#features2MainMen"), 0, "mężczyzna");
		features2($("#features2MainOther"), 0, "nie wiadomo");

		//elementy wyboru koloru włosów
		createNewElementAppend("p", "features2MainHair", "Kolor włosów", $("#features2Main"));
		createNewElementAppend("button", "features2MainBlond", "blond", $("#features2Main"));
		createNewElementAppend("button", "features2MainRed", "rude", $("#features2Main"));
		createNewElementAppend("button", "features2MainBlack", "czarne", $("#features2Main"));
		createNewElementAppend("button", "features2MainDyed", "farbowane", $("#features2Main"));

		$("#features2MainBlond, #features2MainRed, #features2MainBlack, #features2MainDyed").addClass("btnsFeatures2");

		//funkcje wyboru kolorów włosów
		features2($("#features2MainBlond"), 1, "blond");
		features2($("#features2MainRed"), 1, "rude");
		features2($("#features2MainBlack"), 1, "czarne");
		features2($("#features2MainDyed"), 1, "farbowane");

		//elementy wyboru koloru oczu
		createNewElementAppend("p", "features2MainEyes", "Kolor oczu", $("#features2Main"));
		createNewElementAppend("button", "features2MainHazel", "piwne", $("#features2Main"));
		createNewElementAppend("button", "features2MainGrey", "szare", $("#features2Main"));
		createNewElementAppend("button", "features2MainBrown", "brązowe", $("#features2Main"));
		createNewElementAppend("button", "features2MainBlue", "niebieskie", $("#features2Main"));

		$("#features2MainHazel, #features2MainGrey, #features2MainBrown, #features2MainBlue").addClass("btnsFeatures2");

		//funkcje wyboru koloru oczu
		features2($("#features2MainHazel"), 2, "piwne");
		features2($("#features2MainGrey"), 2, "szare");
		features2($("#features2MainBrown"), 2, "brązowe");
		features2($("#features2MainBlue"), 2, "niebieskie");

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
		features2($("#features2MainWhite"), 3, "biała");
		features2($("#features2MainBrownSkin"), 3, "brązowa");
		features2($("#features2MainBlack"), 3, "czarna");
		features2($("#features2MainRed"), 3, "czerwona");
		features2($("#features2MainYellow"), 3, "żółta");
		features2($("#features2MainGreen"), 3, "zielona");
		features2($("#features2MainTawny"), 3, "brunatna");
		features2($("#features2MainAzure"), 3, "błękitna");

		//elementy wyboru wagi
		createNewElementAppend("p", "features2MainWeight", "Waga", $("#features2Main"));
		createNewElementAppend("button", "features2MainUnderweight", "niedowaga", $("#features2Main"));
		createNewElementAppend("button", "features2MainNormalweight", "normalna", $("#features2Main"));
		createNewElementAppend("button", "features2MainOverweight", "nadwaga", $("#features2Main"));

		$("#features2MainUnderweight, #features2MainNormalweight, #features2MainOverweight").addClass("btnsFeatures2");

		//funkcje wyboru wagi
		features2($("#features2MainUnderweight"), 4, "niedowaga");
		features2($("#features2MainNormalweight"), 4, "normalna");
		features2($("#features2MainOverweight"), 4, "nadwaga");

		//elementy wyboru wzrostu
		createNewElementAppend("p", "features2MainGrowth", "Wzrost", $("#features2Main"));
		createNewElementAppend("button", "features2MainShort", "niski", $("#features2Main"));
		createNewElementAppend("button", "features2MainNormalGrowth", "normalny", $("#features2Main"));
		createNewElementAppend("button", "features2MainTall", "wysoki", $("#features2Main"));

		$("#features2MainShort, #features2MainNormalGrowth, #features2MainTall").addClass("btnsFeatures2");

		//funkcje wyboru wzrostu
		features2($("#features2MainShort"), 5, "niski");
		features2($("#features2MainNormalGrowth"), 5, "normalny");
		features2($("#features2MainTall"), 5, "wysoki");
	});//koniec zdarzeń dla przycisku cechy 2 (features2)

	//zdarzenia dla przycisku ekwipunek
		$("#equipment").on("click", ()=>{
				$("#mainPart").empty();

				//elementy wyboru ekwipunku
				createNewElementAppend("p", "equipmentTitle", heroCreator.equipmentTitle, $("#mainPart"));
				$("#equipmentTitle").addClass("goldUnderline basicText");
				createNewElementAppend("p", "equipmentDescription", heroCreator.equipmentDescription, $("#mainPart"));

				//funkcje tworzenia elementów wybierania ekwipunku

				//broń
				createNewElementAppend("div", "weapon", "", $("#mainPart"));
				createNewElementAppend("p", "weaponTitle", "broń", $("#weapon"));

				arrayEquip(equipWeaponENG, equipWeaponPL, "checkbox", "floatLeft");

				//czyszczenie floatów
				createNewElementAppend("p", "clearFloat", "", $("#weapon"));
				$("#clearFloat").addClass("clearFloat");

				//zbroja
				createNewElementAppend("div", "armor", "", $("#mainPart"));
				createNewElementAppend("p", "armorTitle", "zbroja", $("#weapon"));

				arrayEquip(equipArmorENG, equipArmorPL, "checkbox", "floatLeft");

				//czyszczenie floatów
				createNewElementAppend("p", "clearFloat2", "", $("#weapon"));
				$("#clearFloat2").addClass("clearFloat");

				//tarcza
				createNewElementAppend("div", "shield", "", $("#mainPart"));
				createNewElementAppend("p", "shieldTitle", "tarcza", $("#weapon"));

				arrayEquip(equipShieldENG, equipShieldPL, "checkbox", "floatLeft");

				//czyszczenie floatów
				createNewElementAppend("p", "clearFloat3", "", $("#weapon"));
				$("#clearFloat3").addClass("clearFloat");

				//inne elementy wybieralne ekwipunku
				createNewElementAppend("div", "otherEquip", "", $("#mainPart"));
				createNewElementAppend("p", "otherEquipTitle", "inne", $("#weapon"));

				//funkcja wyświetlania pozostałych (innych) elementów do wyboru
				arrayEquip(equipOtherENG, equipOtherPL, "checkbox", "floatLeft");

				//paragraf do wyświetlania opisu wybranego elementu ekwipunku
				createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));
		});

//zdarzenia dla przycisku info - w kreatorze postaci
$("#infoCreator").on("click", () =>{
	console.log(hero);
	console.log(randomFeatures);
	console.log(choosenFeatures);
});//koniec zdarzeń dla przycisku info - w kreatorze postaci
}); //koniec przycisku nowa gra (newGame)
});//koniec DOMContentLoaded
