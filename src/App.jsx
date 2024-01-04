// import { useState } from "react";
import "./App.css";

function App() {
	// const [first, setfirst] = useState(second)
	// TODO change style to distinguish when the user focuses on the error input and not focused
	//TODO add touch validation.
	const handleFormSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		let enterdedData = Object.fromEntries(data.entries());
		console.log("🚀 ~ file: App.jsx:8 ~ handleFormSubmit ~ enterdedData:", enterdedData);
	};

	document.addEventListener(
		"invalid",
		(function () {
			return function (e) {
				e.preventDefault();
				e.target.focus();
			};
		})(),
		true
	);

	return (
		<>
			<div className="FormWrapper">
				<div className="contentWrapper">
					<h1>Testing form validadtion with css only</h1>
					<form onSubmit={handleFormSubmit} className="TestFomrm">
						<div className="inputWrapper">
							<label htmlFor="firstName"> First name</label>
							<input
								type="text"
								name="firstName"
								id="firstName"
								required
								placeholder="First Name"
								pattern="^[a-zA-Z ]{3,}$"
								title="Only alphabet between 3 and 30 characters are allowed."
							/>
							<h2 className="ReqMessage">Required.</h2>
							<h2 className="ErrorMessage">Only alphabet between 3 and 30 characters are allowed.</h2>
						</div>
						<div className="inputWrapper">
							<label htmlFor="lastName"> Last name</label>
							<input
								type="text"
								name="lastName"
								id="lastName"
								placeholder="Last Name"
								required
								pattern="^[a-zA-Z ]{3,}$"
								title="Only alphabet between 3 and 30 characters are allowed."
							/>
							<h2 className="ReqMessage">Required.</h2>
							<h2 className="ErrorMessage">Only alphabet between 3 and 30 characters are allowed.</h2>
						</div>
						<div className="inputWrapper">
							<label htmlFor="email">Email</label>
							{/* <input type="email" name="email" id="email" required placeholder="Email" title="Please enter a valid email" /> */}
							<input
								type="text"
								id="email"
								name="email"
								required
								placeholder="Email"
								pattern="(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]{2,}$)"
								title="Please enter a valid email address."
							></input>
							<h2 className="ReqMessage">Required.</h2>
							<h2 className="ErrorMessage">Please enter a valid email</h2>
						</div>
						<div className="inputWrapper">
							<label htmlFor="contact">Phone number</label>
							<input type="number" name="contact" id="contact" placeholder="contact" />
						</div>
						<button>Submit</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;
