import { useState } from "react";

import "./App.css";
import CharactersPage from "./assets/Components/CharactersPage/CharactersPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CharactersPage />
    </>
  );
}

export default App;
