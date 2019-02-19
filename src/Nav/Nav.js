import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import Banner from '../Banner/Banner';

class Nav extends Component {
  constructor(props){
    super(props);
  }
  
  handleToggle = () => {
    let navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('active');
  }
  
  render(){
    
    return (
      <div>
        <Banner toggle={this.handleToggle}/>
        <div className="nav-container">
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

      </div>
      )
  }
}

export default Nav;