import { BrowserRouter as Router } from "react-router-dom"
import styled from 'styled-components'
import MainNav from "./components/MainNav"
import RandomRecipe from "./components/RandomRecipe"
import MainPage from "./pages/main/MainPage"

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--light-beige);
`

function App() {
  return (
    <Router>
      <Container>
        <MainNav />
        <MainPage />
      </Container>
    </Router>
  );
}

export default App;
