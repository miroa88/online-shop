import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

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
    const {  addItemToCart, removeItemFromCart, deleteItemFromCart  } = useContext(CartContext);

    const removeItemHandler = () => removeItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const deleteItemHandler = () => deleteItemFromCart(cartItem)
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