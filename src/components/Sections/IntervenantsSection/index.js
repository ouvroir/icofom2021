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
      commLink = "https://drive.google.com/file/d/1m8A34Ie70Rd3NK8hHT5v-KA0SAaU4ylV/view?usp=sharing"
      break;
    case 'fr':
      commLink = "https://drive.google.com/file/d/1vN0UirP43uMPYpT08N054Hf1jioJ28AK/view?usp=sharing"
      break;
    case 'es':
      commLink = "https://drive.google.com/file/d/1FHHIdS50tmstKLlK35jFpxviQ3OE-bzK/view?usp=sharing"
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
              <FormattedMessage id="buttons.communicationPrompt" />
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
