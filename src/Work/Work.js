import React from 'react';
import './work.scss';
import { data } from './data';
 
const Work = () => {
  return (
    <div className="work-container">
     
      <div className="work-data-list-contaner">
        {
          data.map((e) => {
            return (
              <div key={e.name} className="data-item-container">
                <div className="item-name"></div>
                <div className="item-stack"></div>
                <div className="item-description"></div>
                <div className="item-url"></div>
                <div className="item-github"></div>
              </div>
            )
          } )
        }
      </div>
    </div>
  )
}

export default Work;