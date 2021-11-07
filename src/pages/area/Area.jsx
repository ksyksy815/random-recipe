import { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { fetchMealsByArea } from './areaAPI'
import AreaSideBar from './AreaSideBar'
import MealsByArea from './MealsByArea'

const StyledArea = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  min-height: 100vh;
  background: var(--light-beige);
  display: flex;
  justify-content: flex-start;
`
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
    <StyledArea>
      <AreaSideBar currentArea={currentArea} handleAreaChange={handleAreaChange} />
      <MealsByArea currentArea={currentArea} mealList={currentAreasMeals} />
    </StyledArea>
  )
}
