import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import {
  Page,
  Layout,
  PostCard,
  PostCardTitle,
  PostCardSubtitle,
  PostCardContent,
  PostCardActions
} from "components"

const Centered = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 2rem;
`

const Blog = ({ data }) => (
  <Page title="Blog">
    <Layout>
      <Centered>
        <Container>
          {data && data.allMdx.nodes.map((post, index) => (
            <PostCard key={index}>
              {/* TODO: Image */}
              {/* TODO: Time to read */}

              <PostCardTitle text={post.frontmatter.title} />
              <PostCardSubtitle text={post.frontmatter.date} />

              <PostCardContent>
                {post.excerpt}
              </PostCardContent>

              <PostCardActions>
                <Link to={post.frontmatter.slug}>
                  Read
                </Link>
              </PostCardActions>
            </PostCard>
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
          date(formatString: "DDD MMM YYYY")
        }
      }
    }
  }
`