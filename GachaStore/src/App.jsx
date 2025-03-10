import React, { useState } from 'react';
import Narvbar from './components/Navbar/Narvbar';
import { Route, Routes } from 'react-router-dom';
import Home from './WebPages/home/home';
import Cart from './WebPages/Cart/Cart';
import PlaceOrder from './WebPages/placeOrder/placeOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Narvbar setShowLogin={setShowLogin} />
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
