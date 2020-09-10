import React from "react"
import styled from "styled-components"
import { SEO, Main, Logo, Footer } from "components"
import "styles/baseline.css"

const Container = styled.div`
  max-width: 800px;
`

const IndexPage = () => (
  <Container>
    <SEO title="Home" />

    <Main>
      <Logo />
    </Main>

    <Footer />
  </Container>
)

export default IndexPage
