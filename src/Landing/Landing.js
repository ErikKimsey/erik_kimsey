import React, { Component } from 'react';
import './landing.scss';
import { data } from './data';
// import detectOrientation, { orientationListener, deleteListener } from '../utils/detectOrientation';

let i=0;
class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
    }
    this.landingBlurbs = React.createRef();
  }

  componentDidMount() {
    i = 0;
    let blurbs = document.querySelectorAll('.self-blurb-container');
    let blurbsArr = Array.from(blurbs);
    
    window.addEventListener('mouseover', (e)=> {
      if(blurbsArr.includes(e.target)){
        let blurb = e.target;
        let solo = document.querySelector('.blurb-1');
        if(blurb.classList.contains('blurb-1')){
          solo.classList.remove('active-grid');
        } else {
          solo.classList.add('inactive-blurb');
          blurb.classList.add('active-grid');
        }
      }
    });
    window.addEventListener('mouseout', (e)=> {
      if(blurbsArr.includes(e.target)){
        let solo = document.querySelector('.blurb-1');
        let blurb = e.target;
        if(blurb.classList.contains('blurb-1')){
          blurb.classList.remove('inactive-blurb');
        } else {
          solo.classList.remove('inactive-blurb');
          blurb.classList.remove('active-grid');
        }
      }
      
    });

    window.addEventListener('touchmove', () => {
      console.log('scrolling');
      this.handleMobileGrowth();
    });
  }

  handleMobileGrowth = () => {
    let blurbs = this.landingBlurbs.querySelectorAll('.self-blurb-container');
    let blurbsArr = Array.from(blurbs);
    console.log(blurbs);
    let vh = window.innerHeight,
    vpHalf = vh/2;
    blurbsArr.forEach((e)=>{
      
    })
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
    this.toggleFade();
  }
  
  render(){
    return (
      <div className="landing-container" ref={(e) => this.landingBlurbs = e}>
        {
          data.map((e,i)=>{
            i+=1;
            return <div className={"self-blurb-container" + ` blurb-${i}`} key={e}>
              {
                e
              }
            </div>
          })
        }
      </div>
    )
  }
}

export default Landing;