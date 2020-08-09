import React, { Component } from 'react';

class RegComp extends Component {
	render() {
		console.log(
			'%c+Regular Component Render+',
			'background: #222; color: lightgreen'
		);
		return <div>Regular Component {this.props.name}</div>;
	}
}

export default RegComp;
