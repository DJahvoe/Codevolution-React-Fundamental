import React, { Component } from 'react';

class EventHandlerClass extends Component {
	clickHandler() {
		console.log('Clicked the button');
	}
	render() {
		return (
			<div>
				<button onClick={this.clickHandler}>Click me</button>
			</div>
		);
	}
}

export default EventHandlerClass;
