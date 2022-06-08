import { Header } from '../components/Header/header';
import { Menu } from '../components/Menu/menu';
import { Footer } from '../components/Footer/footer';

import '../styles/home.scss';
import { Product } from './Product';

export const Home = () => {
    return (
        <div id="page-home">
            <>
                <Header />
                <Product />
                <Menu />
                <Footer />
            </>
        </div>
    )
};