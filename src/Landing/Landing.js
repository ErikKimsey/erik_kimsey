import React, { Component } from 'react';
import './landing.scss';
import Scene from './THREE/threeInit';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    new Scene(this.threeJSRoot).init();
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