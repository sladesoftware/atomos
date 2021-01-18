import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledLink = styled.a`
  color: unset;
  transition: color 0.1s ease-out;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const IconLink = ({ url, children }) => (
  <StyledLink href={url} target="_blank">
    {children}
  </StyledLink>
)

IconLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default IconLink