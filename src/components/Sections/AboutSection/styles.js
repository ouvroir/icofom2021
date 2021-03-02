import styled from 'styled-components'
import { sizes } from '../../../styles/Sizes'
import colors from '../../../styles/Colors'

export const AboutSection = styled.section`
  background: ${colors.white};
  padding: 20px 0 84px;

  @media ${sizes.laptop} {
    padding: 44px 0 116px;
  }
`

export const AboutSectionWrapper = styled.div`
  grid-column: span 5;
  @media ${sizes.laptop} {
    grid-column: 3 / span 6;
  }

  a {
    margin-top: 24px;
  }

  > span p {
    margin-bottom: 10px;
    @media ${sizes.laptop} {
      margin-bottom: 12px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const Comitee = styled.div`
  margin-top: 72px;

  ul {
    margin-top: 24px;

    li {
      line-height: 32px;
      @media ${sizes.laptop} {
        line-height: 24px;
      }
    }
  }
`

export const ComiteeContent = styled.ul`
  margin-top: 44px;
  ul {
    display:flex;
    flex-flow: row wrap;
    /* justify-content: flex-start; */

    li {
      line-height: 24px;
      margin-right: 5px;
      @media ${sizes.laptop} {
        line-height: 32px;
      }
    }
  }
`