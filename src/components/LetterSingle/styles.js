import styled from 'styled-components'
import colors from '../../styles/Colors'
import {sizes} from '../../styles/Sizes'

export const LetterSingle = styled.section`
  border-top: 1px solid ${colors.border};
  padding: 24px 0 0;

  &:last-child {
    section {
      padding-bottom: 0;
    }
  }

  >span {
    display: block;
    text-transform: uppercase;
    grid-column: span 5;
    margin-bottom: 24px;
    margin-left: 16px;
    @media ${sizes.laptop} {
      grid-column: span 10;
      margin-left: 22px;
    }
  }
`

export const IntervenantSingle = styled.section`
  grid-column: span 5;
  padding: 64px 0;
  border-bottom: 1px solid ${colors.border};
  &:last-child {
    border-bottom: 0;
  }
  @media ${sizes.laptop} {
    padding-bottom: 72px 0;
    grid-column: span 10
  }
`

export const IntervenantLeft = styled.div`
  grid-column: span 5;
  @media ${sizes.laptop} {
    grid-column: 1 / span 2
  }
`

export const IntervenantRight = styled.div`
  grid-column: span 5;
  margin-top: 5px;
  @media ${sizes.laptop} {
    margin-top: 0;
    grid-column: 3 / span 6;
  }
`

export const IntervenantTexts = styled.div`
  margin-top: 44px;
  display:flex;
  flex-direction: column;
  @media ${sizes.laptop} {
    margin-top: 20px;
  }
`

export const IntervenantSessions = styled.div`
  margin-top: 24px;
  display:flex;
  flex-direction: column;

  span::first-letter {
    text-transform: uppercase;
  }
`
