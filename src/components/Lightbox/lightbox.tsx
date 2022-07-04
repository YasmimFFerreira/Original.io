import xIcons from './../../assets/icons/x.svg';
import { Link } from 'react-router-dom';
import { Item } from '../../types/products';

import "./lightbox.scss";

import { Sacola } from '../Sacola/sacola';

interface LightBoxProps {
    isVisible: boolean;
    close: () => void;
    item: Item,
}

export function Lightbox({ isVisible, close, item }: LightBoxProps) {

    return (
        <div id="lightbox" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>

            <div className="box">

                <button className="close" onClick={close}>
                    <img src={xIcons} alt="Ilustração fechar" />
                </button>

                <div className="img01">
                    <img src={item.images[0].imageUrl} />
                </div>

                <p> Produto adicionado com sucesso! </p>

                <button className="compra" onClick={Sacola}>
                    <p>FINALIZAR COMPRA</p>
                </button>

                <Link className="continuar" to={'/'}>
                    Continuar Comprando
                </Link>
            </div>
        </div>
    );
}


