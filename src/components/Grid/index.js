
import React from 'react'
import styled from 'styled-components'
import { sizes } from '../../styles/Sizes'

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 18px;
  grid-auto-rows: minmax(min-content, max-content);
  padding: 0 18px;

  @media ${sizes.laptop} {
    grid-template-columns: repeat(10, 1fr);
    column-gap: 24px;
    padding: 0 24px;
  }
`

const Grid = ({ children }) => {

  return (
    <GridWrapper>
      {children}
    </GridWrapper>
  ) 
}

export default Grid