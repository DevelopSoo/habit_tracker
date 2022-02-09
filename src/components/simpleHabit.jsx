// import React, { Component } from 'react';

import React, { useCallback, useEffect, useState } from 'react';

const SimpleHabit = (props) => {
	
	const [count, setCount] = useState(0);
	const handleIncrement = useCallback(() => {
		console.log("simpleHabit 코드블록 호출 ")
    setCount(count + 1);
  }, [count]);

	useEffect(() => {
		console.log("mounted & update: ", count)
	})
	return (
		<li className="habit">
			<span className="habit-name">Reading</span>
			<span className="habit-count">{count}</span>
			<button
				className="habit-button habit-increase"
				onClick={handleIncrement}
			>
				<i className="fas fa-plus-square"></i>
			</button>
		</li>
	);
}

export default SimpleHabit;

// export default simpleHabit;
// class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     
//   }
// }


