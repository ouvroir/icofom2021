import React from 'react'

import Grid from '../../Grid'
import ULink from '../../ULink'

import * as S from './styles'

import { useTreatPartners } from '../../../utils/treatData'

const PartnersSection = () => {

  const partners = useTreatPartners()
  
  return(
    <S.PartnersSection>
      {partners.map((partner, index) => (
        <S.PartnerSingle
          key={`partner-${index}`}
        >
          <Grid>
            <S.PartnerPicture>
              <img src={`/${partner.partnerPicture}.png`} alt={partner.partnerName} />
            </S.PartnerPicture>
            <S.PartnerLink>
              <ULink
                external
                small
                linkTo={partner.partnerLink}
              >{partner.partnerName}</ULink>
            </S.PartnerLink>
          </Grid>
        </S.PartnerSingle>
      ))}
    </S.PartnersSection>
  )
}

export default PartnersSection