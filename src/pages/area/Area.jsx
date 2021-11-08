import { useState, useEffect, useCallback } from 'react'
import { PageStyle } from '../../styles/PageStyle.style'
import { fetchMealsByArea } from './areaAPI'
import AreaSideBar from './AreaSideBar'
import MealsByArea from './MealsByArea'


export default function Area() {
  const [currentArea, setCurrentArea] = useState("American")
  const [currentAreasMeals, setCurrentAreasMeals] = useState([])

  const handleAreaChange = (clickedArea) => {
    setCurrentArea(clickedArea)
  }

  const getMealsByArea = useCallback(async (currentArea) => {
    const mealList = await fetchMealsByArea(currentArea)
    setCurrentAreasMeals(mealList)
  }, [])

  useEffect(()=> {
    getMealsByArea(currentArea)
  }, [currentArea, getMealsByArea])

  return (
    <PageStyle>
      <AreaSideBar currentArea={currentArea} handleAreaChange={handleAreaChange} />
      <MealsByArea currentArea={currentArea} mealList={currentAreasMeals} />
    </PageStyle>
  )
}
