import { useSelector, useDispatch } from "react-redux";
import "./Todos.css";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleCompleteTodo = (id) => {
    dispatch({ type: "COMPLETE_TODO", payload: id });
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div>
      <h1>Todos:</h1>
      <div className="todos-counter">
        <h3>Total Todos: {todos.length}</h3>
        <h3>Completed Todos: {completedTodosCount}</h3>
      </div>
      <div className="todos-container">
        {todos.length ? (
          <div>
            {todos.map((todo) => (
              <div key={todo.id} className="todo-card">
                <h3>Title: {todo.todoTitle}</h3>
                <label>
                  Completed:
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => handleCompleteTodo(todo.id)}
                  />
                </label>
                <p>{todo.isCompleted ? "✓" : "X"}</p>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>No todos added yet.</div>
        )}
      </div>
    </div>
  );
};

export default Todos;
