const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTourExample {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    return createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/TourTemplate.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
