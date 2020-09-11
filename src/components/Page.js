import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { theme } from "styles/theme"

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page