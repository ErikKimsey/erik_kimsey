import React, { Component } from 'react';
import './landing.scss';
import rhizome from '../assets/rhizome.png';
const tracking = require('tracking');

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:0,
    }
  }

  componentDidMount() {
    var colors = new window.tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
    let img = document.querySelector('.image');
    colors.on('track',(e)=>{
      console.log(e.data);
    });

    window.tracking.track(img, colors);

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      
      this.setState({data: position.coords.latitude});
    });
  }

  
  render(){
    return (
      <div className="landing-container">
        <img className="image" src={rhizome} />
        {this.state.data}
      </div>
    )
  }
}

export default Landing;