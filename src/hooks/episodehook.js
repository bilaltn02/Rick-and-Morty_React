import { useEffect, useState } from "react";
import getEpisodes from "../assets/services/getEpisodes";

const useEpisode = () => {
  // Estado de los episodios
  const [episodes, setEpisodes] = useState([]);

  const loadEpisodes = async () => {
    // Servicio para cargar los episodios
    const allepisodes = await getEpisodes();
    setEpisodes(allepisodes.results);
  };

  // Efecto para cargar los episodios
  useEffect(() => {
    loadEpisodes();
  }, []);

  // Devolvemos el estado
  return [episodes];
};

export default useEpisode;
