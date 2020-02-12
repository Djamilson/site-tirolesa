import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "menu02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { url, altText, title } = props
  const styles = {
    width: "100%",
    height: "275px",
  }

  if (url) {
    return <img style={styles} src={url} alt={altText} title={title} />
  }

  return (
    <Img
      style={styles}
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt={altText}
      title={title}
    />
  )
}

export default Image
