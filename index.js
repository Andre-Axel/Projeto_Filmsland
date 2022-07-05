var filmsPlot =
["https://cineclick-static.flixmedia.cloud/1280/615461cf-b76a-4952-a8b1-cddaaf35706f.jpg",
 "https://br.web.img3.acsta.net/pictures/17/04/19/21/08/577190.jpg",
 "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg",
 "https://images-na.ssl-images-amazon.com/images/I/81+RNiMeExL.jpg",
 "https://m.media-amazon.com/images/I/511+gBWbA-L._AC_SY445_.jpg",
 "https://m.media-amazon.com/images/I/51B9vDgCmoL._AC_.jpg"]

for(var i=0; i < filmsPlot.length; i++){
    document.write("<img class='image' src=" + filmsPlot[i] + ">")
}

function listarFilmesNaTela(filme){
    console.log(filme)
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}