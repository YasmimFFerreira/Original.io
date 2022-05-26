import xIcons from './../../assets/icons/x.svg';

import React from 'react';
import { Link } from 'react-router-dom';
import './../../components/checkout/header.scss';

export function Header() {
    return (
        <div id="checkout-header">

            <h1>
                <Link to="/">
                    <img src={xIcons} alt="Ilustração fechar" />
                </Link>
            </h1>

            <h2>
                SACOLA
                <p>5 Itens</p>
            </h2>
        </div>
    )
};