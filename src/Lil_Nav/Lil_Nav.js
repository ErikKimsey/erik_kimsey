import React, { Component } from 'react'
import './lil_nav.scss'
import { navListData } from '../__data/data';


export default class Lil_Nav extends Component {

  handleBtnClick = () => {
    console.log('clicked!!');
    /**
     * 1. toggle class with animation attached,
     * 
     */
  }

  render() {
    return (
      <div className="lil-nav-container">
        <div className="nav-btn" onClick={this.handleBtnClick}>BTN</div>
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

