import React from 'react';
import './container-recipes.css';

const RecipesContainer = () => {
  return (
    <div className="recipes-container">
      <img
        src="/images/smartflavor/recipe-1.png"
        alt="Recipe 1"
        className="recipe-thumbnail"
      />
      <img
        src="/images/smartflavor/recipe-2.png"
        alt="Recipe 2"
        className="recipe-thumbnail"
      />
      <img
        src="/images/smartflavor/recipe-3.png"
        alt="Recipe 3"
        className="recipe-thumbnail"
      />
      <img
        src="/images/smartflavor/recipe-4.png"
        alt="Recipe 4"
        className="recipe-thumbnail"
      />
    </div>
  );
};

export default RecipesContainer;
