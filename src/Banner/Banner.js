import React, {Component} from 'react';
import './banner.scss';
import '../Nav/Nav';
import { Slider, Spin } from 'react-burgers';

let isActive = false;
const toggleBurger = () => {  
  isActive = !isActive;
}


class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      iconActive: this.props.isActive,
    }
  }

  componentDidMount = () => {
    this.setState({iconActive: false});
  }

  handleToggle = () => {
    this.props.toggle();
  }

  render(){
    return (
      <div className="banner-container">
        <div className="toggle-logo-container">
          <span className="navbar-toggle" id="js-navbar-toggle" onClick={this.handleToggle} >
            <Spin className="spin" active={this.props.isActive} color="white" />
          </span>
        </div>
        <div className="text-container">
          <div className="name banner-item">erik kimsey</div>
          <div className="underscore banner-item">  ___ </div>
          <div className="role banner-item">software developer</div>
        </div>
      </div>
    )
  }
}

export default Banner;