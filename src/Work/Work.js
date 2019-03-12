import React from 'react';
import './work.scss';
import { data } from './data';
import Slider from "react-slick";


let sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
 
const Work = () => {

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
                <div className="item-url">
                  <a href={e.url} target="_blank">{e.url}</a>
                </div>
                <div className="item-github">
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