import Elements from "./elements.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"

let timer = Timer()
let sounds = Sounds()

let { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonFlorest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
} = Elements()

let minutes = timer.getMinutes()

buttonPlay.addEventListener('click', function() {
  buttonPause.classList.remove('hide')
  buttonPlay.classList.add('hide')
  

  if ( timer.getMinutes() == 0 ){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }
  timer.countdown()
})

buttonPause.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  timer.pause()
})

buttonStop.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  timer.resetTimer()
  timer.updateTimerDisplay(minutes, 0)
})

// muda cor botao, e background, coloca sound
buttonFlorest.addEventListener('click', function() {
  buttonFlorest.classList.add('selected')
  buttonRain.classList.remove('selected')
  buttonCoffeeShop.classList.remove('selected')
  buttonFireplace.classList.remove('selected')

  sounds.setSound('./sounds/Floresta.wav')
})

// muda cor botao, e background, coloca sound
buttonRain.addEventListener('click', function() {
  buttonRain.classList.add('selected')
  buttonFlorest.classList.remove('selected')
  buttonCoffeeShop.classList.remove('selected')
  buttonFireplace.classList.remove('selected')

  sounds.setSound('./sounds/Chuva.wav')
})

// muda cor botao, e background, coloca sound
buttonCoffeeShop.addEventListener('click', function() {
  buttonCoffeeShop.classList.add('selected')
  buttonRain.classList.remove('selected')
  buttonFlorest.classList.remove('selected')
  buttonFireplace.classList.remove('selected')

  sounds.setSound('./sounds/Cafeteria.wav')
})

// muda cor botao, e background, coloca sound
buttonFireplace.addEventListener('click', function() {
  buttonFireplace.classList.add('selected')
  buttonRain.classList.remove('selected')
  buttonFlorest.classList.remove('selected')
  buttonCoffeeShop.classList.remove('selected')

  sounds.setSound('./sounds/Lareira.wav')
})