import { useEffect, useState } from "react";
import getOneEpisode from "../assets/services/getOneEpisode";

const useOneEpisode = (param) => {
  // Estado del episodio
  const [episode, setEpisode] = useState({});

  const loadEpisode = async () => {
    // Servicio que nos devuelve el episodio
    const oneEpisode = await getOneEpisode(param);
    setEpisode(oneEpisode);
  };

  // Efecto que se ejecutará cada vez que se modifique param (el id del episodio)
  useEffect(() => {
    loadEpisode();
  }, [param]);

  // Devolvemos el estado
  return [episode];
};

export default useOneEpisode;
