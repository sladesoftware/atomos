import React from "react"
import PropTypes from "prop-types"
import { faTags } from "@fortawesome/free-solid-svg-icons"
import { IconText } from "components"

const Tags = ({ tags }) => (
  <IconText
    icon={faTags}
    text={`${tags.length} tags`}
  />
)

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Tags