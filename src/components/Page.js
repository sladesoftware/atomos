import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import sal from "sal.js"
import { theme, GlobalStyles } from "styles"
import SEO from "./SEO"

const Page = ({ title, children }) => {
  useEffect(() => {
    sal()
  })

  return (
    <>
      <SEO title={title} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Page