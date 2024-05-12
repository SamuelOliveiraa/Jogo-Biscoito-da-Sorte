const cookie = document.querySelector('#cookie')
let randomNumber = Math.round(Math.random() * 10)
const container = document.querySelector('.container')
const button = document.querySelector('#button')
const message = document.querySelector('.message')

const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
]

function toggleContainer() {
  container.classList.toggle('luck')
}

function resetApp() {
  cookie.src = 'Assets/fortune-cookie.svg'
  toggleContainer()
}

function toggleMessage() {
  randomNumber = Math.round(Math.random() * 10)
  message.innerText = phrases[randomNumber]
}

/* WHEN PRESS COOKIE SHOW THE RANDOM PHRASE*/
cookie.addEventListener('click', () => {
  if (!container.classList.contains('luck')) {
    toggleContainer()
    toggleMessage()
    cookie.src = 'Assets/opened-cookie.svg'
  }
})

/* RESET WHEN PRESS BUTTON */
button.addEventListener('click', () => resetApp())