import React, { Component } from 'react';

class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: 'Hello',
		};

		// CONSTRUCTOR BINDING -> BEST APPROACH
		this.clickHandler = this.clickHandler.bind(this);
	}

	// CONSTRUCTOR BINDING
	clickHandler() {
		this.setState({
			message: 'Goodbye!',
		});
		console.log(this);
	}

	// Class property as arrow function
	// clickHandler = () => {
	// 	this.setState({
	// 		message: 'Goodbye!',
	// 	});
	// };

	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				{/* THIS BINDING */}
				{/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

				{/* ARROW FUNCTION -> if not re-render*/}
				{/* <button onClick={() => this.clickHandler()}>Click</button> */}

				{/* CONSTRUCTOR BINDING & ARROW FUNCTION CLASS PROPERTY (EXPERIMENTAL) */}
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default EventBind;
