const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//대문자로 쓰는 이유 : string만 포함된 변수는 대문자로 표기함
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const saveUsername = localStorage.getItem(USERNAME_KEY);

function onLogin(event) {
  event.preventDefault(); //서브밋시 새로고침을 막아줌
  const usernameWrote = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, usernameWrote);
  paintGreeting(usernameWrote);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`; //`${변수}` string안에 넣을 때 백틱
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (saveUsername === null) {
  //폼 보여줘
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLogin);
} else {
  //폼 없애줘
  paintGreeting(saveUsername);
}
