import styled from 'styled-components'
import { sizes } from '../../styles/Sizes'
import colors from'../../styles/Colors'

export const DaySingle = styled.div`
  position: relative;
`

export const DayHeader = styled.div`
  border-top: 1px solid ${colors.border};
  padding: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;

  h2::first-letter {
    text-transform: uppercase;
  }

  @media ${sizes.laptop} {
    padding: 24px;
  }
`

export const DaySessions = styled.div`
  height: ${props => props.opened ? 'auto' : '0'};
  overflow: scroll;
`

export const Session = styled.div`

  padding: 26px 0 40px;
  border-bottom: 1px solid ${colors.border};

  &:last-child {
    border-bottom: none;
  }
`

export const SessionLeft = styled.div`
  grid-column: span 5;
  grid-row: 1 / span 1;
  display:flex; 
  flex-direction: column;
  justify-content: flex-start;
  justify-self: start;

  @media ${sizes.laptop} {
    grid-column: 1 / span 3;
    grid-row: 1 / span 1;
  }
`

export const SessionRight = styled.div`
  grid-column: span 5;
  grid-row: 2 / span 1;
  @media ${sizes.laptop} {
    grid-column: 5 / span 4;
    grid-row: 1 / span 2;
  }

  justify-self: start;
  padding-top: 48px;
  /* @media ${sizes.laptop} {
    padding-top: 52px;
  } */

  a {
    display: block;
  }
`

export const SessionMeta = styled.div`
  margin-top: 24px;
  display:flex; 
  flex-direction: column;
  justify-content: flex-start;
`

export const InterventionSingle = styled.div`
  margin-bottom: 24px;
`

export const SessionShareMob = styled.div`
  margin-top: 24px;
  grid-row: 3 / span 1;
  grid-column: 4 / span 2;
  display:flex;
  flex-direction: row;
  justify-content: flex-end;

  @media ${sizes.laptop} {
    display: none;
  }
`

export const SessionReplay = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 62.5%;
  position: relative;
  margin-top: 44px;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`

export const SessionShareDesk = styled.div`
  display: none;
  @media ${sizes.laptop} {
    display:block;
    margin-top: 44px;
  }
`