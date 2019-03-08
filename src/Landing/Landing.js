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

  componentDidMount() {
    console.log(document.querySelector('.landing-container').offsetWidth);
    window.addEventListener('resize', ()=>{ this.handleResize(); 
    });

    
  }

  // change dimensions of container in state
  handleResize = () => {
    this.setState({
      width: document.querySelector('.landing-container').offsetWidth,
      height: document.querySelector('.landing-container').offsetHeight 
    })
  }

  render(){
    return (
      <div className="landing-container">
        <div className="flesh-container">
          <Unburzt width={this.state.width} height={this.state.height} />
        </div>
      </div>
    )
  }
}

export default Landing;