import React from 'react';
import './contact.scss';
import { CONTACT_DATA } from '../__data/data';

const Contact = () => {
	const divideString = () => {
		return CONTACT_DATA.email_1.split('').map((e, i) => {
			console.log(e);
			return <div className="letter">{e}</div>;
		});
	};
	console.log(divideString());

	return (
		<div className="contact-container">
			<div className="email-address contact-item" id="email-address">
				{divideString()}
				<span className="email-address contact-item">[@]</span>
			</div>
			<div className="email-address contact-item" id="email-address">
				gmail<span>[dot]</span>com
			</div>
		</div>
	);
};

export default Contact;
