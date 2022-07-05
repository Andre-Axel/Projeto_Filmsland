var listaFilmes1 =
["https://cineclick-static.flixmedia.cloud/1280/615461cf-b76a-4952-a8b1-cddaaf35706f.jpg",
 "https://s2.glbimg.com/fCNS_fXPhGRwlpnAaQLzvGYC1y0=/362x536/https://s2.glbimg.com/UPI9xlM9R9O41YRqSO7R3hTNk_s=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/q/V/Avo9ISQQO3grnARi3JCA/2020-914-a-chegada-poster.jpg",
 "https://i.ytimg.com/vi/uaSYEUugnzE/movieposter_en.jpg",
 "https://i.ytimg.com/vi/uaSYEUugnzE/movieposter_en.jpg",
 "https://i.ytimg.com/vi/uaSYEUugnzE/movieposter_en.jpg",
 "https://img.travessa.com.br/DVD/GR/44/443cb71d-0799-466f-9c9d-ac3bd21715fd.jpg"]

for(var i=0; i < listaFilmes1.length; i++){
    document.write("<img class='image' src=" + listaFilmes1[i] + ">")
}

function listarFilmesNaTela(filme){
    console.log(filme)
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
