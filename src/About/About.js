import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './about.scss';
import { 
  JS_DATA,STYLE_DATA, WEB_API_DATA, HTML_DATA, BACKEND_DATA, LANGUAGE_DATA,DESIGN_DATA, FAV_COMBOS_DATA, EDUCATION, AUDIO_SKILLS_DATA, VIDEO_EDITING_SKILLS} from '../__data/data';
import SimpleSlider from './containers/Slider';
import Education from './components/Education';

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
  

        <div className="tech-knowledge-container">
          <SimpleSlider className="slider" data={JS_DATA}/>
          <SimpleSlider className="slider" data={WEB_API_DATA}/>
          <SimpleSlider className="slider" data={STYLE_DATA}/>
          <SimpleSlider className="slider" data={BACKEND_DATA}/>
          <SimpleSlider className="slider" data={LANGUAGE_DATA}/>
          <SimpleSlider className="slider" data={DESIGN_DATA}/>
          <SimpleSlider className="slider" data={AUDIO_SKILLS_DATA}/>
          <SimpleSlider className="slider" data={VIDEO_EDITING_SKILLS}/>
        </div>
        <div className="education-block-container">
        {
          EDUCATION.map((e,i)=>{
            return <Education data={e}/>
          })
        }
        </div>
      </div>
    )
  }
}

export default About;