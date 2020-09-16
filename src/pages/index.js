import React from "react"
import styled from "styled-components"
import {
  AccountLinks,
  CenteredLayout,
  Footer,
  Logo,
  Main,
  Navigation,
  Page
} from "components"

const Subtitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
`

const IndexPage = () => (
  <Page title="Home">
    <CenteredLayout>
      <Main>
        <Logo />
        <Subtitle
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="200"
        >
          Making your life easier
        </Subtitle>

        <Navigation />
        <AccountLinks />
      </Main>

      <Footer />
    </CenteredLayout>
  </Page>
)

export default IndexPage
