
import { useContext, useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../context/categories.context';

import './category.style.scss';

const Category = () => {
    const { category} = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProduct] = useState(categoriesMap[category])
    console.log("CategoryMap", categoriesMap)

    useEffect(() => {
        setProduct(categoriesMap[category])
    }, [category, categoriesMap])

    return( 
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>  
            <div className='category-container'>    
                {products && products.map( product => (
                    <ProductCard key={product.id} product={product} />
                ))} 
            </div>
        </Fragment>
    )


};

export default Category;