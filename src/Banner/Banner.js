import React from 'react';
import './banner.scss';
import '../Nav/Nav';
import { Slider, Spin } from 'react-burgers';

let isActive = false;
const toggleBurger = () => {
  console.log('burgersssss');
  
  isActive = !isActive;
  console.log(isActive);
}


const Banner = ({toggle}) => {
  const handleToggle = () => {
    toggle();
  }

  return (
    <div className="banner-container">
      <div className="toggle-logo-container">
          <span className="navbar-toggle" id="js-navbar-toggle" onClick={()=>{handleToggle() }} >
          <Spin className="spin" color="white" />
        </span>
      </div>
      <div className="name banner-item">erik kimsey</div>
      <div className="underscore banner-item">  ___ </div>
      <div className="role banner-item">software developer</div>
    </div>
  )
}

export default Banner;