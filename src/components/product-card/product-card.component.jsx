// import { useContext } from 'react';
// import { CartContext } from '../../context/cart.context';

//redux
import { addItemToCart } from '../../store/cart/cart.action'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button from '../button/button.component';

import { Name, Price, Footer, ProductCardContainer } from './product-card.style.jsx';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl, id } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    // const { addItemToCart } = useContext(CartContext);


    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

   return(
    <ProductCardContainer key={id}>
        <img src={imageUrl} alt={`${name}`}/>
        <Footer>
            <Name>{name}</Name>
            <Price>${price}</Price>
        </Footer>
        <Button buttonType="inverted" onClick={addProductToCart}>ADD TO CARD</Button>       
    </ProductCardContainer>
   )
}

export default ProductCard;