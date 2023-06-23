import React, { useState, useEffect } from "react";
import Character from "../Character/Character";
import Header from "../Header/Header";
import "./CharactersPage.css";

const CharactersPage = () => {
  const BASE_URL = "https://swapi.dev/api/people";
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  const handleFetchCharacters = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();

      setCharacters(result.results);
      setNextPage(result.next);
      setPreviousPage(result.previous);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchCharacters(BASE_URL);
  }, []);

  const handleNextPage = () => {
    if (nextPage) {
      handleFetchCharacters(nextPage);
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      handleFetchCharacters(previousPage);
    }
  };

  return (
    <>
      {characters.length === 0 ? (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      ) : (
        <div className="container">
          <Header />
          <div className="char-container">
            {characters.map((character, index) => (
              <Character key={index} character={character} id={index} />
            ))}
          </div>
          <div className="pagination">
            <button onClick={handlePreviousPage} disabled={!previousPage}>
              Previous
            </button>
            <button onClick={handleNextPage} disabled={!nextPage}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CharactersPage;
