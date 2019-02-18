import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className="about-container">
    <p>Software Chef</p>
    <h5 className="fav-recipes">favorite recipes:</h5>
    <ul>
      <li>UI + beauty + interactivity</li>
      <li>JS + Sass + Web APIs + React</li>
      <li>mobile-device sensors + new Web APIs + art&sound</li>
      <li>React + Express + Apollo + GraphQL</li>
      <li></li>
    </ul>
    </div>
  )
}

export default About;