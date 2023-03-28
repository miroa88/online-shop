import { createContext, useReducer, useEffect } from "react";
import { 
    onAuthStateChangedListener,
    createUserDocumentFromAuth
} from '../utils/firebase/firebase.utils';

// as the actual value we need to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


export const USER_ACTION_TYPES = {
    set_current_user: 'SET_CURRENT_USER',
};
  
const INITIAL_STATE = {
    currentUser: null,
};
  
const userReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case USER_ACTION_TYPES.set_current_user:
        return { ...state, currentUser: payload };
      default:
        throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.set_current_user, payload: user });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                // we should handle the case when user already exists to just return the reference
                 createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;

    }, [])

    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}