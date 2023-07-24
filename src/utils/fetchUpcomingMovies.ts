import { upcomingMovies } from "../api";

const fetchUpcomingMovies = async function () {
    try {
        const response = await fetch(upcomingMovies);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export { fetchUpcomingMovies };
