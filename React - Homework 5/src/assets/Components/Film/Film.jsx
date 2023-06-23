import React from "react";
import "./Film.css";

const Film = ({ data }) => {
  return (
    <div>
      <div className="film-card">
        <h2>{data.title}</h2>
        <p>{data.opening_crawl}</p>
        <p>Director: {data.director}</p>
        <p>Producer: {data.producer}</p>
        <p>Release Date: {data.release_date}</p>
      </div>
    </div>
  );
};

export default Film;
