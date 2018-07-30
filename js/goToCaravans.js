function createNewElementAppend(nameElement, idName, text, whereAppend, addedClass){
let newElement = document.createElement(nameElement);
newElement.id = idName;	newElement.innerText = text;
whereAppend.append(newElement); newElement.classList.add(addedClass);
newElement.classList.remove("undefined");
}

module.exports.text = "Idziesz w kierunku głównej bramy. Mijasz ludzi, zwierzęta i taplające się w błocie dzieci. Gdy dochodzisz do bramy robi się coraz tłoczniej. Przez bramę przejeżdżają wozy, ludzie łażą w każdą stronę, wartownicy na murach ziewają z nudów. W końcu udało się wyjść z miasta. Przed sobą widzisz wielki plac, na którym jakaś karawana szykuje się właśnie do odjazdu. Może warto spytać się, czy jedzie do przygranicznej wioski?";

let answer = "Podchodzisz bliżej. Widzisz postać krasnoluda, który wydziera się w niebo głosy i pogania wszystkich wokół. Gdy jesteś już blisko, pytasz: 'Mości krasnoludzie, czy ta karawana jedzie do wioski na pograniczu?' 'Że co? Aaaa... Tak! Jedziemy dalej, ale będziemy przez nią przejeżdżać. Jak chcesz się zabrać to musisz się pospiesz z wsiadaniem. Na ostatnim wozie jest jeszcze trochę miejsca.'- odpowiedział i wrócił do swoich obowiązków.";

module.exports.ask = function(){
  createNewElementAppend("button", "ask", "zapytaj", $("#btnsP1"));
}

module.exports.answerAsk = function(){
  $("#ask").on("click", ()=>{
    $("#description").text(answer);
  });
}

module.exports.street = function(){
    $("#outRoom").show().text("ulica").toggleClass("streetMarket");
}

module.exports.market = function(){
  $("#marketPlace").show();
}

module.exports.agree = function(){
  createNewElementAppend("button", "agree", "zgódź się", $("nav"));
}
