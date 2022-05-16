import { BrowserRouter, Route } from 'react-router-dom'
import { Catalog } from "./pages/Catalog";
import { Compra } from "./pages/Compra";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Catalog} />
      <Route path="/compra" component={Compra} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
}

export default App;