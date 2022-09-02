import React, { useState, useEffect } from 'react';
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

export default function App() {
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        if (toggled !== false) {
            setToggled(false);
        }
    }, []);

    return (
        <div className="App">
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="https://elated-hugle-66aa20.netlify.com/" component={OddTreatment} />
            <Route path="/contact" component={Contact} />
            <P5Sketch />
            <Nav isActive={toggled} />
            <IconLinks />
        </div>
    );
}
