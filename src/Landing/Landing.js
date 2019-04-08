import React, { Component } from 'react';
import './landing.scss';
import { data } from './data';
import detectOrientation, { orientationListener, deleteListener } from '../utils/detectOrientation';

let i=0;
class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
      item:data[0],
    }
    // detectOrientation(props);
  }
  
  componentDidMount() {
    i = 0;
    console.log(data.length);
    
    window.setInterval(()=>{
      this.handleSelfSlide();
    }, 2600);
    // orientationListener(this.props);
  }

  handleSelfSlide = () => {
    let len = data.length, item = '';
    if(i === len) {
      i = 0;
      item = data[i];
    } else {
      item = data[i];
      i++;
    }
    this.setState({ item: item });
    this.toggleFade()
  }

  toggleFade = () => {
    /**
     * 1. get curr value of element
     * 2. pass curr value to temp var
     * 3. pass new value to curr var
     * 4. compare curr and temp...
     * 5. if curr and temp are different, toggle fade-text
     */
  }

  render(){
    return (
      <div className="landing-container">
        <div className="something-cool-container"></div>
        <div className="self-blurb-container">
          {
            this.state.item
          }
        </div>
      </div>
    )
  }
}

export default Landing;