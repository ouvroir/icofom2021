import React from 'react'
import { graphql } from 'gatsby'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import * as T from '../../styles/Texts'
import * as S from './styles'

import Layout from '../Layout'
import Grid from '../Grid'
import ULink from '../ULink'

const Publication = ( {data }) => {
  const { frontmatter, body, fields } = data.mdx
  const { siteUrl } = data.site.siteMetadata

  return(
    <Layout>
      <S.PubliWrapper>
        <S.PubliDownload>
          <ULink
            external
            download={true}
            small
            linkTo={`${siteUrl}${fields.slug.slice(0, -1)}.pdf`}
          ><T.Mark><FormattedMessage id="header.pdfDownload" /></T.Mark></ULink>
        </S.PubliDownload>
        <Grid>
          <S.PubliMetadata>
            <T.H1b>{frontmatter.title}</T.H1b>
            {(frontmatter.authors.map((author, index) => (
              <S.Author key={`author-${index}`}>
                <T.Mark>{author.name}</T.Mark>
                <T.Small>{author.institution}</T.Small>
              </S.Author>
            )))}
          </S.PubliMetadata>
          <S.PubliContent>
            <MDXRenderer>{body}</MDXRenderer>
          </S.PubliContent>
        </Grid>
        <S.PubliFooter>
        </S.PubliFooter>
      </S.PubliWrapper>
    </Layout>
  )
}

export const query = graphql
`
  query PublicationsById($id: String!) {
    mdx(
      id: { eq: $id }
    ){
      body
      frontmatter {
        title
        authors {
          name
          institution
        }
      }
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default Publication