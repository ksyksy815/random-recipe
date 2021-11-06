import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledCategoryList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem;
  gap: 2rem;
   a {
     color: black;
   }
  li {
    background: white;
    padding: 2rem;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);

    h3 {
      align-self: center;
    }

    &:hover {
      cursor: pointer;
      transform: translateY(-2px);
      background: var(--beige);
    }
  }
`

export default function CategoryList({category}) {
  return (
    <StyledCategoryList>
      {
        category.map(item => {
          return (
            <li key={item.idCategory} id={item.strCategory}>
              <Link to={`/category/${item.strCategory}`}>
                <img src={item.strCategoryThumb} alt={item.strCategory} id={item.strCategory}/>
                <h3>{item.strCategory}</h3>
                <p>{item.strCategoryDescription}</p>
              </Link>
            </li>
          )
        })
      }
    </StyledCategoryList>
  )
}
