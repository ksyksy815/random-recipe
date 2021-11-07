import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fetchRecipeByFoodName } from '../category/categoryAPI'

const StyledMealsByArea = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2rem;

  h1 {
    border-bottom: 1px solid black;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem;
    gap: 2rem;
    
    li {
      width: 100%;

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 1rem;
        color: black;
        img {
          width: 200px;
          border-radius: 50%;
        }
        span {
          padding: 1rem;
          text-align: center;
        }
      }
    }
  }
`

export default function MealsByArea( { currentArea, mealList } ) {

  return (
    <StyledMealsByArea>
      <h1>{currentArea}</h1>
      <ul>
        {
          mealList.map(meal => {
            return (
              <li key={meal.idMeal} id={meal.idMeal}>
                <Link to={`/recipe/${meal.idMeal}`}>
                  <img src={meal.strMealThumb} alt={meal.strMeal}/>
                  <span>{meal.strMeal}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </StyledMealsByArea>
  )
}
