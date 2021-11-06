import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from 'styled-components'
import MainNav from "./components/MainNav"
import MainPage from "./pages/main/MainPage"
import Category from './pages/category/Category'
import CategoryByName from "./pages/category/CategoryByName"
import RecipeByFoodName from './components/RecipeByFoodName'

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
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:categoryName" element={<CategoryByName />} />
          <Route path="/recipe/:mealID" element={<RecipeByFoodName />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
