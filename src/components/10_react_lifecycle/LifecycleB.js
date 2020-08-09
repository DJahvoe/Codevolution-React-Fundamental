import React, { Component } from 'react';

class LifecycleB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Sav',
		};

		console.log(
			'%cLifecycleB constructor',
			'background: #222; color: lightgreen'
		);
	}

	static getDerivedStateFromProps(props, state) {
		console.log(
			'%cLifecycleB getDerivedStateFromProps',
			'background: #222; color: yellow'
		);
		return null;
	}

	componentDidMount() {
		console.log(
			'%cLifecycleB componentDidMount',
			'background: #222; color: lightgreen'
		);
	}

	shouldComponentUpdate() {
		console.log(
			'%cLifecycleB shouldComponentUpdate',
			'background: #222; color: yellow'
		);
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log(
			'%cLifecycleB getSnapshotBeforeUpdate',
			'background: #222; color: yellow'
		);
		return null;
	}

	componentDidUpdate() {
		console.log(
			'%cLifecycleB componentDidUpdate',
			'background: #222; color: lightgreen'
		);
	}

	componentWillUnmount() {
		console.log(
			'%cLifecycleB componentWillUnmount',
			'background: #222; color: lightgreen'
		);
	}

	render() {
		console.log('%cLifecycleB render', 'background: #222; color: lightgreen');
		return (
			<div>
				<h2>LifecycleB</h2>
			</div>
		);
	}
}

export default LifecycleB;
