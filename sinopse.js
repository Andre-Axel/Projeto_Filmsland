/*Para sumir o texto da resenha*/
const span2 = document.querySelector('.resenha');
const span2_height = span2.clientHeight;
const button2 = document.querySelector('.btn-resenha');
const exemplo2 = () => {
  span2.classList.toggle('transition2')
  span2.style.height = !span2.classList.contains('transition2') ? `${span2_height}%` : 100;
}
span2.style.height = `${span2_height}%`;
button2.addEventListener('click', exemplo2);

/*Itens do menu*/
var divNav = document.querySelector('.dropdown-menu')

var plot = '<a class="dropdown-item" href="/index.html#plot">Plot Twist</a>'
var travelTime ='<a class="dropdown-item" href="/index.html#traveltime" >Viagens no Tempo</a>'
var bradDcp ='<a class="dropdown-item" href="/index.html#beD">Brad Pitt e DiCaprio</a>'
var justWatch ='<a class="dropdown-item" href="/index.html#justW">Apenas Assista</a>'
var temUmOlho ='<a class="dropdown-item" href="/index.html#touml">Tem um Olho na minha Lágrima</a>'
var terror ='<a class="dropdown-item" href="/index.html#bvt">Bora ver uns Terror?</a>'

divNav.innerHTML += plot + travelTime + bradDcp + justWatch + temUmOlho + terror;
