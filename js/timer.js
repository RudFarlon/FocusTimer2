import Elements from "./elements.js"

let {
  minutesDisplay,
  secondsDisplay,
  buttonDecrease,
  buttonIncrease,
  
} = Elements()

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

export default function Timer() {

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function setMinutes() {
    buttonIncrease.addEventListener('click', function() {     
      minutes = (minutes + 5)
      
      updateTimerDisplay(minutes, 0)

    })

    buttonDecrease.addEventListener('click', function() {
      minutesDisplay.textContent = (minutes - 5)
      minutes = minutes - 5
      updateTimerDisplay(minutes, 0)
      
      if ( minutes <= 0 ) {
        minutes =  1
        updateTimerDisplay(minutes, 0)
      }

      if ( minutes <= 1) {
        minutes = 0
        updateTimerDisplay(minutes, 0)
      }
    })
  }
  setMinutes()

  function countdown() {
    timerTimeOut = setTimeout(function() {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      if ( minutes <= 0 ) {
        minutes = 0
        return
      }

      if ( seconds <= 0 ) {
        seconds = 60

        minutesDisplay.textContent = minutes - 1
      }

      updateTimerDisplay(minutesDisplay.textContent, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function resetTimer() {
    minutes = 0
    updateTimerDisplay(minutes, 0)
    pause()
  }

  function getMinutes() {
    return minutes
  }

  function pause() {
    clearTimeout(timerTimeOut)
  }

  return {
    updateTimerDisplay,
    setMinutes,
    countdown,
    resetTimer,
    getMinutes,
    pause
  }
}