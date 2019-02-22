import React, { Component } from 'react';
import './about.scss';
import * as DATA from '../__data/data';
import DataModal from './components/data_modal';

let DATA_ARR = [];

for(let key in DATA){
  DATA_ARR.push(DATA[key]);
}

console.log(DATA_ARR);



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

          {
            DATA_ARR.map((e, i)=>{
              return <DataModal className="toolbelt-item" title={DATA_ARR[i][0]} data={e}/>
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