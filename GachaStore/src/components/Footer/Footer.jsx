import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt='' className='logo' />
          <p>
            This is a mock website and does not involve paying actual money. Please press "home" or
            the head icon to navigate to the main page. <br />
            This website is built on Vite and React frameworks. It has a fully functioning shopping
            cart and checkout page, and I am currently building a backend system for the website.
          </p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>about us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Get in touch</h2>
          <ul>
            <li>+111 999</li>
            <li>K.dubber17@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='copyright'>Copy right 2025@ K.Dubber - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
