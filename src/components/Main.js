import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.main`
  min-height: 100vh;
  padding: ${props => props.paddingTop} 1rem 0 1rem;
  background-color: white;
  flex: 1;
`

const Main = ({ children, applyTopPadding }) => (
  <Container paddingTop={applyTopPadding ? "4rem" : 0}>
    {children}
  </Container>
)

Main.defaultProps = {
  applyTopPadding: true
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  applyTopPadding: PropTypes.bool
}

export default Main