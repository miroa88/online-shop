import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = () => {
    const {isCartOpen,  setIsCartOpen} = useContext(CartContext);
    const toggleIsCArtOpen = () => setIsCartOpen(!isCartOpen);

    return(
        <div className='cart-icon-container' onClick={toggleIsCArtOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">0</span>
        </div>
    )
}
export default CartIcon;