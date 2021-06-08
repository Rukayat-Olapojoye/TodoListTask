import './todo.css';
//import {useState} from 'react';


function TodoFormComponent(){

const ToDoItemHandler =(e) =>{
    console.log(e.target.value)

    
}

const SaveToDoHandler =(eventObject)=>{
    
} 

return (
    <div className="div-style">

        <h1 className="Todoheader" id="header">
        My ToDo List
        </h1>
        <form onChange ={ToDoItemHandler}
        action=""> 
            <input 
            id="task"
            type="text"
            className="TaskInput" 
            placeholder="Enter Task">
            </input>

            <input 
            id="prority"
            type="text"
            className="priorityInput" 
            placeholder="Task Priority">
            </input>

            <input 
            id="deadline"
            type="date"
            className="Deadline" 
            placeholder="">
            </input>
 
            <button
            onClick={SaveToDoHandler}
            type ="submit"
             className="addtodo">
                 Add ToDo
            </button>
        </form>
    </div>

)


}


export default TodoFormComponent;