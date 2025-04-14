import { useState } from "react";
import Todo from "./Todo";
import NewTodo from "./New Todo";
import './css/User Lists.css';

const Todos = ({name, todos, updateTodos}) => {
  // State to manage which component to show
  const [isAdding, setIsAdding] = useState(false);

  const handleAddClick = () => {
    setIsAdding(true);  // When the "Add" button is clicked, show the AddTodo component
  };

  const handleCancel = () => {
    setIsAdding(false);
  }

  return (
    <>
        {isAdding ? (
            <NewTodo name={name} cancel={handleCancel}/>
        ) : (
        <div className="todos-container">
            <div className="headline">
                <h2>Todos - {name}</h2>
                <button onClick={handleAddClick}>Add</button>
            </div>
            <div className="todos-list">
                {todos.length > 0 ? (
                    todos.map(todo => (
                        <Todo key={todo.id} todo={todo} updateTodos={updateTodos}/>
                    ))
                    ) : (
                    <p>No todos available</p>
                )}
            </div>
        </div>
        )}
    </>
  );
};

export default Todos;
