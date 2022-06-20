import { Header } from '../components/Header/header';
import { Menu } from '../components/Menu/menu';
import { Footer } from '../components/Footer/footer';

import '../styles/home.scss';
import { Products } from '../components/Products/products';

export const Home = () => {

    return (
        <div id="page-home">
            <>
                <Header />
                <Products />
                <Menu />
                <Footer />
            </>
        </div>
    )
};