import React from 'react';

import './Contact.scss';

import axios from 'axios';
import { useForm } from 'react-hook-form';

const Contact = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data, e) => {
		e.preventDefault();
		axios({
			method: 'POST',
			url: '/mail/send',
			data: data,
		})
			.then((response) => {
				if (response.data.status === 'success') console.log('email sent');
				if (response.data.status === 'fail')
					console.log('email failed to send', response.data.status);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className="contact-wrapper">
			<div className="form-container">
				<div className="row">
					<i className="far fa-paper-plane"></i>
					<h3>Send me a message</h3>
				</div>

				<form onSubmit={handleSubmit(onSubmit)}>
					<label>Name:</label>
					<input type="text" name="name" id="name" ref={register} />

					<label>Email:</label>
					<input type="email" name="email" id="email" ref={register} />

					<label>Phone Number:</label>
					<input type="tel" name="phone" id="phone" ref={register} />

					<label>Your Message:</label>
					<input type="text" name="message" id="message" ref={register} />

					<button type="submit">contact me</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
