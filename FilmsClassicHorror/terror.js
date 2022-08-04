var filmsTerror =
[
 "https://br.web.img3.acsta.net/pictures/18/06/14/13/11/1751062.jpg"
]
var links = [
    "./FilmsClassicHorror/hereditario.html",
    "./teste.html"
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