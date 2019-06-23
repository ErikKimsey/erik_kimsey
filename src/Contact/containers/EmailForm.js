import React, { Component } from 'react';
import './email-form.scss';

export default class EmailForm extends Component {
	state = {
		email: '',
		name: '',
		message: ''
	};

	handleInput = (e) => {
		console.log(e.target);
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit');
		console.log(this.state);
		if (this.validateEmailAddress(this.state.email)) {
			console.log('yup');
		} else {
			console.log('not valid');
		}
	};

	validateEmailAddress = (addr) => {
		return /\S+@\S+\.\S+/.test(addr);
	};

	render() {
		console.log(this.state);
		return (
			<form className="form-container" onSubmit={this.handleSubmit}>
				<label className="input-label form-item" htmlFor="name">
					Your name:
				</label>
				<input
					className="text-input form-item"
					type="text"
					value={this.state.name}
					name="name"
					placeholder="Name"
					onChange={this.handleInput}
					required
				/>
				<label className="input-label form-item" htmlFor="name">
					Your email address:
				</label>
				<input
					className="text-input form-item"
					type="text"
					value={this.state.email}
					name="email"
					placeholder="Email address"
					onChange={this.handleInput}
					required
				/>
				<label className="input-label form-item" htmlFor="name">
					Your message:
				</label>
				<textarea
					className="text-input form-item"
					rows="5"
					cols="33"
					value={this.state.message}
					name="message"
					placeholder="Message"
					onChange={this.handleInput}
					required
				/>
				<div className="button-container">
					<button type="submit" className="button submit-button">
						Send
					</button>
				</div>
			</form>
		);
	}
}
