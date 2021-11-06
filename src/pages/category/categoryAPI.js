import axios from 'axios'
import { assembleIngredientsAndMeasures, getInstructionsInArray } from './utils'

export const fetchCategory = async () => {
  const URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
  const categories = await axios.get(URL)
  .then(res => res.data.categories)

  return categories
}

export const fetchByCategory = async (categoryName) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  const meals = await axios.get(URL).then(res => res.data.meals)

  return meals
}

export const fetchRecipeByFoodName = async (foodName) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodName}`
  const recipe = await axios.get(URL).then(res => res.data.meals[0])
  
  const ingredients = assembleIngredientsAndMeasures(recipe)
  const instructions = getInstructionsInArray(recipe.strInstructions)
  
  const prettyRecipe = {
    name: recipe.strMeal,
    id: recipe.idMeal,
    category: recipe.strCategory,
    area: recipe.strArea,
    image: recipe.strMealThumb,
    instructions,
    ingredients,
    tags: recipe.strTags,
    source: recipe.strSource
  }

  return prettyRecipe
}