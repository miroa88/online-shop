import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemContainer, EmptyMessage } from './cart-dropdown.style';

const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
      setIsCartOpen(!isCartOpen);
      navigate('/checkout');
    }
  
    return (
      <CartDropdownContainer>
        <CartItemContainer>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItemContainer>
        <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
      </CartDropdownContainer>
    );
  };
export default CartDropdown;

