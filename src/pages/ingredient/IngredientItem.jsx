import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledIngredientItem = styled.li`
  width: 525px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    row-gap: 1rem;
  }
  
  img {
    width: 200px;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }
`

export default function IngredientItem( { id, meal, imageURL } ) {
  
  return (
    <StyledIngredientItem id={id}>
      <Link to={`/recipe/${id}`}>
        <img src={imageURL} alt={id}></img>
        <span className="ingredient">{ meal }</span>
      </Link>
    </StyledIngredientItem>
  )
}
