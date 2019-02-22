import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './about.scss';
import { 
  JS_DATA,STYLE_DATA, WEB_API_DATA, HTML_DATA, BACKEND_DATA, LANGUAGE_DATA,DESIGN_DATA, FAV_COMBOS_DATA} from '../__data/data';
import DataModal from './components/data_modal';

const dataArray = [
  JS_DATA,STYLE_DATA, WEB_API_DATA, HTML_DATA, BACKEND_DATA, LANGUAGE_DATA,DESIGN_DATA, FAV_COMBOS_DATA
];

class About extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="about-container">
  
        <div className="self-blurb-container">
          <p>I work creatively with technology.</p>
          <p>I focus on web-based and mobile-web technology, design, and content. </p>
          <p>I like to think I'm at the cross-section of interactivity + aesthetic-appeal + innovation + good purpose.</p>
        </div>
  
        <h1 className="toolbelt-h1">ToolBelt</h1>
        <div className="nav-container">
          {
            dataArray.map((arr,i)=>{
              return <NavLink className="nav-links" to={`/about/${arr[0]}`}>
                {arr[0]}
              </NavLink>
            })
          }
        </div>

        <div className="tech-knowledge-container">
          {
            dataArray.map((arr,i)=>{
              let realArr = arr.slice(1);
                return <Route path={`/about/${arr[0]}`} render={()=>{
                    return <DataModal title={arr[0]} data={realArr}/>
                  }
                }/>
            })
          }
        </div>
  
        <div className="education-container">
    
        </div>
      </div>
    )
  }
}

export default About;