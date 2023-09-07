import { useEffect, useState } from "react";
import getActors from "../assets/services/getActors";

const useActor = () => {
  // Estado de los actores
  const [actors, setActors] = useState([]);

  const loadUsers = async () => {
    // Servicio que nos carga los actores
    const newActors = await getActors();
    setActors(newActors.results);
  };

  // Efecto que nos permite cargar los actores
  useEffect(() => {
    loadUsers();
  }, []);

  // Devolvemos el estado
  return [actors];
};

export default useActor;
