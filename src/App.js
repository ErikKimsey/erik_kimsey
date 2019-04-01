import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import './Banner/banner.scss';
import Nav from './Nav/Nav';
import Landing from './Landing/Landing';
import About from './About/About';
import Contact from './Contact/Contact';
import Work from './Work/Work';
import LilExtra from './Lil_Extra/LIL_EXTRA';
import detectOrientation from './utils/detectOrientation';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggled: false,
    }
  }
  
  componentDidMount() {
    let isLandscape = detectOrientation();
    if(isLandscape){
      this.handleLandscapeOrientation(isLandscape);
    }
    console.log(isLandscape);
    this.orientationListener();
  }

  orientationListener = () => {
    window.addEventListener('orientationchange', ()=>{
      let isLandscape = detectOrientation();
      this.handleLandscapeOrientation(isLandscape);
    })
  }

  /**
   * TODO:
   * 1. Setup "Flow" logic in App.js.
   * 2. Create "Landscape Component" (i.e., its design).
   * 3. Build "Landscape Component"
   */

  /**
   * Method : "handleLandscapeOrientation"
   * >> applies landscape component
   */
  handleLandscapeOrientation = (o) => {
  /**
   * Flow
   * 1. if landscape, route to Landscape Component (via history.push??),
   * 2. if portrait, return/do nothing
  */
    if(o === true){
      // route to "Landscape Component"
    } else {
      // route to last non-Landscape component
    }
  }

  handleToggle = () => {
    this.setState({toggle: !this.state.toggled});
  }

  render() {
    return (
      <div className="App">
          <div className="routes-container">
            <Route exact path="/" component={Landing}/>
            <Route path="/about" component={About}/>
            <Route path="/work" component={Work}/>
            <Route path="/contact" component={Contact}/>
          </div>
          <div className="lil-extra">
            <LilExtra />
          </div>
        <Nav isActive={this.state.toggled}/>
      </div>
    );
  }
}

export default App;
