import React, { Component } from 'react';
import './email-form.scss';
import axios from 'axios';

export default class EmailForm extends Component {
	state = {
		email: '',
		name: '',
		message: '',
		sent: false
	};

	/**
   * handles setstate on input change
   */
	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	/**
   * Form submission
   * validates email address & required fields
   */
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.validateEmailAddress(this.state.email)) {
			console.log('yup');
			this.handleEmailSend(this.state);
		} else {
			console.log('not valid');
		}
	};

	/**
   * validates email address
   */
	validateEmailAddress = (addr) => {
		return /\S+@\S+\.\S+/.test(addr);
	};

	/**
   * Handling not valid email alert
   */
	handleNotValidEmail = () => {};

	/**
   * Handling required field alert
   */
	handleRequiredField = () => {};

	/**
   * Send email - API
   */
	handleEmailSend = (data) => {
		axios
			.post('API_URI', data)
			.then((res) => {
				console.log(res);
				this.setState({ sent: true });
			})
			.catch((err) => {
				console.error(err);
			});
	};

	render() {
		return (
			<form className="form-container" onSubmit={this.handleSubmit}>
				<label className="input-label form-item" htmlFor="name">
					Your name:
				</label>
				<input
					className="text-input form-item"
					id="name"
					type="text"
					value={this.state.name}
					name="name"
					placeholder="Name"
					onChange={this.handleInput}
					required
				/>
				<label className="input-label form-item" htmlFor="email">
					Your email address:
				</label>
				<input
					className="text-input form-item"
					id="email"
					type="text"
					value={this.state.email}
					name="email"
					placeholder="Email address"
					onChange={this.handleInput}
					required
				/>
				<label className="input-label form-item" htmlFor="message">
					Your message:
				</label>
				<textarea
					className="text-input form-item"
					id="message"
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
