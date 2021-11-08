import axios from 'axios'

export const fetchRecipesByIngredient = async (ingredient) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  const recipeList = await axios.get(URL).then(res => res.data.meals)

  return recipeList
}