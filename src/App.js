import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import './Banner/banner.scss';
import Nav from './Nav/Nav';
import Landing from './Landing/Landing';
import About from './About/About';
import Contact from './Contact/Contact';
import Work from './Work/Work';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggled: false,
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
          <div className="lil-extra"></div>
        <Nav isActive={this.state.toggled}/>
      </div>
    );
  }
}

export default App;
