import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

const selectCategories  = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);
//as long as categories array does not change do not rerun the reduce function
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories
    .reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
);
    
export const selectIsLoading = createSelector( 
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading

)

