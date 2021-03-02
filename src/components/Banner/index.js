import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'

import * as T from '../../styles/Texts'
import * as S from './styles'

const Banner = () => {

  let link = "https://www.eventbrite.ca/e/icofom-2021-decoloniser-la-museologie-decolonising-museology-tickets-142037950333";
  return(
    <S.Banner>
      <S.BannerContainer>
        {/* <T.Span><FormattedMessage id="header.banner" /></T.Span>
        <T.Span><FormattedMessage id="header.banner" /></T.Span>
        <T.Span><FormattedMessage id="header.banner" /></T.Span> */}
        <div>
          <T.Span><a href={link} target="_blank" rel="noreferrer"><FormattedMessage id="header.banner" />&nbsp;&nbsp;&nbsp;&nbsp;✺&nbsp;&nbsp;&nbsp;&nbsp;</a></T.Span>
          <T.Span><a href={link} target="_blank" rel="noreferrer"><FormattedMessage id="header.banner" />&nbsp;&nbsp;&nbsp;&nbsp;✺&nbsp;&nbsp;&nbsp;&nbsp;</a></T.Span>
          <T.Span><a href={link} target="_blank" rel="noreferrer"><FormattedMessage id="header.banner" />&nbsp;&nbsp;&nbsp;&nbsp;✺&nbsp;&nbsp;&nbsp;&nbsp;</a></T.Span>
        </div>
        <div>
          <T.Span><a href={link} target="_blank" rel="noreferrer"><FormattedMessage id="header.banner" />&nbsp;&nbsp;&nbsp;&nbsp;✺&nbsp;&nbsp;&nbsp;&nbsp;</a></T.Span>
          <T.Span><a href={link} target="_blank" rel="noreferrer"><FormattedMessage id="header.banner" />&nbsp;&nbsp;&nbsp;&nbsp;✺&nbsp;&nbsp;&nbsp;&nbsp;</a></T.Span>
          <T.Span><a href={link} target="_blank" rel="noreferrer"><FormattedMessage id="header.banner" />&nbsp;&nbsp;&nbsp;&nbsp;✺&nbsp;&nbsp;&nbsp;&nbsp;</a></T.Span>
        </div>
      </S.BannerContainer>
    </S.Banner>
  )
}

export default Banner