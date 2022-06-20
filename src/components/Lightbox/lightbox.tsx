import xIcons from './../../assets/icons/x.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductsContext';
import { Image } from '../../types/products';

import "./lightbox.scss";

export function Lightbox() {
    const { selectedItem } = useProducts();
    const [, setImages] = useState<Image[] | []>([]);
    const [selectedImage, setSelectedImage] = useState<Image>()

    useEffect(() => {
        const newImages = selectedItem?.images

        if (newImages) {
            setImages(newImages);
            setSelectedImage(newImages[0])
        }
    }, [selectedItem])

    return (
        <div id="lightbox">
            <div className="box">

                <Link className="close" to={'/'} key="">
                    <img src={xIcons} alt="Ilustração fechar" />
                </Link>
                <div className="img01">
                    <img src={selectedImage?.imageUrl} alt={selectedImage?.imageText} />
                </div>

                <p> Produto adicionado com sucesso! </p>

                <Link className="compra" to={'/checkout'} >
                    <p>FINALIZAR COMPRA</p>
                </Link>

                <Link className="continuar" to={'/'} >
                    Continuar Comprando
                </Link>

            </div>
        </div>
    );
}

