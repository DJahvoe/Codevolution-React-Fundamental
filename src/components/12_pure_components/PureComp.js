import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
	render() {
		console.log('%c-Pure Component Render-', 'background: #222; color: pink');
		return <div>Pure Components {this.props.name}</div>;
	}
}

export default PureComp;
