import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const ChildContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 0 2rem;
`

const GutterContainer = ({ children }) => (
  <Container>
    <ChildContainer>
      {children}
    </ChildContainer>
  </Container>
)

GutterContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default GutterContainer