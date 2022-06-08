import { ProductsContextProvider } from "./contexts/ProductsContext";
import { AppRoutes } from "./routes";

import './styles/global.scss';

function App() {
  return (
    <ProductsContextProvider>
      <AppRoutes />
    </ProductsContextProvider>
  );
}

export default App;