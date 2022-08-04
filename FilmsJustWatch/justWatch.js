var filmsJW =
[
 "https://seuladogeek.com.br/wp-content/uploads/2022/04/O-Homem-do-Norte-Filme.jpg",
 "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
 "https://br.web.img3.acsta.net/c_310_420/pictures/16/01/18/18/57/082205.jpg",
 "https://upload.wikimedia.org/wikipedia/pt/d/d4/Ready_Player_One_%28filme%29.png"
]
var links = [
    "./FilmsJustWatch/theNorthman.html",
    "./FilmsJustWatch/interestelar.html",
    "./FilmsJustWatch/perdidoemMarte.html",
    "./FilmsJustWatch/jogadorn1.html",
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