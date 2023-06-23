import "./Home.css";
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../Header/Header";
import Film from "../../Film/Film";

const Home = () => {
  const URL = "https://swapi.dev/api/films/";
  const [films, setFilms] = useState([]);

  const handleFetchFilms = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setFilms(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchFilms();
  }, []);

  useEffect(() => {
    console.log(films);
  }, [films]);

  return (
    <div>
      <Header />

      {films.length === 0 ? (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      ) : (
        <div className="films-container">
          {films.map((film, index) => (
            <Film key={index} data={film} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
