
import TodoFormComponent from './TodoFormComponent';

const TodoListComponent =(props)=>{
return(
    <div className="Todolist-container">
        <h2>All Todo list</h2>
        <ul>
            <li>
                <TodoFormComponent/>
            </li>
        </ul>
        </div>
)
}

export default TodoListComponent;