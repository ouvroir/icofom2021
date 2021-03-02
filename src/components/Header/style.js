import styled from 'styled-components'
import { sizes } from '../../styles/Sizes'
import spacings from '../../styles/Paddings'

export const Header = styled.div`
  padding: 18px 0 116px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media ${sizes.laptop} {
    padding: 24px 0 206px;
  }

  h1 {
    margin-bottom: ${spacings.xs.mobile};

    @media ${sizes.laptop} {
      margin-bottom: ${spacings.xs.desktop}
    }
  }
`

export const HeaderLeft = styled.div`
  grid-column: span 5;
  grid-row: 2;
  margin-bottom: 24px;

  @media ${sizes.laptop} {
    margin-bottom: 0;
    grid-column: span 7;
    grid-row: span 2;
  } 
`

export const Switcher = styled.div`
  grid-column: span 5;
  grid-row: 1;
  margin-bottom: 24px;
  justify-self: start;

  @media ${sizes.laptop} {
    grid-column: 8 / span 3;
    grid-row: 1;
    justify-self: end;
  } 
`

export const Subscribe = styled.div`
  grid-column: 1 / span 5;
  grid-row: 3;
  justify-self: start;

  @media ${sizes.laptop} {
    grid-column: 8 / span 3;
    grid-row: 1;
    margin-top: 48px;
    justify-self: end;
  } 
`