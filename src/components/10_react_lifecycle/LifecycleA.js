import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Sav',
		};

		console.log(
			'%cLifecycleA constructor',
			'background: #222; color: lightgreen'
		);
	}

	static getDerivedStateFromProps(props, state) {
		console.log(
			'%cLifecycleA getDerivedStateFromProps',
			'background: #222; color: yellow'
		);
		return null;
	}

	componentDidMount() {
		console.log(
			'%cLifecycleA componentDidMount',
			'background: #222; color: lightgreen'
		);
	}

	shouldComponentUpdate() {
		console.log(
			'%cLifecycleA shouldComponentUpdate',
			'background: #222; color: yellow'
		);
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log(
			'%cLifecycleA getSnapshotBeforeUpdate',
			'background: #222; color: yellow'
		);
		return null;
	}

	componentDidUpdate() {
		console.log(
			'%cLifecycleA componentDidUpdate',
			'background: #222; color: lightgreen'
		);
	}

	componentWillUnmount(){
		console.log(
			'%cLifecycleA componentWillUnmount',
			'background: #222; color: lightgreen'
		);
	}

	changeState = () => {
		this.setState({
			name: 'Sav2',
		});
	};

	render() {
		console.log('%cLifecycleA render', 'background: #222; color: lightgreen');
		return (
			<div>
				<h2>LifecycleA</h2>
				<button onClick={this.changeState}>Change State</button>
				<LifecycleB />
			</div>
		);
	}
}

export default LifecycleA;
