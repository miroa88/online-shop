import { Fragment } from 'react';

// import { CategoriesContext } from '../../context/categories.context';
import Spinner from '../../components/spinner/spinner.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';

//redux
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectIsLoading } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);
    return (
        <Fragment>
            {isLoading ? (<Spinner />) : ( 
                Object.keys(categoriesMap).map( title => {
                    const products = categoriesMap[title];
                    return( <CategoryPreview key={title} title={title} products={products} />)
                })     
            )}
        </Fragment>
    )
}
export default CategoriesPreview;

