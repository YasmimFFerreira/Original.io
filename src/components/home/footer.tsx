import vtexImg from './../../assets/images/vtex.svg';
import seloImg from './../../assets/images/selo-ebit.svg';
import facebookIcons from './../../assets/icons/facebook.svg';
import instaIcons from './../../assets/icons/insta.svg';
import subtractIcons from './../../assets/icons/subtract.svg';

import './../../components/home/footer.scss';
import React from 'react';

export function Footer() {
    return (
        <footer>
            <div id="home-footer">
                <div className="ellipse">

                    <p>
                        ASSINE NOSSA NEWS
                    </p>

                    <div className="nome">
                        Nome
                    </div>
                    <div className="email">
                        E-mail
                    </div>

                    <button className="enviar">
                        <div className="env">
                            ENVIAR
                        </div>
                    </button>
                </div>

                <div className="faceb">
                    <img src={facebookIcons} alt="Ilustração facebook" />
                </div>
                <div className="insta">
                    <img src={instaIcons} alt="Ilustração instagram" />
                </div>
                <div className="pint">
                    <img src={subtractIcons} alt="Ilustração pinterest" />
                </div>
                <div className="vtex">
                    <img src={vtexImg} alt="Logo Vtex" />
                </div>
                <div className="selo">
                    <img src={seloImg} alt="Selo Ebit" />
                </div>

                <div className="infos">
                    INSTITUCIONAL  INFORMAÇÕES  CONHEÇA
                </div>
                <div className="info01">
                    <p>A Marca</p>
                    <p>Lojas</p>
                    <p>Contato</p>
                </div>

                <div className="info02">
                    <p>Formas de Pagamentod</p>
                    <p>Trocas e Devoluçoẽs</p>
                    <p>Cuidados Com o Produto</p>
                </div>

                <div className="info03">
                    <p>Franquias e Multimarcas</p>
                    <p>Trabalhe com a Gente</p>
                    <p>Procon-RJ</p>
                </div>
                <div className="rodape">
                    <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie massa in nunc condimentum, vel placerat
                        lacus pulvinar. Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc semper leo nec tellus gravida faucibus.
                    </h5>
                </div>
            </div>
        </footer>
    )
};