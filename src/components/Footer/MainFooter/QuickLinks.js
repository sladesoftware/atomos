import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  text-align: left;
  float: left;
`

const Header = styled.h5`
  margin-bottom: 0.6rem;
`

const NavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
`

const NavItem = styled.li`
  margin: 0;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #eee;

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

const QuickLinks = () => {
  const { site } = useStaticQuery(QUERY)

  const pages = site.siteMetadata.pages

  return (
    <Container>
      <Header>
        Quick Links
      </Header>

      <NavLinks>
        {pages
          .filter(page => page.active)
          .map((page, index) => (
          <NavItem key={index}>
            <NavLink to={page.path}>
              {page.text}
            </NavLink>
          </NavItem>
        ))}
      </NavLinks>
    </Container>
  )
}

export default QuickLinks