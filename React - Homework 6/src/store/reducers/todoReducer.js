const initialState = {
  title: "",
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODO_TITLE":
      return {
        ...state,
        title: action.payload,
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        title: "",
      };

    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                isCompleted: true,
              }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
