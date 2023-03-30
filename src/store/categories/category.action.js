import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES }  from  "./category.types";

export const setCategories = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPES.set_categories, categoriesArray);
}