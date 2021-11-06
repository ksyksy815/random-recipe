import { Link } from 'react-router-dom'
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
  z-index: 10;

  ul {
    display: flex;
    column-gap: 3rem;
    
    a {
      color: #fff;
    }
  }
`

export default function MainNav() {
  return (
    <StyledNav>
      <h1>Today's Food</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category">Category</Link></li>
      </ul>
    </StyledNav>
  )
}
