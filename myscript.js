const todos = [];

function addTodo() {
  let todoInput = document.getElementById('todoInput');
  todos.push(todoInput.value);
  displayTodo();
  todoInput.value = "";
}

function displayTodo() {
  let todosUl = document.querySelector('ul');
  todosUl.innerHTML = "";
  todos.forEach(function(todo, position) {
    let todoLi = document.createElement('li');
    todoLi.id = position;
    todoLi.textContent = todo;
    todoLi.appendChild(this.createRemoveButton());
    todosUl.appendChild(todoLi);
  });
}

function createRemoveButton() {
  let removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.className = 'removeButton';
  return removeButton;
}

(function eventListenerForRemoveTodo() {
  let todosUl = document.querySelector('ul');
  todosUl.addEventListener('click', function(event) {
    let elementClicked = event.target;
    if (elementClicked.className === 'removeButton') {
      todos.splice(elementClicked.parentNode.id, 1);
      displayTodo();
    }
  });
})();

