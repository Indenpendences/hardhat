import { searchMovies } from "../api";

type Props = {};
const fetchSearchMovies = async function (name: string) {
    try {
        const response = await fetch(searchMovies(name));
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default fetchSearchMovies;
