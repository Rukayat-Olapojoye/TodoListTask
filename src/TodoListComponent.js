//import {useState} from "react";
//import TodoFormComponent from './TodoFormComponent';



const TodoListComponent =({todo,Todo,setTodo,setTodoTask,setTodoPriority, setEditing,Editing})=>{

    // const [EditTask, setEditTask] =useState({todo})
    // const [DoneTask, setDoneTask] = useState({todo})
 
     const EditTaskHandler= (id)=>{
           // setEditTodo([...EditTodo,{todo}])
               const left =Todo.filter(td => td.id !== id );
               const toEdit = Todo.find( td=> td.id === id );
               //console.log(Todo.find( td=> td.id === id ));
               console.log(toEdit);
               setTodoTask(toEdit.task);
               setTodoPriority(toEdit.priority);
               setEditing(true);
               setTodo(left);
               setTodo([...left,toEdit.task]);
                  
     }
     //setEditing(true); 
 
    const CompletedTaskHandler = ()=>{
        
 
    }
 
   
 
         return(
             <div className="Todolist-container">
                 
                 <h3 style={{color:'black'}}>{todo.task}</h3>
                 <h4 style={{color:'purple'}}>{todo.priority}</h4>
                
                <button className="addtodo" onClick={() => EditTaskHandler(todo.id)}>Edit</button>
                
                <button className="addtodo" onClick={CompletedTaskHandler}>Done</button>
                
              
                {/* {EditTodo.map(toEdit=>(
                <TodoFormComponent todo={toEdit}/>))} */}
                
                 </div>
         )
             
     }
 
     export default TodoListComponent;