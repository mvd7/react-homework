import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./SingleCharacter.css";
import Header from "../Header/Header";

const SingleCharacter = () => {
  const [singleCharacter, setSingleCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const result = await response.json();
        console.log("***SINGLE CHAR", result);
        setSingleCharacter(result);
        fetchHomeworld(result.homeworld);
      } catch (error) {
        console.error("Error fetching single character:", error);
      }
    };

    const fetchHomeworld = async (homeworldURL) => {
      try {
        const response = await fetch(homeworldURL);
        const result = await response.json();
        console.log("***HOMEWORLD", result);
        setHomeworld(result);
      } catch (error) {
        console.error("Error fetching homeworld:", error);
      }
    };

    fetchSingleCharacter();
  }, [id]);

  return (
    <div className="single-card-container">
      <Header />
      <div className="single-card">
        {singleCharacter && (
          <div>
            <h1>{singleCharacter.name}</h1>
            <p>Height: {singleCharacter.height}</p>
            <p>Gender: {singleCharacter.gender}</p>
            <p>Birth Year: {singleCharacter.birth_year}</p>
            {homeworld && (
              <div>
                <h3>Homeworld</h3>
                <p>Name: {homeworld.name}</p>
                <p>Diameter: {homeworld.diameter}</p>
                <p>Climate: {homeworld.climate}</p>
                <p>Gravity: {homeworld.gravity}</p>
                <p>Terrain: {homeworld.terrain}</p>
                <p>Population: {homeworld.population}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default SingleCharacter;
