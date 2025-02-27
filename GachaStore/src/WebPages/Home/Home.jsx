import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <ItemDisplay category={category} />
    </div>
  );
};

export default Home;
