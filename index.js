let score = 0;
let answer = 0;

const optionEls = document.querySelectorAll(".option");
const colorTextEl = document.querySelector(".color-text");
const nextStageBtn = document.querySelector(".next-stage");
const playAgainBtn = document.querySelector(".play-again");
const correctEl = document.querySelector(".correct");
const wrongEl = document.querySelector(".wrong");

optionEls.forEach((optionEl, index) => {
  optionEl.addEventListener("click", () => {
    if (answer === index) {
      correctEl.classList.add("open");
      optionEl.classList.add("modal");
      score += 1;
    } else {
      document.querySelector(".score-in-modal").textContent = score;
      wrongEl.classList.add("open");
      optionEl.classList.add("modal");
      score = 0;
    }
    document.querySelector(".score-num").textContent = score;
  });
});

nextStageBtn.addEventListener("click", e => {
  correctEl.classList.remove("open");
  document.querySelector(".modal").classList.remove("modal");
  newStage();
});

playAgainBtn.addEventListener("click", e => {
  wrongEl.classList.remove("open");
  document.querySelector(".modal").classList.remove("modal");
  newStage();
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

const newStage = (() => {
  const options = [randomColor(), randomColor(), randomColor()];

  optionEls.forEach((optionEl, index) => {
    optionEl.style.backgroundColor = options[index];
  });

  answer = Math.floor(Math.random() * 3);

  colorTextEl.textContent = options[answer];
})();
