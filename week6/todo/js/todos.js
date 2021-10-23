import { newtodo, todoBtn, todoList, controlbtn, toDoCount } from './utilities.js';
import { saveTodo, getTodo, removeLocalToDo, updateCompleteToDo } from './ls.js';

export default class Todos{
    addTodoListeners() {
        //Event listeners
        document.addEventListener('DOMContentLoaded', getTodo);
        todoBtn.addEventListener('click', this.addToDo);
        todoList.addEventListener('click', this.deleteOrCheck);
        controlbtn.addEventListener('click', this.filterTodos);
    }

    addToDo(event){

        event.preventDefault();
        const todo = {
            id: new Date().getTime(),
            content: newtodo.value,
            completed: false
        }
        const text = `<li class="todo">
                            <i class="completeBtn far fa-square"></i>
                            <p class="todoText">${todo.content}</p>
                            <input value="${todo.id}" class ="id" name ="id" hidden>
                            <i class="trashBtn fas fa-trash"></i>
                        </li>`;
        
        todoList.insertAdjacentHTML("beforeend",text);
        toDoCount();
        saveTodo(todo);
        newtodo.value = "";
            
    }

    deleteOrCheck(e){
        const item = e.target;
        if(item.classList[0] === "trashBtn"){
            item.parentNode.remove();
            toDoCount();
            let value = parseInt(item.parentNode.children[2].value);
            const classes = item.parentNode.classList;
            let bool = classes.contains("completed");
            let con = item.parentNode.children[1].innerText;
            let todo ={
                id : value,
                content: con,
                completed:bool

            }
            removeLocalToDo(todo);
        }

        if (item.classList[0] == "completeBtn") {
            let val = item.parentNode.classList.toggle("completed");
            let value = parseInt(item.parentNode.children[2].value);
            let bool = val;
            let con = item.parentNode.children[1].innerText;
            let todo ={
                id : value,
                content: con,
                completed:bool

            }
            updateCompleteToDo(todo , val);
        }
        toDoCount();
    }

    filterTodos(e){
        if(todoList.childElementCount>0){
            const todos = todoList.childNodes;
            todos.forEach(todo =>{
                switch(e.target.innerText){
                    case "All":
                        todo.style.display = "flex";
                        break;
                    case "Completed":
                        if(todo.classList.contains("completed")){
                            todo.style.display = "flex";
                        }else{
                            todo.style.display = "none";
                        }
                        break;
                    case "Active":
                        if(!todo.classList.contains("completed")){
                            todo.style.display = "flex";
                        }else{
                            todo.style.display = "none";
                        }
                }
            });
        }else{
            return;
        }
    }
}