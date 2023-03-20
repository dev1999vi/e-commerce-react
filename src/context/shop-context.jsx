import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const defaultCart = () =>{
        let cart = {};
        for(let i = 1; i < PRODUCTS.length + 1; i++)
        {
            cart[i]= 0;
        }
        return cart;
    }

    const getCartValue = () => {
        let cartValue = 0;
        for (const item in cartItem){
            if(cartItem[item]>0)
            {
                let itemInfo = PRODUCTS.find((product)=> product.id === Number(item));
                cartValue += cartItem[item] * itemInfo.price;
            }
        }
        return cartValue
    }

    const addToCart = (itemId) =>{
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        // I can also do the below code it'll work the same as above.
        // setCartItem({...cartItem, [itemId]: prev[itemId] + 1})
    }

    const removeFromCart = (itemId) =>{
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
        // I can also do the below code it'll work the same as above.
        // setCartItem({...cartItem, [itemId]: prev[itemId] - 1})
    }

    const updateCartItem = (newAmount, itemId) =>{
        setCartItem((prev) => ({...prev, [itemId]: newAmount}))
    }

    const [cartItem, setCartItem] = useState(defaultCart());
    const contextValues = {cartItem , addToCart, removeFromCart, updateCartItem, getCartValue};
  return (
    <ShopContext.Provider value={contextValues}>
        {props.children}
    </ShopContext.Provider>
  )
}
