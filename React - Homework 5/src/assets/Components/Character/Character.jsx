import React from "react";
import "./Character.css";
import { useNavigate } from "react-router";

const Character = ({ character, id }) => {
  const navigate = useNavigate();

  return (
    <div className="char-card" onClick={() => navigate(`/character/${id + 1}`)}>
      <h2>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Gender: {character.gender}</p>
      <p>Birth Year: {character.birth_year}</p>
    </div>
  );
};

export default Character;
