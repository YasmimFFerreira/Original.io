import { Section } from '../components/product/section'
import { Aside } from '../components/product/aside';

import React from 'react';
import '../styles/product.scss';

export const Product = () => {
    return (

        <div id="page-product">
            <>
                <Section />
                <Aside />
            </>
        </div>
    )
};