const toDoForm = document.getElementById("todo-form"); // id를 통해 Element를 반환, 반환할 것이 없으면 Null 값을 반환
const toDoInput = document.querySelector("#todo-form input"); // 좀 더 구체적인 태그를 지정해 Element를 반환
const toDoList = document.getElementById("todo-list");

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
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li); // appendChild는 마지막에 작성
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
