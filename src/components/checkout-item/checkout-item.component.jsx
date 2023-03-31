// import { useContext } from 'react';
// import { CartContext } from '../../context/cart.context';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, addItemToCart, deleteItemsFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector'

import { 
    Name,
    CheckoutItemContainer,
    Quantity,
    Price,
    Value,
    Arrow,
    ImageContainer,
    RemoveButtonContainer
} from './checkout-item.style';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    // const {  addItemToCart, removeItemFromCart, deleteItemsFromCart  } = useContext(CartContext);

    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const deleteItemHandler = () => dispatch(deleteItemsFromCart(cartItems, cartItem));
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>              
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButtonContainer onClick={deleteItemHandler}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}
export default CheckoutItem;