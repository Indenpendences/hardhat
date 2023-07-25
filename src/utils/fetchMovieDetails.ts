import { movieDetails } from "../api";

type Props = {
    movieId: number;
};

const fetchMovieDetails = async function ({ movieId }: Props) {
    try {
        const response = await fetch(movieDetails(movieId));
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default fetchMovieDetails;
