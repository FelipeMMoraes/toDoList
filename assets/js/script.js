let listElement = document.querySelector(".app ul")
let inputElement = document.querySelector(".app input")
let buttonElement = document.querySelector(".app button")

let todos = JSON.parse(localStorage.getItem("list_todos")) || [];
function renderTodos() {
  listElement.innerHTML = "";
 
 
  for (todo of todos) {
    let todoElement = document.createElement("li")
    let todoText = document.createElement(todo)
    let linkElement = document.createElement("a")

    linkElement.setAttribute("href", "#")
    let pos = todos.indexOf(todo)
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")")

    let linkText = document.createTextNode("done")
    linkElement.appendChild(linkText)
    todoElement.appendChild(todoText)
    todoElement.appendChild(todoElement)
  }
}

renderTodos()

function addTodo() {
  let todoText = inputElement.value

  todos.push(todoText)
  inputElement.value = ""
  renderTodos()
  saveToStorage()
}

function saveToStorage() {
  localStorage.setItem("list_todos,", JSON.stringify(todos))
}
