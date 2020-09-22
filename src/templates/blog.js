import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Template = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug }}) {
      body
      frontmatter {
        date(formatString: "DDD MMM YYYY")
        title
      }
    }
  }
`

export default Template