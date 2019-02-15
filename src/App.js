import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Capture from './Capture/Capture';
import Nav from './Nav/Nav';
import Landing from './Landing/Landing';
import About from './About/About';
import Contact from './Contact/Contact';
import Work from './Work/Work';

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
        {/* <video></video> */}
        <Nav />
          <div className="routes-container">
            <Route exact path="/" component={Landing}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/work" component={Work}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        <Capture />
      </div>
    );
  }
}

export default App;
