import { useState } from 'react'
import './css/Todo.css'

const Todo = ({todo}) => {

    const [complete, setComplete] = useState(todo.completed);

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
                <button onClick={()=> setComplete(true)}>Mark Completed</button>
            </div>
        </div>
    </div></>
  )
}

export default Todo