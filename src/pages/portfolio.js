import React from "react"
import { graphql } from "gatsby"
import { Page, PageHeader, Layout, GutterContainer } from "components"
import { PortfolioCard } from "sections/portfolio"

const Portfolio = ({ data }) => (
  <Page title="Portfolio">
    <Layout>
      <GutterContainer>
        <PageHeader>
          {`Portfolio`}
        </PageHeader>

        {data.portfolio.items.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            siteUrl={item.siteUrl}
            gitHubUrl={item.gitHubUrl}
            tag={item.tag}
          />
        ))}
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
      }
    }
  }
`