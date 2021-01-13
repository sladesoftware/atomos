import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import GutterContainer from "./GutterContainer"
import Navigation from "./Navigation"
import { AccountLinks } from "./AccountLinks"
import logo from "images/logo-transparent.png"

const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 1rem;
  background-color: white;
  z-index: 1000;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  max-height: 50px;
  margin: 0;
`

const Spacer = styled.div`
  flex-grow: 1;
`

const NavBar = () => (
  <Nav>
    <GutterContainer>
      <InnerContainer>
        <Link to="/">
          <Logo src={logo} alt="Slade Software Ltd" />
        </Link>

        <Spacer />
        <Navigation />
        <AccountLinks />
      </InnerContainer>
    </GutterContainer>
  </Nav>
)

export default NavBar