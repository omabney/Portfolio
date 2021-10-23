import { newtodo, todoList, toDoCount } from "./utilities.js";

export function saveTodo(todo){
    let toDoList;
    if(localStorage.getItem('toDoList') == null){
        toDoList = [];
    }else {
        toDoList = JSON.parse(localStorage.getItem('toDoList'));
    }

    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

export function getTodo(key){
    let toDoList;
    if (localStorage.getItem('toDoList') == null) {
        toDoList = [];
    }
    else {
        toDoList = JSON.parse(localStorage.getItem('toDoList'));
    }
    renderToDoList(toDoList);
    toDoCount();
}

export function renderToDoList(list) {
    list.forEach(todo => {
        let text = "";
        if(todo.completed){
            text = `<li class="todo completed">
            <i class="completeBtn far fa-square"></i>
            <p class="todoText">${todo.content}</p>
            <input value="${todo.id}" class ="id" name ="id" hidden>
            <i class="trashBtn fas fa-trash"></i>
            </li>`;
        }else{
            text = `<li class="todo">
            <i class="completeBtn far fa-square"></i>
            <p class="todoText">${todo.content}</p>
            <input value="${todo.id}" class ="id" name ="id" hidden>
            <i class="trashBtn fas fa-trash"></i>
            </li>`;
        }
        todoList.insertAdjacentHTML("beforeend", text);
    });
    newtodo.value = "";
    toDoCount();
}

export function removeLocalToDo(todo) {
    let toDoList;
    if (localStorage.getItem('toDoList') == null) {
        toDoList = [];
    }
    else {
        toDoList = JSON.parse(localStorage.getItem('toDoList'));
    };
    let todoIndex;
    let i=0;
    toDoList.forEach(td =>{
        if(td.id == todo.id){
            todoIndex = i;
        }
        i++;
    });
    toDoList.splice(todoIndex, 1);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

export function updateCompleteToDo(todo, bool) {
    let toDoList;
    if (localStorage.getItem('toDoList') == null) {
        toDoList = [];
    }
    else {
        toDoList = JSON.parse(localStorage.getItem('toDoList'));
    };
    let todoIndex;
    let i=0;
    toDoList.forEach(td =>{
        if(td.id == todo.id){
            td.completed = bool;
        }
        i++;
    });
    
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}