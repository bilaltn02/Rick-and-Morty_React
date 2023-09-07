import React from "react";
import { Link } from "react-router-dom";
import "./EpisodeActors.css";

const EpisodeActors = ({ characters }) => {
  return (
    <p className="d-flex flex-wrap justify-content-start px-3 gap-2">
      {characters.map((character) => (
        <Link key={character} className="link" target="_blank" to={character}>
          {character}
        </Link>
      ))}
    </p>
  );
};

export default EpisodeActors;
