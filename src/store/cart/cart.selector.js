import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);
//as long as cartItems array does not change do not rerun the reduce function
export const selectItemCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems
    .reduce(
        (accumulator, item) => accumulator + item.quantity, 0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems
    .reduce(
        (accumulator, item) => accumulator + item.quantity*item.price, 0
    )
);
