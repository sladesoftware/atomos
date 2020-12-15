import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const StyledNavLinks = styled.ul`
  ${props => !props.showBullet && `
    list-style-type: none;
    margin: 0;
    overflow: hidden;

    & > li {
      margin: 0;
    }
  `}
`

const NavItem = styled.li`
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color ?? props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const NavLinks = ({ links, linkColor, showBullet }) => (
  <StyledNavLinks showBullet={showBullet}>
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
  showBullet: false
}

NavLinks.propTypes = {
  links: PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  linkColor: PropTypes.string,
  showBullet: PropTypes.bool
}

export default NavLinks