import React from 'react';
import './banner.scss';
import '../Nav/Nav';

const Banner = ({toggle}) => {
  return (
    <div className="banner-container">
      <div className="toggle-logo-container">
          <span className="navbar-toggle" id="js-navbar-toggle" onClick={()=>{toggle()}}>
              <i className="fas fa-bars"></i>
        </span>
      </div>
      <div className="name banner-item">erik kimsey</div>
      <div className="underscore banner-item">  ___ </div>
      <div className="role banner-item">software developer</div>
    </div>
  )
}

export default Banner;