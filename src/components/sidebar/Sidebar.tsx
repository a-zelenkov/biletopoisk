'use client';

import classNames from 'classnames';
import style from './style.module.css';
import { useGetCinemasQuery } from '@/services/cinemas/api';
import { Input } from '../shared/input/Input';
import { Select } from '../shared/select/Select';
import { useGetMoviesQuery } from '@/services/movies/api';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/services/store';
import { movieActions } from '@/services/movies';
import { Genre } from '@/services/genre';

export function Sidebar() {
    const dispatch = useAppDispatch();
    const { data: cinemas } = useGetCinemasQuery();
    const [cinema, setCinema] = useState<string>();
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState<string>();

    useEffect(() => {
        dispatch(
            movieActions.updateFilters({
                title,
            }),
        );
    }, [title]);

    useEffect(() => {
        dispatch(
            movieActions.updateFilters({
                genre,
            }),
        );
    }, [genre]);

    useEffect(() => {
        dispatch(
            movieActions.updateFilters({
                cinema,
            }),
        );
    }, [cinema]);

    return (
        <aside className={classNames('secondary', style.sidebar)}>
            <h3>Фильтры поиска</h3>
            <div>
                <Input
                    value={title}
                    onChange={title => setTitle(title)}
                    className={style.input}
                    label="Название"
                    placeholder="Введите название"
                />
                <Select
                    onChange={genre => setGenre(genre)}
                    className={style.input}
                    label="Жанр"
                    placeholder="Выберите жанр"
                    items={Object.values(Genre)}
                />
                <Select
                    className={style.input}
                    label="Кинотеатр"
                    placeholder="Выберите кинотеатр"
                    items={cinemas}
                    displayExpr="name"
                    valueExpr="id"
                    onChange={cinemaId => setCinema(cinemaId)}
                />
            </div>
        </aside>
    );
}
