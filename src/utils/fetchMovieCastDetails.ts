import { movieCastDetails } from "../api";

type Props = {
    movieId: number;
};

const fetchMovieCastDetails = async function ({ movieId }: Props) {
    try {
        const response = await fetch(movieCastDetails(movieId));
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default fetchMovieCastDetails;
