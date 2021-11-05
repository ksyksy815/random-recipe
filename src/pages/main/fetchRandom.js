import axios from "axios"

export const fetchRandom = async () => {
  const URL = "https://www.themealdb.com/api/json/v1/1/random.php"

  const food = await axios.get(URL)
    .then(res => {
      const meal = res.data.meals[0]
      let ingredients = []
      let measures = []
      const instructions = meal.strInstructions

      for (let key in meal) {
        if (key.includes("Ingredient") && meal[key] !== "" && meal[key] !== null) {
          ingredients.push(meal[key])
        }
        if (key.includes("Measure") && meal[key] !== "") {
          measures.push(meal[key])
        }
      }

      return {
        id: meal.idMeal,
        name: meal.strMeal,
        area: meal.strArea,
        category: meal.strCategory,
        imageURL: meal.strSource,
        instructions,
        ingredients,
        measures
      }
    })
  
  return food
}
