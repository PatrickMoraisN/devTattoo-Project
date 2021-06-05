const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const links = document.querySelectorAll('.navbar-links')
const pic = document.querySelector('.photo');
const pic2 = document.querySelector('.pictures')
const modal = document.querySelector('.modal-container')
const fullimg = document.querySelector('.fullImg')
const fraseElemOpen = document.querySelectorAll('.frase-foto')
const ratings = document.querySelectorAll('.rating')
const btn = document.querySelector('.send')
const panel = document.querySelector('.painel')
let reacao = 'gostei'

let frases = ['"Prometo que vou tentar" tatuagem oldschool feita em apenas 2 visitas. Muito bom né?',
'Granada e Caveira oldschool, feitas em 4 horas',
'Todas essas tatuagens foram feitas aqui no estúdio! Ao todo foram 4 meses de trabalho com inúmeras visitas!',
'Nosso tatuador Alex em ação!',
'Anjo caído. Aqui não tem só oldschool não! Também temos diversos tipos de realismo!',
'Alex fazendo a tatuagem de um Leão com caracteres romanos realista!']

const addFrase = (id) => {
  const fraseElem = document.createElement('p');
  fraseElem.classList.add('frase-foto');
  fraseElem.innerText = `${frases[+(id)]}`
  modal.appendChild(fraseElem)
}

pic2.addEventListener('click', (event) => {
  if(event.target.classList.contains('phot')){
  modal.classList.add('open')
  fullimg.src = event.target.src;
  addFrase(event.target.getAttribute('data-id'));
  }
})

modal.addEventListener('click', (event) => {
  if(event.target.classList.contains('open')){
    modal.classList.remove('open');
     modal.removeChild(document.querySelector('.frase-foto'));
  }
})

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

links.forEach(link => (
  link.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  })
))

const ativarRating = (event) => {
  ratings.forEach(rating => rating.classList.remove('active'));
  if(event.target.classList.contains('rating')){
    event.target.classList.add('active')
    reacao = event.target.innerText
  } else {
    event.target.parentNode.classList.add('active')
    reacao = event.target.getAttribute('data-reacao')
  }
  console.log(reacao)
}

btn.addEventListener('click', (e) => {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Obrigado!!</strong><br>
  <strong>Feedback: ${reacao}</strong><br>
  <p>Vamos usar seu feedback para melhorarmos!</p>`
})

ratings.forEach(rating => rating.addEventListener('click', ativarRating))