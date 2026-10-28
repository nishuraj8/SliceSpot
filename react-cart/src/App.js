import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './components/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import { CartContext } from './pages/CartContext';
import { useEffect, useState } from 'react';
import { getCart, storeCart } from "./pages/helpers";

const App = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getCart();

        if (savedCart) {
            setCart(savedCart);
        }
    }, []);

    useEffect(() => {
        storeCart(cart);
    }, [cart]);


return (
    <Router>
        <CartContext.Provider value={{ cart, setCart }}>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:_id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </CartContext.Provider>
    </Router>
);
};

export default App;





























