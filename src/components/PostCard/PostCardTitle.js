import React from "react"
import PropTypes from "prop-types"

const PostCardTitle = ({ text }) => (
  <h1>{text}</h1>
)

PostCardTitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default PostCardTitle