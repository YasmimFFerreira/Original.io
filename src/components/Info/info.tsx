import { useState, useEffect } from 'react';
import { Item, Product } from "../../types/products";
import { useProducts } from '../../contexts/ProductsContext';
import { Link } from 'react-router-dom';

import './info.scss';
interface InfoProductProps {
    product: Product | undefined;
}

interface PriceValuesType {
    sellingPrice: number;
    listPrice: number;
}

interface ColorVariationType {
    name: string;
    color: string;
}

interface SizeVariationType {
    name: string;
}

const SELLER_ID = "1"

const COLORS = [
    {
        name: "Amarelo",
        hex: "#faec2a"
    },
    {
        name: "Branco",
        hex: "#FFFFFF"
    },
    {
        name: "Preto",
        hex: "#000000"
    }
]

export function InfoProduct({ product }: InfoProductProps) {
    const { updateSelectedItem } = useProducts()
    const [selectedItem, setSelectedItem] = useState<Item>();
    const [priceValues, setPriceValues] = useState<PriceValuesType>({
        sellingPrice: 0,
        listPrice: 0
    });
    const [colorVariation, setColorVariation] = useState<ColorVariationType[] | []>([]);
    const [colorSelected, setColorSelected] = useState<string>(" ");
    const [sizeVariation, setSizeVariation] = useState<SizeVariationType[] | []>([]);
    const [sizeSelected, setSizeSelected] = useState<string>(" ");

    useEffect(() => {
        const item = product?.items[0]
        if (item) {
            setSelectedItem(item);
            updateSelectedItem(item);
        }
    }, [])

    function getPriceValues() {
        const seller = selectedItem?.sellers.find(seller => seller.sellerId === SELLER_ID);

        if (!seller) return;

        const sellingPrice = seller.commertialOffer.Price;
        const listPrice = seller.commertialOffer.ListPrice

        setPriceValues({
            sellingPrice,
            listPrice
        })
    }

    useEffect(() => {
        getPriceValues();

        if (selectedItem) {
            updateSelectedItem(selectedItem);
        }
    }, [selectedItem])


    function getColors() {
        const colorSpecification = product?.skuSpecifications.find(specification => specification.field.name === "Cor");

        if (!colorSpecification) return;

        const colors = colorSpecification.values.map(value => ({
            name: value.name,
            color: COLORS.find(color => color.name === value.name)?.hex || " "
        }))

        if (colors) {
            setColorVariation(colors)
        }
    }

    function handleSelectedItem(colorVariation: ColorVariationType) {
        const newSelectedItem = product?.items.find(item => (
            item.variations.find(variation => variation.name === "Cor")?.values[0] === colorVariation.name
        ))

        if (newSelectedItem) {
            setSelectedItem(newSelectedItem);
            setColorSelected(colorVariation.name)
        }
    }

    function getSizes() {
        const sizeSpecification = product?.skuSpecifications.find(specification => specification.field.name === "Tamanho");

        if (!sizeSpecification) return;

        const sizes = sizeSpecification.values.map(value => ({
            name: value.name,
        }))

        if (sizes) {
            setSizeVariation(sizes);
        }
    }

    useEffect(() => {
        console.log(product)
        getColors();
        getSizes();
    }, [product]);


    return (
        <div id="info">

            <h1>{product?.productName}</h1>

            <p>{product?.productReference}</p>

            <div className="prices">
                <div className="list">
                    R$ {priceValues.listPrice}
                </div>
                |
                <div className="selling">
                    R$ {priceValues.sellingPrice}
                </div>
            </div>

            <h3>
                Cor: <p>({colorSelected})</p>
            </h3>

            {colorVariation.length > 0 && (
                <div className="colors">
                    {colorVariation.map((variation) => (
                        <button className="selectedcolors"
                            onClick={() => handleSelectedItem(variation)}
                            key={variation.name}
                            style={{
                                backgroundColor: variation.color
                            }}
                        >
                        </button>
                    ))}
                </div>)}

            <div className="tam">
                <p>Tamanho:</p>
                ({sizeSelected})
            </div>

            <div className="text02">
                Guia de medidas
            </div>

            {sizeVariation.length > 0 && (
                <div className="num">
                    {sizeVariation.map((variation => (
                        <button
                            onClick={() => setSizeSelected(variation.name)}
                            key={variation.name}
                        >
                            {variation.name}
                        </button>
                    )))}
                </div>)}

            <Link className="compra" to={'/lightbox'}>
                <p> ADICIONAR Á SACOLA</p>
            </Link>

            <div className="text04">
                {product?.description}
            </div>

        </div>
    );
}

