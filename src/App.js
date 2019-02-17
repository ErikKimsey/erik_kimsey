import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.scss';
import './Banner/banner.scss';
import Capture from './Capture/Capture';
import Nav from './Nav/Nav';
import Landing from './Landing/Landing';
import About from './About/About';
import Contact from './Contact/Contact';
import Work from './Work/Work';
import Banner from './Banner/Banner';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggled: false,
    }
  }
  componentDidMount() {
    
  }

  /* 
  * mapDispatchToProps
  */
  mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
  })

  /* 
  * mapStateToProps
  */
  mapStateToProps = state => ({
    ...state
  })

  handleToggle = () => {
    
    console.log('inside!'); 
  }

  render() {
    return (
      <div className="App">
        {/* <video></video> */}
        <Banner toggle={this.handleToggle}/>
        <Nav isActive={this.state.toggled}/>
          <div className="routes-container">
            <Route exact path="/" component={Landing}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/work" component={Work}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        {/* <Capture /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
