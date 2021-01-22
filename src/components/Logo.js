import React from "react"
import styled from "styled-components"
import logo from "images/logo-transparent.png"

const Container = styled.div`
  max-width: 800px;
`

const Image = styled.img`
`

const Logo = () => (
  <Container
    data-sal="fade"
    data-sal-duration="1000"
  >
    <Image src={logo} alt="Slade Software Ltd" />
  </Container>
)

export default Logo