import styled, { css } from "styled-components";
import { sizes } from "../../../styles/Sizes";
import colors from "../../../styles/Colors";

export const IntervenantsSection = styled.section`
  background: ${colors.white};
  /* padding: 0 0 116px; */
  padding: 0 0 84px;

  @media ${sizes.laptop} {
    padding: 0 0 116px;
  }
`

export const IntervenantsIntro = styled.div`
  grid-column: span 5;
  padding: 54px 0 96px;
  @media ${sizes.laptop} {
    grid-column: 3 / span 6;
    padding: 44px 0 116px;
  }

  

  ${(props) => props.sectionActive && props.sectionSticky && css`
    @media ${sizes.laptop} {
      padding-top: 74px;
    }
  `}
`

export const LinkContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;

  @media ${sizes.laptop} {
    flex-direction: row;
  }

  a {
    &:first-child {
      margin-bottom: 24px;

      @media ${sizes.laptop} {
        margin-right: 24px;
        margin-bottom: 0;
      }
    }
  }
`

export const IntervenantContent = styled.div`
`