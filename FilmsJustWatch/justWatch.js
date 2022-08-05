var filmsJW =
[
 "https://seuladogeek.com.br/wp-content/uploads/2022/04/O-Homem-do-Norte-Filme.jpg",
 "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
 "https://br.web.img3.acsta.net/c_310_420/pictures/16/01/18/18/57/082205.jpg",
 "https://upload.wikimedia.org/wikipedia/pt/d/d4/Ready_Player_One_%28filme%29.png",
 "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/31/20028688.jpg",
 "https://images-na.ssl-images-amazon.com/images/I/919fuP26aPL.jpg",
 "https://br.web.img3.acsta.net/c_310_420/pictures/21/12/06/21/17/3973076.jpg",
 "https://br.web.img3.acsta.net/pictures/19/07/22/21/56/1885920.jpg",
 "https://br.web.img2.acsta.net/pictures/19/08/22/09/22/0020378.jpg",
 "https://br.web.img3.acsta.net/pictures/210/124/21012465_2013061319170245.jpg"
]
var links = [
    "./FilmsJustWatch/theNorthman.html",
    "./FilmsJustWatch/interestelar.html",
    "./FilmsJustWatch/perdidoemMarte.html",
    "./FilmsJustWatch/jogadorn1.html",
    "./FilmsJustWatch/aOrigem.html",
    "./FilmsJustWatch/gatsby.html",
    "./FilmsJustWatch/naoOlhePraCima.html",
    "./FilmsJustWatch/adAstra.html",
    "./FilmsJustWatch/oRei.html",
    "./FilmsJustWatch/seven.html",
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