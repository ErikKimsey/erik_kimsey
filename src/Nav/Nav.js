import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './nav.scss';

class Nav extends Component {

  componentDidMount = () => {
    let navList = document.querySelector('.nav-list');
    let toggleBtn = document.querySelector('.navbar-toggle');
    toggleBtn.addEventListener('click', ()=>{
      this.handleToggle();
    }) 
  }
  
  handleToggle = () => {
    let navList = document.querySelector('.nav-list');
    console.log(navList); 
    navList.classList.toggle('active');
  }
  
  render(){
    
    return (
      <div className="nav-container">
        <div className="toggle-logo-container">
            <Banner />
          <span className="navbar-toggle" id="js-navbar-toggle" >
              <i className="fas fa-bars"></i>
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
}

export default Nav;