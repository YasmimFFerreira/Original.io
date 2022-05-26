import { Section } from '../components/checkout/section'
import { Header } from '../components/checkout/header';
import { Main } from '../components/checkout/main';
import { Footer } from '../components/checkout/footer';

import React from 'react';
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