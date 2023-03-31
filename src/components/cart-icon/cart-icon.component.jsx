// import { useContext } from 'react';
// import { CartContext } from '../../context/cart.context';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { selectItemCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style';

const CartIcon = () => {
    // const {isCartOpen,  setIsCartOpen, cartCount} = useContext(CartContext);
    const dispatch = useDispatch()
    const cartCount = useSelector(selectItemCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;