
import sacolaIcons from './../../assets/icons/sacola.svg';
import { useProducts } from '../../contexts/ProductsContext';
import { useState } from 'react';
import { Checkout } from '../Checkout/checkout';


export function Sacola() {
    const { checkoutItems } = useProducts();

    const [isVisible, setIsVisible] = useState(false);

    function handleOpen() {
        setIsVisible(true);
    }

    function handleClose() {
        setIsVisible(false);
    }
    return (
        <div id="sacola">

            <div className="bag">
                <img onClick={handleOpen} src={sacolaIcons} alt="Ilustração sacola" />
            </div>

            <Checkout
                isVisible={isVisible}
                close={handleClose}
                items={checkoutItems}
            />

        </div>
    );
}