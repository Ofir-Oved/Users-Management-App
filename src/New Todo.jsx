import './css/New Todo-Post.css';

const NewTodo = ({name, cancel}) => {

  const handleCancel = () => {
    cancel();
  }

  return (
    <>
    <div className='new-todo-card'>
        <div className="headline">
            <h2>New Todo - {name}</h2>
        </div>
        <div className='new-todo-body'>
          <div className='new-title'>
              <label>Title:</label>
              <input></input>
          </div>
          <div className='buttons'>
              <button onClick={handleCancel}>Cancel</button>
              <button>Add</button>
          </div>
        </div>
    </div></>
  )
}

export default NewTodo