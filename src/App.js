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

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggled: false,
    }
  }
  
  componentDidMount() {

    let orntn = window.screen.msOrientation || window.screen.mozOrientation || (window.screen.orientation || {}).type;
    if(orntn === "landscape-primary"){
      document.querySelector('.App').style.background = "rgb(211,88,199)";
    } else {
      document.querySelector('.App').style.background = "none";
    }

    window.addEventListener('orientationchange', ()=>{
      let orntn = window.screen.msOrientation || window.screen.mozOrientation || (window.screen.orientation || {}).type;
      console.log(orntn);
      if(orntn === "landscape-primary"){
        document.querySelector('.App').style.background = "rgb(211,88,199)";
      } else {
        document.querySelector('.App').style.background = "rgb(0,0,0)";
      }
    })
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
