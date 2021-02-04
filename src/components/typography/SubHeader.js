import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
`

const StyledHeader = styled.h4`
  margin-right: 0.5rem;
`

const SubHeader = ({ children }) => (
  <Container>
    <StyledHeader>
      {children}
    </StyledHeader>
  </Container>
)

SubHeader.propTypes = {
  children: PropTypes.node.isRequired
}

export default SubHeader