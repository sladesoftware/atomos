import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const ViewIcon = ({ url }) => (
  <StyledLink to={url} title="View">
    <FontAwesomeIcon icon={faEye} />
  </StyledLink>
)

ViewIcon.propTypes = {
  url: PropTypes.string.isRequired
}

export default ViewIcon