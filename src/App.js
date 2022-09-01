import React, { Component, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import './Banner/banner.scss';
import Nav from './Nav/Nav';
import Landing from './Landing/Landing';
import About from './About/About';
import Contact from './Contact/Contact';
import Work from './Work/Work';
import OddTreatment from './OddTreatment/OddTreatment';
import P5Sketch from './P5Sketch/P5Sketch';
import IconLinks from './IconLinks/IconLinks';
// import detectOrientation, { orientationListener } from './utils/detectOrientation';
import Landscape from './LANDSCAPE/Landscape';

export default function App(props) {
    const [toggled, setToggled] = useState(false);
    const [thisProps, setThisProps] = useState(props);

    useEffect(() => {

        if (toggled !== false) {
            setToggled(false);
        }

        if (props) {
            setThisProps(props);
        }
    }, []);

    const handleToggle = () => {
        this.setState({ toggle: !this.state.toggled });
    };

    return (
        <div className="App">
            {/* <div className="routes-container"> */}
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="https://elated-hugle-66aa20.netlify.com/" component={OddTreatment} />
            <Route path="/contact" component={Contact} />
            {/* </div> */}
            <P5Sketch />
            <Nav isActive={toggled} />
            <IconLinks />
        </div>
    );
}
