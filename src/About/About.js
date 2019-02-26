import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './about.scss';
import { 
  JS_DATA,STYLE_DATA, WEB_API_DATA, HTML_DATA, BACKEND_DATA, LANGUAGE_DATA,DESIGN_DATA, FAV_COMBOS_DATA, EDUCATION, AUDIO_SKILLS_DATA, VIDEO_EDITING_SKILLS, PROFESSIONAL_DATA} from '../__data/data';
import SimpleSlider from './containers/Slider';
import Education from './components/Education';
import Employment from './components/Employment';

// SVGs
import adobeIMG from '../assets/icons/adobe.svg';
import reactIMG from '../assets/icons/react.svg';
import jsIMG from '../assets/icons/javascript.svg';
import graphqlIMG from '../assets/icons/graphql.svg';
import sassIMG from '../assets/icons/sass.svg';
import pythonIMG from '../assets/icons/python.svg';
import webpackIMG from '../assets/icons/webpack.svg';
import bootstrap from '../assets/icons/bootstrap.svg';
import illustratorIMG from '../assets/icons/adobeillustrator.svg';
import photoshopIMG from '../assets/icons/adobephotoshop.svg';
import cssIMG from '../assets/icons/css3.svg';
import npmIMG from '../assets/icons/npm.svg';
import html5IMG from '../assets/icons/html5.svg';
import nodeIMG from '../assets/icons/node-dot-js.svg';
import djangoIMG from '../assets/icons/django.svg';
import d3IMG from '../assets/icons/d3-dot-js.svg';

const SKILL_DATA = [
  JS_DATA,STYLE_DATA, WEB_API_DATA, HTML_DATA, BACKEND_DATA, LANGUAGE_DATA,DESIGN_DATA, FAV_COMBOS_DATA, AUDIO_SKILLS_DATA, VIDEO_EDITING_SKILLS
];

const SVGS = [adobeIMG, reactIMG, cssIMG, jsIMG, html5IMG, sassIMG, nodeIMG, npmIMG, pythonIMG, djangoIMG, d3IMG, webpackIMG,bootstrap, illustratorIMG, photoshopIMG, graphqlIMG];

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
          <p>That said, I'm interested in work involving development of creative technology in the realm of mobile-web/PWA, responsive web,and IoT.</p>
          <p>I like to think I'm at the cross-section of interactivity + aesthetic-appeal + innovation + good purpose.</p>
          <p>I love learning new languages and technology.  Especially, in order to put them to use in novel ways.</p>
        </div>
  
        <div className="icons-container">
        {
          SVGS.map((e)=>{
            return <img className="icon" src={e} />
          })
        }

        </div>
        {/* <div className="tech-knowledge-container">
          <SimpleSlider className="slider" data={JS_DATA}/>
          <SimpleSlider className="slider" data={WEB_API_DATA}/>
          <SimpleSlider className="slider" data={STYLE_DATA}/>
          <SimpleSlider className="slider" data={BACKEND_DATA}/>
          <SimpleSlider className="slider" data={LANGUAGE_DATA}/>
          <SimpleSlider className="slider" data={DESIGN_DATA}/>
          <SimpleSlider className="slider" data={AUDIO_SKILLS_DATA}/>
          <SimpleSlider className="slider" data={VIDEO_EDITING_SKILLS}/>
        </div> */}
        <div className="education-block-container">
        {
          EDUCATION.map((e,i)=>{
            return <Education data={e}/>
          })
        }
        </div>

        <div className="professional-history-block-container">
          {
            PROFESSIONAL_DATA.map((e,i)=>{
              return <Employment data={e}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default About;