'use client';

import { Movie } from '@/services/movies/api';
import classNames from 'classnames';
import style from './style.module.css';
import Image from 'next/image';
import { selectTicketAmount } from '@/services/cart/selector';
import { useAppSelector } from '@/services/store';
import Link from 'next/link';
import { TicketCounter } from './ticketCounter/ticketCounter';

interface Props {
    movie: Movie;
    showDeleteButton?: boolean;
}

export function Movie({ movie, showDeleteButton }: Props) {
    const amount = useAppSelector(state => selectTicketAmount(state, movie.id));

    return (
        <div className={classNames('secondary', style.movie)}>
            <div className={style.preview}>
                <Image
                    className={style.image}
                    src={movie.posterUrl}
                    width={100}
                    height={120}
                    alt={movie.title}
                />
                <div className={style.text}>
                    <Link href={`film/${movie.id}`}>
                        <h3>{movie.title}</h3>
                    </Link>
                    <p className={style.genre}>{movie.genre}</p>
                </div>
            </div>
            <TicketCounter
                amount={amount}
                id={movie.id}
                showDeleteButton={showDeleteButton}
            />
        </div>
    );
}
