import React, { Component } from 'react';
import './about.scss';
import { 
  EDUCATION, PROFESSIONAL_DATA, navListData} from '../__data/data';
import Education from './components/Education';
import Employment from './components/Employment';
import Lil_Nav from '../Lil_Nav/Lil_Nav';

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
        <div className="education-block-container">
        <i class="fas fa-graduation-cap fa-6x"></i>
        {
          EDUCATION.map((e,i)=>{
            return <Education data={e}/>
          })
        }
        </div>

        <div className="professional-history-block-container">
        <i class="fas fa-briefcase fa-6x"></i>
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