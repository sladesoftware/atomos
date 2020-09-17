import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { media } from "styles"

const Container = styled.main`
  z-index: 1000;
  min-height: 480px;
  background-color: white;
  padding-bottom: 5rem;
  margin-bottom: ${props => props.theme.footer.height};

  ${media.phone`
    margin-bottom: ${props => props.theme.footer.phoneHeight};
  `}
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