var filmsTravelTime =
[
"https://br.web.img2.acsta.net/pictures/22/03/02/17/11/3732338.png",
"https://br.web.img3.acsta.net/pictures/21/05/26/20/19/2966501.jpg",
"https://media.fstatic.com/z8hEgE7vww4MtD47QaDPqsYvvIA=/290x478/smart/media/movies/covers/2018/01/Projeto_Almanaque.jpg",
"https://br.web.img2.acsta.net/medias/nmedia/18/91/08/71/20267083.jpg",
"https://br.web.img3.acsta.net/pictures/13/12/18/20/56/273919.jpg",
"https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/86/99/50/19870912.jpg",
"https://br.web.img3.acsta.net/pictures/14/05/27/15/43/549754.jpg",
"https://br.web.img3.acsta.net/medias/nmedia/18/92/25/86/20188919.jpg",
"https://cineclick-static.flixmedia.cloud/1280/615461cf-b76a-4952-a8b1-cddaaf35706f.jpg",
]
var links=[
    "./FilmsTravelTime/projectAdam.html",
    "./FilmsTravelTime/aGuerradoAmanha.html",
    "./FilmsTravelTime/projectAlmanaque.html",
    "./FilmsTravelTime/looper.html",
    "./FilmsTravelTime/effectButterfly.html",
    "./FilmsTravelTime/dejavu.html",
    "./FilmsTravelTime/noLimiteDoAmanha.html",
]
for(var i=0; i < filmsTravelTime.length; i++){
    document.write("<a href="+links[i]+">"+"<img class='image-dois' src=" + filmsTravelTime[i] + ">"+"</a>")
}

function listFilmsTravel(filme2){
    console.log(filme2)
    var elementoFilmeFavorito = "<img src=" + filme2 + ">";
    var elementoListaFilmes = document.getElementById("listFilmsTravelTime");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}