import React from 'react';
import './work.scss';
import { data } from './data';
import Slider from "react-slick";
import { BREAKPOINTS as bp } from '../__styles/breakPoints';
import detectOrientation, { orientationListener } from '../utils/detectOrientation';


let sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive:[
    {
      breakpoint:bp.smDevice,  
      sliderSettings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint:bp.mdDevice,
      sliderSettings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
};
 
const Work = (props) => {

  return (
    <div className="work-container">
      <Slider {...sliderSettings} className="work-data-list-contaner">
        {
          data.map((e) => {
            return (
              <div key={e.name} className="data-item-container">
                <div className="item-name">{e.name}</div>
                <div className="item-stack">{e.stack}</div>
                <div className="item-description"></div>
                <div className="item-url url-and-github-styles">
                  <a href={e.url} target="_blank">{e.url}</a>
                </div>
                <div className="item-github url-and-github-styles">
                  <a href={e.github} target="_blank">{e.github}</a>
                  {/* {e.github} */}
                </div>
              </div>
            )
          } )
        }
      </Slider>
    </div>
  )
}

export default Work;