import styled from 'styled-components'
import {sizes} from '../../../styles/Sizes'

export const PartnersSection = styled.section`
  padding: 20px 0 84px;

  @media ${sizes.laptop} {
    padding: 44px 0 116px;
  }
`

export const PartnerSingle = styled.div`

  margin-bottom: 30px;

  @media ${sizes.laptop} {
    margin-bottom: 20px;
  }

`

export const PartnerLink = styled.div`
  grid-column: 1 / span 5;
  margin-top: 20px;

  @media ${sizes.laptop} {
    grid-column: 5 / span 4;
    margin-top: 10px;
  }

  display:flex;
  flex-direction: column;
  justify-content: center;
`

export const PartnerPicture = styled.div`
  grid-column: 2 / span 3;

  @media ${sizes.laptop} {
    grid-column: 3 / span 2;
    padding: 20px;
  }

  img {
    width: 100%;
    height: auto;
  }
`