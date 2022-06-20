import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Checkout } from "./components/Checkout/checkout"
import { Lightbox } from "./components/Lightbox/lightbox";

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Product />} />
                <Route path="/lightbox/" element={<Lightbox />} />
                <Route path="/checkout/" element={<Checkout product={undefined} />} />
            </Routes>
        </BrowserRouter>
    )
}