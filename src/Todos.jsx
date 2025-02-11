import Todo from "./Todo";
import './css/User Lists.css';

const Todos = ({name, todos}) => {

  return (
    <>
        <div className="todos-container">
            <div className="headline">
                <h2>Todos - {name}</h2>
                <button>Add</button>
            </div>
            <div className="todos-list">
                {todos.length > 0 ? (
                    todos.map(todo => (
                        <Todo key={todo.id} todo={todo}/>
                    ))
                    ) : (
                    <p>No todos available</p>
                )}
            </div>
        </div>
    </>
  );
};

export default Todos;
