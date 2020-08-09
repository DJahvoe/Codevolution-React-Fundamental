import React, { Component } from 'react';

class ConditionalRendering extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
		};
	}

	render() {
		// IF-ELSE
		// if (this.state.isLoggedIn) {
		// 	return <div>Welcome, Sav</div>;
		// } else {
		// 	return <div>Welcome, Guest</div>;
		// }

		// ELEMENT-VARIABLE
		// let message;
		// if (this.state.isLoggedIn) {
		// 	message = <div>Welcome, Sav</div>;
		// } else {
		// 	message = <div>Welcome, Guest</div>;
		// }
		// return message;

		// TERNARY OPERATOR
		// return this.state.isLoggedIn ? (
		// 	<div>Welcome, Sav</div>
		// ) : (
		// 	<div>Welcome, Guest</div>
		// );

		// SHORT-CIRCUIT OPERATOR
		return this.state.isLoggedIn && <div>Welcome, Sav</div>;
	}
}

export default ConditionalRendering;
