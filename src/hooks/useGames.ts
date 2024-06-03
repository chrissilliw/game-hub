import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

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
  
  interface FetchGamesResponse {
    const: number;
    results: Game[];
  }


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {

        setIsLoading(true);
        apiClient
        .get<FetchGamesResponse>("/games")
        .then((res) => {
            setGames(res.data.results);
            setIsLoading(false); 
        })
        .catch((err) => setError(err.message));
    }, []);

    return { games, error, isLoading };

}

export default useGames;