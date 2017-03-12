
import React from 'react';

export default class FilterBar extends React.Component {
	constructor(props) {
		super(props);

		this.handleSearch = this.handleSearch.bind(this);
		this.handleTime = this.handleTime.bind(this);
	}

	handleSearch(event) {
		this.props.onSearchCallback(event);
	}

	handleTime(event) {
		this.props.onTimeCallback(event);
	}

	render() {
		return (
			<div className="filter">
				<label for="filter-recipes">Search: <input id="filter-recipes" type="text" onChange={this.handleSearch} /></label><br/>
				<label for="cooktime-filter">Maximum cooking time: <input id="cooktime-filter" type="text" onChange={this.handleTime} /> minutes</label>
			</div>
		);
	}
}