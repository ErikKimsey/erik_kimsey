import React, { Component } from 'react'
import * as d3 from 'd3';

export default class Unburzt extends Component {

  componentDidMount() {
    console.log(this.props.height);
    
    var g = d3.select('svg')  // returns a handle to the <svg> element
    .attr('width', this.props.width)  // sets the width of <svg> and then returns the <svg> element again
    .attr('height', this.props.height)  // (same as width)
    .append('g')  // adds a <g> element to the <svg> element. It returns the <g> element
    .attr('transform', 'translate(' + this.props.width / 2 + ',' + this.props.height / 2 + ')');  // takes the <g> element and moves the [0,0] center over and down

  }

  render() {
    return (
      <div>
        <svg></svg>
      </div>
    )
  }
}
