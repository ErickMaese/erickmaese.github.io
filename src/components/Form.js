import "./FormStyles.css";
// import { useNavigate } from "react-router-dom";
import React from "react";
// import Popup from "./Popup.js";
// import { useState } from "react";

const Form = () => {
	// const [popupBtn, setPopupBtn] = useState(false);

	// const triggerPopup = () => {
	// 	setPopupBtn(!popupBtn);
	// };

	// 	const navigate = useNavigate();

	// submition success link
	// const handleSubmit = () => {
	// 	// event.preventDefault();

	// 	// 👇️ redirect to /contacts
	// 	navigate("/success");
	// };

	return (
		<div className="form">
			<form
				action="https://formsubmit.co/4de520798acec722847de1216929a9a3"
				method="POST">
				{/* honeypot */}
				<input type="text" name="_honey" style={{ display: "none" }} />

				{/* Disable Captcha */}
				<input type="hidden" name="_captcha" value="false" />

				{/* submition success link - did not work when deployed*/}
				{/*<input type="hidden" name="_next" value={navigate("/success")} />*/}

				<label>Your Name</label>
				<input type="text" name="name" required />
				<label>Email</label>
				<input type="email" name="email" required />
				<label>Subject</label>
				<input type="text" name="subject" />
				<label>Message</label>
				<textarea
					rows="6"
					placeholder="Type your message here"
					name="message"></textarea>
				<button className="btn">Submit</button>
			</form>

			{/*
			{popupBtn ? (
				<div className="popup">
					<div className="inner-popup">
						<h1>Thanks!</h1>
						<p>The form was subitted successfully</p>
						<button className="btn" onClick={triggerPopup}>
							close
						</button>
					</div>
				</div>
			) : (
				""
			)}
			*/}
		</div>
	);
};

export default Form;
