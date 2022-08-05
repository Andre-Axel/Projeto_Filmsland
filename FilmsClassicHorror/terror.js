var filmsTerror =
[
 "https://br.web.img3.acsta.net/pictures/18/06/14/13/11/1751062.jpg",
 "https://br.web.img2.acsta.net/c_310_420/pictures/19/07/03/22/58/2550143.jpg",
 "https://br.web.img3.acsta.net/pictures/17/07/11/09/32/381745.jpg",
 "https://upload.wikimedia.org/wikipedia/pt/b/b5/1922_-_Filme_de_2017.png"
]
var links = [
    "./FilmsClassicHorror/hereditario.html",
    "./FilmsClassicHorror/tedBundy.html",
    "./FilmsClassicHorror/oRitual.html",
    "./FilmsClassicHorror/1992.html",
]
for(var i=0; i < filmsTerror.length; i++){
    document.write("<a href="+links[i]+">"+"<img class='image-dois' src=" + filmsTerror[i] + ">"+"</a>")
}


function elementoListaFilmes(filme){
    console.log(filme)
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listBVT");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}