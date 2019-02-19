import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import Banner from '../Banner/Banner';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
    }
  }
  
  handleToggle = () => {
    let navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('active');
    this.setState({isActive: !this.state.isActive});
  }
  
  render(){
    
    return (
      <div>
        <Banner toggle={this.handleToggle} isActive={this.state.isActive}/>
        <div className="nav-container">
          <ul className="nav-list">
            <li onClick={this.handleToggle}>
              <Link className="nav-link" to="/">home</Link>
            </li>
            <li onClick={this.handleToggle}>
              <Link className="nav-link" to="/about">me</Link>
            </li>
            <li onClick={this.handleToggle}>
              <Link className="nav-link" to="/work">work</Link>
            </li>
            <li onClick={this.handleToggle}>
              <Link className="nav-link" to="/contact">contact me</Link>
            </li>
          </ul>
        </div>

      </div>
      )
  }
}

export default Nav;