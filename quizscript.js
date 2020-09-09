const correct = document.querySelector("#correct");
const homeBtn = document.querySelector(".banner-center");

function correctAnswer() {
  correct.classList.add("correct-answer");
  document.location = `quiz${Math.floor(Math.random() * 10) + 1}.html`;
}

correct.addEventListener("click", correctAnswer);
