import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItem, addToCart, removeFromCart, updateCartItem } = useContext(ShopContext);
  return (
    <div className='cartItem'>
        <img src={productImage} alt='product'/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItem[id]} onChange={(e) => updateCartItem(e.target.value *1, id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
