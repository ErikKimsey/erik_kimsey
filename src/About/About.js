import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className="about-container">
    {/* <p>Software Chef</p>
    <h5 className="fav-recipes">favorite recipes:</h5> */}
      <p>UI + beauty + interactivity</p>
    <div className="liked-things-container">
      <p>:::::: ::::: :::: ::: :: :   JS + Sass + React + GreenSock</p>
      <p>: :::: ::: :: :   React + Express + Apollo + GraphQL</p>
      <p>::: :::: ::: :: :   ReactStrap + Illustrator + FontAwesome</p>
      <p>: ::: :: :   mobile-device sensors + new Web APIs + art&sound</p>
      <p>: ::::: :::: ::: :: :   Webpack + Yarn + GitHub</p>
      <p>::: :: :   Python + Django</p>
      <p>:: ::: :: :   P5.js + </p>
      <p>: :   C++ + Juce + frustration</p>
      <p>: ::: :: :   D3.js + Angular + German</p>
      <p> :: :   Processing + Arduino + freetime + IC</p>
      <p>: :: :   Java + Android + Android Studio</p>
    </div>
    </div>
  )
}

export default About;