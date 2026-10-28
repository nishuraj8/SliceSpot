import { Link } from 'react-router-dom';
import {useContext,useState} from 'react';
import {CartContext} from '../pages/CartContext';
const Product = (props) => {
        const [isAdding,setIsAdding] = useState(false);
        const { cart,setCart } = useContext(CartContext);
        const{product}=props;
        const addToCart = (event, product) => {

                event.preventDefault();
                let _cart={...cart};
                if(!_cart.items){
                        _cart.items={}
                }
                if(_cart.items[product._id]){
                        _cart.items[product._id]+=1;
                }else{
                        _cart.items[product._id]=1;
                }

                if(!_cart.totalItems){
                        _cart.totalItems=0;
                }
                _cart.totalItems+=1;
                setCart(_cart);
                setIsAdding(true);
                setTimeout(() => {
                        setIsAdding(false);
                },1000);

               // const cart={
                  //      items:{

                    //    }
              //  }
        }
        return (
                <Link to={`/products/${props.product._id}`}>
                        <div className="w-full">
                                <div className="h-36 w-full rounded-lg overflow-hidden bg-gray-100">
                                        <img
                                                src={props.product.image}
                                                alt={props.product.name}
                                                className="w-full h-full object-cover"
                                        />
                                </div>

                                <h2 className="font-bold mt-3 h-10 text-center">
                                        {props.product.name}
                                </h2>

                                <div className="text-center">
                                        <span className="inline-block bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded-full mt-2">
                                                {props.product.size}
                                        </span>
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                        <p className="font-bold">₹{props.product.price}</p>

                                        <button disabled ={isAdding}onClick={(e) => { addToCart(e,product) }} className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500'} text-black font-bold px-3 py-2 rounded-full`}>
                                                ADD{isAdding?'ED':''}
                                        </button>
                                </div>
                        </div>
                </Link>
        );
};

export default Product;