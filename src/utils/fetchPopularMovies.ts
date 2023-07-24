import { popularMovies } from "../api";

const fetchPopularMovies = async function () {
    try {
        const response = await fetch(popularMovies);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { fetchPopularMovies };
