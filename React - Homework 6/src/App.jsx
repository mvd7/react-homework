import Todos from "./Components/Todos/Todos";
import { Provider } from "react-redux";
import store from "./store";
import AddTodo from "./Components/AddTodo/AddTodo";

function App() {
  return (
    <>
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </>
  );
}

export default App;
