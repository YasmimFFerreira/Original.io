import { MdClose } from 'react-icons/md';
import prod02Img from './../../assets/images/prod02.svg';

import './styles.scss';

interface LightBoxProps {
    isVisible: boolean;
    close: () => void;
}

export function Lightbox({ isVisible, close }: LightBoxProps) {
    return (
        <div id="lightbox">
            <div className="box">

                <button className="close" onClick={close}>
                    <MdClose size={24} color=" #AEB6C1" />
                </button>

                <div className="img01">
                    <img src={prod02Img} alt="Ilustração rasteira" />
                </div>

                <p>
                    Produto adicionado com sucesso!
                </p>

                <button className="compra" onClick={close}>
                    <p>FINALIZAR COMPRA</p>
                </button>

                <button className='continuar' onClick={close}>
                    Continuar Comprando
                </button>
            </div>
        </div>
    )
};