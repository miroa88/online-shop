
import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

//  import { CategoriesContext } from '../../context/categories.context';

import { CategoryTitle, CategoryContainer } from './category.style.jsx';

//redux
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const Category = () => {
    const { category} = useParams();
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProduct] = useState(categoriesMap[category])

    useEffect(() => {
        setProduct(categoriesMap[category])
    }, [category, categoriesMap])

    return( 
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>  
            <CategoryContainer >    
                {products && products.map( product => (
                    <ProductCard key={product.id} product={product} />
                ))} 
            </CategoryContainer>
        </Fragment>
    )
};

export default Category;