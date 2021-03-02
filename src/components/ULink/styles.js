import styled, {css} from 'styled-components'
import { sizes } from '../../styles/Sizes'
import colors from '../../styles/Colors'

export const Link = styled.a`
  display: inline-block;

  ${props => (props.large) && css`
    padding: 19px 16px 19px 26px;
    border: 1px solid ${colors.border};
    @media ${sizes.laptop} {
      padding: 20px 26px 20px 36px;
    }

    &:hover {
      span {
        text-decoration: underline;
      }
    }
  `}

  svg {
    margin-top: -2px;
    margin-left: -4px;
    line-height: 30px;
    vertical-align: middle;
  }

`

export const LinkContainer = styled.div`
  display: inline;
  position: relative;

  ${props => (props.small) && css`

    &:hover {
      span {
        text-decoration: underline;
      }
    }
    /* &:after {
      content: "";
      width: 0;
      height: 1px; 
      background: ${colors.separator};
      position: absolute;
      bottom: -3px;
      left: 0;
    }

    &:hover {
      &:after {
        content: "";
        width: calc(100% - 10px); 
      }
    } */
  `}
`