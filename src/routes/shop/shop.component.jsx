import { Route, Routes } from 'react-router-dom';
//redux
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesStartAsync } from '../../store/categories/category.action';

// import { CategoriesProvider } from '../../context/categories.context';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';



const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStartAsync());
      }, [dispatch]);//adding dispatch to dependencies array just to avoid errors

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

