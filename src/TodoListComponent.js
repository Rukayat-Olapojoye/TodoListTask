//import {useState} from "react";
//import TodoFormComponent from './TodoFormComponent';



const TodoListComponent =({todo})=>{

   // const [EditTask, setEditTask] =useState({todo})
   // const [DoneTask, setDoneTask] = useState({todo})

    const EditTaskHandler= (props)=>{
          // setEditTodo([...EditTodo,{todo}])
    }

   const CompletedTaskHandler = ()=>{
       

   }

        return(
            <div className="Todolist-container">
                
                <h3 style={{color:'black'}}>{todo.task}</h3>
                <h4 style={{color:'purple'}}>{todo.priority}</h4>
               <button className="addtodo" onClick={EditTaskHandler}>Edit</button>
               <button className="addtodo" onClick={CompletedTaskHandler}>Done</button>
               
             
               {/* {EditTodo.map(toEdit=>(
               <TodoFormComponent todo={toEdit}/>))} */}
               
                </div>
        )
            
    }

    export default TodoListComponent;



