import prod02Img from './../../assets/images/prod02.svg';
import prod03Img from './../../assets/images/prod03.svg';
import prod04Img from './../../assets/images/prod04.svg';
import prod01Img from './../../assets/images/prod01.svg';
import seta7Icons from './../../assets/icons/seta7.svg';
import seta8Icons from './../../assets/icons/seta8.svg';
import seta9Icons from './../../assets/icons/seta9.svg';

import './menu.scss';
import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <div id="menu">
            <h1>QUEM VIU, VIU TAMBÉM </h1>

            <Link to='./'>
                <div className="img3">
                    <img src={prod03Img} alt="Ilustração bolsa" />
                    <p>R$204,90</p>
                    <div className="cores02">
                        <button className="rosa">
                        </button>
                        <button className="azul">
                        </button>
                        <button className="marron">
                        </button>
                        <button className="preto">
                        </button>
                    </div>
                </div>
            </Link>

            <Link to='./'>
                <div className="img4">
                    <img src={prod04Img} alt="Ilustração bolsa" />
                    <p>R$204,90</p>
                    <div className="cores02">
                        <button className="rosa">
                        </button>
                        <button className="azul">
                        </button>
                        <button className="marron">
                        </button>
                        <button className="preto">
                        </button>
                    </div>
                </div>
            </Link>

            <Link to='./'>
                <div className="img2">
                    <img src={prod02Img} alt="Ilustração bolsa" />
                    <p>R$204,90</p>
                </div>
            </Link>

            <Link to='./product'>
                <div className="img1">
                    <img src={prod01Img} alt="Ilustração bolsa" />
                    <p>R$204,90</p>
                    <div className="cores02">
                        <button className="azul">
                        </button>
                        <button className="marron">
                        </button>
                        <button className="preto">
                        </button>
                    </div>
                </div>
            </Link>

            <h2>
                <img src={seta7Icons} alt="Ilustração seta lado" />
                <div className="seta8">
                    <img src={seta8Icons} alt="Ilustração seta lado" />
                </div>
            </h2>
            <h4>1 de 3</h4>
            <h3>
                <img src={seta7Icons} alt="Ilustração seta lado" />
                <div className="seta9">
                    <img src={seta9Icons} alt="Ilustração seta lado" />
                </div>
            </h3>
        </div>
    )
};