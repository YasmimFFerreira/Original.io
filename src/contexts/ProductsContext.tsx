import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Item, Product } from "../types/products";

interface ProductsContextProviderProps {
    children: ReactNode;
}

interface ProductsContextType {
    products: Product[] | undefined;
    selectedItem: Item | undefined;
    updateSelectedItem: (item: Item) => void;
    checkoutItems: Item[];
    addItemCheckout: (item: Item) => void;
}

export const ProductsContext = createContext({} as ProductsContextType);

export const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
    const [products, setProducts] = useState<Product[]>();
    const [selectedItem, setSelectedItem] = useState<Item>();
    const [checkoutItems, setCheckoutItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch(" http://localhost:3000/products").then(response => response.json()).then(data => setProducts(data));
    }, [])

    function updateSelectedItem(item: Item) {
        setSelectedItem(item)
    }
    function addItemCheckout(item: Item) {
        if (!item) return;

        const items = [...checkoutItems, item];

        setCheckoutItems(items);
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                selectedItem,
                updateSelectedItem,
                checkoutItems,
                addItemCheckout,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export const useProducts = () => {
    return useContext(ProductsContext);
}