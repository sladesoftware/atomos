import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const NavLinks = styled.ul`
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

const NavBar = () => {
  const { site } = useStaticQuery(QUERY)

  const pages = (site && site.siteMetadata && site.siteMetadata.pages) || []

  return (
    <NavLinks>
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

export default NavBar