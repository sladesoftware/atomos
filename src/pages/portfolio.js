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

        <PortfolioCard
          title="Header"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
          siteUrl="https://www.sladesoftware.co.uk/"
          gitHubUrl="https://github.com/sladesoftware/atomos"
        />
      </GutterContainer>
    </Layout>
  </Page>
)

export default Portfolio