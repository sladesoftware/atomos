import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import AccountLink from "./AccountLink"

const StackOverflow = ({ url }) => (
  <AccountLink to={url}>
    <FontAwesomeIcon icon={faStackOverflow} />
  </AccountLink>
)

StackOverflow.propTypes = {
  url: PropTypes.string.isRequired
}

export default StackOverflow