/*Para sumir o texto da sinopse*/
const span = document.querySelector('.sinopse');
const span_height = span.clientHeight;
const button = document.querySelector('.btn-sinopse');
const exemplo = () => {
  span.classList.toggle('transition')
  span.style.height = !span.classList.contains('transition') ? `${span_height}%` : 100;
}
span.style.height = `${span_height}%`;
button.addEventListener('click', exemplo);

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