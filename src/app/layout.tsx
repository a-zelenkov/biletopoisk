import './globals.css';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import StoreProvider from '@/services/store.provider';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['400'],
    preload: false,
});

export const metadata = {
    title: 'Билетопоиск',
    description: 'Сервис для поиска билетов',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={roboto.className}>
                <StoreProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
