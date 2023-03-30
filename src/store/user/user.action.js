import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES }  from  "./user.types";

export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.set_current_user, user);
}