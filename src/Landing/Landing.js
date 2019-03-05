import React, { Component } from 'react';
import * as THREE from 'three';
import './landing.scss';
import Scene from './THREE/Scene';

const mouse = new THREE.Vector2();
const radius = 100, theta = 0, raycaster=0;

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  
  render(){
    return (
      <div
      style={{ width: `${window.innerWidth*0.8}px`, height: `${window.innerHeight-220}px` }}
      ref={(mount) => { this.mount = mount }}
    />
    )
  }
}

export default Landing;