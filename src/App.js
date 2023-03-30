import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import Auth from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component.jsx';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';

import { 
    onAuthStateChangedListener,
    createUserDocumentFromAuth
} from './utils/firebase/firebase.utils';

import { setCurrentUser } from './store/user/user.action';

//redux
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            // we should handle the case when user already exists to just return the reference
             createUserDocumentFromAuth(user);
        }
        // console.log("just user", user)
        dispatch(setCurrentUser(user));
    });
    return unsubscribe;

  }, [dispatch]); //dispatch added to dependencies array just for the error goes away

  return (
    <Routes>
      <Route path='/' element={<Navigation />} > 
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;
