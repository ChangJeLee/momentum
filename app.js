// -------------------------------- Objects --------------------------------------------
 /*const playerNmae ="cjlee";
 const playerPoints = "1234";
 const playerHandsome = "false";
 const playerFat = "thin";

player.name
player.points
player.handsome*/
//얘를 Objects로 만들어보자 

// player[0]  == name
// player[1]  == points  이렇게 써놔야 알 수 있음 

// const player = ["cjlee", 1212, false, "thin"];
// 위는 cjlee 1212 false 이런게 어떤 값인지 모름

const player = {
    name:"cjlee",
    points:10,
    hansome:true,
    fat:true
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player); // const를 바꾸는게 아니고 Objects에서의 데이터를 바꾸는 것임 그래서 문제 안생겨 

player.lastName = "shit";
console.log(player);

player.points= player.points + 15;
console.log(player.points);


// -------------------------------- Objects END --------------------------------------------