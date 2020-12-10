import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const StyledNavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  overflow: hidden;
`

const NavItem = styled.li`
  margin: 0;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const NavLinks = ({ links, linkColor }) => (
  <StyledNavLinks>
    {links.map((link, index) => (
      <NavItem key={index}>
        <NavLink to={link.path} color={linkColor}>
          {link.text}
        </NavLink>
      </NavItem>
    ))}
  </StyledNavLinks>
)

NavLinks.defaultProps = {
  linkColor: "#eee"
}

NavLinks.propTypes = {
  links: PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  linkColor: PropTypes.string
}

export default NavLinks