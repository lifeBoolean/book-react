import React, { Component } from 'react'

class Counter extends Component {
	state = {
		number: 0,
		str: 'Hi React!!2'
	}

	render() {
		const {number, str} = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<button
					onClick={()=>{
						this.setState({
							number: number+1
						})
					}}>+1
				</button>
				<h3>{str}</h3>
			</div>
		)
	}
}

export default Counter;