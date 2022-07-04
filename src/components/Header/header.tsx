import logoImg from './../../assets/images/logo.svg'
import unionIcons from './../../assets/icons/union.svg';

import './header.scss';
import { Sacola } from '../Sacola/sacola';

export function Header() {
    return (<div id="header">

        <div className="logo">
            <img src={logoImg} alt="logo original.io" />
        </div>

        <nav>
            <div className="acess">  Entrar | Cadastrar-se</div>

            <div className="items">SAPATOS  BOLSAS  ACESSÓRIOS  OFF</div>

            <div className="search">
                <img src={unionIcons} alt="Ilustração barra busca" />
                <p>Busca</p>
            </div>

            <Sacola />
        </nav>
    </div>
    )
}