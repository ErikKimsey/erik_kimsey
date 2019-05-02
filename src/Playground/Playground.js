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
  constructor(props){
    super(props);
    this.state = {
      data: null,
      hourlyList: [],
    }
  }

  componentDidMount() {
    axios.get(WEATHER_URL)
    .then((res)=>{
      let data = res.data;
      console.log(data.list);
      
      this.setState({data: data, hourlyList: data.list});
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  componentDidUpdate(prevProps, prevState) {
    
  }
  
  

  drawGraph = () => {
    // return 
  }

  render() {
    return (
      <div className="playground-container">
        {
          this.state.hourlyList.map((e)=>{
            console.log(e)
            return (
              <div className="data-point">
                {e.main.temp}
              </div>
              )
           })
        }
      </div>
    )
  }
}
