var filmsTUOML =
[
 "https://br.web.img3.acsta.net/medias/nmedia/18/91/88/38/20167659.jpg",
 "https://ocaminhodoencontro.com.br/website/wp-content/uploads/2021/11/o-caminho-do-encontro-o-menino-que-descobriu-o-vento.jpg",
 "https://br.web.img3.acsta.net/pictures/16/10/13/21/27/038061.jpg",
 "https://br.web.img3.acsta.net/pictures/210/530/21053062_20131025204305591.jpg",
 "https://br.web.img3.acsta.net/medias/nmedia/18/91/67/04/20157103.jpg",
 "https://br.web.img3.acsta.net/pictures/17/07/26/12/20/497293.jpg",
 "https://br.web.img3.acsta.net/pictures/16/08/31/23/26/562395.png",
 "https://br.web.img3.acsta.net/pictures/16/09/21/19/14/207893.jpg"
]
var links = [
    "./FilmsTUOML/encontroMarcado.html",
    "./FilmsTUOML/oMeninoQueDescobriuOVento.html",
    "./FilmsTUOML/belezaOculta.html",
    "./FilmsTUOML/questaodeTempo.html",
    "./FilmsTUOML/seteVidas.html",
    "./FilmsTUOML/comAmorVanGogh.html",
    "./FilmsTUOML/quatroVidasdeumCachorro.html",
    "./FilmsTUOML/capitaoFantastico.html"
]
for(var i=0; i < filmsTUOML.length; i++){
    document.write("<a href="+links[i]+">"+"<img class='image-dois' src=" + filmsTUOML[i] + ">"+"</a>")
}


function listFilmsTravel(filme){
    console.log(filme)
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listTUOML");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}