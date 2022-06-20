
import maisIcons from './../../assets/icons/mais.svg';
import menosIcons from './../../assets/icons/menos.svg';
import { useProducts } from '../../contexts/ProductsContext';
import { Image, Product } from '../../types/products';
import { useEffect, useState } from 'react';
import xIcons from './../../assets/icons/x.svg';
import './checkout.scss';
import { Link } from 'react-router-dom';

interface InfoProductProps {
    product: Product | undefined;
}
interface PriceValuesType {
    sellingPrice: number;
}
const SELLER_ID = "1"

export function Checkout({ product }: InfoProductProps) {
    const { updateSelectedItem } = useProducts()
    const [priceValues, setPriceValues] = useState<PriceValuesType>({
        sellingPrice: 0,
    });
    const { selectedItem } = useProducts();
    const [, setImages] = useState<Image[] | []>([])
    const [selectedImage, setSelectedImage] = useState<Image>()
    const [count, setCount] = useState(1);

    console.log(setCount, count)

    function getPriceValues() {
        const seller = selectedItem?.sellers.find(seller => seller.sellerId === SELLER_ID);

        if (!seller) return;

        const sellingPrice = seller.commertialOffer.Price;

        setPriceValues({
            sellingPrice
        })
    }

    useEffect(() => {
        getPriceValues();

        if (selectedItem) {
            updateSelectedItem(selectedItem);
        }
    }, [selectedItem])

    useEffect(() => {
        const newImages = selectedItem?.images

        if (newImages) {
            setImages(newImages);
            setSelectedImage(newImages[0])
        }
    }, [selectedItem])

    return (
        <div id="checkout">
            <div className="box">

                <h1>
                    <Link to="/">
                        <img src={xIcons} alt="Ilustração fechar" />
                    </Link>
                </h1>

                <div className="sacola">
                    <p> SACOLA</p>
                    {count} Itens
                </div>

                <div className="img">
                    <img src={selectedImage?.imageUrl} alt={selectedImage?.imageText} />
                </div>

                <menu>
                    <div className="name">
                        {product?.productName}
                    </div>
                    <div className="valor">
                        R$ {(priceValues.sellingPrice * count)}
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
                    <p>Total: R$ {(priceValues.sellingPrice * count)}</p>
                    até {count}x de R$ {priceValues.sellingPrice} sem juros
                </strong>

                <h3>
                    <Link to="/">
                        <p>FINALIZAR COMPRA</p>
                    </Link>
                </h3>

            </div>
        </div>
    )
};


