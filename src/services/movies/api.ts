import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Movie {
    id: string;
    description: string;
    director: string;
    genre: string;
    posterUrl: string;
    rating: number;
    releaseYear: number;
    reviewIds: string[];
    title: string;
}

export const movieApi = createApi({
    reducerPath: 'moviesAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: builder => ({
        getMovies: builder.query<Movie[], string | void>({
            query: (cinemaId?) => `movies?cinemaId=${cinemaId}`,
        }),
        getMovie: builder.query<Movie, string>({ query: movieId => `movie?movieId=${movieId}` }),
    }),
});

movieApi.endpoints.getMovies.initiate();

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi;
