import Elements from "./elements.js"

let {
  audio
} = Elements()

export default function Sounds() {
  function setSound(sound) {
    audio.pause()
    audio.src = sound
    audio.play()

  }
  return {
    setSound,
  }
}