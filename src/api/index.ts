const apikey: string = "19f84e11932abbc79e6d83f82d6d1045";

const baseImagePath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
};
const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;
const searchMovies = (keyword: string) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
};
const movieDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
};
const movieCastDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;
};

export {
    baseImagePath,
    nowPlayingMovies,
    upcomingMovies,
    popularMovies,
    searchMovies,
    movieCastDetails,
    movieDetails,
};
