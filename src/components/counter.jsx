import React, { Component } from "react";

export default class Counter extends Component {
	state = {
		count: 0,
		tags: []
	};

	handleIncrement() {}
	render() {
		return (
			<React.Fragment>
				<span className={this.getBadge()}>{this.getCount()}</span>
				<button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm"
				>
					Increments
				</button>
			</React.Fragment>
		);
	}

	getCount() {
		const { count } = this.state;
		return count === 0 ? "zero" : count;
	}

	getBadge() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}
}
