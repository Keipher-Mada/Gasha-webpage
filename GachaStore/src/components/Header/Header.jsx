import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your Gashapon before they are gone!</h2>
        <p>
          Please choose from one of our select categories or simply pick the Gashapon you like the
          look of.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header
