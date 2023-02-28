import { 
    CartItemContainer, 
    Image, 
    ItemDetailsContainer, 
    ItemName,
    ItemPrice
} from "./cart-item.style";



const CartItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return(
        <CartItemContainer>
            <Image src={imageUrl} alt={`${name}`}/>
            <ItemDetailsContainer>
                <ItemName>{name}</ItemName>
                <ItemPrice>{quantity} X ${price}</ItemPrice>
            </ItemDetailsContainer>
        </CartItemContainer>
    )

}

export default CartItem;