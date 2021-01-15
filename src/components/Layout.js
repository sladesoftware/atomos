import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Main from "./Main"
import { Footer } from "./Footer"
import NavBar from "./NavBar"

const Container = styled.div`
  padding-top: 2rem;
`

const Layout = ({ children }) => (
  <Container>
    <NavBar />

    <Main>
      {children}
    </Main>

    <Footer />
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout