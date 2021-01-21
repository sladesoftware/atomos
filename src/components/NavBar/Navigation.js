import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

const NavLinks = styled.ul`
  display: flex;
  flex-direction: ${props => props.direction};
  list-style-type: none;
  margin: 0;
`

const NavItem = styled.li`
  display: inline-block;
  margin: 0 1rem;
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 100;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const QUERY = graphql`
  query {
    site {
      siteMetadata {
        pages {
          text
          path
          active
        }
      }
    }
  }
`

const NavBar = ({ direction }) => {
  const { site } = useStaticQuery(QUERY)

  const pages = (site && site.siteMetadata && site.siteMetadata.pages) || []

  return (
    <NavLinks direction={direction}>
      {pages
        .filter(page => page.active)
        .map((page, index) => (
          <NavItem
            key={index}
            data-sal="fade"
            data-sal-delay={(index + 1) * 100}
          >
            <NavLink to={page.path}>
              {page.text}
            </NavLink>
          </NavItem>
        ))}
    </NavLinks>
  )
}

NavBar.defaultProps = {
  direction: "row"
}

NavBar.propTypes = {
  direction: PropTypes.oneOf(["row", "column"])
}

export default NavBar