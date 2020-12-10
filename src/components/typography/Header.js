import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
`

const StyledHeader = styled.h3`
  margin-right: 0.5rem;
`

const AnchorTag = styled.a`
  display: block;
  position: relative;
  top: ${props => props.top};
  visibility: hidden;
`

const Header = ({ anchorId, offset = false, children }) => (
  <Container>
    <StyledHeader>
      {children}
    </StyledHeader>

    {anchorId && (
      <AnchorTag id={anchorId} top={offset ? "-9rem" : 0}>
      </AnchorTag>
    )}
  </Container>
)

Header.propTypes = {
  anchorId: PropTypes.string,
  offset: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Header