import React, { Component } from 'react';
import './about.scss';
import * as DATA from '../__data/data';
import DataModal from './components/data_modal';

let DATA_ARR = [];
for(let key in DATA){
  DATA_ARR.push(DATA[key]);
}



class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal:null,
    }
  }

  toggleModal = () => {

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
        <div className="js-scroll toolbelt-item">
          
          <DataModal title={"FrontEnd-JavaScript"} data={DATA.JS_DATA} />
        </div>
        <div className="style-scroll toolbelt-item">
          
          <DataModal title={"Styling"} data={DATA.STYLE_DATA} />
        </div>
        <div className="backend-scroll toolbelt-item">
        
          <DataModal title={"BackEnd"} data={DATA.BACKEND_DATA} />
        </div>
        <div className="lang-scroll toolbelt-item">
        
          <DataModal title={"Other Languages"} data={DATA.LANGUAGE_DATA} />
        </div>
        <div className="design-scroll toolbelt-item">
        
          <DataModal title={"Design-Related"} data={DATA.DESIGN_DATA} />
        </div>
        <div className="APIs-scroll toolbelt-item">
           
          <DataModal title={"Besties w/ W3C APIs"} data={DATA.WEB_API_DATA} />
        </div>
        <div className="fav-stacks-scroll toolbelt-item">
          <DataModal title={"Fav Stacks"} data={DATA.FAV_COMBOS_DATA} />
        </div>
  
      </div>
  
      <div className="education-container">
  
      </div>
      </div>
    )
  }
}

export default About;