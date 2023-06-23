import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import "./Planets.css";

const Planets = () => {
  const URL = "https://swapi.dev/api/planets";
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      setPlanets(result.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div>
      <Header />
      <div className="planets-container">
        {planets.length === 0 ? (
          <div className="loading-container">
            <div className="loading"></div>
          </div>
        ) : (
          planets.map((planet) => (
            <div className="planet" key={planet.name}>
              <h1>{planet.name}</h1>
              <h2>Gravity: {planet.gravity}</h2>
              <h2>Population: {planet.population}</h2>
              <h2>Terrain: {planet.terrain}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Planets;
