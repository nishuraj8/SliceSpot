const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const products = [
    {
        _id: '1',
        name: 'Margherita',
        price: 499,
        size: 'Small',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002'
    },
    {
        _id: '2',
        name: 'Farmhouse',
        price: 499,
        size: 'Medium',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
    },
    {
        _id: '3',
        name: 'Chicken Tikka',
        price: 579,
        size: 'Large',
        image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65'
    },
    {
        _id: '4',
        name: 'Double Pepperoni',
        price: 599,
        size: 'Large',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e'
    },
    {
        _id: '5',
        name: 'Veggie Supreme',
        price: 529,
        size: 'Medium',
        image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498'
    },
    {
        _id: '6',
        name: 'Cheese Burst',
        price: 549,
        size: 'Medium',
        image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498'
    },
    {
        _id: '7',
        name: 'Spicy Chicken',
        price: 559,
        size: 'Large',
        image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498'
    },
    {
        _id: '8',
        name: 'Havana Special',
        price: 499,
        size: 'Small',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002'
    },
    {
        _id: '9',
        name: 'Caramel Pineapple',
        price: 449,
        size: 'Small',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
    },
    {
        _id: '10',
        name: 'Chicken Premier',
        price: 549,
        size: 'Medium',
        image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65'
    }
];

app.get('/', (req, res) => {
    res.send('Server running');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/products/cart-items', (req, res) => {
    const ids = req.body.ids;

    const cartProducts = products.filter(product =>
        ids.includes(product._id)
    );

    res.json(cartProducts);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(
        product => product._id === req.params.id
    );

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    res.json(product);
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});