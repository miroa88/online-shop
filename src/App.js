import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/sign-in/sign-in.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
