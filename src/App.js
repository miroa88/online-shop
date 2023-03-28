import { Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useEffect } from "react";
// import { 
//     onAuthStateChangedListener,
//     createUserDocumentFromAuth
// } from './utils/firebase/firebase.utils';
// import { setCurrentUser } from './store/user/user.action';
import Auth from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component.jsx';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //       if(user) {
  //           // we should handle the case when user already exists to just return the reference
  //            createUserDocumentFromAuth(user);
  //       }
  //       console.log("user", user)
  //       dispatch(setCurrentUser(user));
  //   });
  //   return unsubscribe;

  // }, []);

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
