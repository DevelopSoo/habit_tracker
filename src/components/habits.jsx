import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

export default class Habits extends Component {

	// 아래는 엘리님 코드 -> 내께 더 낫다고 하네
	// handleIncrement = (habit) => {
	// 	this.props.onIncrement(habit)
	// }

	// handleDecrement = (habit) => {
	// 	this.props.onDecrement(habit)
	// }

	// handleDelete = (habit) => {
	// 	this.props.onDelete(habit)
	// }
	render() {
		return (
			<>
				<HabitAddForm onAdd={this.props.onAdd}/>
				<img src="https://shopping-phinf.pstatic.net/main_8305917/83059179829.jpg?type=f140" alt="네이버" />
				<ul>
					{ this.props.habits.map(habit => (
						// 아래는 내 코드
						<Habit key={habit.id} habit={habit} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onDelete={this.props.onDelete}/>
					))}
				</ul>
				<button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
			</>
			
		);
	}
}
