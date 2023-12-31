import React, { useEffect, useState } from 'react'
import './App.css';
//import Recipe from './Recipe';
import Recipee from './Recipee';
  
const App = () => {
  const APP_ID = "c75b93d6";
  const APP_KEY = "c5388f02b6b0e883ea74954526bd797a";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [])
  const getRecipes = async () => {
    const response = await fetch
          (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data);
  
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}  >
        <input className="search-bar" type="text" value={search}
             onChange={updateSearch} />
        <button className="search-button" type="submit" >
             Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipee
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            //calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
  
        ))}
      </div>
  
    </div>
  );
}
  
export default App;