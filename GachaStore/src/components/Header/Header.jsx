import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your Gashapon before they are gone!</h2>
        <p>
          Please choose from one of our select categories or simply pick the Gashapon you like the
          look of.
        </p>
        <button>
          <a href='#explore-menu' onClick={() => setMenu('menu')}>
            View Menu
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
