let intro = require("./firstMenu.js");
let heroCreator = require("./heroCreator.js");

document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

//funkcja, która tworzy nowy element DOM
function createNewElementAppend(nameElement, idName, text, whereAppend){
		let newElement = document.createElement(nameElement);
		newElement.id = idName;
		newElement.innerText = text;
		whereAppend.append(newElement);
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
setTimeout(() =>{
  $("body").css("backgroundColor", "beige");
}, 19000);

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

//funkcje dla pierwszego menu
$("#info").on("click", () =>{
	$("#mainPart").children("p").remove();
  createNewElementAppend("p", "textInfo", intro.textInfo, $("#mainPart"));
	$("#textInfo").addClass("basicText");
});

$("#licence").on("click", () =>{
	$("#mainPart").children("p").remove();
  createNewElementAppend("p", "textLicence", intro.textLicence, $("#mainPart"));
	$("#textLicence").addClass("basicText");
});

$("#tutorial").on("click", () =>{
	$("#mainPart").children("p").remove();
  createNewElementAppend("p", "textTutorial", intro.textTutorial, $("#mainPart"));
	$("#textTutorial").addClass("basicText");
});

//przycisk nowej gry - tworzenie kretora postaci
$("#newGame").on("click", () =>{
	$("#mainPart").empty();
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
		createNewElementAppend("p", "nameTitle", heroCreator.nameTitle, $("#mainPart"));
		$("#nameTitle").addClass("goldUnderline basicText");
		createNewElementAppend("p", "nameDescription", heroCreator.nameDescription, $("#mainPart"));
		createNewElementAppend("input", "giveName", "", $("#mainPart"));
		createNewElementAppend("button", "acceptName", "zatwierdź", $("#mainPart"));
		$("#acceptName").on("click", () =>{
			let nameInput = $("#giveName").val().replace(/\d/g,'');
			if(nameInput == ""){
				$("#nameAlert").addClass("redText");
			}else{
			hero.splice(0, 1, nameInput);
			$("#nameAlert").addClass("greenText");
		}
		});
	});//koniec zdarzeń dla przycisku imię

	//zdarzenia dla przyciku rasa (race)
	$("#race").on("click", ()=>{
		$("#mainPart").empty();
		createNewElementAppend("p", "raceTitle", heroCreator.raceTitle, $("#mainPart"));
		$("#raceTitle").addClass("goldUnderline basicText");
		createNewElementAppend("p", "raceDescription", heroCreator.raceDescription, $("#mainPart"));
		createNewElementAppend("button", "human", "człowiek", $("#mainPart"));
		createNewElementAppend("button", "elv", "elf", $("#mainPart"));
		createNewElementAppend("button", "dwarf", "krasnolud", $("#mainPart"));
		createNewElementAppend("button", "orc", "ork", $("#mainPart"));
		$("#human, #elv, #dwarf, #orc").addClass("basicBtn");
		createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

		$("#human").on("click", ()=>{
				hero.splice(1, 1, "człowiek");
				$("#raceAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.human);
		});

		$("#elv").on("click", ()=>{
				hero.splice(1, 1, "elf");
				$("#raceAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.elv);
		});

		$("#dwarf").on("click", ()=>{
				hero.splice(1, 1, "krasnolud");
				$("#raceAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.dwarf);
		});

		$("#orc").on("click", ()=>{
				hero.splice(1, 1, "ork");
				$("#raceAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.orc);
		});
	});//koniec zdarzeń dla przycisku rasa

//zdarzenia dla przyciku profesja (occupation)
	$("#occupation").on("click", ()=>{
		$("#mainPart").empty();
		createNewElementAppend("p", "occupationTitle", heroCreator.occupationTitle, $("#mainPart"));
		$("#occupationTitle").addClass("goldUnderline basicText");
		createNewElementAppend("p", "occupationDescription", heroCreator.occupationDescription, $("#mainPart"));
		createNewElementAppend("button", "warrior", "wojownik", $("#mainPart"));
		createNewElementAppend("button", "criminal", "złoczyńca", $("#mainPart"));
		createNewElementAppend("button", "wizard", "czarodziej", $("#mainPart"));
		$("#warrior, #criminal, #wizard").addClass("basicBtn");
		createNewElementAppend("p", "choosenDescription", "", $("#mainPart"));

		$("#warrior").on("click", ()=>{
				hero.splice(2, 1, "wojownik");
				$("#occupationAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.warrior);
		});

		$("#criminal").on("click", ()=>{
				hero.splice(2, 1, "złoczyńca");
				$("#occupationAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.criminal);
		});

		$("#wizard").on("click", ()=>{
				hero.splice(2, 1, "czarodziej");
				$("#occupationAlert").addClass("greenText");
				$("#choosenDescription").text(heroCreator.wizard);
		});
	});//koniec zdarzeń dla przycisku profesja

//przycisk cech część piewrsza - wybieranie siły, wytrzymałości, zręczności, inteligencji i charyzmy
	$("#features").on("click", function(){
			$("#mainPart").empty();
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

			$("#force").on("click", ()=>{
				let randomForcePoints = Math.round(Math.random()*50);
			  randomFeatures.splice(0, 1, randomForcePoints);
			  $("#choosenDescription").text(heroCreator.force);
			  if( randomFeatures.length < 5 ){ $("#featuresAlert").addClass("redText");
			  }else{ $("#featuresAlert").addClass("greenText"); }
			});

			$("#strength").on("click", ()=>{
					let randomStrengthPoints = Math.round(Math.random()*50);
					randomFeatures.splice(1, 1, randomStrengthPoints);
					$("#choosenDescription").text(heroCreator.strength);
					if( randomFeatures.length < 5 ){ $("#feautresAlert").addClass("redText");
					}else if(randomFeatures.length == 5){$("#featuresAlert").addClass("greenText"); }
			});

			$("#dexterity").on("click", ()=>{
					let randomDexterityPoints = Math.round(Math.random()*50);
					randomFeatures.splice(2, 1, randomDexterityPoints);
					$("#choosenDescription").text(heroCreator.dexterity);
					if( randomFeatures.length < 5 ){ $("#featuresAlert").addClass("redText");
				}else if(randomFeatures.length == 5){ $("#featuresAlert").addClass("greenText"); }
			});

			$("#intelligence").on("click", ()=>{
					let randomIntelligencePoints = Math.round(Math.random()*50);
					randomFeatures.splice(3, 1, randomIntelligencePoints);
					$("#choosenDescription").text(heroCreator.intelligence);
					if( randomFeatures.length < 5 ){ $("#featuresAlert").addClass("redText");
					}else if(randomFeatures.length == 5){ $("#featuresAlert").addClass("greenText"); }
			});

			$("#charisma").on("click", ()=>{
					let randomCharismaPoints = Math.round(Math.random()*50);
					randomFeatures.splice(4, 1, randomCharismaPoints);
					$("#choosenDescription").text(heroCreator.charisma);
					if( randomFeatures.length < 5 ){
							$("#featuresAlert").addClass("redText");
					}else if(randomFeatures.length == 5){
							$("#featuresAlert").addClass("greenText");
					}
			});
	});//koniec zdarzeń dla przycisku cech (features) - siły, wytrzymałości, zręczności inteligencji i charyzmy

//zdarzenia dla przycisku cechy 2 - płeć, kolor włosów, oczu, skóry, waga, wzrost,
$("#features2").on("click", ()=>{
		$("#mainPart").empty();
		createNewElementAppend("p", "features2Title", heroCreator.features2Title, $("#mainPart"));
		$("#features2Title").addClass("goldUnderline basicText");
		createNewElementAppend("p", "features2Description", heroCreator.features2Description, $("#mainPart"));
		createNewElementAppend("div", "features2Main", "", $("#mainPart"));

		createNewElementAppend("p", "features2MainSex", "Płeć", $("#features2Main"));
		createNewElementAppend("button", "features2MainWomen", "Kobieta", $("#features2Main"));
		createNewElementAppend("button", "features2MainMen", "Mężczyzna", $("#features2Main"));
		createNewElementAppend("button", "features2MainOther", "Nie wiadomo", $("#features2Main"));

		$("#features2MainWomen, #features2MainMen, #features2MainOther").addClass("btnsFeatures2");
		$("#features2MainWomen").on("click",()=>{
			choosenFeatures.splice(0, 1, "kobieta");
			if( choosenFeatures.length < 6){
				$("#features2Alert").addClass("redText");
			}else if(choosenFeatures.length == 6){
				$("#features2Alert").addClass("greenText");
			}
		});

		$("#features2MainMen").on("click",()=>{
			choosenFeatures.splice(0, 1, "mężczyzna");
			if( choosenFeatures.length < 6){
				$("#features2Alert").addClass("redText");
			}else if(choosenFeatures.length == 6){
				$("#features2Alert").addClass("greenText");
			}
		});

		$("#features2MainOther").on("click",()=>{
			choosenFeatures.splice(0, 1, "nie wiadomo");
			if( choosenFeatures.length < 6){
				$("#features2Alert").addClass("redText");
			}else if(choosenFeatures.length == 6){
				$("#features2Alert").addClass("greenText");
			}
		});

		createNewElementAppend("p", "features2MainHair", "Kolor włosów", $("#features2Main"));
		createNewElementAppend("button", "features2MainBlond", "blond", $("#features2Main"));
		createNewElementAppend("button", "features2MainRed", "rude", $("#features2Main"));
		createNewElementAppend("button", "features2MainBlack", "czarne", $("#features2Main"));
		createNewElementAppend("button", "features2MainDyed", "farbowane", $("#features2Main"));

		$("#features2MainBlond, #features2MainRed, #features2MainBlack, #features2MainDyed").addClass("btnsFeatures2");

		$("#features2MainBlond").on("click",()=>{
			choosenFeatures.splice(1, 1, "blond");
			if( choosenFeatures.length < 6){
				$("#features2Alert").addClass("redText");
			}else if(choosenFeatures.length == 6){
				$("#features2Alert").addClass("greenText");
			}
		});

		$("#features2MainRed").on("click",()=>{
			choosenFeatures.splice(1, 1, "rude");
			if( choosenFeatures.length < 6){
				$("#features2Alert").addClass("redText");
			}else if(choosenFeatures.length == 6){
				$("#features2Alert").addClass("greenText");
			}
		});

		$("#features2MainBlack").on("click",()=>{
			choosenFeatures.splice(1, 1, "czarne");
			if( choosenFeatures.length < 6){
				$("#features2Alert").addClass("redText");
			}else if(choosenFeatures.length == 6){
				$("#features2Alert").addClass("greenText");
			}
		});

		$("#features2MainDyed").on("click",()=>{
			choosenFeatures.splice(1, 1, "farbowane");
			if( choosenFeatures.length < 6){
				$("#features2Alert").addClass("redText");
			}else if(choosenFeatures.length == 6){
				$("#features2Alert").addClass("greenText");
			}
		});

		createNewElementAppend("p", "features2MainEyes", "Kolor oczu", $("#features2Main"));
		createNewElementAppend("button", "features2MainHazel", "piwne", $("#features2Main"));
		createNewElementAppend("button", "features2MainGrey", "szare", $("#features2Main"));
		createNewElementAppend("button", "features2MainBrown", "brązowe", $("#features2Main"));
		createNewElementAppend("button", "features2MainBlue", "niebieskie", $("#features2Main"));

		$("#features2MainHazel, #features2MainGrey, #features2MainBrown, #features2MainBlue").addClass("btnsFeatures2");

		$("#features2MainHazel").on("click",()=>{ choosenFeatures.splice(2, 1, "piwne");
			if( choosenFeatures.length < 6){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainGrey").on("click",()=>{ choosenFeatures.splice(2, 1, "szare");
			if( choosenFeatures.length < 6){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainBrown").on("click",()=>{ choosenFeatures.splice(2, 1, "brązowe");
			if( choosenFeatures.length < 6){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainBlue").on("click",()=>{ choosenFeatures.splice(2, 1, "niebieskie");
			if( choosenFeatures.length < 6){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

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

		$("#features2MainWhite").on("click",()=>{ choosenFeatures.splice(3, 1, "biała");
			if( choosenFeatures.length < 6){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainBrownSkin").on("click",()=>{ choosenFeatures.splice(3, 1, "brązowa");
			if( choosenFeatures.length < 6){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainBlack").on("click",()=>{ choosenFeatures.splice(3, 1, "czarna");
			if( choosenFeatures.length < 6 ){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainRed").on("click",()=>{ choosenFeatures.splice(3, 1, "czerwona");
			if( choosenFeatures.length < 6 ){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainYellow").on("click",()=>{ choosenFeatures.splice(3, 1, "żółta");
			if( choosenFeatures.length < 6 ){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainGreen").on("click",()=>{ choosenFeatures.splice(3, 1, "zielona");
			if( choosenFeatures.length < 6 ){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainTawny").on("click",()=>{ choosenFeatures.splice(3, 1, "brunatna");
			if( choosenFeatures.length < 6 ){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainAzure").on("click",()=>{ choosenFeatures.splice(3, 1, "błękitna");
			if( choosenFeatures.length < 6 ){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		createNewElementAppend("p", "features2MainWeight", "Waga", $("#features2Main"));
		createNewElementAppend("button", "features2MainUnderweight", "niedowaga", $("#features2Main"));
		createNewElementAppend("button", "features2MainNormalweight", "normalna", $("#features2Main"));
		createNewElementAppend("button", "features2MainOverweight", "nadwaga", $("#features2Main"));

		$("#features2MainUnderweight, #features2MainNormalweight, #features2MainOverweight").addClass("btnsFeatures2");

		$("#features2MainUnderweight").on("click",()=>{ choosenFeatures.splice(4, 1, "niedowaga");
			if( choosenFeatures.length < 6 ){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainNormalweight").on("click",()=>{ choosenFeatures.splice(4, 1, "normalna");
			if( choosenFeatures.length < 6 ){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainOverweight").on("click",()=>{ choosenFeatures.splice(4, 1, "nadwaga");
			if( choosenFeatures.length < 6){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		createNewElementAppend("p", "features2MainGrowth", "Wzrost", $("#features2Main"));
		createNewElementAppend("button", "features2MainShort", "niski", $("#features2Main"));
		createNewElementAppend("button", "features2MainNormalGrowth", "normalny", $("#features2Main"));
		createNewElementAppend("button", "features2MainTall", "wysoki", $("#features2Main"));

		$("#features2MainShort, #features2MainNormalGrowth, #features2MainTall").addClass("btnsFeatures2");

		$("#features2MainShort").on("click",()=>{ choosenFeatures.splice(5, 1, "niski");
			if( choosenFeatures.length < 6){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainNormalGrowth").on("click",()=>{ choosenFeatures.splice(5, 1, "normalny");
			if( choosenFeatures.length < 6){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});

		$("#features2MainTall").on("click",()=>{ choosenFeatures.splice(5, 1, "wysoki");
			if( choosenFeatures.length < 6){ $("#features2Alert").addClass("redText");
		}else if(choosenFeatures.length == 6){ $("#features2Alert").addClass("greenText"); }
		});
});//koniec zdarzeń dla przycisku cechy 2 (features2)

//zdarzenia dla przycisku info
$("#infoCreator").on("click", () =>{
	console.log(hero);
	console.log(randomFeatures);
	console.log(choosenFeatures);
});//koniec zdarzeń dla przycisku info

}); //koniec przycisku nowa gra (newGame)


});//koniec DOMContentLoaded
