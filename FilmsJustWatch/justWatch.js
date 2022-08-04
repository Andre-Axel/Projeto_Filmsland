var filmsJW =
[
 "https://seuladogeek.com.br/wp-content/uploads/2022/04/O-Homem-do-Norte-Filme.jpg"
]
var links = [
    "./FilmsJustWatch/theNorthman.html",
    "./teste.html"
]
for(var i=0; i < filmsJW.length; i++){
    document.write("<a href="+links[i]+">"+"<img class='image-dois' src=" + filmsJW[i] + ">"+"</a>")
}


function listFilms(filme){
    console.log(filme)
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listJW");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}