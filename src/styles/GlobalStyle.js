import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --black: rgb(30, 30, 30);
    --white: rgb(255, 255, 255);
    --light-beige: rgb(245,245,245);
    --beige: rgb(235,226,217);
    --pink: rgb(232,205,199);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, input {
    outline: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle