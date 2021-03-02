import React from 'react'
import { useIntl, changeLocale } from 'gatsby-plugin-intl'

import * as T from '../../styles/Texts'
import * as S from './style'

const LangSwitcher = () => {

  const intl = useIntl()

  return (
    <section>
      <S.Button className={intl.locale === 'en' ? 'active' : null} onClick={() => changeLocale('en')}><T.Small>English</T.Small></S.Button>
      <S.Button className={intl.locale === 'fr' ? 'active' : null} onClick={() => changeLocale('fr')}><T.Small>Français</T.Small></S.Button>
      <S.Button className={intl.locale === 'es' ? 'active' : null} onClick={() => changeLocale('es')}><T.Small>Español</T.Small></S.Button>
    </section>
  )
}

export default LangSwitcher