import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';

import { Name, Price, Footer, ProductCardContainer } from './product-card.style.jsx';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl, id } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

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