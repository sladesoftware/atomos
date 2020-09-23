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

const NavContainer = styled.div`
  margin: 0 0 1rem 0;
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

        <NavContainer>
          <Navigation />
        </NavContainer>
        
        <AccountLinks />
      </Main>

      <Footer />
    </CenteredLayout>
  </Page>
)

export default IndexPage
