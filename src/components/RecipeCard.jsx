import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.label}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 truncate">{recipe.label}</h3>
        <p className="text-gray-700 mb-2">Calories: {Math.round(recipe.calories)}</p>
        <Link
          to={`/recipes/${recipe.uri.split("_")[1]}`}
          className="text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;



