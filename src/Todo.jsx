import { useState } from 'react'
import './css/Todo.css'

const Todo = ({todo, updateTodo}) => {

    const [complete, setComplete] = useState(todo.completed);

    const markCompleted = () => {
        setComplete(true);
    
        // Update the todos in session storage
        const storedTodos = JSON.parse(sessionStorage.getItem("todos")) || [];
        const updatedTodos = storedTodos.map(t => 
          t.id === todo.id ? { ...t, completed: true } : t
        );
    
        sessionStorage.setItem("todos", JSON.stringify(updatedTodos));
    
        // Notify parent component about the update
        updateTodos(updatedTodos);
      };

  return (
    <>
    <div className='todo-card'>
        <div className='completion'>
            <div className='text'>
                <div className='title'>
                    <label>Title:</label>{todo.title}
                </div>
                <div className='completed'>
                    <label>Completed:</label>{String(complete)}
                </div>
            </div>
            <div className='complete-button' style={{display: complete? "none": "block"}}>
                <button onClick={markCompleted}>Mark Completed</button>
            </div>
        </div>
    </div></>
  )
}

export default Todo