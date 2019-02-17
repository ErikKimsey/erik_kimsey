import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './nav.scss';

const Nav = () => {
  const toggleBtn = document.querySelector('.nav-list');
  const handleMobileToggle = () => {
    toggleBtn.classList.toggle('active');
    console.log(toggleBtn);
    
  }
  return (
    <div className="nav-container">
      <div className="toggle-logo-container">
          <Banner />
        <span class="navbar-toggle" id="js-navbar-toggle" onClick={handleMobileToggle}>
            <i class="fas fa-bars"></i>
      </span>
      </div>
      <ul className="nav-list">
        <li>
          <Link className="nav-link" to="/">home</Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">me</Link>
        </li>
        <li>
          <Link className="nav-link" to="/work">work</Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">contact me</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;