import React from "react";
import { Outlet } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
import useEpisode from "../hooks/episodehook";

const Episode = () => {
  const [episodes] = useEpisode();

  return (
    <>
      <h1 className="text-center lead fs-1 text-secondary"> Episodios</h1>

      <section className="container d-flex justify-concent-center">
        {/* Listado de Episodios */}
        <section className=" col-md-7 d-flex flex-wrap gap-2 mt-2">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </section>
        {/* Detalle del Episodio */}
        <section className="col-md-5 border mt-2">
          <Outlet />
        </section>
      </section>
    </>
  );
};

export default Episode;
