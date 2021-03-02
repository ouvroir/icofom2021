const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value: `/publications${value}`,
        })
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql
  (`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if(result.errors) {
    reporter.panicOnBuild('error on createPages query')
  }

  const publications = result.data.allMdx.edges
  publications.forEach(({ node }, index) => {

    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/components/Publication/index.js'),
      context: { id: node.id }, 
    })
  })
}