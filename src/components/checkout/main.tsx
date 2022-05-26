import prod02Img from './../../assets/images/prod02.svg';
import prod03Img from './../../assets/images/prod03.svg';
import prod04Img from './../../assets/images/prod04.svg';
import prod01Img from './../../assets/images/prod01.svg';
import maisIcons from './../../assets/icons/mais.svg';
import menosIcons from './../../assets/icons/menos.svg';

import React from 'react';
import './../../components/checkout/main.scss';

export function Main() {
    return (
        <div id="checkout-main">

            <div className="container">

                <div className="img01">
                    <img src={prod02Img} alt="Ilustração rasteira" />
                </div>
                <div className="img01">
                    <img src={prod01Img} alt="Ilustração rasteira" />
                </div>
                <div className="img01">
                    <img src={prod03Img} alt="Ilustração rasteira" />
                </div>
                <div className="img01">
                    <img src={prod04Img} alt="Ilustração rasteira" />
                </div>
                <div className="img01">
                    <img src={prod02Img} alt="Ilustração rasteira" />
                </div>
            </div>

            <menu>
                <div className="valor">
                    <p>
                        Rasteira Tira Dedo
                    </p>
                    R$ 49,90
                    <p>
                        Rasteira Tira Dedo
                    </p>
                    R$ 49,90
                    <p>
                        Rasteira Tira Dedo
                    </p>
                    R$ 49,90
                    <p>
                        Rasteira Tira Dedo
                    </p>
                    R$ 49,90
                    <p>
                        Rasteira Tira Dedo
                    </p>
                    R$ 49,90
                </div>
            </menu>

            <div className="menos">

                <div className="menos1">
                    <img src={menosIcons} alt="menos" />
                </div>
                <div className="menos2">
                    <img src={menosIcons} alt="menos" />
                </div>
                <div className="menos3">
                    <img src={menosIcons} alt="menos" />
                </div>
                <div className="menos4">
                    <img src={menosIcons} alt="menos" />
                </div>
                <div className="menos5">
                    <img src={menosIcons} alt="menos" />
                </div>
            </div>

            <div className="mais">
                <div className="mais1">
                    <img src={maisIcons} alt="mais" />
                </div>
                <div className="mais2">
                    <img src={maisIcons} alt="mais" />
                </div>
                <div className="mais3">
                    <img src={maisIcons} alt="mais" />
                </div>
                <div className="mais4">
                    <img src={maisIcons} alt="mais" />
                </div>
                <div className="mais5">
                    <img src={maisIcons} alt="mais" />
                </div>
            </div>

            <h3>
                <div className="quant">
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                </div>
            </h3>
        </div>
    )
};