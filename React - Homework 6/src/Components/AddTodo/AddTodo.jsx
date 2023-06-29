import { useDispatch, useSelector } from "react-redux";
import "./AddTodo.css";

const AddTodo = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title);

  const handleTodoTitleChange = (event) => {
    dispatch({ type: "SET_TODO_TITLE", payload: event.target.value });
  };

  const handleAddTodo = () => {
    if (title.length === 0) return;
    const todo = {
      id: Date.now(),
      todoTitle: title,
      isCompleted: false,
    };

    dispatch({ type: "ADD_TODO", payload: todo });
  };

  return (
    <div className="search-box">
      <input
        type="text"
        onChange={handleTodoTitleChange}
        placeholder="Todo Title"
        value={title}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
