import React, { useState, useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './Banner/banner.scss';
import Landing from './Landing/Landing';
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
