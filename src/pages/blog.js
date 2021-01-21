import React from "react"
import { graphql } from "gatsby"
import {
  Page,
  PageHeader,
  Layout,
  GutterContainer
} from "components"
import { BlogPostCard } from "sections/blog"

const Blog = ({ data }) => (
  <Page title="Blog">
    <Layout>
      <GutterContainer>
        <PageHeader>
          {`Posts`}
        </PageHeader>

        {data && data.allMdx.nodes.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.frontmatter.title}
            publishedDate={post.frontmatter.date}
            text={post.excerpt}
            readTime={post.timeToRead}
            url={post.frontmatter.slug}
          />
        ))}
      </GutterContainer>
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