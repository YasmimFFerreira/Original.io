import { InfoProduct } from '../components/Info/info';
import { Aside } from "../components/Aside/aside";
import { Header } from '../components/Header/header';
import { Menu } from '../components/Menu/menu';
import { Footer } from '../components/Footer/footer';
import { Product as ProductType } from '../types/products';
import { useProducts } from '../contexts/ProductsContext';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../styles/product.scss';

export const Product = () => {
    const { id } = useParams();
    const { products } = useProducts();

    const [product, setProduct] = useState<ProductType>();
    useEffect(() => {
        console.log(id)
        const foundProduct = products?.find(product => product.productId === id);
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id, products]);

    if (!product) {
        return (
            <>
                <h2> Produto não encontrado </h2>
            </>
        )
    }
    return (
        <div id="page-product">
            <>
                <Header />
                <Aside />
                <InfoProduct product={product} />
                <Menu />
                <Footer />
            </>
        </div>
    );
}
