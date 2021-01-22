import React from "react"
import styled from "styled-components"
import {
  AccountLinks,
  Footer,
  Logo,
  Main,
  Navigation,
  Page
} from "components"

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Subtitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 1rem 0;
`

const IndexPage = () => (
  <Page title="Home">
    <Main applyTopPadding={false}>
      <Container>
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
      </Container>
    </Main>

    <Footer />
  </Page>
)

export default IndexPage
