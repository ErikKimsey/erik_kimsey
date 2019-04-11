import React, { Component } from 'react';
import './about.scss';
import { 
  EDUCATION, 
  PROFESSIONAL_DATA, 
  navListData,
  SKILLSET_OVERVIEW
} from '../__data/data';
import Education from './components/Education';
import Employment from './components/Employment';
import Lil_Nav from '../Lil_Nav/Lil_Nav';
import Resume from './components/Resume';
import Skillset from './components/Skillset';
// SVGs
import adobeIMG from '../assets/icons/adobe.svg';
import reactIMG from '../assets/icons/react.svg';
import jsIMG from '../assets/icons/javascript.svg';
import graphqlIMG from '../assets/icons/graphql.svg';
import sassIMG from '../assets/icons/sass.svg';
import pythonIMG from '../assets/icons/python.png';
import webpackIMG from '../assets/icons/webpack.svg';
import bootstrap from '../assets/icons/bootstrap.svg';
import illustratorIMG from '../assets/icons/adobeillustrator.svg';
import photoshopIMG from '../assets/icons/adobephotoshop.svg';
import cssIMG from '../assets/icons/css3.svg';
import npmIMG from '../assets/icons/npm.svg';
import html5IMG from '../assets/icons/html5.svg';
import nodeIMG from '../assets/icons/node-dot-js.png';
import djangoIMG from '../assets/icons/django.svg';
import d3IMG from '../assets/icons/d3-dot-js.svg';

const SVGS = [adobeIMG, reactIMG, cssIMG, jsIMG, html5IMG, sassIMG, nodeIMG, npmIMG, pythonIMG, djangoIMG, d3IMG, webpackIMG,bootstrap, illustratorIMG, photoshopIMG, graphqlIMG];

class About extends Component {
  constructor(props){
    super(props);
  }
 
  render(){
    return (
      <div className="about-container">
        <Lil_Nav data={navListData}/>
        <div className="resume-skillset-block">
        {/* <i class="fas fa-syringe fa-6x"></i> */}
          <Skillset data={SKILLSET_OVERVIEW}/>
          <Resume />
        </div>
        <div className="education-block-container">
          {
            EDUCATION.map((e,i)=>{
              return <Education key={e} data={e}/>
            })
          }
        </div>

        <div className="professional-history-block-container">
          {
            PROFESSIONAL_DATA.map((e,i)=>{
              return <Employment key={e} data={e}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default About;