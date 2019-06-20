import React from 'react';
import './contact.scss';
import { CONTACT_DATA } from '../__data/data';
const atGmail = 'gmail.com';

const Contact = () => {
	const divideString = (str) => {
		return str.split('').map((e, i) => {
			return <div className="letter">{e}</div>;
		});
	};

	return (
		<div className="contact-container">
			<div className="email-address contact-item">
				{divideString(CONTACT_DATA.email_1)}
				<span className="email-address contact-item letter">[@]</span>
			</div>
			<div className="email-address contact-item">{divideString(atGmail)}</div>
		</div>
	);
};

export default Contact;
