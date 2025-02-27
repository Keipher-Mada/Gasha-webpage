import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore the menu</h1>
      <p className='explore-menu-text'>
        Please choose from one of our select categories or simply pick the Gashapon you like the
        look of.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
              }
              key={index}
              className='explore-menu-item'
            >
              <img className={category===item.menu_name?"active":""}src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
