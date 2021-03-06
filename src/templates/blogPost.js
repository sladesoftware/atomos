import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { Page, Layout, GutterContainer } from "components"

const Header = styled.div`
  display: flex;
`

const ReadTime = styled.div`
`

const Spacer = styled.div`
  flex-grow: 1;
`

const DatePublished = styled.div`
`

const getReadTime = readTime => {
  if (readTime === 1) {
    return `${readTime} minute`
  }

  return `${readTime} minutes`
}

const BlogPost = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body, timeToRead } = mdx

  return (
    <Page title={frontmatter.title}>
      <Layout>
        <GutterContainer>
          <Header>
            <ReadTime>
              Read time: {getReadTime(timeToRead)}
            </ReadTime>

            <Spacer />

            <DatePublished>
              {frontmatter.date}
            </DatePublished>
          </Header>

          <MDXRenderer>
            {body}
          </MDXRenderer>
        </GutterContainer>
      </Layout>
    </Page>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug }}) {
      body
      timeToRead
      frontmatter {
        date(formatString: "Do MMM YYYY")
      }
    }
  }
`

export default BlogPost
