import React, { Component } from 'react';

class RefsDemo extends Component {
	constructor(props) {
		super(props);

		// Create Ref
		this.inputRef = React.createRef();

		// Callback Ref
		this.cbRef = null;
		this.setCbRef = (element) => {
			this.cbRef = element;
		};
	}

	componentDidMount() {
		// Create Ref
		// this.inputRef.current.focus();
		// console.log(this.inputRef);
		// Callback Refs
		// if (this.cbRef) {
		// 	this.cbRef.focus();
		// }
		// console.log(this.cbRef);
	}

	clickHandler = () => {
		alert(this.inputRef.current.value);
	};

	render() {
		return (
			<div>
				<input type='text' ref={this.inputRef} />
				<input type='text' ref={this.setCbRef} />
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default RefsDemo;
