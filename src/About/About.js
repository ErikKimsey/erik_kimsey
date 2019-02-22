import React, { Component } from 'react';
import './about.scss';
import {BACKEND_DATA,
  LANGUAGE_DATA,
  HTML_DATA, 
  STYLE_DATA, 
  WEB_API_DATA,
  DESIGN_DATA,
  FAV_COMBOS_DATA,
  TECH_LIST,} from '../__data/data';
import DataModal from './components/data_modal';

let DATA_ARR = [BACKEND_DATA,
  LANGUAGE_DATA,
  HTML_DATA, 
  STYLE_DATA, 
  WEB_API_DATA,
  DESIGN_DATA,
  FAV_COMBOS_DATA,
  TECH_LIST];

  console.log(DATA_ARR[3]);
  

class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal:null,
    }
  }

  toggleModal = () => {
    let modal = document.querySelector('.toolbelt-');
    modal.style.display = (modal.style.display === 'none') ? 'flex' : 'none';
  }

  render(){

    return (
      <div className="about-container">
  
      <div className="self-blurb-container">
        <p>I work creatively with technology.</p>
        <p>I focus on web-based and mobile-web technology, design, and content. </p>
        <p>I like to think I'm at the cross-section of interactivity + aesthetic-appeal + innovation + good purpose.</p>
        {/* <p>Jazz is the music of science-fiction.</p> */}
      </div>
  
        <h1 className="toolbelt-h1">ToolBelt</h1>
      <div className="tech-knowledge-container">


          {
            DATA_ARR.map((e, i)=>{
              let nuArr = e.slice();
              return (
              <div>
                <h1>{DATA_ARR[i][0]}</h1>
                <DataModal className="toolbelt-item" title={DATA_ARR[i][0]} data={nuArr}/>
              </div>
              )
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