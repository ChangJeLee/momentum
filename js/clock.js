const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//padStart(2, "0") padEnd(2, "0") start는 최소 2글자가 되게하고 안그러면 그아페 0 을 넣게됨
getClock();
setInterval(getClock, 1000);// q반복
//setTimeout(sayHello, 5000); //5초뒤

