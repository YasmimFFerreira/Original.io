import xIcons from './../../assets/icons/x.svg';
import maisIcons from './../../assets/icons/mais.svg';
import menosIcons from './../../assets/icons/menos.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './checkout.scss';
import { Item } from '../../types/products';
interface CheckoutProps {
    isVisible: boolean;
    close: () => void;
    items: Item[]
}

export function Checkout({ isVisible, close, items }: CheckoutProps) {
    const [count, setCount] = useState(1);
    console.log(setCount, count)

    return (
        <div id="checkout" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            <div className="box">

                <h1>
                    <button className="close" onClick={close}>
                        <img src={xIcons} alt="Ilustração fechar" />
                    </button>
                </h1>

                <div className="sacola">
                    <p> SACOLA</p>
                    {count} Itens
                </div>

                <div className="products">
                    {items.map((item) => {
                        return (
                            <div className="product" key={item.itemId}>
                                <div className="img">
                                    <img src={item.images[0].imageUrl} alt={item.images[0].imageText} />
                                </div>

                                <menu>

                                    <div className="name">
                                        {item.nameComplete}
                                    </div>

                                    <div className="valor">
                                        R$ {(item.sellers[0].commertialOffer.Price * count)}
                                    </div>
                                </menu>

                                <main>
                                    <div className="mais">
                                        <button onClick={() => setCount(count + 1)}>
                                            <img src={maisIcons} alt="mais" />
                                        </button>
                                    </div>

                                    <div className="quant">
                                        {count}
                                    </div>

                                    <div className="menos">
                                        <button onClick={() => setCount(count - 1)}>
                                            <img src={menosIcons} alt="menos" />
                                        </button>
                                    </div>
                                </main>

                                <h2>
                                    <p> Faltam R$ xx,xx para você</p> Ganhar Frete Grátis
                                </h2>

                                <strong>
                                    <p>Total: R$ {(item.sellers[0].commertialOffer.Price * count)}</p>
                                    até {count}x de R$ {item.sellers[0].commertialOffer.Price} sem juros
                                </strong>

                                <h3>
                                    <Link to="/">
                                        <p>FINALIZAR COMPRA</p>
                                    </Link>
                                </h3>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
};


