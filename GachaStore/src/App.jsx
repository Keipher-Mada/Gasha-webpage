import React from 'react';
import Narvbar from './components/NavBar/Narvbar';
import { Route, Routes } from 'react-router-dom';
import Home from './WebPages/home/home';
import Cart from './WebPages/Cart/Cart';
import PlaceOrder from './WebPages/placeOrder/placeOrder';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className='app'>
        <Narvbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
