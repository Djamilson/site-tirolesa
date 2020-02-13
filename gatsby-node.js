exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const imagesFilesArray = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "05.jpg",
    "07.jpg",
    "08.jpg",
  ]


  return graphql(`
    {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 2000) {
              src
              srcSet
              sizes
              aspectRatio
              originalName
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const { data } = result
    const { allImageSharp } = data
    const { edges } = allImageSharp
    const dataForContext = edges.filter(
      gatsbyimage =>
        imagesFilesArray.indexOf(gatsbyimage.node.fluid.originalName) !== -1
    )
    createPage({
      path: "/assets/",
      component: require.resolve("./src/templates/ImageFluidTemplate.js"),
      context: {
        allImagesData: dataForContext,
      },
    })
  })
}
