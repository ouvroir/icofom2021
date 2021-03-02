import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'

import Grid from '../../Grid'
import ULink from '../../ULink'

import * as T from '../../../styles/Texts'
import * as S from './styles'

const AboutSection = () => {
  return(
    <S.AboutSection>
      <Grid>
        <S.AboutSectionWrapper>
          <T.P>
            <FormattedMessage 
              id="about.description"
              values={{
                p: (...chunks) => <p>{chunks}</p>
              }}
            />
          </T.P>
          <ULink
            external
            small
            linkTo="http://icofom.mini.icom.museum/fr/"
          >
            <FormattedMessage id="about.icofomWebsite" />
          </ULink>
          <S.Comitee>
            <T.Mark><FormattedMessage id="about.comitee" /></T.Mark>
            <ul>
              <li><T.P>Yves Bergeron</T.P></li>
              <li><T.P>Michèle Rivet</T.P></li>
              <li><T.P>Emmanuel Château-Dutier</T.P></li>
              <li><T.P>Camille Labadie</T.P></li>
            </ul>
          </S.Comitee>
          <S.Comitee>
            <T.Mark><FormattedMessage id="about.localComitee" /></T.Mark>
            <ul>
              <li><T.P>Lisa Baillargeon,&nbsp;</T.P><T.Small>Université de Québec à Montréal</T.Small></li>
              <li><T.P>Yves Bergeron,&nbsp;</T.P><T.Small>Université de Québec à Montréal</T.Small></li>
              <li><T.P>Emmanuel Château-Dutier,&nbsp;</T.P><T.Small>Université de Montréal</T.Small></li>
              <li><T.P>Jean-François Gauvin,&nbsp;</T.P><T.Small>CÉLAT, Université Laval</T.Small></li>
              <li><T.P>Laurent Jérôme,&nbsp;</T.P><T.Small>CIÉRA, Université de Québec à Montréal</T.Small></li>
              <li><T.P>Nada Guzin-Lukic,&nbsp;</T.P><T.Small>Université du Québec en Outaouais</T.Small></li>
              <li><T.P>Elisabeth Kaine,&nbsp;</T.P><T.Small>Université du Québec à Chicoutimi</T.Small></li>
              <li><T.P>Jonathan Lainey,&nbsp;</T.P><T.Small>Musée McCord</T.Small></li>
              <li><T.P>Maryse Paquin,&nbsp;</T.P><T.Small>Université du Québec à Trois-Rivières</T.Small></li>
              <li><T.P>Michèle Rivet,&nbsp;</T.P><T.Small>ICOM Canada</T.Small></li>
            </ul>
          </S.Comitee>
          <S.Comitee>
            <T.Mark><FormattedMessage id="about.scienceComitee" /></T.Mark>
            <S.ComiteeContent>
              <ul>
                <li><T.P>Karen Elizabeth Brown&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.us"/>),</T.Small></li>
                <li><T.P>Bruno Brulon Soares&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.brazil"/>),</T.Small></li>
                <li><T.P>Anna Leshchenko&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.russia"/>),</T.Small></li>
                <li><T.P>Daniel Schmitt&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.france"/>),</T.Small></li>
                <li><T.P>Marion Bertin&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.france"/>),</T.Small></li>
                <li><T.P>Lynn Maranda&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.canada"/>),</T.Small></li>
                <li><T.P>Yves Bergeron&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.canada"/>),</T.Small></li>
                <li><T.P>Yun Shun Susie Chung&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.us"/>),</T.Small></li>
                <li><T.P>Elizabeth Weiser&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.us"/>),</T.Small></li>
                <li><T.P>Supreo Chanda&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.india"/>),</T.Small></li>
                <li><T.P>Luciana M. de Carvalho&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.brazil"/>),</T.Small></li>
                <li><T.P>Michèle Rivet C.M&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.canada"/>),</T.Small></li>
                <li><T.P>Kuo-ning Chen&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.taiwan"/>),</T.Small></li>
                <li><T.P>Olga Nazor&nbsp;</T.P><T.Small>(<FormattedMessage id="countries.argentina"/>),</T.Small></li>
              </ul>
            </S.ComiteeContent>
          </S.Comitee>
        </S.AboutSectionWrapper>
      </Grid>
    </S.AboutSection>
  )
}

export default AboutSection