import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { fetchRandom } from './fetchRandom'

const StyledRandomRecipe = styled.div`
  #recipe-container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  #incredient-and-instruction {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }

  #ingredient-box {
    display: flex;
    flex-direction: column;
  }

  #instruction-box {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .mid-titles {
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: var(--black) 1px solid;
  }
`

export default function RandomRecipe() {
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)

  const getRandomRecipe = async () => {
    const fetchedRecipe = await fetchRandom()
    setRecipe(fetchedRecipe)
    
    setLoading(false)
  }

  
  useEffect(()=> {
    getRandomRecipe()
    
  }, [])

  return (
    <StyledRandomRecipe>
      {
        loading ? <div>Loading...</div> :
        <div id="recipe-container">
          <h2 id="recipe-title">{recipe.name}</h2>
          <img src={recipe.imageURL} alt={recipe.name} />
          <div id="incredient-and-instruction">
            <div id="ingredient-box">
              {
                recipe.ingredients.map((ingre, i) => <span>{ingre}: {recipe.measures[i]}</span>)
              }
            </div>
            <div id="instruction-box">
              <span className="mid-titles">Instructions</span>
              <p>{recipe.instructions}</p>
            </div>
          </div>

        </div>
      }
    </StyledRandomRecipe>
  )
}

  