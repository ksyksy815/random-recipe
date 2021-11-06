import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchByCategory } from './categoryAPI'
import styled from 'styled-components'

const StyledCategoryByName = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  background: var(--light-beige);

  h1 {
    border-bottom: 2px solid black;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    a {
      color: black;
    }
    li {
      max-width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      padding: 1rem;
      transition: 0.2s;

      &:hover {
        cursor: pointer;
        transform: translateY(-3px);
      }

      img {
        width: 200px;
        border-radius: 50%;
        margin-bottom: 1rem;
        
      }

      h3 {
        text-align: center;
      }
    }
  }
`

export default function CategoryByName() {
  const params = useParams().categoryName
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)

  const getMealsByCategory = async (params) => {
    const meals = await fetchByCategory(params)
    setMeals(meals)
    setLoading(false)
  }

  useEffect(() => {
    getMealsByCategory(params)
  }, [params])

  return (
    <StyledCategoryByName>
      <h1>{params}</h1>
      {
        loading ? <span>Loading...</span> :
        <ul>
          {
            meals.map(meal =>
              <li key={meal.idMeal}>
                <Link to={`/recipe/${meal.idMeal}`}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <h3>{meal.strMeal}</h3>
                </Link>
              </li>
            )
          }
        </ul>
      }
    </StyledCategoryByName>
  )
}
