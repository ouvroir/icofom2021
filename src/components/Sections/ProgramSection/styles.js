import styled from "styled-components";
import { sizes } from "../../../styles/Sizes";
import colors from "../../../styles/Colors";

export const ProgramSection = styled.section`
  background: ${colors.white};
  padding: 20px 0 84px;

  @media ${sizes.laptop} {
    padding: 44px 0 116px;
  }
`;

export const ProgramIntro = styled.div`
  grid-column: span 5;
  @media ${sizes.laptop} {
    grid-column: 3 / span 6;
  }
`;

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
    &:nth-child(2) {
      margin-top: 24px;

      @media ${sizes.laptop} {
        margin-left: 24px;
        margin-bottom: 0;
      }
    }
  }
`;

export const ProgramDays = styled.div`
  border-bottom: 1px solid ${colors.border};
  margin-top: 96px;

  @media ${sizes.desktop} {
    margin-top: 116px;
  }
`;

export const ProgramCommunication = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 16px;
  margin-top: 24px;

  @media ${sizes.laptop} {
    margin-right: 24px;
  }
`;
