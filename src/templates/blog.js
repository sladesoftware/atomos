import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { Page, Layout } from "components"

const Centered = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  max-width: 1024px;
  margin: 0 2rem;
`

const Template = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Page title={frontmatter.title}>
      <Layout>
        <Centered>
          <Container>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>

            <MDXRenderer>
              {body}
            </MDXRenderer>
          </Container>
        </Centered>
      </Layout>
    </Page>
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