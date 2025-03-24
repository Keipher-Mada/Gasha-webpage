import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-field'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type='text' placeholder='Eamil address' />
        <input type='text' placeholder='Street' />
        <div className='multi-field'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='County' />
        </div>
        <div className='multi-field'>
          <input type='text' placeholder='Post code' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='Phone number' />
      </div>

      <div className='place-order-right'>
        <div className='cart-total'>
          <div className='cart-total'>
            <h2>Cart totals</h2>
            <div>
              <div className='cart-total-details'>
                <p>Subtotal</p>
                <p>£{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className='cart-total-details'>
                <p>Delivery fee</p>
                <p>£{getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className='cart-total-details'>
                <b>Total</b>
                <b>£{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
