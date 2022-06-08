import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Checkout } from "./pages/Checkout";

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/checkout/" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}