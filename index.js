var filmsPlot =
["https://cineclick-static.flixmedia.cloud/1280/615461cf-b76a-4952-a8b1-cddaaf35706f.jpg",
 "https://br.web.img3.acsta.net/pictures/17/04/19/21/08/577190.jpg",
 "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg",
 "https://images-na.ssl-images-amazon.com/images/I/81+RNiMeExL.jpg",
 "https://m.media-amazon.com/images/I/511+gBWbA-L._AC_SY445_.jpg",
 "https://m.media-amazon.com/images/I/51B9vDgCmoL._AC_.jpg",
 "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d2/Valilla%2Bsky%2Bposter.jpg/255px-Valilla%2Bsky%2Bposter.jpg",
 "https://br.web.img3.acsta.net/pictures/19/02/07/14/16/5034340.jpg",
 "https://media.fstatic.com/Gf5GKUqVUNaDwmGm5-nXp0L6Z9g=/290x478/smart/media/movies/covers/2011/11/d7dd71941870ff014758322db8c4f469.jpg",
 "https://br.web.img3.acsta.net/pictures/210/124/21012465_2013061319170245.jpg",
 "https://br.web.img3.acsta.net/c_310_420/pictures/16/10/19/01/57/552532.jpg",
 "https://m.media-amazon.com/images/I/81io9SYH5dL._AC_SL1500_.jpg",
 "http://www.cinevitor.com.br/wp-content/uploads/2015/10/oilusionistaposter.jpg"]

for(var i=0; i < filmsPlot.length; i++){
    document.write("<img class='image-dois' src=" + filmsPlot[i] + ">")
}

function listFilms(filme){
    console.log(filme)
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listFilms");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

