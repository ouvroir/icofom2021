import styled from 'styled-components'
import colors from '../../styles/Colors'
import { sizes } from '../../styles/Sizes'

export const Banner = styled.div`
  width: 100%;
  background: ${colors.purple};
  padding: 18px 0;
  @media ${sizes.laptop} {
    padding: 24px 0;
  }
  position: relative;
  overflow: hidden;
  margin: 0 auto;
`

export const BannerContainer = styled.div`
  position: relative;
  /* animation: moveSlideshow 5s linear infinite; */
  transform: translate3d(0, 0, 0);
  display:flex;
  justify-content: flex-start;
  width: 5000px;
  
  a {
    color: ${colors.white};
    text-decoration : none;
  }

  div {
    animation: moveSlideshow 20s linear infinite;
    padding-left: 0 20px;
  }

  @keyframes moveSlideshow {
    0% { transform: translateX(0%)}
    100% { transform: translateX(-100%);}
  }
`