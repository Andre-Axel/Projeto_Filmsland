var filmsBED =
[
 "https://br.web.img3.acsta.net/c_310_420/pictures/21/12/06/21/17/3973076.jpg",
 "https://media.fstatic.com/0sPWEaj2wyvzjwGGZdGx4zakAxY=/210x312/smart/media/movies/covers/2014/03/o-lobo-de-wall-street_t33252.jpg",
 "https://br.web.img3.acsta.net/pictures/15/12/17/18/20/090910.jpg",
 "https://images-na.ssl-images-amazon.com/images/I/919fuP26aPL.jpg",
 "https://br.web.img3.acsta.net/pictures/210/100/21010048_20130603234956231.jpg",
 "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/31/20028688.jpg",
 "https://br.web.img3.acsta.net/pictures/14/10/28/21/28/104479.jpg",
 "https://br.web.img3.acsta.net/medias/nmedia/18/91/21/46/20532444.jpg",
 "https://upload.wikimedia.org/wikipedia/pt/0/05/The_Curious_Case_of_Benjamin_Button.jpg",
 "https://br.web.img2.acsta.net/medias/nmedia/18/90/43/26/20096298.jpg", 
]
var links = [
    "./films.html",
    "./teste.html"
]
for(var i=0; i < filmsBED.length; i++){
    document.write("<a href="+links[i]+">"+"<img class='image-dois' src=" + filmsBED[i] + ">"+"</a>")
}


function listFilms(filme){
    console.log(filme)
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listBED");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}