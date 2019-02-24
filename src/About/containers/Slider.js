import React, { Component } from 'react'
import './styles/slider.scss';
import { isContainer } from 'postcss-selector-parser';

export default class SimpleSlider extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      index:1,
    }
    console.log(props);
  }

  componentDidMount() {
    
  }

  handleForwardToggle = () => {
    console.log('forward');
    console.log(this.state.data.length);
    if(this.state.index <= this.state.data.length-2){
      console.log(this.state.index);
      this.setState({index: this.state.index+1})
    } else {
      this.resetIndex();
    }
  }
  handleBackwardToggle = () => {
    console.log('back');
    if(this.state.index > 0){
      this.setState({index: this.state.index-1})
    } else if(this.state.index <= 0) {
      this.resetIndex();
    }
  }

  resetIndex = () => {
    this.setState({index: 1});
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

          <i className="fas fa-caret-left" onClick={()=>{this.handleBackwardToggle()}}></i>

          <i className="fas fa-caret-right" onClick={this.handleForwardToggle}></i>

            <div className="slider-item">
              {this.state.data[this.state.index]}
            </div>
          </div>
      </div>
    )
  }
}
