import React from 'react';

import emailjs from 'emailjs-com';

import './Contact.scss';

//import axios from 'axios';
import { useForm } from 'react-hook-form';

const Contact = () => {
	const { register, handleSubmit, errors, reset } = useForm();

	const onSubmit = async (data, e) => {
		e.preventDefault();
		try {
			const templateParams = {
				name: data.name,
				email: data.email,
				phone: data.phone,
				message: data.message,
			};
			await emailjs.send(
				'service_488tdmf',
				'template_a12KRVqz',
				templateParams,
				'user_wxL6HnKlbz9w25PcYM7j3'
			);
			reset();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="contact-wrapper">
			<div className="form-container">
				<div className="row">
					<h3>
						Send me a message<i className="far fa-paper-plane"></i>
					</h3>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<label>Name</label>
					<input
						required
						type="text"
						name="name"
						id="name"
						ref={register({ required: true })}
					/>
					<p className="error">{errors.name && '*name required'}</p>
					<label>Email</label>
					<input
						required
						type="email"
						name="email"
						id="email"
						ref={register({ required: true })}
					/>
					<p className="error">{errors.email && '*email required'}</p>

					<label>Phone Number</label>
					<input type="tel" name="phone" id="phone" ref={register} />

					<label>Message</label>
					<input
						required
						type="text"
						name="message"
						id="message"
						ref={register({ required: true })}
					/>
					<p className="error">{errors.message && '*message required'}</p>

					<button type="submit">
						Submit <i className="fas fa-arrow-right"></i>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
