// Servicios para cargar los datos de un episodio
const getOneEpisode = async (episodeId) => {
  const result = await fetch(
    "https://rickandmortyapi.com/api/episode/" + episodeId
  );
  const episode = await result.json();
  return episode;
};

export default getOneEpisode;
