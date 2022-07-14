const span = document.querySelector('.sinopse');
const span_height = span.clientHeight;
const button = document.querySelector('.btn-sinopse');
const exemplo = () => {
  span.classList.toggle('transition')
  span.style.height = !span.classList.contains('transition') ? `${span_height}%` : 100;
}

span.style.height = `${span_height}%`;
button.addEventListener('click', exemplo);
