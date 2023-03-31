import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";


// helper function
const addCartItem = (cartItems, productToAdd) => {
    const index = cartItems.findIndex(item => item.id === productToAdd.id)
    if (index !== -1) {
        cartItems[index].quantity++;
    } else {
        cartItems.push({...productToAdd, quantity: 1});
    }
    return [...cartItems];
}
// helper function
const deleteCartItem = (cartItems, productToDelete, deleteAll) => {
    const index = cartItems.findIndex(item => item.id === productToDelete.id)
    if (index === -1) return [...cartItems];
    if (!deleteAll && cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
    } else {
        // removing from cart if quantity is zero
        cartItems.splice(index, 1);
    }
    return [...cartItems];
}

export const setCartItems = (newCartItem) => {
    return createAction(CART_ACTION_TYPES.set_cart_items, newCartItem);   
}

export const setIsCartOpen = (flag) => {
    return createAction(CART_ACTION_TYPES.set_is_cart_open, flag);
}

export const addItemToCart = (cartItems, productToAdd) => {
    const updatedCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.set_cart_items, updatedCartItems);   
}

export const removeItemFromCart = (cartItems, productToDelete) => {
    const updatedCartItems = deleteCartItem(cartItems, productToDelete);
    return createAction(CART_ACTION_TYPES.set_cart_items, updatedCartItems);   
}

export const deleteItemsFromCart = (cartItems, productToDelete) => {
    // if true passed as third argument item will be deleted from the cart regardless of its quantity
    const updatedCartItems = deleteCartItem(cartItems, productToDelete, true);
    return createAction(CART_ACTION_TYPES.set_cart_items, updatedCartItems); 
}


