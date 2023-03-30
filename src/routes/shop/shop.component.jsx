import { Route, Routes } from 'react-router-dom';
//redux
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';

// import { CategoriesProvider } from '../../context/categories.context';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';



const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        }
        getCategoriesMap();
    }, [dispatch]);

    return( 
        // <CategoriesProvider>
            <Routes>
                <Route index element={<CategoriesPreview />}/>
                <Route path=":category" element={<Category />} />
            </Routes>
        // </CategoriesProvider>
    )   
}
export default Shop;

