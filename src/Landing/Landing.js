import React, { Component } from 'react';
import './landing.scss';
import Unburzt from './Unburzt/Unburzt';
import { data } from './data';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,

    }
  }

  componentDidMount() {
    
  }

  handleSelfSlide = () => {
    let i = 0, len = data.length, item = '';
    if(i >= len) i = 0;
    item = data[i];
    i++;
    return item;
  }



  render(){
    return (
      <div className="landing-container">
        <div className="something-cool-container"></div>
        <div className="self-blurb-container">
          { 
            window.setInterval(()=>{
              this.handleSelfSlide();
            })
          }
      </div>
      </div>
    )
  }
}

export default Landing;