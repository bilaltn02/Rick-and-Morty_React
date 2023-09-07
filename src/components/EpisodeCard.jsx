import React from "react";
import { Link } from "react-router-dom";
import "./EpisodeCard.css";

const EpisodeCard = ({ episode }) => {
  return (
    <article className="card__episode border p-3">
      {/* De cada episodio mostramos sus detalle pasandole el id del episodio como parametro de una ruta */}
      <Link to={"/episode/" + episode.id} className="card-body nav-link">
        <span className="card-title">{episode.id} </span>
        <span className="card-title">{episode.name}</span>
      </Link>
    </article>
  );
};

export default EpisodeCard;
