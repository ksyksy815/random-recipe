import { useState } from 'react'
import styled from 'styled-components'
import RandomRecipe from '../../components/RandomRecipe'

const StyledMainPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  #main {
    padding: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background: var(--beige);
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);

    button {
      padding: 1rem;
      border: none;
      background: var(--light-beige);
      border-radius: 10px;
      transition: 0.2s;

      &:hover {
        background: var(--pink);
        cursor: pointer;
      }
    }
  }
`

export default function MainPage() {
  const [recipeOn, setRecipeOn] = useState(false)

  const handleClick = () => {
    setRecipeOn(true)
  }
  return (
    <StyledMainPage>
      <div id="main">
        {
          recipeOn ? 
          <RandomRecipe /> :
          <>
            <div>
              <h1>EAT WELL,</h1>
              <h1>LIVE WELL!</h1>
            </div>
            <p>Today's Food gives you a random food recipe that you can use to make a meal for today.</p>
            <button onClick={handleClick}>Get today's recipe</button>
          </>
        }
      </div>
    </StyledMainPage>
  )
}
