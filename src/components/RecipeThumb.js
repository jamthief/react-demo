'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class RecipeThumb extends React.Component {
	render() {
		const ingredientsList = this.props.ingredients.map((ingredient) =>
			<li>{ingredient}</li>
		);

		return (
				<div className="recipe" id={this.props.id}>
						<img className="thumb" src={`/img/${this.props.image}`} />
					<div className="metaPanel">
						<h3>Name</h3>
						<div className="name">{this.props.name}</div>
						<h3>Cook time</h3>
						<div className="time">{this.props.cookTime} minutes</div>
						<h3>Ingredients</h3>
						<ul>{ingredientsList}</ul>
					</div>
				</div>
		);
	}
}