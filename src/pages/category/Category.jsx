import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CategoryList from './CategoryList'
import { fetchCategory } from './categoryAPI'

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60px;
  background: var(--light-beige);
`

export default function Category() {
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState([])

  const getCategory = async () => {
    const categories = await fetchCategory()
    setCategory(categories)
    setLoading(false)
  }

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <StyledCategory>
      {
        loading ? <span> Loading...</span> :
        <CategoryList category={category} />
      }
    </StyledCategory>
  )
}
