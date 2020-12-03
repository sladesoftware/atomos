import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.main`
  min-height: 100vh;
  padding: 5rem 1rem;
  background-color: white;
  flex: 1;
`

const Main = ({ children }) => (
  <Container>
    {children}
  </Container>
)

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main