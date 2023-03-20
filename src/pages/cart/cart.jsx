import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const {cartItem, getCartValue} = useContext(ShopContext);
    const totalAmount = getCartValue();

    const navigate = useNavigate();
  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
             {PRODUCTS.map((product) => {
                if(cartItem[product.id] > 0)
                {
                    return <CartItem data={product}/>
                }
             })} 
        </div> 
        { totalAmount > 0 ?
        <div className='checkout'>
            <p> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
            <button> Checkout</button>
        </div>  :
        <div><h1>Your Cart is Empty</h1></div>  }   
    </div>    
  )
}
