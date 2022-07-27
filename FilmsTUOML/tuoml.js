var filmsTUOML =
[
 "https://br.web.img3.acsta.net/medias/nmedia/18/91/88/38/20167659.jpg"
]
var links = [
    "./films.html",
    "./teste.html"
]
console.log(filmsTUOML)
for(var i=0; i < filmsTUOML.length; i++){
    document.write("<a href="+links[i]+">"+"<img class='image-dois' src=" + filmsTUOML[i] + ">"+"</a>")
}


function listFilmsTravel(filme){
    console.log(filme)
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listTUOML");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}