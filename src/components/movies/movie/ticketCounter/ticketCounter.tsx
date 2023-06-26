'use client';

import { cartActions } from '@/services/cart';
import style from './style.module.css';
import { useAppDispatch, useAppSelector } from '@/services/store';
import { Modal } from '@/components/shared/portals/Modal';
import { useState } from 'react';

interface Props {
    id: string;
    amount: number;
    showDeleteButton?: boolean;
}

export function TicketCounter({ id, amount, showDeleteButton }: Props) {
    const dispatch = useAppDispatch();
    const [isDeleting, setIsDeleting] = useState(false);

    return (
        <>
            <Modal
                visible={isDeleting}
                onResult={result => {
                    setIsDeleting(false);
                    if (result) dispatch(cartActions.delete(id));
                }}
                title="Удаление билета"
                text="Вы уверены, что хотите удалить билет?"
            />
            <div className={style.counter}>
                <div className={style.counterContent}>
                    <button
                        disabled={amount < 1}
                        onClick={() => {
                            if (amount === 1) setIsDeleting(true);
                            else dispatch(cartActions.decrement(id));
                        }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="20"
                                height="20"
                                rx="4"
                                fill="#FF5500"
                            />
                            <path
                                d="M14.5 10C14.5 10.0995 14.4605 10.1948 14.3902 10.2652C14.3198 10.3355 14.2245 10.375 14.125 10.375H5.875C5.77554 10.375 5.68016 10.3355 5.60984 10.2652C5.53951 10.1948 5.5 10.0995 5.5 10C5.5 9.90054 5.53951 9.80516 5.60984 9.73484C5.68016 9.66451 5.77554 9.625 5.875 9.625H14.125C14.2245 9.625 14.3198 9.66451 14.3902 9.73484C14.4605 9.80516 14.5 9.90054 14.5 10Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <span className={style.amount}>{amount}</span>
                    <button
                        disabled={amount >= 30}
                        onClick={() => dispatch(cartActions.increment(id))}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="20"
                                height="20"
                                rx="4"
                                fill="#FF5500"
                            />
                            <path
                                d="M14.5 10C14.5 10.0995 14.4605 10.1948 14.3902 10.2652C14.3198 10.3355 14.2245 10.375 14.125 10.375H10.375V14.125C10.375 14.2245 10.3355 14.3198 10.2652 14.3902C10.1948 14.4605 10.0995 14.5 10 14.5C9.90054 14.5 9.80516 14.4605 9.73484 14.3902C9.66451 14.3198 9.625 14.2245 9.625 14.125V10.375H5.875C5.77554 10.375 5.68016 10.3355 5.60984 10.2652C5.53951 10.1948 5.5 10.0995 5.5 10C5.5 9.90054 5.53951 9.80516 5.60984 9.73484C5.68016 9.66451 5.77554 9.625 5.875 9.625H9.625V5.875C9.625 5.77554 9.66451 5.68016 9.73484 5.60984C9.80516 5.53951 9.90054 5.5 10 5.5C10.0995 5.5 10.1948 5.53951 10.2652 5.60984C10.3355 5.68016 10.375 5.77554 10.375 5.875V9.625H14.125C14.2245 9.625 14.3198 9.66451 14.3902 9.73484C14.4605 9.80516 14.5 9.90054 14.5 10Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    {showDeleteButton && (
                        <div
                            onClick={() => setIsDeleting(true)}
                            className={style.delete}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.0673 15.1829C16.1254 15.241 16.1714 15.3099 16.2028 15.3858C16.2343 15.4617 16.2505 15.543 16.2505 15.6251C16.2505 15.7072 16.2343 15.7885 16.2028 15.8644C16.1714 15.9403 16.1254 16.0092 16.0673 16.0673C16.0092 16.1254 15.9403 16.1714 15.8644 16.2028C15.7885 16.2343 15.7072 16.2505 15.6251 16.2505C15.543 16.2505 15.4617 16.2343 15.3858 16.2028C15.3099 16.1714 15.241 16.1254 15.1829 16.0673L10.0001 10.8837L4.81729 16.0673C4.70002 16.1846 4.54096 16.2505 4.3751 16.2505C4.20925 16.2505 4.05019 16.1846 3.93292 16.0673C3.81564 15.95 3.74976 15.791 3.74976 15.6251C3.74976 15.4593 3.81564 15.3002 3.93292 15.1829L9.11651 10.0001L3.93292 4.81729C3.81564 4.70002 3.74976 4.54096 3.74976 4.3751C3.74976 4.20925 3.81564 4.05019 3.93292 3.93292C4.05019 3.81564 4.20925 3.74976 4.3751 3.74976C4.54096 3.74976 4.70002 3.81564 4.81729 3.93292L10.0001 9.11651L15.1829 3.93292C15.3002 3.81564 15.4593 3.74976 15.6251 3.74976C15.791 3.74976 15.95 3.81564 16.0673 3.93292C16.1846 4.05019 16.2505 4.20925 16.2505 4.3751C16.2505 4.54096 16.1846 4.70002 16.0673 4.81729L10.8837 10.0001L16.0673 15.1829Z"
                                    fill="#333333"
                                />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
