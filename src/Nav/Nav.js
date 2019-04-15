import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Banner from '../Banner/Banner';
import HoverLabel from '../HoverLabel/HoverLabel';

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

  handleHover = (e) => {
    let label = document.createElement('div');
    label.className = 'hover-label';
    console.log(label);
    label.innerHTML = e.target.title;
    let nav = document.querySelector('.nav-container');
    nav.appendChild(label);
  }
  
  handleLeave = (e) => {
    let nav = document.querySelector('.nav-container');
    let item = document.querySelector(e.target.title);
    console.log(item);
  }
  
  render(){
    
    return (
      <div>
        <Banner toggle={this.handleToggle} isActive={this.state.isActive}/>
        <div className="nav-container">
          <ul className="nav-list">
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} className="nav-link" exact to="/">
              <i className="fas fa-house-damage fa-1x" title="Landing" onMouseOver={this.handleHover}></i>
              </NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} className="nav-link" to="/about">
              <i className="fas fa-user-astronaut fa-1x" title="About" onMouseOver={this.handleHover}></i>
              </NavLink>
            </li>
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} className="nav-link" to="/work">
              <i className="fas fa-code fa-1x" title="Work" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}></i>
              </NavLink>
            </li>
            {/* <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} title="Playground" className="nav-link" to="/playground"><i className="fas fa-code fa-1x"></i></NavLink>
            </li> */}
            <li onClick={this.handleToggle}>
              <NavLink activeStyle={activeStyles} 
              className="nav-link" to="/contact">
              
              <i className="fas fa-phone fa-1x" title="Contact" onMouseOver={this.handleHover}></i>
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
      )
  }
}

export default Nav;