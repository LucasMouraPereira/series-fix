import { Episode } from "../types/tvShows";

type SeasonGroup = {
    seasonText: string;
    episodes: Episode[];
  };
  
export const groupEpisodesBySeason = (episodes: Episode[]): SeasonGroup[] => {
  const groupedEpisodes: { [key: string]: Episode[] } = {};
  episodes.forEach((episode) => {
    const seasonText = `Temporada ${episode.season}`;
    if (!groupedEpisodes[seasonText]) {
      groupedEpisodes[seasonText] = [];
    }
    groupedEpisodes[seasonText].push(episode);
  });

  return Object.entries(groupedEpisodes).map(([seasonText, episodes]) => ({
    seasonText,
    episodes,
  }));
};
