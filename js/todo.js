const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
/*
어려워 하시는 댓글이 많아서 올립니다.
1. To-Do-List 작성시 localStorage 에 저장이 됩니다.
2. 근데 저장이 될때 string data type 으로 저장이 되요. (예: "[a,b,c,d,e]")
3. 그래서 JSON.parse()를 통해 string data type을 object로 바꾼거에요. 근데 이 Object는 Array 같이 바뀌었어요.
 즉 index를 통해 value를 access할수 있어요
예: "[a,b,c,d]" (string) => [a, b, c, d] (array);
array[0] = a; array[1] = b; array[2] = c; array[3] = d
5. array 형태가 된 값을 parsedToDos 라는 const variable 에다가 넣어놨어요.
6. 이 상태에서 parsedToDos 는 array 형태라고 가정했을때 .foreach() 라는 function 을 사용할수 있는데
 이건 mdn 웹사이트 가면 나오지만 그냥 단순히 array 에 들어있는 모든 값을 iterate (순찰(?)) 할수 있는 function 입니다.
7. 즉 index 0 부터 마지막 index 까지 한바뀌 도는건데 돌면서
 그 값들을 item 라는 곳 또는 element에 (이름은 정하기 나름) 저장이 되는거에요.
ex)
Array = [ a, b, c, d]
Array.foreach( (item) => console.log(item))
// output:
a
b
c
d
여기서 부터 설명이 좀 어려운데 밑에 있는 웹사이트 가서 editor로 좀 놀아보시면 
.foreach()가 이해 되실거에요. for loop 이나 while loop 으로 할수 있는 기능을 더 짧은 코드로 할수 있게 만든것 같아요 ^^
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
도움이 되기를 바라면서...... ㅎㅎ  


학습목표 : localstorage.setItem('keyName','keyValue')
우리는 로컬저장소의 keyValue를 배열로 만드는 방법을 이해하고 이를 활용할 수 있다.

keyName 에는 하나의 keyValue만 저장된다.
하지만 keyValue 를 'toDos'라고 하고, toDos = [] 라고 하여 우리는 그 안에 하나 이상의 정보를 넣을 수 있게 한다.
👉🏻```function saveToDos() {
localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
=== localstorage.setItem('todos','[]')
```
item) => console.log("this it the turn of",item

toDos.push(newTodo)로 이 하나의 keyValue라는 상자 안에 하나 이상의 정보를 담아버리기~~

그리고 다시 저장된 것을 가져올 때에는
```
const savedToDos = localStorage.getItem(TODOS_KEY);
//getItem으로 호출하면 'value' 형태로 호출된다. '' 가 붙은 상태로 호출된다는 말.
if (savedToDos !== null) {
const parseToDos = JSON.parse(savedToDos); //getItem의 '' 를 parse 로 삭제.
toDos = parseToDos; //[] = ['a','b','c']
parseToDos.forEach(paintToDo);
}
```

너무 유용하게 쓰일 것 같아요 쌤

fliter 함수를 사용 -> array에서 뭔가를 삭제할 때 실제로 array에서 지우는 게 아닌 지우고 싶은 item을 빼고 새 array를 만듦(item을 지우는 게 아닌 item을 제외하는 것)

function sexyFilter(){return true} -> array의 item을 유지하고 싶으면 true를 return!
[1,2,3,4,5].filter(sexyFilter)
(5) [1, 2, 3, 4, 5]

function sexyFilter(){return false}
[1,2,3,4,5].filter(sexyFilter)
[]

function sexyFilter(item){return item !== 3} -> item이 3이 아니면 true를 return!
[1,2,3,4,5].filter(sexyFilter)
(4) [1, 2, 4, 5]

const arr = ["pizza", "banana", "tomato"] -> arr 배열에서 banana를 지우고 싶음!
function sexyFilter(food){return food !== "banana"}
arr.filter(sexyFilter)
(2) ['pizza', 'tomato']

const arr = [1234, 5656, 454, 343, 12, 4646, 405] -> 1000보다 큰 수를 모두 제외하기!
function sexyFilter(num){return num arr.filter(sexyFilter)
(4) [454, 343, 12, 405]


const todos = [{text:"lalala"}, {text:"lololo"}]
function sexyFilter(todo){return todo.text != "lololo"}
todos.filter(sexyFilter)
[{…}]0: {text: 'lalala'} length: 1 [[Prototype]]: Array(0)

-> 함수(sexyFilter)의 argument는 항상 달라도 상관 xx, filter가 각 todos의 item을 todo의 argument로 넣어 줌

*/