import React from 'react';
import RecipeThumb from './RecipeThumb';

export default class RecipeSelector extends React.Component {
	render() {
		let recipes = this.props.recipes;

		if (typeof(this.props.search) === "string") {
			const search = fuzz(this.props.search);

			if (search.length > 0) {
				recipes = recipes.filter(recipe => {
					if (fuzz(recipe.name).indexOf(search) > -1) {
						return true;
					}

					const ingredients = recipe.ingredients.filter(ingredient => {
						return fuzz(ingredient).indexOf(search) > -1;
					});

					if (ingredients.length > 0) {
						return true;
					}

					return false;
				});
			}
		}

		if (typeof(this.props.cookTime) === "string") {
			let limit = parseInt(this.props.cookTime, 10);
			if (!isNaN(limit)) {
				recipes = recipes.filter(recipe => {
					return recipe.cookTime <= limit;
				});
			}
		}

		recipes = recipes.map(recipe => {
			return <RecipeThumb {...recipe}/>
		});

		if (recipes.length === 0) {
			return (
				<div className="recipes-selector">
					Sorry, nothing matched your filter term.
				</div>
			);
		} else {
			return (
				<div className="recipes-selector">
					{recipes}
				</div>
			);
		}
	}
}

function fuzz(s) {
	return s.toLowerCase().replace(/(^\s*|\s*$|[\-])/g, '');
}