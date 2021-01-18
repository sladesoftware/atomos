import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Page, PageHeader, Layout, GutterContainer } from "components"
import { PortfolioCard } from "sections/portfolio"

const PortfolioItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;

  & > * {
    margin-right: 2rem;
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
            <PortfolioCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              siteUrl={item.siteUrl}
              gitHubUrl={item.gitHubUrl}
              tag={item.tag}
              showGitHub={item.showGitHub}
            />
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
      }
    }
  }
`