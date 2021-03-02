import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, image, pathname, article }) => {
  const intl = useIntl()
  const seo = {
    title: title || intl.formatMessage({id:"seo.title"}),
    description: description || intl.formatMessage({id:"seo.description"}),
    image: image || "/meta_image.png",
    url: `https://icofom2021.ca${pathname || "/"}`,
  }
  return (
    <>
      <Helmet title={seo.title}>
        <link rel="stylesheet" href="https://use.typekit.net/aft7rvk.css" />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
    </>
  )
}
export default SEO