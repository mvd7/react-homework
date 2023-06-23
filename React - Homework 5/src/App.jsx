import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CharactersPage from "./assets/Components/CharactersPage/CharactersPage";
import Home from "./assets/Components/Pages/Home/Home";
import SingleCharacter from "./assets/Components/SingleCharacter/SingleCharacter";
import Planets from "./assets/Components/Pages/Planets/Planets";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<CharactersPage />} />
          <Route path="/character/:id" element={<SingleCharacter />} />
          <Route path="/planets" element={<Planets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
