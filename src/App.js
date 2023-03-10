import { Routes, Route } from 'react-router-dom';
import Auth from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component.jsx';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';

const App = () => {
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
