import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledParagraph = styled.p`
  text-align: ${props => props.textAlign};
`

const Paragraph = ({ alignment, children }) => (
  <StyledParagraph textAlign={alignment}>
    {children}
  </StyledParagraph>
)

Paragraph.defaultPropTypes = {
  alignment: "inherit"
}

Paragraph.propTypes = {
  alignment: PropTypes.oneOf([
    "left", "right", "center", "justify"
  ])
}

export default Paragraph