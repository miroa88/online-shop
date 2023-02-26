import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const index = cartItems.findIndex(item => item.id === productToAdd.id)
    if (index !== -1) {
        cartItems[index].quantity++;
    } else {
        cartItems.push({...productToAdd, quantity: 1});
    }
    return [...cartItems];
}

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCard: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    cartCount: 0,
    total:0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete))
    }
    // delete item with any quantity
    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete, true))
    }


    useEffect(() => {
        const total = cartItems.reduce(
            (accumulator, item) => accumulator + item.quantity*item.price, 0
        );
        setCartTotal(total);

    }, [cartItems])

    useEffect(() => {
        const itemCount = cartItems.reduce(
            (accumulator, item) => accumulator + item.quantity, 0
        );
        setCartCount(itemCount);
    }, [cartItems])


    const value = {
        isCartOpen, 
        cartItems, 
        cartCount,
        cartTotal,
        setIsCartOpen, 
        addItemToCart, 
        removeItemFromCart, 
        deleteItemFromCart};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}