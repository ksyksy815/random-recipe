import { useState, useEffect } from 'react'
import { PageStyle } from "../../styles/PageStyle.style"
import CategoryList from './CategoryList'
import { fetchCategory } from './categoryAPI'

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
    <PageStyle>
      {
        loading ? <span> Loading...</span> :
        <CategoryList category={category} />
      }
    </PageStyle>
  )
}
