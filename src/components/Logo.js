import React from "react"
import styled from "styled-components"
import logo from "images/logo-transparent.png"

const Container = styled.div`
  display: flex;
  padding: 0 2rem 0 2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  align-items: flex-start;
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