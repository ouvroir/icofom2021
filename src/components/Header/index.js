import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'

import LangSwitcher from '../LangSwitcher'
import ULink from '../ULink'
import Grid from '../Grid'
import Banner from '../Banner'

import * as S from './style'
import * as T from '../../styles/Texts'

const Header = () => {

  return(
    <>
      <Banner />
      <S.Header>
        <Grid>
          <S.HeaderLeft>
            <T.H1><FormattedMessage id="header.title" /></T.H1>
            <T.Span><FormattedMessage id="header.date" /></T.Span>
          </S.HeaderLeft>
          <S.Switcher>
            <LangSwitcher />
          </S.Switcher>
          <S.Subscribe>
            <ULink
              linkTo="https://www.eventbrite.ca/e/icofom-2021-decoloniser-la-museologie-decolonising-museology-tickets-142037950333"
              external
              large
            >
              <FormattedMessage id="buttons.subscribe" />
            </ULink>
          </S.Subscribe>
        </Grid>
      </S.Header>
    </>
  )
}

export default Header