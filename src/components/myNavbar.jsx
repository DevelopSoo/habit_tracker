import React, { Component } from 'react';

class myNavbar extends Component {
	render() {
		const habits = this.props.habits;
		const reducer = (previousValue, currentValue) => previousValue + currentValue;
		const totalCnt = habits.map(habit => habit.count).reduce(reducer)
		return (
			<div className='navbar'>
				<span className='navbar-title'>Habit Tracker</span>
				<span className='habit-count'>{totalCnt}</span>
			</div>
		);
	}
}

export default myNavbar;