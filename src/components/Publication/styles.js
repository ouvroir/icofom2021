import styled from "styled-components";
import { sizes } from "../../styles/Sizes";
import colors from "../../styles/Colors";
import public_pic from '../../images/public_pic.png'

export const PubliWrapper = styled.main``;

export const PubliDownload = styled.div`
  padding: 18px 18px;
  position: fixed; 
  top: 0;
  width: 100%;
  background: ${colors.white};
  @media ${sizes.laptop} {
    padding: 20px 20px;
  }

  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  border-bottom: 1px solid ${colors.border};
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const PubliMetadata = styled.section`
  margin-top: 116px;
  grid-column: span 5;
  @media ${sizes.laptop} {
    margin-top: 188px;
    grid-column: 3 / span 6;
  }

  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 0;
    margin-bottom: 64px;

    @media ${sizes.laptop} {
      margin-top: 0;
      margin-bottom: 72px;
    }
  }
`;

export const PubliContent = styled.section`
  margin-top: 64px;
  margin-bottom: 64px;

  grid-column: span 5;
  @media ${sizes.laptop} {
    grid-column: 3 / span 6;
  }

  @media ${sizes.laptop} {
    margin-top: 116px;
    margin-bottom: 72px;
  }

  // MD markup styling
  h2 {
    font-family: "Aktiv Grotesk";
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${colors.purple};
    margin: 72px 0 24px;

    @media ${sizes.laptop} {
      font-size: 18px;
      line-height: 32px;
      margin: 64px 0 24px;
    }
  }

  h3 {
    font-family: "Warnock Pro Regular";
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 15px;
    color: ${colors.purple};

    @media ${sizes.laptop} {
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 12px;
    }
  }

  blockquote {
    padding: 24px 0;
    font-style: italic;

    @media ${sizes.laptop} {
      padding: 44px 95px 44px 44px;
    }
  }

  p,
  li {
    font-family: "Warnock Pro Regular";
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    &p {
      margin-bottom: 15px;
    }

    &li {
      margin-bottom: 10px;
    }

    color: ${colors.purple};

    @media ${sizes.laptop} {
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 12px;
    }

    em {
      font-style: italic;
    }

    sup {
      a {
        font-family: "Aktiv Grotesk";
        text-decoration: none;
        font-weight: 500;
        vertical-align: super;
        font-size: 12px;
        color: ${colors.purple};
        /* line-height: 26px; */

        @media ${sizes.laptop} {
          line-height: 20px;
        }
      }
    }

    strong {
      font-family: "Aktiv Grotesk";
      font-weight: 500;
      font-size: 14px;
      @media ${sizes.laptop} {
        font-size: 18px;
      }
    }

    a {
      color: ${colors.content};
      font-family: "Aktiv Grotesk";
      font-weight: 500;
      font-size: 14px;
      @media ${sizes.laptop} {
        font-size: 18px;
      }
    }
  }

  div.footnotes {
    margin-top: 64px;
    hr {
      display: none;
    }

    @media ${sizes.laptop} {
      margin-top: 72px;
    }

    ol {
      counter-reset: notes-counter;
      li {
        font-family: "Aktiv Grotesk";
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 24px;
        counter-increment: notes-counter;

        @media ${sizes.laptop} {
          font-size: 14px;
          line-height: 24px;
        }

        &:before {
          content: counter(notes-counter);
          color: ${colors.content};
          font-family: "Aktiv Grotesk";
          text-decoration: none;
          font-weight: 600;
          vertical-align: super;
          font-size: 12px;
          color: ${colors.purple};
          /* line-height: 26px; */
          margin-right: 10px;

          @media ${sizes.laptop} {
            line-height: 20px;
          }
        }

        &::last-child {
          margin-bottom: 0;
        }

        a {
          display: none;
        }
      }
    }
  }
`;

export const PubliFooter = styled.div`
  height: 354px;
  width: 100%;
  background: url(${public_pic});
  background-size: cover;
  background-position: top center;
`