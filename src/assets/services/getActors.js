// Servicio para pedir los actores
const getActors = async () => {
  const result = await fetch("https://rickandmortyapi.com/api/character");
  const actors = await result.json();
  return actors;
};

export default getActors;
