import './todo.css';
//import {useState} from 'react';

function TodoForm(props){

 
 

   // Handler for the onSubmit
const ToDoItemHandler =(e) => { 
    e.preventDefault();

    // if (!(e.target.value ==="") ){
    // }
        const todo={
            task:props.TodoTask,
            priority:props.TodoPriority,
            id: Math.random()
            }
       //const Todo = JSON.stringify({TodoTask, TodoPriority})
           props.addTask(todo);
        props.setTodoTask("");
       props.setTodoPriority("");
    };
    

    

// handler for the Onchange 
const InputItemHandler=(e)=>{
props.setTodoTask(e.target.value)

}
const InputPriorityHandler=(e)=>{
    props.setTodoPriority(e.target.value)
    //setTodoPriority(e.target.value)
    
    }
 
return (
    <div className="div-style">

        <h1 className="Todoheader" id="header">
        My ToDo List
        </h1>
        <form onSubmit={ToDoItemHandler}> 
            <input 
             id="task"
            type="text"
            className="TaskInput" 
            placeholder="Enter Task"
            value={props.TodoTask}
            onChange={InputItemHandler}>
            </input>

        <input 
             id="prority"
            type="text"
            className="priorityInput" 
            placeholder="Task Priority"
           value={props.TodoPriority}
            onChange={InputPriorityHandler}>
            </input> 

            <button
            type ="submit"
             className="addtodo">
                 {props.Editing? 'Edit ToDo':'Add Todo'}
            </button>
        </form>
    </div>

);


}

export default TodoForm;