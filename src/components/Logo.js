import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const QUERY = graphql`
  query {
    image: file(relativePath: { eq: "logo-transparent.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Logo = () => {
  const data = useStaticQuery(QUERY)

  if (!data || !data.image) {
    return (
      <p>
        Failed to load image
      </p>
    )
  }

  return (
    <>
      {data && data.image && (
        <Img
          alt="Slade Software Ltd"
          fluid={data.image.childImageSharp.fluid}
          fadeIn
        />
      )}
    </>
  )
}

export default Logo