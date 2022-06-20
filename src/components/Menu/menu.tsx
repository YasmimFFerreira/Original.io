import seta7Icons from './../../assets/icons/seta7.svg';
import seta8Icons from './../../assets/icons/seta8.svg';
import seta9Icons from './../../assets/icons/seta9.svg';
import { Link } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductsContext';

import './menu.scss';

export const Menu = () => {
    const { products } = useProducts();

    return (
        <div id="menu">

            <h1>QUEM VIU, VIU TAMBÉM </h1>

            <div className="products">
                {products?.map(product => (
                    <a href={product?.productId} key={product.productId}>
                        <div className="image">
                            <img src={product.items[0].images[0].imageUrl} alt=" " />
                        </div>
                        <Link to={'/product'}>
                            <h2> {product.productName}</h2>
                        </Link>
                    </a>
                ))}
            </div>

            <h3>
                <img src={seta7Icons} alt="Ilustração seta lado" />
                <div className="seta8">
                    <img src={seta8Icons} alt="Ilustração seta lado" />
                </div>
            </h3>

            <h4>1 de 3</h4>

            <h5>
                <img src={seta7Icons} alt="Ilustração seta lado" />
                <div className="seta9">
                    <img src={seta9Icons} alt="Ilustração seta lado" />
                </div>
            </h5>

        </div>
    )
};

