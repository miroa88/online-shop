import { USER_ACTION_TYPES }  from "./user.types";

const USER_INITIAL_STATE = {
    currentUser: null,
};
  
export const userReducer = (state=USER_INITIAL_STATE, action={}) => {
    const { type, payload } = action;
  
    switch (type) {
      case USER_ACTION_TYPES.set_current_user:
        return { ...state, currentUser: payload };
      default:
        return state;
    }
};