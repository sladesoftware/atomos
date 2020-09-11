import React from "react"
import styled from "styled-components"
import { Page, CenteredLayout, SEO, Main, Logo, Footer } from "components"

const Subtitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
`

const IndexPage = () => (
  <Page>
    <CenteredLayout>
      <SEO title="Home" />

      <Main>
        <Logo />
        <Subtitle
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="200"
        >
          Making your life easier
        </Subtitle>
      </Main>

      <Footer />
    </CenteredLayout>
  </Page>
)

export default IndexPage
