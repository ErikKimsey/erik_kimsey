import React, { Component } from 'react'
import './styles/slider.scss';
import { isContainer } from 'postcss-selector-parser';

export default class SimpleSlider extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      index:0,
    }
    console.log(props);
  }

  componentDidMount() {
    
  }

  handleForwardToggle = () => {
    console.log('forward');
    
  }
  handleBackwardToggle = () => {
    
    console.log('back');
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
        <div className="slider-item-container">
          <i class="fas fa-caret-left" onClick={this.handleBackwardToggle}></i>
            <div className="slider-item">
              {this.state.data[this.state.index]}
            </div>
          <i class="fas fa-caret-right" onClick={this.handleForwardToggle}></i>
          </div>
      </div>
    )
  }
}
