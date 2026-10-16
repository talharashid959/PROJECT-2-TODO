const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list");

function saveTasks() {
  localStorage.setItem("tasks", todoList.innerHTML);
}

function showTasks() {
  todoList.innerHTML = localStorage.getItem("tasks") || "";
}

function addTask() {
  const tasktest = inputBox.value.trim();

  if (tasktest === "") {
    alert("You Must Write Something!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = tasktest;

  const span = document.createElement("span");
  span.textContent = "×";

  li.appendChild(span);
  todoList.appendChild(li);

  inputBox.value = "";
  saveTasks();
}

todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    event.stopPropagation();
    event.target.parentElement.remove();
    saveTasks();
  } else if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveTasks();
  }
});

showTasks();
