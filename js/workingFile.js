document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

//schowanie i usunięcie nazwy studia oraz sentencji
$("#studioTitle").fadeOut(6000);

//pokazanie tytułu i podtytułu gry
setTimeout(() =>{
  $("#studioTitle h2").replaceWith("<p class='medievalText gameTitle'>Audaces</p>");
  $("#studioTitle h3").replaceWith("<p class='medievalText subGameTitle'>serce z żelaza</p>");
  $("#studioTitle").fadeIn(6000);
  $("#studioTitle").delay(2000).fadeOut(6000);
}, 6200);

setTimeout(() =>{
  $("body").css("backgroundColor", "beige");
}, 19000);
});
