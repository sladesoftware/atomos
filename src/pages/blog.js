import React from "react"
import { Page, Layout } from "components"
import { graphql, Link } from "gatsby"

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
          slug
          title
          date(formatString: "DDD MMM YYYY")
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
          <Link to={post.frontmatter.slug}>
            <h1>{post.frontmatter.title}</h1>
          </Link>
          
          <p>{post.frontmatter.date}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </Layout>
  </Page>
)

export default Blog