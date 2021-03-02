import styled, { css } from 'styled-components'
import colors from '../../styles/Colors'

export const Navigation = styled.nav`
  border-bottom: 1px solid ${colors.border};
  /* position: fixed; */
  /* position: absolute; */
  /* top: 0; */
  width: 100%;
  position: relative;

  ${(props) =>
    props.sticky && 
    css`
      position: fixed;
      width: 100%;
      top: 0;
      height: 100vh;
      overflow:scroll;
      //top: ${({ index, headerHeight }) => (index*headerHeight+'px')};
    `}
`