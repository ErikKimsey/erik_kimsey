import React, { Component } from 'react';
import * as THREE from 'three';
import './landing.scss';
import Scene from './THREE/Scene';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:0,
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      
      this.setState({data: position.coords.latitude});
    });
  }

  
  render(){
    return (
      <div className="landing-container">
        {this.state.data}
      </div>
    )
  }
}

export default Landing;