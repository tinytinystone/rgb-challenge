let score = 0

function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return `rgb(${r}, ${g}, ${b})`
}

document.querySelectorAll(".option").forEach((optionEl, index) => {
  optionEl.addEventListener("click", e => {
    if (answer === index) {
      score++
      document.querySelector('.correct').classList.add('open')
     optionEl.classList.add("modal")
    } else {
      document.querySelector('.score-in-modal').textContent = score
      score = 0
      document.querySelector('.wrong').classList.add('open')
        optionEl.classList.add("modal")
    }
    document.querySelector('.score-num').textContent = score
  })
})

function newStage() {
  const options = [randomColor(), randomColor(), randomColor()]

  document.querySelectorAll(".option").forEach((optionEl, index) => {
    optionEl.style.backgroundColor = options[index]
  })

  answer = Math.floor(Math.random() * 3)

  document.querySelector(".color-text").textContent = options[answer]
}

let answer

newStage()

document.querySelector('.next-stage').addEventListener('click', e => {
  document.querySelector('.correct').classList.remove('open')
  document.querySelector(".modal").classList.remove('modal')
  newStage();
})

document.querySelector('.play-again').addEventListener('click', e => {
  document.querySelector('.wrong').classList.remove('open')
  document.querySelector(".modal").classList.remove("modal");
  newStage();
})
