// index page form pop up
const login = document.querySelector("#login");
const signup = document.querySelector("#signup");
const registrationBtn = document.querySelector("#registration");
const registrationDoneBtn = document.querySelector("#registrationDone");
const loginBtn = document.querySelector("#loginBtn");
const startBtn = document.querySelector("#startquiz");

function startQuiz() {
  document.location = `quiz${Math.floor(Math.random() * 10) + 1}.html`;
}

startBtn.addEventListener("click", startQuiz);

function showLogInForm() {
  login.classList.remove("hide");
  function stopLoginPopUp() {
    // if login success timeinterval has to stop
    login.classList.add("hide");
    clearInterval(popup);
  }

  loginBtn.addEventListener("click", stopLoginPopUp);
}

let popup = setInterval(showLogInForm, 1000);

function registrationForm() {
  clearInterval(popup);
  login.classList.add("hide");
  signup.classList.remove("hide");
}

registrationBtn.addEventListener("click", registrationForm);

function registrationDoneForm() {
  clearInterval(popup);
  //   login.classList.add("hide");
  //   signup.classList.add("hide");
}

registrationDoneBtn.addEventListener("click", registrationDoneForm);

// ====================================================================
