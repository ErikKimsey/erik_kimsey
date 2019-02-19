import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Banner from '../Banner/Banner';

const activeStyles = {
  color:'#fcfa85'
};

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
              <NavLink activeStyle={activeStyles} className="nav-link" exact to="/">home</NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} className="nav-link" to="/about">me</NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} className="nav-link" to="/work">work</NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} className="nav-link" to="/contact">contact me</NavLink>
            </li>
          </ul>
        </div>

      </div>
      )
  }
}

export default Nav;