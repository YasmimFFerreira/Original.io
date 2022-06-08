import { Link } from 'react-router-dom';
import './footer.scss';

export function Footer() {
    return (
        <div id="checkout-footer">
            <h1>
                <p> Faltam R$ xx,xx para você</p>
                <p>Ganhar Frete Grátis</p>
            </h1>

            <h2>
                <p>Total: R$ 149,00</p>
                até 3x de R$ 49,90 sem juros
            </h2>
            <h3>
                <Link to="/">
                    <p>FINALIZAR COMPRA</p>
                </Link>
            </h3>
        </div>
    )
};