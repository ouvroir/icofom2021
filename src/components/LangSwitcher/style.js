import styled from 'styled-components'
import colors from '../../styles/Colors'
import fonts from '../../styles/Typography'
import spacings from '../../styles/Paddings'
import { sizes } from '../../styles/Sizes'

export const Button = styled.button`
  background: none;
  border: none;
  margin-left: ${spacings.m.mobile};
  outline: none;
  @media ${sizes.laptop} {
    margin-left: ${spacings.m.desktop};
  }

  &:first-child {
    margin-left: 0;
  }
  
  padding: 0; 
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    width: 0;
    height: 1px; 
    background: ${colors.separator};
    position: absolute;
    bottom: 3px;
    left: 0;
  }

  &.active {
    span {
      font-weight: ${fonts.weights.medium};
    }
    &:after {
      content: "";
      width: 100%; 
    }
  }

  &:hover {
    &:after {
      content: "";
      width: 100%; 
    }
  }
`