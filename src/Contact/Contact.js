import React from 'react';
import './contact.scss';
import { CONTACT_DATA } from '../__data/data';

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="email-address contact-item" id="email-address">
				{CONTACT_DATA.email_1}
				<span className="email-address contact-item">[@]</span>
			</div>
			<div className="email-address contact-item" id="email-address">
				gmail<span>[dot]</span>com
			</div>
		</div>
	);
};

export default Contact;
