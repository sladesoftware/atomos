import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import NavLinks from "../../NavLinks"
import MainFooterItem from "./MainFooterItem"

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
    <MainFooterItem header="Quick Links">
      <NavLinks links={pages.filter(page => page.active)} />
    </MainFooterItem>
  )
}

export default QuickLinks