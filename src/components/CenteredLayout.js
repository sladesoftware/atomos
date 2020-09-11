import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
`

const CenteredLayout = ({ children }) => (
  <Container>
    {children}
  </Container>
)

CenteredLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default CenteredLayout