import { Genre } from '../genre';
import { RootState } from '../store';
import { Movie } from './api';

const selectMoviesModule = (state: RootState) => state.movies;

export const selectMovieFilters = (state: RootState) => {
    return selectMoviesModule(state).filters;
};

export const selectMovie = (state: RootState): Movie | null => {
    const moviesModule = selectMoviesModule(state);
    const movie = selectMoviesModule(state).movie;

    if (!movie) return null;

    return {
        ...moviesModule.movie,
        genre: Genre[movie.genre],
    } as Movie;
};

export const selectMovies = (state: RootState) => {
    const moviesModule = selectMoviesModule(state);

    const { genre, title } = selectMovieFilters(state);

    return moviesModule.movies
        .map(it => ({ ...it, genre: Genre[it.genre] }))
        .filter(
            it => it.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) && (!genre || it.genre === genre),
        );
};
