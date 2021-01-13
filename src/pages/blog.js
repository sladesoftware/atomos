import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import {
  Page,
  PageHeader,
  Layout,
  GutterContainer,
  BlogPostCard
} from "components"

const Centered = styled.div`
  display: flex;
  justify-content: center;
`

const Blog = ({ data }) => (
  <Page title="Blog">
    <Layout>
      <Centered>
        <GutterContainer>
          <PageHeader>
            {`Posts`}
          </PageHeader>

          {data && data.allMdx.nodes.map((post, index) => (
            <div
              key={index}
              data-sal="slide-up"
              data-sal-delay={index * 100}
              data-sal-duration={500}
            >
              <BlogPostCard
                title={post.frontmatter.title}
                subtitle={post.frontmatter.date}
                text={post.excerpt}
                readTime={post.timeToRead}
                url={post.frontmatter.slug}
              />

              {index < data.allMdx.nodes.length - 1 && (
                <hr />
              )}
            </div>
          ))}
        </GutterContainer>
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
        timeToRead
        frontmatter {
          slug
          title
          date(formatString: "Do MMM YYYY")
        }
      }
    }
  }
`