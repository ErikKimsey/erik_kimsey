import React from 'react';
import './styles/education.scss';

export default function Education(props) {
  console.log(props);
  
  return (
    <div className="education-container">
      
      <div className="school-name">{props.data.name}</div>
      <div className="major">{props.data.major}</div>
      <div className="minor">{props.data.minor}</div>
      <div className="focus">{props.data.focus}</div>
      <div className="curriculum-container">
        <div className="curriculum-header">Curriculum: </div>
        <ul>
          {
            props.data.curriculum.map((e, i)=>{
              return <li>{e}</li>
            })
          }
        </ul>
      </div>
      <div className="tech-container">
        <div className="tech-header">Technology:</div>
      <ul>
          {
            props.data.tech.map((e, i)=>{
              return <li>{e}</li>
            })
          }
        </ul>
      </div>
      <div className="projects-container">
      <div className="projects-header">Projects:</div>
      <ul>
          {
            props.data.projects.map((e, i)=>{
              return <li>{e}</li>
            })
          }
        </ul>
      </div>
      <div className="extra-curr-container">
        {props.data.extraCurricular}
      </div>
    </div>
  )
}
