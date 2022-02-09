import React, { Component } from 'react';

class myReset extends Component {

	render() {
		return (
			<button className='reset-button' onClick={this.props.onReset}>Reset All</button>
		);
	}
}

export default myReset;