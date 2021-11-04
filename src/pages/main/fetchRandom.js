import axios from "axios"

export const fetchRandom = async () => {
  const URL = "https://www.themealdb.com/api/json/v1/1/random.php"

  const food = await axios.get(URL)
    .then(res => {
      const meal = res.data.meals[0]
      return {
        id: meal.idMeal,
        name: meal.strMeal,
        area: meal.strArea,
        category: meal.strCategory,
        imageURL: meal.strSource
      }
    })
  
  return food
}
