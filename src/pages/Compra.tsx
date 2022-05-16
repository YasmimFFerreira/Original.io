import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import prod02Img from '../assets/images/prod02.svg';
import xIcons from '../assets/icons/x.svg';

import '../styles/comp.scss';

import { Button } from '../components/Button';

export function Compra() {

    const history = useHistory();

    function navigateToCart() {
        history.push('./cart');
    }

    return (
        <div id="page-comp">

            <div className="box">
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

                <Button onClick={navigateToCart}>
                    <p>FINALIZAR COMPRA</p>
                </Button>

                <h1>
                    <Link to="/">
                        Continuar Comprando
                    </Link>
                </h1>
            </div>
        </div>
    )
}