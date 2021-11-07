import { useState, useEffect, useCallback } from 'react'
import { fetchAreas } from './areaAPI'
import styled from 'styled-components'

const StyledAreaSideBar = styled.div`
  ul {
    background: var(--beige);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    li {
      padding: 1rem 3rem;
      width: 100%;
      transition: 0.2s;

      &:hover {
        cursor: pointer;
        background: var(--pink);
      }
    }
  }
`

export default function Area({ currentArea, handleAreaChange }) {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])

  const getAreaList = useCallback(async () => {
    const areaList = await fetchAreas()
    setList(areaList)
    setLoading(false)
  }, [])

  const handleClick = (e) => {
    handleAreaChange(e.target.textContent)
  }

  useEffect(() => {
    getAreaList()
  }, [getAreaList])

  return (
    <StyledAreaSideBar>
      {
        loading ? <span>Loading...</span> :
        <ul>
          {
            list.map(area => 
              <li key={area.strArea} onClick={handleClick}>{area.strArea}</li>
            )
          }
        </ul>
      }
    </StyledAreaSideBar>
  )
}
