import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../context/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import './shop.style.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    console.log('categoriesMap', categoriesMap)
    return (
        <Fragment className='shop-container'>
            {Object.keys(categoriesMap).map( title => {
                const products = categoriesMap[title];
                return( <CategoryPreview key={title} title={title} products={products} />)
            })}      
        </Fragment>
    )
}
export default Shop;

