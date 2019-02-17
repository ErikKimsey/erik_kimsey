import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    let isActive = this.props.isActive;
  }

  componentDidMount = () => {
    let navList = document.querySelector('.nav-list');
    let toggleBtn = document.querySelector('.navbar-toggle');
  }
  
  handleToggle = () => {
    let navList = document.querySelector('.nav-list');
    console.log(navList); 
    navList.classList.toggle('active');
  }
  
  render(){
    
    return (
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
      )
  }
}

export default Nav;