import axios from 'axios'

export const fetchAreas = async () => {
  const URL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  const areaList = await axios.get(URL).then(res => res.data.meals)
  
  return areaList
}

export const fetchMealsByArea = async (areaName) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
  const foodList = await axios.get(URL).then(res => res.data.meals)

  return foodList
}