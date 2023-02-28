import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    CheckoutContainer ,
    CheckoutHeder,
    HeaderBlock,
    Total
    } from  './checkout.style.jsx';

const CheckOut = () => {
    const { cartItems, cartTotal} = useContext(CartContext);

    return(
        <CheckoutContainer>
            <CheckoutHeder>
                <HeaderBlock>              
                    <span>Products</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeder>
            {cartItems.map(
                item => <CheckoutItem 
                            key={item.id} 
                            cartItem={item}                        
                        />)}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )

}

export default CheckOut;