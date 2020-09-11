import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.main`
  z-index: 1000;
  min-height: 480px;
  background-color: white;
  padding-bottom: 5rem;
  margin-bottom: ${props => props.theme.footer.height};
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