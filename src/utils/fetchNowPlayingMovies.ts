import { nowPlayingMovies } from "../api";

const fetchNowPlayingMovies = async function () {
    try {
        const response = await fetch(nowPlayingMovies);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { fetchNowPlayingMovies };
