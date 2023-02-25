import Button from '../button/button.component';

import './product-card.style.scss';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl, id } = product;
   return(
    <div key={id} className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted">ADD TO CARD</Button>       
    </div>
   )
}

export default ProductCard;