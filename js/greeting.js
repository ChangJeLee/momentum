//사용자 이름을 입력받고 이후에는 다시 질의받지 않고 기억할꺼임
// 이후 사용자 이름이 로컬 스토리지에 있으면 다시 로그인 form을 띄우면 안됨 

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value;    
    localStorage.setItem(USERNAME_KEY, username);
    paintGreegtings(username);
}

function paintGreegtings(username){
    greeting.innerText = `Hello ${username}`;  
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//console.log(savedUsername);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreegtings(savedUsername);
}