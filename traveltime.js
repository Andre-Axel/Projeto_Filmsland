var filmsTravelTime =
["https://cineclick-static.flixmedia.cloud/1280/615461cf-b76a-4952-a8b1-cddaaf35706f.jpg",
 "https://br.web.img3.acsta.net/pictures/17/04/19/21/08/577190.jpg",
 "https://m.media-amazon.com/images/I/511+gBWbA-L._AC_SY445_.jpg",
 "https://m.media-amazon.com/images/I/51B9vDgCmoL._AC_.jpg"]

for(var i=0; i < filmsTravelTime.length; i++){
    document.write("<img class='image-dois' src=" + filmsTravelTime[i] + ">")
}

function listFilmsTravel(filme2){
    console.log(filme2)
    var elementoFilmeFavorito = "<img src=" + filme2 + ">";
    var elementoListaFilmes = document.getElementById("listFilmsTravelTime");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}