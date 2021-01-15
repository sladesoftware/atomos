import React from "react"
import { Page, PageHeader, Layout, GutterContainer } from "components"
import { PortfolioCard } from "sections/portfolio"

const Portfolio = () => (
  <Page title="Portfolio">
    <Layout>
      <GutterContainer>
        <PageHeader>
          {`Portfolio`}
        </PageHeader>

        <PortfolioCard />
      </GutterContainer>
    </Layout>
  </Page>
)

export default Portfolio