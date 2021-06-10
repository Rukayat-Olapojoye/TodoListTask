import './todo.css';
import {useState} from 'react';

function TodoForm(props){

 const [TodoTask, setTodoTask] = useState("")

const [TodoPriority, setTodoPriority] = useState("")
 

   // Handler for the onSubmit
const ToDoItemHandler =(e) => { 
    e.preventDefault();

    // if (!(e.target.value ==="") ){
    // }
        const todo={
            task:TodoTask,
            priority:TodoPriority
            }
       //const Todo = JSON.stringify({TodoTask, TodoPriority})
           props.addTask(todo);
        setTodoTask("");
       setTodoPriority("");
    };
    

    

// handler for the Onchange 
const InputItemHandler=(e)=>{
setTodoTask(e.target.value)

}
const InputPriorityHandler=(e)=>{
    setTodoPriority(e.target.value)
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
            value={TodoTask}
            onChange={InputItemHandler}>
            </input>

        <input 
             id="prority"
            type="text"
            className="priorityInput" 
            placeholder="Task Priority"
           value={TodoPriority}
            onChange={InputPriorityHandler}>
            </input> 

            <button
            type ="submit"
             className="addtodo">
                 Add ToDo
            </button>
        </form>
    </div>

);


}

export default TodoForm;