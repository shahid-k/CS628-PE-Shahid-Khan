import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetails.css';
function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const backUrl = 'https://fantastic-cod-rpvq6xpwjjrfp5p6-5050.app.github.dev';
  // const backUrl = 'http://localhost:5050';
  useEffect(() => {
      const setData = async () => await axios.get(backUrl+'/api/recipes')
      setData().then((res)=>{
        setRecipes(res.data)
      }).catch(err => console.log(err))
      // setRecipes(setData.data)
  }, []);

  return (
    <div className="recipe-list-container">
    <h2 className="recipe-list-heading">Recipe List</h2>
    <ul className="recipe-list">
      {recipes.map(recipe => (
        <li key={recipe._id} className="recipe-list-item">
          <Link to={`/recipes/${recipe._id}`} className="recipe-link">{recipe.name}</Link>
        </li>
      ))}
    </ul>
    <Link to="/add" className="add-recipe-link">Add Recipe</Link>
  </div>
  );
}

export default RecipeList;
