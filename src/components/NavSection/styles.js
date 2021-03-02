import styled, { css } from "styled-components";
import colors from "../../styles/Colors";
import { sizes } from "../../styles/Sizes";

export const NavSection = styled.section`
  overflow: hidden;
  width: 100%;
  height: ${(props) => (props.active ? props.height + "px" : props.headerHeight + "px")};
  /* transition: height .2s ease-in-out; */
  /* transition-delay: ${({ active }) => (active ? "0s" : "1s")}; */
`;

export const NavSectionHeader = styled.div`
  border-top: 1px solid ${colors.border};
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  z-index: 3;

  @media ${sizes.laptop} {
    padding: 20px;
  }

  background: ${(props) => props.active ? 'none' : '#FFF'};

  ${(props) =>
    props.sticky &&
    css`
      position: fixed;
      width: 100%;
      top: ${props => (props.headerHeight*props.index)+'px'};
      //top: ${({ index, headerHeight }) => (index*headerHeight+'px')};
    `}
`;

export const NavSectionContent = styled.div`
  ${(props) =>
    props.sticky &&
    css`
      padding-top: ${props => (props.headerHeight)+'px'};
    `}
`;

export const Intersector = styled.div`
  position: fixed;
  top: 0;
  height: 3px;
  width: 100%;
  background: purple;
  z-index: 3;

`;

export const PlusIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;

  &:before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${colors.border};
    transition: transform .3s ease-out, opacity .3s ease-out .1s;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  ${(props) => props.active && css`
    &:after {
      transform: translate(-50%, -50%) rotate(-90deg);
      opacity: 0;
    }

    &:before {
      transform: translate(-50%, -50%);
    }

    &:after, 
    &:before {
      transition: transform .3s ease-out, opacity .3s ease-out;
    }
  `}
`;
