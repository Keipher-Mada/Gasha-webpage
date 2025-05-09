import React, { useContext } from 'react';
import './ItemDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import GsashaItems from '../GashaItems/GsashaItems';

const ItemDisplay = ({ category }) => {
  const { gasha_list } = useContext(StoreContext);

  return (
    <div className='item-display' id='item-display'>
      <h2>Our current selections</h2>
      <div className='item-display-list'>
        {gasha_list.map((item, index) => {
          {
            console.log(category, item.category);
          }
          if (category === 'All' || category === item.category) {
            return (
              <GsashaItems
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ItemDisplay;
