// import { createContext, useEffect, useReducer } from "react";
// import { createAction } from "../utils/reducer/reducer.utils";

// const addCartItem = (cartItems, productToAdd) => {
//     const index = cartItems.findIndex(item => item.id === productToAdd.id)
//     if (index !== -1) {
//         cartItems[index].quantity++;
//     } else {
//         cartItems.push({...productToAdd, quantity: 1});
//     }
//     return [...cartItems];
// }

// const deleteCartItem = (cartItems, productToDelete, deleteAll) => {
//     const index = cartItems.findIndex(item => item.id === productToDelete.id)
//     if (index === -1) return [...cartItems];
//     if (!deleteAll && cartItems[index].quantity > 1) {
//         cartItems[index].quantity--;
//     } else {
//         // removing from cart if quantity is zero
//         cartItems.splice(index, 1);
//     }
//     return [...cartItems];
// }

// export const CartContext = createContext({
//     isCartOpen: false,
//     setIsCartOpen: () => {},
//     cartItems: [],
//     addItemToCart: () => {},
//     removeItemFromCart: () => {},
//     deleteItemsFromCart: () => {},
//     cartCount: 0,
//     total:0
// })

// const INITIAL_STATE = {
//     isCartOpen: false,
//     cartItems: [],
//     cartCount: 0,
//     cartTotal: 0
// };

// export const CART_ACTION_TYPES = {
//     set_cart_items: 'SET_CART_ITEMS',
//     set_cart_total: 'SET_CART_TOTAL',
//     set_cart_count: 'SET_CART_COUNT',
//     set_is_cart_open: 'SET_IS_CART_OPEN'
// };

// const cartReducer = (state, action) => {
//     const { type, payload } = action;
  
//     switch (type) {
//         case CART_ACTION_TYPES.set_cart_items:
//             return { ...state, cartItems: payload };
//         case CART_ACTION_TYPES.set_cart_total:
//             return { ...state, cartTotal: payload}
//         case CART_ACTION_TYPES.set_cart_count:
//             return { ...state, cartCount: payload}
//         case CART_ACTION_TYPES.set_is_cart_open:
//             return { ...state, isCartOpen: payload}   
//         default:
//             throw new Error(`Unhandled type ${type} in cardReducer`);
//     }
// };

// export const CartProvider = ({ children }) => {

//     const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
//     const { isCartOpen, cartItems, cartCount, cartTotal } = state;

//     const setCartItem = (newCartItem) => {
//         dispatch(createAction(CART_ACTION_TYPES.set_cart_items, newCartItem))
//     }

//     const addItemToCart = (productToAdd) => {
//         setCartItem(addCartItem(cartItems, productToAdd));
//     }

//     const removeItemFromCart = (productToDelete) => {
//         setCartItem(deleteCartItem(cartItems, productToDelete));
//     }

//     const deleteItemsFromCart = (productToDelete) => {
//         // if true passed as third argument item will be deleted from the cart regardless of its quantity
//         setCartItem(deleteCartItem(cartItems, productToDelete, true));
//     }

//     const setIsCartOpen = (flag) => {
//         dispatch(createAction(CART_ACTION_TYPES.set_is_cart_open, flag))
//     }

//     useEffect(() => {
//         const total = cartItems.reduce(
//             (accumulator, item) => accumulator + item.quantity*item.price, 0
//         );
//         dispatch(createAction(CART_ACTION_TYPES.set_cart_total, total));

//     }, [cartItems])

//     useEffect(() => {
//         const itemCount = cartItems.reduce(
//             (accumulator, item) => accumulator + item.quantity, 0
//         );
//         dispatch(createAction(CART_ACTION_TYPES.set_cart_count, itemCount));
//     }, [cartItems])


//     const value = {
//         isCartOpen, 
//         cartItems, 
//         cartCount,
//         cartTotal,
//         setIsCartOpen, 
//         addItemToCart, 
//         removeItemFromCart, 
//         deleteItemsFromCart };

//     return (
//         <CartContext.Provider value={value}>{children}</CartContext.Provider>
//     )
// }