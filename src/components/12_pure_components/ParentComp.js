import React, { Component, PureComponent } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Sav',
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({ name: 'Sav' });
		}, 2000);
	}

	render() {
		// If parent not re-render then child won't either (PURE COMPONENTS)
		console.log(
			'%c**********************Parent Component Render**********************',
			'background: #222; color: lightblue'
		);
		return (
			<div>
				Parent Component
				<RegComp name={this.state.name} />
				<MemoComp name={this.state.name} />
				<PureComp name={this.state.name} />
			</div>
		);
	}
}

export default ParentComp;
