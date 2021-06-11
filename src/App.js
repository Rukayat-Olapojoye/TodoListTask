import TodoForm from "./TodoFormComponent";
import {useState} from "react";
import TodoListComponent from "./TodoListComponent";

 
const App =()=> {
  
  const [Todo, setTodo] =useState([]);
  // Function to set Todotasks

  const [TodoTask, setTodoTask] = useState("")

  const [TodoPriority, setTodoPriority] = useState("")

  const [Editing, setEditing] = useState(false);

  //Function to add TodoTask
  function AddToDoTask(taskName){
    //alert(taskName)
    //console.log(taskName)
    
      setTodo([...Todo,taskName])
  
    
  }




//   console.log(props.Todo)

//   //Trying to get the todo list to show on the browser



  return (
    <div className="App">
      <TodoForm addTask ={AddToDoTask} 
      setTodoTask={setTodoTask} 
      setTodoPriority={setTodoPriority}
      TodoTask ={TodoTask}
      TodoPriority={TodoPriority}
      Editing={Editing}
      />

      {Todo.map((todoItem)=>(
     <TodoListComponent 
     key={todoItem.id}
     todo={todoItem}
     Todo={Todo}
     setTodo={setTodo}
     setTodoTask={setTodoTask}
     setTodoPriority={setTodoPriority}
     setEditing={setEditing}
     AddToDoTask={AddToDoTask}
    />))}
    </div>
  );
}

export default App;