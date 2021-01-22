import React from "react"
import {
  AccountLinks,
  Footer,
  Logo,
  Main,
  Navigation,
  Page
} from "components"

// TODO: There are issues when building into production using Styled Components.
//       They work fine locally, but not when using `npm run build`.
//       Using manual styles for now to get it working while investigating the cause.
const Container = ({ children }) => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {children}
  </div>
)

const Subtitle = ({ children }) => (
  <h2
    data-sal="fade"
    data-sal-duration="1000"
    data-sal-delay="200"
    style={{
      color: "#fda340"
    }}
  >
    {children}
  </h2>
)

const NavContainer = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      margin: "0 0 1rem 0"
    }}
  >
    {children}
  </div>
)

const IndexPage = () => (
  <Page title="Home">
    <Main applyTopPadding={false}>
      <Container>
        <Logo />
        <Subtitle>
          {`Making your life easier`}
        </Subtitle>

        <NavContainer>
          <Navigation />
        </NavContainer>

        <AccountLinks />
      </Container>
    </Main>

    <Footer />
  </Page >
)

export default IndexPage
