import React, { Component } from 'react'
import './lil_nav.scss'
import { navListData } from '../__data/data';


export default class Lil_Nav extends Component {

  toggleMenu = () => {
    let menu = document.querySelector('.nav-list');
    menu.classList.toggle('no-show');
  }

  render() {
    return (
      <div className="lil-nav-container">
        <div className="nav-btn" onClick={this.toggleMenu}>BTN</div>
        <div className="nav-list">
        {
          navListData.map((e)=>{
            return <a href={`/about/#${e}`} key={e} className="list-item" onClick={this.toggleMenu}>{e}</a>
          })
        }
        </div>
      </div>
    )
  }
}

