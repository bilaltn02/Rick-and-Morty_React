// Servicios para pedir los episodios
const getEpisodes = async() => {
  const episodes = await fetch("https://rickandmortyapi.com/api/episode")
  return await episodes.json();
}

export default getEpisodes