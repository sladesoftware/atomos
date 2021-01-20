import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { media } from "styles"
import { Page, PageHeader, Layout, GutterContainer } from "components"
import { PortfolioCard } from "sections/portfolio"

const PortfolioItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;

  & > * {
    margin-right: 2rem;

    ${media.phone`
      margin-right: 0;
    `}
  }
`

const Portfolio = ({ data }) => (
  <Page title="Portfolio">
    <Layout>
      <GutterContainer>
        <PageHeader>
          {`Portfolio`}
        </PageHeader>

        <PortfolioItems>
          {data.portfolio.items.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </PortfolioItems>
      </GutterContainer>
    </Layout>
  </Page>
)

export default Portfolio

export const query = graphql`
  query {
    portfolio {
      items {
        title
        description
        imageUrl
        siteUrl
        gitHubUrl
        tag
        showGitHub
        type
      }
    }
  }
`