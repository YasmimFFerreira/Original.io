import { Header } from '../components/home/header'
import { Aside } from '../components/home/aside';
import { Article } from '../components/home/article';
import { Menu } from '../components/home/menu';
import { Footer } from '../components/home/footer';

import React from 'react';
import '../styles/home.scss';

export const Home = () => {
    return (

        <div id="page-home">
            <>
                <Header />
                <Aside />
                <Article />
                <Menu />
                <Footer />
            </>
        </div>
    )
};