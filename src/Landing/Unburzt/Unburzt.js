import React, { Component } from 'react'
import * as d3 from 'd3';

export default class Unburzt extends Component {

  componentDidMount() {
    console.log(this.props.height);
    
    var g = d3.select('svg')  
    .attr('width', this.props.width)  
    .attr('height', this.props.height) 
    .append('g')  
    .attr('transform', 'translate(' + this.props.width / 2 + ',' + this.props.height / 2 + ')'); 

  }

  render() {
    return (
      <div>
        <svg></svg>
      </div>
    )
  }
}
