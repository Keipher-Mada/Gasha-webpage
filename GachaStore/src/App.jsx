import React from 'react';
import Narvbar from './components/NavBar/Narvbar';
import { Route, Routes } from 'react-router-dom';
import Home from './WebPages/home/home';
import Cart from './WebPages/cart/cart';
import PlaceOrder from './WebPages/placeOrder/placeOrder';

const App = () => {
  return (
    <div className='app'>
      <Narvbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
