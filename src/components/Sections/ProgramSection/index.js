import React from "react";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";

import Grid from "../../Grid";
import ULink from "../../ULink";
import DaySingle from "../../DaySingle"

import { useTreatProgram } from '../../../utils/treatData'

import * as S from "./styles";
import * as T from "../../../styles/Texts";

const ProgramSection = (props) => {

  const days = useTreatProgram()
  const intl = useIntl()

  let zoomLink
  days.forEach(day => {
    if(day.dayShouldOpen) {
      zoomLink = 
      <ULink linkTo={day.zoomLink} external large>
        <FormattedMessage id="buttons.joinZoom" />
      </ULink>
    }
  })

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
    <S.ProgramSection>
      <Grid>
        <S.ProgramIntro>
          <T.P>
            <FormattedMessage
              id="program.description"
              values={{
                p: (...chunks) => <p>{chunks}</p>,
              }}
            />
          </T.P>
          <S.LinkContainer>
            <ULink linkTo="https://www.eventbrite.ca/e/icofom-2021-decoloniser-la-museologie-decolonising-museology-tickets-142037950333" external large>
              <FormattedMessage id="buttons.subscribe" />
            </ULink>
            {zoomLink}
            {/* <ULink linkTo="https://google.com" external large>
              <FormattedMessage id="buttons.joinZoom" />
            </ULink> */}
          </S.LinkContainer>
        </S.ProgramIntro>
      </Grid>
      <S.ProgramDays>
        {days.map((day, index) => (
          <DaySingle
            shouldClose={!props.sectionActive}
            forceOpen={props.forceOpenDays}
            key={`day-${index}`}
            data={day}
          />
        ))}
      </S.ProgramDays>
      <S.ProgramCommunication>
        <ULink
          small
          external
          linkTo={commLink}
        ><FormattedMessage id="buttons.communicationPrompt" /></ULink>
      </S.ProgramCommunication>
    </S.ProgramSection>
  );
};

export default ProgramSection;
