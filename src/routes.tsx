import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sacola } from "./components/Sacola/sacola";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
}