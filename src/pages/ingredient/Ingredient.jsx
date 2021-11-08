import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { PageStyle } from '../../styles/PageStyle.style'
import { fetchRecipesByIngredient } from './ingredientAPI'
import IngredientItem from './IngredientItem'
import { replaceWithUnderbar } from "./utils"

const StyledIngredientPage = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  min-height: 100vh;
  background: var(--beige);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: var(--beige);
    row-gap: 2rem;
  }
`

const SearchForm = styled.form`
  width: 525px;
  display:flex;
  flex-direction: column;
  padding: 3rem;
  row-gap: 1rem;
  background: var(--beige);

  input {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
  }

  button {
    padding: 0.5rem 2rem;
    align-self: center;
    border: none;
    background: black;
    color: #fff;
  }
`

export default function Ingredient() {
  const [searchWord, setSearchWord] = useState('')
  const [ingredientList, setIngredientList] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const getList = async (ingredient) => {
    const list = await fetchRecipesByIngredient(ingredient)
    setIngredientList(list)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const word = replaceWithUnderbar(searchWord)
    await getList(word)
    
    setSearched(true)
  }

  const handleChange = (e) => {
    setSearchWord(e.target.value)
  }

  return (
    <StyledIngredientPage>
      <SearchForm onSubmit={handleSubmit}> 
        <h1>Search recipes by ingredients!</h1>
        <input type="text" onChange={handleChange}/>
        <button>Search</button>
      </SearchForm>
      <ul>
        {
          searched ? (
            ingredientList === null ? <span>No result.</span> :
            ingredientList.map(item => 
            <IngredientItem 
              key={item.idMeal}
              id={item.idMeal} 
              meal={item.strMeal} 
              imageURL={item.strMealThumb}
            />) 
          )
          : <></>
        }
      </ul>
    </StyledIngredientPage>
  )
}
