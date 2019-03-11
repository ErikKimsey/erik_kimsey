import React, { Component } from 'react';
import './landing.scss';
import Unburzt from './Unburzt/Unburzt';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
    }
  }

  render(){
    return (
      <div className="landing-container">
        <div className="something-cool-container"></div>
        <div className="self-blurb-container">
          {/* <p>I work creatively with technology.</p> */}
          <p>I focus on web-based and mobile-web technology, design, and content. </p>
          {/* <p>That said, I'm interested in work involving development of creative technology in the realm of mobile-web/PWA, responsive web,and IoT.</p>
          <p>I like to think I'm at the cross-section of interactivity + aesthetic-appeal + innovation + good purpose.</p>
          <p>I love learning new languages and technology.  Especially, in order to put them to use in novel ways.</p> */}
      </div>
      </div>
    )
  }
}

export default Landing;