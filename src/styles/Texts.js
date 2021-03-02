import styled from 'styled-components'
import fonts from './Typography'
import { sizes } from './Sizes'
import colors from './Colors'

let ffamily = fonts.family,
    fweight = fonts.weights,
    fsize = fonts.sizes

export const H1 = styled.h1`
  font-family: ${ffamily.title};
  font-weight: ${fweight.regular};
  font-size: ${fsize.title.mobile};
  line-height: 34px;
  @media ${sizes.laptop} {
    font-size:${fsize.title.desktop};
    line-height: 64px;
  }
  color: ${colors.title};
`

export const H1b = styled.h1`
  font-family: ${ffamily.title};
  font-weight: ${fweight.regular};
  font-size: 40px;
  line-height: 34px;
  @media ${sizes.laptop} {
    font-size:44px;
    line-height: 50px;
  }
  color: ${colors.title};
`

export const H2 = styled.h2`
  font-family: ${ffamily.navs};
  font-weight: ${fweight.regular};
  font-size: ${fsize.navs.mobile};
  @media ${sizes.laptop} {
    font-size:${fsize.navs.desktop}
  }
  color: ${colors.navs};
  line-height: 32px;
`

export const H3 = styled.h3`
  font-family: ${ffamily.h3};
  font-weight: ${fweight.light};
  font-size: ${fsize.h3.mobile};
  line-height: 16px;
  @media ${sizes.laptop} {
    font-size:${fsize.h3.desktop};
    line-height: 18px;
  }
  color: ${colors.highlight};
`

export const A = styled.span`
  font-family: ${ffamily.navs};
  font-weight: ${fweight.medium};
  font-size: ${fsize.navs.mobile};
  line-height: 26px;
  @media ${sizes.laptop} {
    font-size:${fsize.navs.desktop};
    line-height: 32px;
  }
  color: ${colors.link};
  position: relative;
  display: inline-block;
  /* text-decoration:none; */

  /* &:after {
    content: "";
    position:absolute;
    bottom: -4px;
    left: auto;
    right:0%;
    width: 0;
    height: 1px;
    background: ${colors.highlight};
    transition: width .2s ease-in-out;
  }

  &:hover {
    &:after {
      width: 100%;
      right:0;
      left: 0;
    }
  } */
`

export const P = styled.span`
  font-family: ${ffamily.content};
  font-weight: ${fweight.light};
  font-size: ${fsize.content.mobile};
  line-height: 26px;
  @media ${sizes.laptop} {
    font-size:${fsize.content.desktop};
    line-height: 32px;
  }
  color: ${colors.content};
`

export const Span = styled.span`
  font-family: ${ffamily.spans};
  font-weight: ${fweight.regular};
  font-size: ${fsize.spans.mobile};
  line-height: 26px;
  @media ${sizes.laptop} {
    font-size:${fsize.spans.desktop};
    line-height: 32px;;
  }
  color: ${colors.content};
`

export const Mark = styled.span`
  font-family: ${ffamily.marks};
  font-weight: ${fweight.medium};
  font-size: ${fsize.marks.mobile};
  line-height: 26px;
  @media ${sizes.laptop} {
    font-size:${fsize.marks.desktop};
    line-height: 32px;
  }
  color: ${colors.highlight};
`

export const Small = styled.span`
  font-family: ${ffamily.small};
  font-weight: ${fweight.regular};
  font-size: ${fsize.small.mobile};
  line-height: 20px;
  letter-spacing: 0.5px;
  @media ${sizes.laptop} {
    font-size:${fsize.small.desktop};
    line-height: 24px;
  }
  color: ${colors.highlight};
`

export const XSmall = styled.span`
  font-family: ${ffamily.small};
  font-weight: ${fweight.regular};
  font-size: 10px;
  line-height: 26px;
  @media ${sizes.laptop} {
    font-size: 11px;
    line-height: 32px;
  }
  color: ${colors.highlight};
`

export const SmallBold = styled.span`
  font-family: ${ffamily.small};
  font-weight: ${fweight.medium};
  font-size: ${fsize.small.mobile};
  line-height: 20px;
  letter-spacing: 0.5px;
  @media ${sizes.laptop} {
    font-size:${fsize.small.desktop};
    line-height: 24px;
  }
  color: ${colors.highlight};
`

export const I = styled.i`
  color:${colors.highlight}
`