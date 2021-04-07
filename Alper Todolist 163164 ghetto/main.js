const todoButton = document.querySelector('.todo_button');
const todoInput = document.querySelector('.todo_input');
const todoList = document.querySelector('.todo_list');

todoButton.addEventListener('click', todo);

function todo()

{

    event.preventDefault();

    let list = document.createElement("li");
    let inputValue = todoInput.value;
    let text = document.createTextNode(inputValue);

    list.appendChild(text);

    todoInput.value = "";

    if (inputValue === '') 
    {
    alert("write something otherwise i will **** you up");
    }

    else 
    {
    todoList.appendChild(list).classList.add("todo");
    }

}