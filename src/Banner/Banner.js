import React, {Component} from 'react';
import './banner.scss';
import '../Nav/Nav';
import { Slider, Spin } from 'react-burgers';

let isActive = false;
const toggleBurger = () => {
  console.log('burgersssss');
  
  isActive = !isActive;
  console.log(isActive);
}


class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      iconActive: null,
    }
  }

  componentDidMount = () => {
    this.setState({iconActive: false});
    console.log(this.state.iconActive);
  }

  isActive = () => {
    return this.state.iconActive;
  }

  handleToggle = () => {
    this.props.toggle();
    this.setState({iconActive: !this.state.iconActive});
    console.log(this.state.iconActive);
    
  }

  render(){
    return (
      <div className="banner-container">
        <div className="toggle-logo-container">
            <span className="navbar-toggle" id="js-navbar-toggle" onClick={this.handleToggle} >
            <Spin className="spin" active={this.isActive()} color="white" />
          </span>
        </div>
        <div className="name banner-item">erik kimsey</div>
        <div className="underscore banner-item">  ___ </div>
        <div className="role banner-item">software developer</div>
      </div>
    )
  }
}

export default Banner;