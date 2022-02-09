import React, { Component } from 'react';

export default class myInput extends Component {
	habits = this.props.habits;

	state = {
		habit: ""
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState(this.setState({ [name]: value }))
	}

	handleAddHabit = () => {
		this.props.onAdd(this.state.habit)
	}

	render() {
		
		return (
		<>
			<input className='habit-input' name='habit' type='text' placeholder='enter your habit' onChange={this.handleChange}/>
			<button className='add-button' onClick={this.handleAddHabit} >add</button>
		</>
		)
	}
}
