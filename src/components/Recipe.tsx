import React, { useEffect, useState } from "react";
import "../App.css";

const BASE_URL = "https://iths-2024-recept-grupp7-86oop6.reky.se/recipes";

interface Recipe {
  title: string;
  description: string;
  ratings: number[];
  imageUrl: string;
  timeInMins: string;
  categories: string[];
  instructions: string[];
  ingredients: [
    {
      name: string;
      amount: number;
      unit: string;
    }
  ];
}
export default function Recipe() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`${BASE_URL}`);
      const recipes = (await response.json()) as Recipe[];
      setRecipes(recipes);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="container">
      <h1>Matrecept</h1>
      <ul className="list-group">
        {recipes.map((recipe) => {
          return (
            <li key={recipe.title}>
              <div>
                <span>{recipe.title}</span>
                <img src={recipe.imageUrl} alt={recipe.title} />
              </div>
              <div>
                <span>Description: </span>
                {recipe.description}
              </div>
              <div>
                <span>ratings: </span>
                {recipe.ratings}
              </div>
              <div>
                <span>Time in minutes: </span>
                {recipe.timeInMins} minutes
              </div>
              <div>
                <span>Categories: </span>{" "}
                {recipe.categories.map((item, index) => (
                  <React.Fragment key={index}>
                    {item} <br />
                  </React.Fragment>
                ))}
              </div>
              <div>
                <span>Instructions: </span>{" "}
                {recipe.instructions.map((item, index) => (
                  <React.Fragment key={index}>
                    {item} <br />
                  </React.Fragment>
                ))}
              </div>
              <div>
                <span>Ingredients: </span>
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <>
                      {ingredient.name}: {ingredient.amount} {ingredient.unit}
                      <br />
                    </>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
