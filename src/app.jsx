import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import '@fortawesome/fontawesome-free/js/all.js';
// import MyNavbar from './components/myNavbar';
import Navbar from './components/navbar';
import MyInput from './components/myInput';
import MyReset from './components/myReset';


class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
			{ id: 2, name: 'Running', count: 0 },
			{ id: 3, name: 'Coding', count: 0 }
    ]
  }

  handleIncrement = (habit) => {
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// habits[index].count++
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }; // 위는 배열만 새로 바뀜, 아래는 오브젝트도 새로바뀜
      }
      return item;
    })
		this.setState({ habits })
	}

	handleDecrement = (habit) => {
		// 객체 복사
		// const habits = [...this.state.habits];
		// // count를 줄이기 위해 index 뽑아오기
		// const index = habits.indexOf(habit);
		// // count 줄이기
		// const count = --habits[index].count;
		// // 0보다 작지 않도록 세팅
		// habits[index].count = count < 0 ? 0 : count

    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count }
      }
      return item;
    })

		this.setState({ habits })
		
	}

	handleDelete = (habit) => {
		// 내 코드
		// let habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// habits = habits.filter(habit => habits[index] !== habit )

		// 엘리님 코드
		const habits = this.state.habits.filter(item => item.id !== habit.id)
		this.setState({ habits })
	}

  // 내 코드
  addHabit = (name) => {
    const habits = [...this.state.habits];
    const idList = habits.map(habit => habit.id);
    const lastId = Math.max(...idList)
    const habit = {
      id: lastId + 1,
      name: name,
      count: 0
    }
    habits.push(habit);
    this.setState({ habits })
  }

  // 엘리님 코드
  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits })
  }

  // 내 코드
  resetAll = () => {
    const habits = [...this.state.habits].map(habit => ({
      id: habit.id,
      name: habit.name,
      count: 0
    }))
    this.setState({ habits })
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 }
      } 
      return habit;
    });
    this.setState({ habits })
  }

  render() {
    return (
      <>
        {/* <MyNavbar habits={this.state.habits} /> */}
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length } />
        {/* <MyInput habits={this.state.habits} onAdd={this.addHabit} /> */}
        <Habits habits={this.state.habits} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} onAdd={this.handleAdd} onReset={this.handleReset}/>
        {/* <MyReset habits={this.state.habits} onReset={this.resetAll} /> */}
      </>
    );
  }
}

export default App;
