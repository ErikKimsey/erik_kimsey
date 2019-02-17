import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import './Banner/banner.scss';
import Capture from './Capture/Capture';
import Nav from './Nav/Nav';
import Landing from './Landing/Landing';
import About from './About/About';
import Contact from './Contact/Contact';
import Work from './Work/Work';
import Banner from './Banner/Banner';
import navToggle from './actions/navToggle' ;

/* 
* mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  navToggle: () => dispatch(navToggle())
})

/* 
* mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggled: false,
    }
  }

  componentDidMount() {
    
  }


  handleToggle = () => {
    console.log('inside!'); 
    this.props.navToggle();
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
