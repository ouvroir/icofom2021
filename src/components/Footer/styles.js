import styled from "styled-components";
import footer_pic from "../../images/footer_pic.png";
import { sizes } from "../../styles/Sizes";
import colors from "../../styles/Colors";

export const Footer = styled.footer``;

export const FooterPictures = styled.div`
  svg {
    display: none;
    @media ${sizes.laptop} {
      display: grid;
      grid-column: 9 / span 2;
      justify-self: end;
      align-self: end;
      margin-bottom: 24px;
    }
  }
`

export const FooterPicture = styled.div`
  grid-column: 1 / span 5;
  position: relative;
  width: calc(100% + 36px);
  /* padding-bottom: 60%; */
  margin-left: -18px;
  height: 256px;

  @media ${sizes.laptop} {
    grid-column: span 5;
    /* width: 50%; */
    height: 328px;
    margin: 0;
    margin-left: -24px;
    border-right: 1px solid ${colors.border};
  }

  background: url(${footer_pic}) no-repeat;
  background-size: cover;
  background-position: center center;

  span {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }

  svg {
    display: none;
    @media ${sizes.laptop} {
      display: unset;
    }
  }
`;

export const FooterContent = styled.div`
  padding: 24px 0;
  border-top: 1px solid ${colors.purple};

  @media ${sizes.laptop} {
    padding: 30px 0 10px;
  }
`;

export const FooterCredits = styled.div`
  grid-row: 2;
  grid-column: 1 / span 5;
  margin-top: 24px;

  span {
    font-size: 12px;
  }

  @media ${sizes.laptop} {
    grid-column: 1 / span 5;
    grid-row: unset;
    margin-top: 0;

    span {
      font-size: 14px;
    }
  }
`

export const FooterRight = styled.div`
  grid-row: 1;
  grid-column: 1 / span 5;

  display:flex;
  flex-direction: column;

  @media ${sizes.laptop} {
    grid-column: 6 / span 5;
    flex-direction: row;
    justify-self: end;
    grid-row: unset;

    > svg {
      display: none;
    }
  }

  a {
    margin-top: 84px;
    span {
      font-size: 12px;
    }

    @media ${sizes.laptop} {
      margin-top: 0;

      span {
        font-size: 14px;
      }
    }
  }
`;

export const FooterTexts = styled.div`
  span:first-child {
    margin-right: 24px;
  }

  @media ${sizes.laptop} {
    span:first-child {
      margin-right: 24px;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
  }
`