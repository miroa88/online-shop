import { createAction } from "../../utils/reducer/reducer.utils";
import USER_ACTION_TYPES  from "./user.type";

export const setCurrentUser = (user) => {
    createAction(USER_ACTION_TYPES.set_current_user, user);
}