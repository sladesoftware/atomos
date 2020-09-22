import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import {
  Page,
  Layout,
  BlogPostCard
} from "components"

const Centered = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 800px;
  margin: 0 2rem;
`

const Blog = ({ data }) => (
  <Page title="Blog">
    <Layout>
      <Centered>
        <Container>
          <h2>Posts</h2>

          {data && data.allMdx.nodes.map((post, index) => (
            <div key={index}>
              <BlogPostCard
                title={post.frontmatter.title}
                subtitle={post.frontmatter.date}
                text={post.excerpt}
                url={post.frontmatter.slug}
              />

              {index < data.allMdx.nodes.length - 1 && (
                <hr />
              )}
            </div>
          ))}
        </Container>
      </Centered>
    </Layout>
  </Page>
)

export default Blog

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
          date(formatString: "Do MMM YYYY")
        }
      }
    }
  }
`