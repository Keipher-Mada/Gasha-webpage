import React from 'react';
import './Add.css';
import { assets } from '../../assets/assets';

const add = () => {
  return (
    <div className='add'>
      <form className='flex-col'>
        <div className='add-img-upload flex-col'>
          <p>Upload Images</p>
          <label htmlFor='image'>
            <img src={assets.upload_area} alt='' />
          </label>
          <input type='file' id='image' hidden required />
        </div>
        <div className='add-product-name flex-col'>
          <p>Product name</p>
          <input type='text' name='name' placeholder='Type here' />
        </div>
        <div className='add-product-description flex-col'>
          <p>Product description</p>
          <textarea
            name='description'
            rows='6'
            placeholder='Write content here'
            required
          ></textarea>
        </div>
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product category</p>
            <select name='category'>
              <option value='Miniature'>Miniature</option>
              <option value='Animal'>Animal</option>
              <option value='Pokemon'>Pokemon</option>
              <option value='Stationery'>Stationery</option>
              <option value='Anime'>Anime</option>
              <option value='Figure'>Figure</option>
              <option value='Re-run'>Re-run</option>
              <option value='Sanrio'>Sanrio</option>
            </select>
          </div>
          <div className='add-price flex-col'>
            <p>Product price</p>
            <input type='Number' name='price' placeholder='£10'></input>
          </div>
        </div>
        <button type='submit' className='add-btn'>
          ADD
        </button>
      </form>
    </div>
  );
};

export default add;
