import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES }  from  "./category.types";

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPES.fetch_categories_start);
}

export const fetchCategoriesSuccess = (categoriesArray) => {
  return createAction(CATEGORIES_ACTION_TYPES.fetch_categories_success, categoriesArray);
}

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.fetch_categories_failed, error);

export const fetchCategoriesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};

