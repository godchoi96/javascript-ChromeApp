const toDoForm = document.getElementById("todo-form"); // id를 통해 Element를 반환, 반환할 것이 없으면 Null 값을 반환
const toDoInput = document.querySelector("#todo-form input"); // 좀 더 구체적인 태그를 지정해 Element를 반환
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = []; // newTodo를 저장할 수 있는 배열 생성

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage에 있는 것들 배열로 변환
}

function deleteTodo(event) {
  const li = event.target.parentElement; // 어느 li가 실행되었는지 확인할 수 있음
  li.remove(); // 생성한 button 태그를 누르면 실행
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌"; // 이모지 추가 window + .
  button.addEventListener("click", deleteTodo); // 클릭하면 해당 이벤트가 발생
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li); // appendChild는 마지막에 작성
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo); // newTodo를 toDos에 저장
  paintTodo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);
if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  parseToDos.forEach((item) => console.log("this is the turn of ", item)); // 배열 안에 있는 element를 각각 실행시켜줌. 각 입력된 element에 this is the turn 0f를 넣어줌
}
