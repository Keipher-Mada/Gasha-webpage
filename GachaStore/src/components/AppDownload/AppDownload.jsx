import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>
        We are also avialble on <br />
        App store!
      </p>
      <div className='app-download-platforms'>
        <img src={assets.play_store} alt='' />
        <img src={assets.app_store} alt='' />
      </div>
    </div>
  );
};

export default AppDownload;
