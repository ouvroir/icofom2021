import React from "react";
import {useIntl, FormattedMessage } from "gatsby-plugin-intl";

import Grid from "../../Grid";
import ULink from "../../ULink";
import IntervenantAlphabet from "../../IntervenantAlphabet"
import LetterSingle from "../../LetterSingle"

import { useTreatIntervenants } from '../../../utils/treatData'

import * as S from "./styles";
import * as T from "../../../styles/Texts";

const IntervenantsSection = (props) => {

  const intervenants = useTreatIntervenants()
  const intl = useIntl()

  let commLink
  switch(intl.locale) {
    case 'en':
    default:
      commLink = "http://www.icofom2021.ca/fr/publications/icofom2021-yves-bergeron-michele-rivet-en"
      break;
    case 'fr':
      commLink = "http://www.icofom2021.ca/fr/publications/icofom2021-yves-bergeron-michele-rivet-fr"
      break;
    case 'es':
      commLink = "http://www.icofom2021.ca/fr/publications/icofom2021-yves-bergeron-michele-rivet-es"
      break
  }

  let actesLink
  switch(intl.locale) {
    case 'en':
    default:
      actesLink = "http://www.icofom2021.ca/publications/icofom2021-materials.pdf"
      break;
    case 'fr':
      actesLink = "http://www.icofom2021.ca/publications/icofom2021-materials.pdf"
      break;
    case 'es':
      actesLink = "http://www.icofom2021.ca/publications/icofom2021-materials.pdf"
      break
  }

  return (
    <S.IntervenantsSection>
      <IntervenantAlphabet
          sectionActive={props.sectionActive}
          sectionSticky={props.sectionSticky}
          intervenants={intervenants}
        >
      </IntervenantAlphabet>
      <Grid>
        <S.IntervenantsIntro
          sectionActive={props.sectionActive}
          sectionSticky={props.sectionSticky}
        >
          <T.P>
            <FormattedMessage
              id="intervenants.description"
              values={{
                p: (...chunks) => <p>{chunks}</p>,
              }}
            />
          </T.P>
          <S.LinkContainer>
            <ULink linkTo={commLink} external large>
              <FormattedMessage id="buttons.introduction" />
            </ULink>
            <ULink linkTo={actesLink} external large>
              <FormattedMessage id="buttons.actes" />
            </ULink>
            {/* <ULink linkTo={commLink} external large>
              <FormattedMessage id="buttons.communicationPrompt" />
            </ULink> */}
          </S.LinkContainer>
        </S.IntervenantsIntro>
      </Grid>
      <S.IntervenantContent>
          {Object.keys(intervenants).map(letter => (
            <LetterSingle
              data={intervenants[letter]}
              letter={letter}
              key={letter}
            />
          ))}
      </S.IntervenantContent>
    </S.IntervenantsSection>
  );
};

export default IntervenantsSection;
