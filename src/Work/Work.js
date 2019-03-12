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
                <div className="item-name">{e.name}</div>
                <div className="item-stack">{e.stack}</div>
                <div className="item-description"></div>
                <div className="item-url">{e.url}</div>
                <div className="item-github">{e.github}</div>
              </div>
            )
          } )
        }
      </div>
    </div>
  )
}

export default Work;