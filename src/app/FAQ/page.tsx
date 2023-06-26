import style from './style.module.css';
import { Accordion } from '@/components/shared/accordion/Accordion';

export default function FAQ() {
    const items = [
        {
            key: 1,
            title: 'Что такое Билетопоиск?',
            text: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
        },
        {
            key: 2,
            title: 'Какой компании принадлежит Билетопоиск?',
            text: 'Yandex :)',
        },
        {
            key: 3,
            title: 'Как купить билет на Билетопоиск?',
            text: 'Пока никак, их можно только добавить в корзину..',
        },
        {
            key: 4,
            title: 'Как купить билет на Билетопоиск?',
            text: 'Пока никак, зато их можно почитать!',
        },
    ];

    return (
        <div className={style.page}>
            <Accordion items={items} />
        </div>
    );
}
