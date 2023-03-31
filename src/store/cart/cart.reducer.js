import { CART_ACTION_TYPES } from './cart.types';

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

export const cartReducer = (state=CART_INITIAL_STATE, action={}) => {
    const { type, payload } = action;
  
    switch (type) {
        case CART_ACTION_TYPES.set_cart_items:
            return { ...state, cartItems: payload };
        case CART_ACTION_TYPES.set_is_cart_open:
            return { ...state, isCartOpen: payload };
        default:
            return state;
    }
};