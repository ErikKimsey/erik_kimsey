import React, { Component } from 'react';
import * as THREE from 'three';
import { BREAKPOINTS } from '../__styles/breakPoints';
import './lil_extra.scss';
import { sensorPlay } from './sensor_play';


export default class LIL_EXTRA extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    window.addEventListener('devicelight',(e)=>{
      // console.log(e.value);
    });
  }

  
  render(){ 
    return (
      <div className="canvas-container">
       
      </div>
    )
  }
}
