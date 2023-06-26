import Link from 'next/link';
import classNames from 'classnames';
import style from './style.module.css';

export function Footer() {
    return (
        <footer className={classNames('primary', style.footer)}>
            <Link href="/FAQ">Вопросы-ответы</Link>
            <Link href="/about">О нас</Link>
        </footer>
    );
}
