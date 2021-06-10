import TodoForm from "./TodoFormComponent";
import {useState} from "react";
import TodoListComponent from "./TodoListComponent";

 
const App =()=> {
  
  const [Todo, setTodo] =useState([]);
  // Function to set Todotasks


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
      <TodoForm addTask ={AddToDoTask}/>

      {Todo.map(todoItem=>(
     <TodoListComponent 
     todo={todoItem}
    />))}
    </div>
  );
}

export default App;
