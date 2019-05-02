import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './playground.scss';

const HBURG_COORDS = {
  lat: 38.44957,
  long:  -78.86892
}

const HBURG_ID = 4763237;

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?id=4763237&APPID=48d7c5c77e90fd49d936f28a020abadc`;


export default class Playground extends Component {

  componentDidMount() {
    axios.get(WEATHER_URL)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  

  drawGraph = () => {
    // return 
  }

  render() {
    return (
      <svg className="playground-container">
        
      </svg>
    )
  }
}
