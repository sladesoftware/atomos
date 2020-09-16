import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import AccountLink from "./AccountLink"

const LinkedIn = ({ url }) => (
  <AccountLink url={url}>
    <FontAwesomeIcon icon={faLinkedin} />
  </AccountLink>
)

LinkedIn.propTypes = {
  url: PropTypes.string.isRequired
}

export default LinkedIn