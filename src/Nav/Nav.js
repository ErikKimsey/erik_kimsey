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
              <NavLink activeStyle={activeStyles} title="HOME" className="nav-link" exact to="/"><i class="fas fa-house-damage fa-1x"></i></NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles}  title="ME, ME, ME!" className="nav-link" to="/about">
              <i class="fas fa-user-astronaut fa-1x"></i>
              </NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} title="CODE PLAYGROUND" className="nav-link" to="/work"><i class="fas fa-code fa-1x"></i></NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} title="CONTACT" className="nav-link" to="/contact"><i class="fas fa-phone fa-1x"></i></NavLink>
            </li>
          </ul>
        </div>

      </div>
      )
  }
}

export default Nav;