import React, { Component } from 'react';
import './landing.scss';
import Unburzt from './Unburzt/Unburzt';
import { data } from './data';
let i=0;
class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
      item:data[0],
    }
  }

  componentDidMount() {
    window.setInterval(()=>{
      this.handleSelfSlide();
    }, 2800);
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
    console.log(item);
    this.setState({ item: item });
  }

  render(){
    return (
      <div className="landing-container">
        <div className="something-cool-container"></div>
        <div className="self-blurb-container">
          {
            this.state.item
          }
        ./l</div>
      </div>
    )
  }
}

export default Landing;