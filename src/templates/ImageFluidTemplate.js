import React from "react"
import Img from "gatsby-image"
const ImageFluidTemplate = props => {
  const { pageContext } = props
  const { allImagesData } = pageContext

  return (
    <div style={{ maxWidth: "960px", margin: "0.85rem" }}>
      <h2>This is a page with the images injected via Page Context</h2>
      <div>
        {allImagesData.map(item => (
          <Img
            key={item.node.id}
            fluid={item.node.fluid}
            style={{ margin: "1rem" }}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageFluidTemplate
