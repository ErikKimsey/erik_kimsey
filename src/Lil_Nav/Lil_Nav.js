import React, { Component } from 'react'
import './lil_nav.scss'

const navListData = [
  'RESUME', 'SKILLSET', 'EDUCATION', 'EXPERIENCE',
]

export default class Lil_Nav extends Component {
  render() {
    return (
      <div className="lil-nav-container">
        <div className="nav-btn">BTN</div>
        <div className="nav-list">
        {
          navListData.map((e)=>{
            return <a href={e} key={e} className="list-item">{e}</a>
          })
        }
        </div>
        
      </div>
    )
  }
}

