import { Movies } from '@/components/movies/Movies';
import style from './style.module.css';
import { Sidebar } from '@/components/sidebar/Sidebar';

export default function Home() {
    return (
        <>
            <div className={style.sidebar}>
                <Sidebar />
            </div>
            <div className={style.main}>
                <Movies />
            </div>
        </>
    );
}
