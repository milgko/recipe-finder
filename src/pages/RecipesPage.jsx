import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('chicken');

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${search}&app_id=d85a3082&app_key=65b20aaae9cc5718eedde90d9946c4da&from=0&to=30`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };

    fetchRecipes();
  }, [search]);

  return (
    <div className="container mx-auto p-4">
      <SearchBar setSearch={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;



