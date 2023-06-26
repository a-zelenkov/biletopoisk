'use client';

import style from './style.module.css';
import { Movie } from '@/components/movies/movie/Movie';
import { selectAllTicketAmount, selectCartModule } from '@/services/cart/selector';
import { selectMovies } from '@/services/movies/selector';
import { useAppSelector } from '@/services/store';
import classNames from 'classnames';
import Link from 'next/link';

export default function Cart() {
    const ticketAmount = useAppSelector(state => selectAllTicketAmount(state));
    const cart = useAppSelector(state => selectCartModule(state));
    const movies = useAppSelector(state => selectMovies(state)).filter(it => cart[it.id]);

    return (
        <div className={style.page}>
            {movies.length === 0 && (
                <div className={style.empty}>
                    <span>Ой, так вы ведь ещё не выбрали билеты!</span>
                    <Link href="/">
                        <button>Вернуться на главную</button>
                    </Link>
                </div>
            )}
            {movies.map(movie => (
                <Movie
                    showDeleteButton
                    key={movie.id}
                    movie={movie}
                />
            ))}
            {ticketAmount > 0 && (
                <div className={classNames('secondary', style.summary)}>
                    <span>Итого билетов:</span>
                    <b>{ticketAmount}</b>
                </div>
            )}
        </div>
    );
}
