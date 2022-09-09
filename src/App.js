import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './Banner/banner.scss';
import Nav from './Nav/Nav';
import Landing from './Landing/Landing';
import About from './About/About';
import Contact from './Contact/Contact';
import P5Sketch from './P5Sketch/P5Sketch';
import IconLinks from './IconLinks/IconLinks';
import Banner from './Banner/Banner';
import Playground from './Playground/Playground';
import Experience from './Experience/Experience';
import Footer from "./Footer/Footer";

export default function App() {
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        if (toggled !== false) {
            setToggled(false);
        }
    }, []);

    return (
        <div className="App">
            <Landing />
            <Playground />
            <Experience />
            <Footer />
        </div>
    );
}
