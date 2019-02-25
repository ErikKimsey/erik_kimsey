import React, { Component } from 'react';
import './contact.scss';
import { CONTACT_DATA } from '../__data/data';


class Contact extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="contact-container">
        <div className="name contact-item">{CONTACT_DATA.name}</div>
        <div className="title contact-item">{CONTACT_DATA.role}</div>
        <div className="email-address contact-item" id="email-address">{CONTACT_DATA.email}</div>
        <div className="phone-number contact-item">{CONTACT_DATA.phone}</div>
      </div>
    )
  }
}

export default Contact;