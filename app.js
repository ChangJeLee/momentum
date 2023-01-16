//const loginForm = document.getElementById("#login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

/*function onLoginBtnClick() {
    const username = loginInput.value;
    if (username === ""){
        alert("Please write your name");   
    } else if(username.length > 15) { // <input required maxlength="15" 
        alert("Your name is too long.")
    }
}

loginButton.addEventListener("click", onLoginBtnClick);*/


function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(userName);
}

loginButton.addEventListener("click", onLoginBtnClick);