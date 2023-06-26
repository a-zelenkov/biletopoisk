import { createSlice } from '@reduxjs/toolkit';
import { Movie } from './api';

interface State {
    filters: {
        title: string;
        genre?: string;
        cinema?: string;
    };
    movies: Movie[];
    movie?: Movie;
}

const initialState: State = {
    filters: {
        title: '',
        genre: undefined,
        cinema: undefined,
    },
    movies: [],
    movie: undefined,
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        updateFilters: (state, { payload }) => {
            state.filters = { ...state.filters, ...payload };
        },
        updateMovies: (state, { payload }) => {
            if (!payload) return;
            state.movies = payload;
        },
        updateMovie: (state, { payload }) => {
            if (!payload) return;
            state.movie = payload;
        },
    },
});

export const movieReducer = movieSlice.reducer;
export const movieActions = movieSlice.actions;
