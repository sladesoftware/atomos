import React from "react"
import { Page, Layout } from "components"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMdx {
      nodes {
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
          <p>Title: {post.frontmatter.title}</p>
          <p>Date: {post.frontmatter.date}</p>
          <p>Published: {post.frontmatter.published}</p>
        </div>
      ))}
    </Layout>
  </Page>
)

export default Blog