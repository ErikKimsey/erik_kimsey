import React, { Component } from 'react'
import './lil_nav.scss'


export default class Lil_Nav extends Component {

  toggleMenu = () => {
    let menu = document.querySelector('.nav-list');
    let menuItems = document.querySelectorAll('.list-item');
    menuItems.forEach((e)=>{
      console.log(e);
      if(   )
    })
    menu.classList.toggle('no-show');
  }

  render() {
    return (
      <div className="lil-nav-container">
        <div className="lil-nav-btn" onClick={this.toggleMenu}>
          <img src={require('../assets/icons/lil_nav_btn-8.png')} />
        </div>
        <div className="nav-list">
        {
          this.props.data.map((e)=>{
            return <a href={`/about/#${e}`} key={e} className="list-item" onClick={this.toggleMenu}>{e}</a>
          })
        }
        </div>
      </div>
    )
  }
}

