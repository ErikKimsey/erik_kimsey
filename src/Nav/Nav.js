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
              <NavLink activeStyle={activeStyles} title="Landing Page" className="nav-link" exact to="/"><i className="fas fa-house-damage fa-1x"></i></NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles}  title="About Me" className="nav-link" to="/about">
              <i className="fas fa-user-astronaut fa-1x"></i>
              </NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} title="Some Work Examples" className="nav-link" to="/work"><i className="fas fa-code fa-1x"></i></NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} title="Playground" className="nav-link" to="/playground"><i className="fas fa-seedling fa-1x"></i></NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} title="Contact" className="nav-link" to="/contact"><i className="fas fa-phone fa-1x"></i></NavLink>
            </li>
          </ul>
        </div>

      </div>
      )
  }
}

export default Nav;