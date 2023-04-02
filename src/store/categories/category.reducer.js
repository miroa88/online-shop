import { CATEGORIES_ACTION_TYPES }  from "./category.types";


const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
};
  
export const categoriesReducer = (state=CATEGORIES_INITIAL_STATE, action={}) => {
    const { type, payload } = action;
  
    switch (type) {
      case CATEGORIES_ACTION_TYPES.fetch_categories_start:
        return { ...state, isLoading: true };
      case CATEGORIES_ACTION_TYPES.fetch_categories_success:
        return { ...state, categories: payload, isLoading: false};
      case CATEGORIES_ACTION_TYPES.fetch_categories_failed:
        return { ...state, error: payload, isLoading: false};
      default:
        return state;
    }
};
