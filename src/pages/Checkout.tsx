import { Section } from '../components/Checkout/section'
import { Header } from '../components/Checkout/header';
import { Main } from '../components/Checkout/main';
import { Footer } from '../components/Checkout/footer';


import '../styles/checkout.scss';

export const Checkout = () => {
    return (

        <div id="page-checkout">
            <>
                <Section />
                <Header />
                <Main />
                <Footer />
            </>
        </div>
    )
};