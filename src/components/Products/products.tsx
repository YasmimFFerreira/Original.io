import { Link } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductsContext';

import './products.scss';

export const Products = () => {
    const { products } = useProducts();

    return (
        <div id="products">
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
    )
};

