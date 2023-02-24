import { Routes, Route } from 'react-router-dom';
import Auth from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Home />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
