import React from "react";
import "./ActorCard.css"

const ActorCard = ({ actor }) => {
  return (
    <article className="card ancho">
      <img className="card-img-top" src={actor.image} alt="Card image cap" />
      <div className="card-body">
        <p className="card-title">{actor.name}</p>
        <p className="card-title">{actor.species}</p>
      </div>
    </article>
  );
};

export default ActorCard;
