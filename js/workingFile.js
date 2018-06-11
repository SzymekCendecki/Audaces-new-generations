document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

//schowanie i usunięcie nazwy studia oraz sentencji
$("#studioTitle").fadeOut(6000);

//pokazanie tytułu i podtytułu gry
setTimeout(() =>{
  $("#studioTitle h2").replaceWith("<h2>Audaces</h2>");
  $("#studioTitle h3").replaceWith("<h3>serce z żelaza</h3>");
  $("#studioTitle").fadeIn(6000);
}, 6200);


});
