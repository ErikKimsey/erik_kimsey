import React from 'react';
import './contact.scss';
import { CONTACT_DATA } from '../__data/data';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="name contact-item">{CONTACT_DATA.name}</div>
      <div className="title contact-item">{CONTACT_DATA.role}</div>
      <div className="email-address contact-item">{CONTACT_DATA.email}</div>
      <div className="phone-number contact-item">{CONTACT_DATA.phone}</div>
    </div>
  )
}

export default Contact;