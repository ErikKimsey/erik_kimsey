import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './playground.scss';
import { draw } from './playings/play';
import { setLocalStorageData, checkLocalStorageData } from '../utils/localStorageUtils';
import { clean_data } from '../utils/dataManipulation';


export default class Playground extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      hourlyList: [],
      containerDimens: {
        h: null,
        w: null,
      }
    }
    this.container = React.createRef();
  }

  componentDidMount() {
    let data = null;
    let dimensCopy = Object.assign({}, this.state.containerDimens);
    dimensCopy.w = this.container.clientWidth;
    dimensCopy.h = window.innerHeight-320;
    this.setState({
      containerDimens: dimensCopy
    });
  }

  componentDidUpdate(prevProps, prevState) {
    this.drawGraph(this.state.hourlyList, this.state.containerDimens);
  }
  
  drawGraph = (list, dimens) => {
    draw(list, this.container, dimens);
  }
  
  render() {
    return (
      <div className="playground-container" ref={(container) => this.container = container}>
        {/* {
          this.state.hourlyList.map((e)=>{
            return (
              <div className="data-point" key={e.dt_txt}>
                {e.main.temp}
              </div>
              )
           })
        } */}
      </div>
    )
  }
}
