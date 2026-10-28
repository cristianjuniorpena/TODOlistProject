var arrayTask = []

const taskInput = document.getElementById('item-input')
const addButton = document.getElementById('add-item')
const todoList = document.getElementById('todo-list')
const todoListItems = document.querySelectorAll('li')

addButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (taskInput) {
        addTask(taskInput.value);
        let li = document.createElement('li')
        li.textContent = taskInput.value
        todoList.appendChild(li)
        taskInput.value = ''
    }
});

function addTask(task) {
    arrayTask.push(task);
};