//główny tekst opisu ulicy
module.exports.text = "Stoisz przed domem. Aby udać się do wyznaczonego celu, najlepiej zabrać się z jakąś karawaną. Idziesz w kierunku bramy miasta. Przy bramie znajduje się targ. To dobry czas i miejsce, aby uzupełnić zapasy na dalszą podróż.";

//tekst dla rozglądania się na ulicy
module.exports.lookAround = function(){
  $("#description").text("Typowa ulica dzielnicy Najemników, miasta Erharuf. Częściowo brukowana. Pobliskie budynki są niskie i drewniane, maksymalnie jednopiętrowe. Nic specjalnego.");
 	setTimeout(()=>{
		$("#description").empty();
	}, 11000);
}
