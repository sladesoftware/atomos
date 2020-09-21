import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"
import { AccountLinks } from "./AccountLinks"
import logo from "images/logo-transparent.png"

const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  padding: 1rem;
  align-items: center;
  background-color: white;
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
    <Link to="/">
      <Logo src={logo} alt="Slade Software Ltd" />
    </Link>

    <Spacer />
    <Navigation />
    <AccountLinks />
  </Nav>
)

export default NavBar