import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeShowPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?r=${encodeURIComponent(id)}&app_id=d85a3082&app_key=65b20aaae9cc5718eedde90d9946c4da`
      );
      const data = await response.json();
      setRecipe(data[0]);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.label}</h1>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <p className="text-gray-700 mb-4 md:mb-0">Calories: {Math.round(recipe.calories)}</p>
            <p className="text-gray-700">Total Time: {recipe.totalTime} minutes</p>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside mb-6">
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index} className="text-gray-700 mb-2">{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <p className="text-gray-700">{recipe.instructions || 'Instructions not available'}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeShowPage;



