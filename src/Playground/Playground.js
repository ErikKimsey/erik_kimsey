import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './playground.scss';
import { draw } from './playings/play';
import { setLocalStorageData, checkLocalStorageData } from '../utils/localStorageUtils';
import { clean_data } from '../utils/dataManipulation';

const HBURG_COORDS = {
  lat: 38.44957,
  long:  -78.86892
}

const HBURG_ID = 4763237;

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?id=4763237&APPID=48d7c5c77e90fd49d936f28a020abadc`;


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
    if(checkLocalStorageData('data') == null){
      axios.get(WEATHER_URL)
      .then((res)=>{
        data = res.data;
        this.setState({data: data, hourlyList: data.list});
        setLocalStorageData(data);
        console.log('made a call');
        
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    console.log('did NOT make a call');
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
