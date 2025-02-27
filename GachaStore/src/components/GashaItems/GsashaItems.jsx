import React from 'react';
import './GashaItem.css';
import { assets } from '../../assets/assets';

const GsashaItems = ({ id, name, price, description, image }) => {
  return (
    <div className='gasha-item'>
      <div className='gasha-item-img-conetainer'>
        <img className='gasha-item-image' src={image} alt='' />
      </div>
      <div className='gasha-item-info'>
        <div className='gasha-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' />
        </div>
          <p className='gasha-item-des'>{description}</p>
          <p className='gasha-item-price'>£{price}</p>
      </div>
    </div>
  );
};

export default GsashaItems;
