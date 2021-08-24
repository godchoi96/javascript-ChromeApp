const toDoForm = document.getElementById("todo-form"); // id를 통해 Element를 반환, 반환할 것이 없으면 Null 값을 반환
const toDoInput = document.querySelector("#todo-form input"); // 좀 더 구체적인 태그를 지정해 Element를 반환
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
