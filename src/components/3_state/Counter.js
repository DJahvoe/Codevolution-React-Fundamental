import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	increment() {
		// Use setState (async) to re-render the DOM (modify this.state.count directly won't change the DOM)
		// this.setState(
		// 	{
		// 		count: this.state.count + 1,
		// 	},
		// 	() => {
		// 		// Callback after setState
		// 		console.log(this.state.count);
		// 	}
		// );

		// Update state according to previous-state
		this.setState((prevState, props) => ({
			count: prevState.count + 1,
		}));
	}

	incrementFive() {
		this.increment();
		this.increment();
		this.increment();
		this.increment();
		this.increment();
	}

	render() {
		return (
			<div>
				<div>Count - {this.state.count}</div>
				<button onClick={() => this.increment()}>Increment</button>
				<button onClick={() => this.incrementFive()}>Increment Five</button>
			</div>
		);
	}
}

export default Counter;
