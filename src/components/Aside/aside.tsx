import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductsContext';
import { Image } from '../../types/products';

import './aside.scss';

export function Aside() {
    const { selectedItem } = useProducts();
    const [images, setImages] = useState<Image[] | []>([])
    const [selectedImage, setSelectedImage] = useState<Image>()

    useEffect(() => {
        const newImages = selectedItem?.images

        if (newImages) {
            setImages(newImages);
            setSelectedImage(newImages[0])
        }
    }, [selectedItem])

    return (
        <div id="aside">

            <div className="home">
                Home /
                <div className="home02">
                    Produto
                </div>
            </div>

            <div className="container">
                <MdKeyboardArrowUp size={24} />
                {images.map((image) => (
                    <img src={image.imageUrl} alt={image.imageText} onClick={() => setSelectedImage(image)} />
                ))}
                <MdKeyboardArrowDown size={24} />
            </div >

            <main>
                <img src={selectedImage?.imageUrl} alt={selectedImage?.imageText} />
            </main>

        </div>
    )
};