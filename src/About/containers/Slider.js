import React, { Component } from 'react'
import './styles/slider.scss';
import { isContainer } from 'postcss-selector-parser';

export default class SimpleSlider extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    console.log(props);
  }
  
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider-container">
      
        {/* {
          this.props.data.map((e,i)=>{
            return (
              <h3>{e}</h3>
            );
          })
        } */}
      </div>
    )
  }
}
