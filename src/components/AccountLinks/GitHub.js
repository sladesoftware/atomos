import React from "react"
import PropTypes from "prop-types"
import AccountLink from "./AccountLink"
import { GitHubIcon } from "icons"

const GitHub = ({ url }) => (
  <AccountLink url={url}>
    <GitHubIcon />
  </AccountLink>
)

GitHub.propTypes = {
  url: PropTypes.string.isRequired
}

export default GitHub