import React, { Component } from 'react';
import './email-form.scss';

export default class EmailForm extends Component {
	state = {
		address: '',
		subject: '',
		message: ''
	};

	render() {
		return (
			<form className="form-container">
				<label className="input-label form-item" for="name">
					Your name:{' '}
				</label>
				<input className="text-input form-item" type="text" value="" name="name" />
				<label className="input-label form-item" for="name">
					Your email address:{' '}
				</label>
				<input className="text-input form-item" type="text" value="" name="name" />
				<label className="input-label form-item" for="name">
					Your message:{' '}
				</label>
				<textarea className="text-input form-item" rows="5" cols="33" value="" name="name" />
			</form>
		);
	}
}
