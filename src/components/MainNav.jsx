import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  background: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  padding: 0 3rem;

  ul {
    display: flex;
    column-gap: 3rem;
  }
`

export default function MainNav() {
  return (
    <StyledNav>
      <h1>Today's Food</h1>
      <ul>
        <li>Home</li>
        <li>Category</li>
        <li>Something</li>
      </ul>
    </StyledNav>
  )
}
