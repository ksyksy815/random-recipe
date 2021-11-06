import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipeByFoodName } from '../pages/category/categoryAPI'
import styled from 'styled-components'

const StyledRecipeByFoodName = styled.div`
  position: relative;
  top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  row-gap: 3rem;
  background: var(--light-beige);

  img {
    max-width: 400px;
  }
  section {
    width: 100%;
  }
  #top-section {
    width: 100%;
    display: flex;
    column-gap: 2rem;
    justify-content: flex-start;
  }

  #right-section {
    flex: 1 1 auto;
    h3 {
      border-bottom: 1px solid black;
    }
  }
  #extra-info {
    padding: 2rem;
    background: var(--beige);
    width: 400px;
  }
  #bottom-section {
    h3 {
      border-bottom: 1px solid black;
    }
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1rem;

    ul {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }
  }
`

export default function RecipeByFoodName() {
  const foodName = useParams().mealID
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [measures, setMeasures] = useState([])

  const getRecipe = useCallback(async (foodName) => {
    const receivedRecipe = await fetchRecipeByFoodName(foodName)
    
    setRecipe(receivedRecipe)
    setLoading(false)
  }, [])

  useEffect(()=> {
    getRecipe(foodName)
    
  }, [foodName, getRecipe])

  return (
    <StyledRecipeByFoodName>
      {
        loading ? <span> Loading... </span> :
        <>
          <section>
            <h1>{recipe.name}</h1>
            <div id="top-section">
              <img src={recipe.image} alt={recipe.name}/>
              <section id="right-section">
                <h3>Ingredients</h3>
                <ul>
                  {
                    recipe.ingredients.map(item => <li>{item}</li>)
                  }
                </ul>
              </section>
              <ul id="extra-info">
                <li>Category: {recipe.category}</li>
                <li>Area: {recipe.area}</li>
                <li>Tags: {recipe.tags}</li>
              </ul>
            </div>
          </section>
          <section id="bottom-section">
            <h3>Instructions</h3>
            <ul>
              {
                recipe.instructions.map(sentence => <li>{sentence}</li>)
              }
            </ul>
          </section>
        </>
      }
    </StyledRecipeByFoodName>
  )
}
