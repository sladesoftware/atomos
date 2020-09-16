import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import AccountLink from "./AccountLink"

const GitHub = ({ url }) => (
  <AccountLink url={url}>
    <FontAwesomeIcon icon={faGithub} />
  </AccountLink>
)

GitHub.propTypes = {
  url: PropTypes.string.isRequired
}

export default GitHub