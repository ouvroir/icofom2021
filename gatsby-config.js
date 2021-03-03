module.exports = {
  siteMetadata: {
    siteUrl: "http://www.icofom2021.ca/", // No trailing slash allowed!
    image: "/meta_image.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-59170978-1",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options:{
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "publications",
        path: "src/publications/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `es`, `fr`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
  ],
};
