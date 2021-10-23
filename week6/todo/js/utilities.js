
export const newtodo = document.querySelector(".newtodo");
export const todoBtn = document.querySelector(".list-btn");
export const todoList = document.querySelector(".todo-list");
export const controlbtn = document.querySelector(".control-btn");
export const tasksLeft = document.querySelector(".tasks-left");


export function toDoCount(){
    let todoCount;
    if(!todoList.childElementCount){
        todoCount = 0;
    }else{
        todoCount =todoList.childElementCount;
    }
    tasksLeft.textContent = todoCount;
}