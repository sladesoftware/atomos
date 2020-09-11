import React from "react"
import { Page, CenteredLayout, SEO, Main, Logo, Footer } from "components"
import "styles/baseline.css"

const IndexPage = () => (
  <Page>
    <CenteredLayout>
      <SEO title="Home" />

      <Main>
        <Logo />
      </Main>

      <Footer />
    </CenteredLayout>
  </Page>
)

export default IndexPage
