import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import Grid from '../Grid'
import ULink from '../ULink'
import * as S from './styles'
import * as T from '../../styles/Texts'

const LetterSingle = (props) => {

  let intl = useIntl()
  let data = props.data
  let letter = props.letter

  return(
    <S.LetterSingle
      id={`intervenants-${letter}`}
    >
      <T.Small>{letter}</T.Small>
      {data.map(intervenant => (
        <S.IntervenantSingle
          id={intervenant.id}
          key={intervenant.fullName}
        >
          <Grid>
            <S.IntervenantLeft>
              <T.Mark>{intervenant.fullName}</T.Mark>
            </S.IntervenantLeft>
            <S.IntervenantRight>
              <T.P>{intervenant.presentation}</T.P>
              <S.IntervenantTexts>
                {(typeof intervenant.texte !== "undefined") && (typeof intervenant.intervention !== "undefined") && (
                    <ULink
                      linkTo={`/publications/${intervenant.texte}`}
                      small
                      external
                    >
                      <T.Mark>
                      {(typeof intervenant.intervention === "object")
                      ? intervenant.intervention[intl.locale]
                        : intervenant.intervention}
                      </T.Mark>
                    </ULink>
                  )
                }
              </S.IntervenantTexts>
              <S.IntervenantSessions>
                {intervenant.sessions.map((sessionObj, index) => (
                  <ULink
                    linkTo={`#${sessionObj.session.id}`}
                    small
                    internal
                    destination='program'
                    key={`session-${index}`}
                  >
                    <T.Mark>
                    {sessionObj.day.toLocaleDateString(`${intl.locale}-CA`, {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}, {sessionObj.session.titles[intl.locale]}</T.Mark>
                  </ULink>
                ))}
              </S.IntervenantSessions>
            </S.IntervenantRight>
          </Grid>
        </S.IntervenantSingle>
      ))}
    </S.LetterSingle>
  )
}

export default LetterSingle