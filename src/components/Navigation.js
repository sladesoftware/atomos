import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinks = styled.ul`
  list-style-type: none;
`

const NavItem = styled.li`
  display: inline-block;
  margin: 0 1rem;

  &:first-child {
    margin-left: -1rem;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 100;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

// TODO: Move this to a query.
const NavBar = () => (
  <NavLinks>
    <NavItem
      data-sal="fade"
      data-sal-delay="400"
    >
      <NavLink to="/blog">
        blog
      </NavLink>
    </NavItem>

    <NavItem
      data-sal="fade"
      data-sal-delay="500"
    >
      <NavLink to="/portfolio">
        portfolio
      </NavLink>
    </NavItem>

    <NavItem
      data-sal="fade"
      data-sal-delay="600"
    >
      <NavLink to="/products">
        products
      </NavLink>
    </NavItem>
  </NavLinks>
)

export default NavBar