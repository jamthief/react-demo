'use strict';

import React from 'react';
import FilterBar from './FilterBar';
import RecipeSelector from './RecipeSelector';
import recipes from '../data/recipes';

export default class IndexPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			cookTime: null
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.handleTime = this.handleTime.bind(this);
	}
	handleSearch(event) {
		this.setState({ search: event.target.value });
	}
	handleTime(event) {
		this.setState({ cookTime: event.target.value });
	}
	render() {
		return (
			<div className="home">
				<FilterBar onSearchCallback={this.handleSearch} onTimeCallback={this.handleTime} />
				<RecipeSelector recipes={recipes} search={this.state.search} cookTime={this.state.cookTime} />
			</div>
		);
	}
}