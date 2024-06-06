import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>('https://api.rawg.io/platforms/lists/parents');

export default usePlatforms;