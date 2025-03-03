import React, { useContext } from 'react';
import './GashaItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const GsashaItems = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='gasha-item'>
      <div className='gasha-item-img-conetainer'>
        <img className='gasha-item-image' src={image} alt='' />
        {!cartItems[id] ? (
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
        ) : (
          <div className='gasha-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='' />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='' />
          </div>
        )}
      </div>
      <div className='gasha-item-info'>
        <div className='gasha-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' />
        </div>
        <p className='gasha-item-desc'>{description}</p>
        <p className='gasha-item-price'>£{price}</p>
      </div>
    </div>
  );
};

export default GsashaItems;
