/*
	Contact Page
*/

import React from 'react';

const ContactPage = () => {
	return (
		<main class="contact-page container">
			<div class="content">
				<p>
				It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
			</p>
			<form class="border">
				<div class="form-field">
					<label htmlFor="">Email</label>
					<input type="email" placeholder="Your Email" />
				</div>
				<div class="form-field">
					<label htmlFor="">Subject</label>
					<input type="text" placeholder="Your subject" />
				</div>
				<div class="form-field">
				    <label htmlFor="">Message</label>
					<textarea name="" id="" cols="30" rows="20" placeholder="Your message">
					</textarea>
				</div>
				<div class="form-field">
					<input type="submit" value="Submit" />
				</div>
			</form>	
			</div>
			
		</main>
	);
}

export default ContactPage;