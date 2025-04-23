import React, { useState } from "react";
import "./HealthyRecipes.css";
import veganBuddhaBowlImage from "../../assets/images/images1.jpg";
import KetoChickenSalad from "../../assets/images/images2.webp";
import GlutenFreePancakes from "../../assets/images/images3.jpg";
import BrainBoostSmoothie from "../../assets/images/img1.webp";
import SalmonAvocado from "../../assets/images/img2.jpg";
import TofuStirFry from "../../assets/images/img3.webp";
import LowCalorieSoup from "../../assets/images/img4.jpg";
import BerryParfait from "../../assets/images/img5.jpg";

const HealthyRecipes = () => {
  const [goal, setGoal] = useState("");
  const [filters, setFilters] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to track the selected recipe
  const [selectedFood, setSelectedFood] = useState(null); // State to track the selected food
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [searchCategory, setSearchCategory] = useState(""); // State for search category

  const allRecipes = [
    {
      id: 1,
      name: "Vegan Buddha Bowl",
      goal: "Weight Loss",
      filters: ["Vegan", "Gluten-Free"],
      calories: 350,
      cookingTime: "30 mins",
      difficulty: "Easy",
      mealType: "Lunch",
      image: veganBuddhaBowlImage,
      description: "A healthy and delicious vegan bowl packed with nutrients.",
      ingredients: ["Quinoa", "Chickpeas", "Avocado", "Spinach"],
      steps: ["Cook quinoa", "Mix ingredients", "Serve in a bowl"],
    },
    {
      id: 2,
      name: "Keto Chicken Salad",
      goal: "Muscle Gain",
      filters: ["Keto"],
      calories: 500,
      cookingTime: "20 mins",
      difficulty: "Medium",
      mealType: "Dinner",
      image: KetoChickenSalad,
      description: "A high-protein salad perfect for muscle gain.",
      ingredients: ["Chicken", "Avocado", "Lettuce", "Olive Oil"],
      steps: ["Grill chicken", "Prepare salad", "Mix and serve"],
    },
    {
      id: 3,
      name: "Gluten-Free Pancakes",
      goal: "Weight Loss",
      filters: ["Gluten-Free"],
      calories: 250,
      cookingTime: "15 mins",
      difficulty: "Easy",
      mealType: "Breakfast",
      image: GlutenFreePancakes,
      description: "Delicious pancakes that are gluten-free and low-calorie.",
      ingredients: ["Gluten-free flour", "Eggs", "Milk", "Honey"],
      steps: ["Mix ingredients", "Cook on a pan", "Serve with honey"],
    },
  ];

  const dietFoods = [
    {
      id: 1,
      name: "Vegan Buddha Bowl",
      category: "Vegan",
      image: veganBuddhaBowlImage,
      description: "A nutrient-packed vegan bowl.",
      ingredients: ["Quinoa", "Chickpeas", "Avocado", "Spinach"],
      steps: ["Cook quinoa", "Mix ingredients", "Serve in a bowl"],
    },
    {
      id: 2,
      name: "Tofu Stir Fry",
      category: "Vegan",
      image: TofuStirFry,
      description: "A delicious tofu stir fry with veggies.",
      ingredients: ["Tofu", "Broccoli", "Carrots", "Soy Sauce"],
      steps: ["Stir fry tofu", "Add veggies", "Serve hot"],
    },
    {
      id: 3,
      name: "Keto Chicken Salad",
      category: "Protein",
      image: KetoChickenSalad,
      description: "A high-protein chicken salad.",
      ingredients: ["Chicken", "Avocado", "Lettuce", "Olive Oil"],
      steps: ["Grill chicken", "Prepare salad", "Mix and serve"],
    },
    {
      id: 4,
      name: "Salmon Avocado Bowl",
      category: "Protein",
      image: SalmonAvocado,
      description: "A protein-rich salmon and avocado bowl.",
      ingredients: ["Salmon", "Avocado", "Rice", "Soy Sauce"],
      steps: ["Cook salmon", "Prepare bowl", "Serve fresh"],
    },
    {
      id: 5,
      name: "Low-Calorie Soup",
      category: "Low Calories",
      image: LowCalorieSoup,
      description: "A light and healthy soup.",
      ingredients: ["Carrots", "Celery", "Onions", "Vegetable Broth"],
      steps: ["Chop veggies", "Simmer in broth", "Serve warm"],
    },
    {
      id: 6,
      name: "Gluten-Free Pancakes",
      category: "Low Calories",
      image: GlutenFreePancakes,
      description: "Delicious low-calorie pancakes.",
      ingredients: ["Gluten-free flour", "Eggs", "Milk", "Honey"],
      steps: ["Mix ingredients", "Cook on a pan", "Serve with honey"],
    },
    {
      id: 7,
      name: "Brain Boost Smoothie",
      category: "Brain Boosting",
      image: BrainBoostSmoothie,
      description: "A smoothie to boost brain health.",
      ingredients: ["Blueberries", "Banana", "Almond Milk", "Chia Seeds"],
      steps: ["Blend ingredients", "Serve chilled"],
    },
    {
      id: 8,
      name: "Berry Parfait",
      category: "Brain Boosting",
      image: BerryParfait,
      description: "A brain-boosting berry parfait.",
      ingredients: ["Greek Yogurt", "Berries", "Granola", "Honey"],
      steps: ["Layer ingredients", "Serve fresh"],
    },
  ];

  const handleFilterChange = (filter) => {
    setFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const handleSearch = () => {
    const filteredRecipes = allRecipes.filter(
      (recipe) =>
        recipe.goal === goal &&
        filters.every((filter) => recipe.filters.includes(filter))
    );
    setRecipes(filteredRecipes);
    setSelectedRecipe(null); // Reset selected recipe when searching
  };

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe); // Set the selected recipe to display details
  };

  const handleBackToRecipes = () => {
    setSelectedRecipe(null); // Reset selected recipe to go back to the list
  };

  const handleViewFood = (food) => {
    setSelectedFood(food); // Set the selected food to display details
  };

  const handleBackToGallery = () => {
    setSelectedFood(null); // Reset selected food to go back to the gallery
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value); // Update search query state
  };

  const handleSearchCategoryChange = (e) => {
    setSearchCategory(e.target.value); // Update search category state
  };

  const filteredDietFoods = dietFoods.filter((food) =>
    food.category.toLowerCase().includes(searchCategory.toLowerCase())
  );

  return (
    <div className="healthy-recipes-page">
      <h1 className="page-title">Find Healthy Recipes</h1>
      <p className="page-description">
        Choose your goal and preferences to discover recipes tailored to your
        needs.
      </p>

      {/* Preferences Section */}
      <div className="preferences">
        <div className="goal-selection">
          <h2>Select Your Goal</h2>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="goal-dropdown"
          >
            <option value="">-- Select Goal --</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
          </select>
        </div>

        <div className="filter-options">
          <h2>Filter Options</h2>
          {["Vegan", "Keto", "Gluten-Free"].map((filter) => (
            <label key={filter} className="filter-label">
              <input
                type="checkbox"
                checked={filters.includes(filter)}
                onChange={() => handleFilterChange(filter)}
              />
              {filter}
            </label>
          ))}
        </div>
      </div>

      <button className="search-btn" onClick={handleSearch}>
        Search Recipes
      </button>

      {/* Recipe Cards Section */}
      <div className="recipe-cards">
        {selectedRecipe ? (
          <div className="recipe-card">
            <div className="recipe-image">
              <img src={selectedRecipe.image} alt={selectedRecipe.name} />
            </div>
            <div className="recipe-info">
              <h3 className="recipe-name">{selectedRecipe.name}</h3>
              <p className="recipe-description">{selectedRecipe.description}</p>
              <h4>Ingredients:</h4>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h4>Steps:</h4>
              <ol>
                {selectedRecipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <button className="back-btn" onClick={handleBackToRecipes}>
                Back to Recipes
              </button>
            </div>
          </div>
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image keto-chicken-salad">
                <img src={recipe.image} alt={recipe.name} />
              </div>
              <div className="recipe-info">
                <h3 className="recipe-name">{recipe.name}</h3>
                <p className="recipe-calories">🔥 {recipe.calories} kcal</p>
                <p className="recipe-cooking-time">⏱️ {recipe.cookingTime}</p>
                <p className="recipe-difficulty">⭐ {recipe.difficulty}</p>
                <p className="recipe-meal-type">🍽️ {recipe.mealType}</p>
                <button
                  className="view-recipe-btn"
                  onClick={() => handleViewRecipe(recipe)}
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-recipes">No recipes match your preferences.</p>
        )}
      </div>

      {/* Separate Div for Headline */}
      <div className="recipes-headline-container">
        <h1 className="recipes-headline">Some Healthy Food Recipes</h1>
      </div>

      {/* Search Input */}
      <div className="search-bar">
        <select
          value={searchCategory}
          onChange={handleSearchCategoryChange}
          className="search-select"
        >
          <option value="">-- Select Category --</option>
          <option value="Vegan">Vegan</option>
          <option value="Protein">Protein</option>
          <option value="Low Calories">Low Calories</option>
          <option value="Brain Boosting">Brain Boosting</option>
        </select>
      </div>

      {/* New Diet Food Gallery Section */}
      <div className="diet-food-gallery">
        <h2 className="diet-food-title">Explore Diet Foods</h2>
        {selectedFood ? (
          <div className="food-details">
            <div className="food-image">
              <img src={selectedFood.image} alt={selectedFood.name} />
            </div>
            <div className="food-info">
              <h3 className="food-name">{selectedFood.name}</h3>
              <p className="food-description">{selectedFood.description}</p>
              <h4>Ingredients:</h4>
              <ul>
                {selectedFood.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h4>Steps:</h4>
              <ol>
                {selectedFood.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <button className="back-btn" onClick={handleBackToGallery}>
                Back to Gallery
              </button>
            </div>
          </div>
        ) : (
          <div className="food-gallery">
            {filteredDietFoods.map((food) => (
              <div
                key={food.id}
                className="food-card"
                onClick={() => handleViewFood(food)}
              >
                <div className="food-image">
                  <img src={food.image} alt={food.name} />
                </div>
                <div className="food-info">
                  <h3 className="food-name">{food.name}</h3>
                  <p className="food-category">{food.category}</p>
                  <p className="food-description">{food.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthyRecipes;
