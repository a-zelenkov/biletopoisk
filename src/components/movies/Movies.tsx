'use client';

import { useAppDispatch, useAppSelector } from '@/services/store';
import { Movie } from './movie/Movie';
import style from './style.module.css';
import { useGetMoviesQuery } from '@/services/movies/api';
import { movieActions } from '@/services/movies';
import { selectMovieFilters, selectMovies } from '@/services/movies/selector';
import { useEffect } from 'react';
import { Loader } from '../shared/loader/Loader';

export function Movies() {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => selectMovies(state));
    const { cinema } = useAppSelector(state => selectMovieFilters(state));
    const { data, isFetching } = useGetMoviesQuery(cinema);

    useEffect(() => {
        dispatch(movieActions.updateMovies(data));
    }, [data]);

    return (
        <>
            {isFetching && <Loader />}
            {!isFetching && (
                <div className={style.movies}>
                    {movies?.map(movie => (
                        <Movie
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
