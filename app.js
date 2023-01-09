//const title = document.querySelector(".hello:first-child h1"); //이건 조난 파워풀함
//console.log(title);
//console.dir(title); //element의 내부를 보고 싶다면 dir을 사용하여 보면 됨 
//style을 죤나 사랑함 얘는 js로 이루어져 있음 
//style의 color 바궈볼꺼임
// 어케바꿀까 ? 
//title.style.color="blue";


const title = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
    console.log("title was clicked!");
}
title.addEventListener("click", handleTitleClick); // d어떤 이벤트에 대해서 리슨하고 있을 것인지 알려줘

//handleTitleClick() //두 괄호를 추가함으로써 실행버튼과 같은 누를 수있음 