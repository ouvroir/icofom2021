import styled, { css } from 'styled-components'
import { sizes } from '../../styles/Sizes'
import fonts from '../../styles/Typography'
import colors from '../../styles/Colors'

export const IntervenantAlphabet = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: none;

  @media ${sizes.laptop} {
    display: block;
  }

  ${(props) => props.sticky && css`
    position: fixed;
    top: 210px;

    @media ${sizes.laptop} {
      top: 234px;
    }
  `}
`

export const AlphaContent = styled.div`
  grid-column: span 5;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;

  @media ${sizes.laptop} {
    grid-column: 3 / span 6;
  }
`

export const AlphaLink = styled.a`
  text-decoration: none;
  padding: 0 5px;
  position: relative;
  color: ${colors.link};


  /* &:after {
    content: "";
    width: 0;
    height: 1px; 
    background: ${colors.separator};
    position: absolute;
    bottom: 3px;
    left: 0;
  } */

  &:hover {
    /* &:after {
      content: "";
      width: 100%; 
    } */
    text-decoration: underline;
  }
  
  ${(props) => props.active && css`
    font-weight: ${fonts.weights.medium};
    text-decoration: underline;
    /* &:after {
      content: "";
      width: 100%; 
    } */
  `}
`