import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }

  export interface Search {
    searchText: string;
  }

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, selectedOrder: string | null, searchText: string | null) => 
  useData<Game>('/games', {
    params: {
      genres: selectedGenre?.id, 
      platforms: selectedPlatform?.id,
      ordering: selectedOrder,
      search: searchText
    }}, 
    [
      selectedGenre?.id, 
      selectedPlatform?.id,
      selectedOrder,
      searchText
    ]
  );

export default useGames;