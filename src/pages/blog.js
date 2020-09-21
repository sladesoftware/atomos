import React from "react"
import { Page, Layout } from "components"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
          published
        }
      }
    }
  }
`

const Blog = ({ data }) => (
  <Page title="Blog">
    <Layout>
      {data && data.allMdx.nodes.map((post, index) => (
        <div key={index}>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </Layout>
  </Page>
)

export default Blog