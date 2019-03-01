import React, { Component } from 'react';
import './landing.scss';
import {ThreeWrapper} from './THREE/threeInit';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    ThreeWrapper(this.threeJSRoot);
  }

  render(){
    return (
      <div className="landing-container"
      ref={element => this.threeJSRoot = element}>
      </div>
    )
  }
}

export default Landing;