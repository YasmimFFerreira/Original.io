import prod02Img from './../../assets/images/prod02.svg';
import xIcons from './../../assets/icons/x.svg';

import React from 'react';
import './../../components/product/aside.scss';
import { Link } from 'react-router-dom';

export function Aside() {
    return (
        <div id="product-aside">
            <h2>
                <Link to="/">
                    <img src={xIcons} alt="Ilustração fechar" />
                </Link>
            </h2>

            <div className="img01">
                <img src={prod02Img} alt="Ilustração rasteira" />
            </div>

            <p>
                Produto adicionado com sucesso!
            </p>

            <h3>
                <Link to="/checkout">
                    <p>FINALIZAR COMPRA</p>
                </Link>
            </h3>
            <h1>
                <Link to="/">
                    Continuar Comprando
                </Link>
            </h1>
        </div>
    )
};