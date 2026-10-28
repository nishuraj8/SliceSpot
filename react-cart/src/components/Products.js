import Product from './Product';
import { useState, useEffect} from 'react';


const Products = () => {
    //const {name}=useContext(CartContext);


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>

            <div className="grid grid-cols-2 md:grid-cols-5 my-8 gap-6 md:gap-8">
                {
                    products.map(product => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default Products;