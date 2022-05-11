export default function Elements() {
  const buttonPlay = document.querySelector('.play')
  const buttonPause = document.querySelector('.pause')
  const buttonStop = document.querySelector('.stop')
  const buttonIncrease = document.querySelector('.increase')
  const buttonDecrease = document.querySelector('.decrease')
  const minutesDisplay = document.querySelector('.minutes')
  const secondsDisplay = document.querySelector('.seconds')
  const buttonFlorest = document.querySelector('.florest')
  const buttonRain = document.querySelector('.rain')
  const buttonCoffeeShop = document.querySelector('.coffeeShop')
  const buttonFireplace = document.querySelector('.fireplace')
  const audio = document.querySelector('audio')


  return {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    minutesDisplay,
    secondsDisplay,
    buttonFlorest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace,
    audio
  }
} 
