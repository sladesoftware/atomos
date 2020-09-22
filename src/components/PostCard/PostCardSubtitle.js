import React from "react"
import PropTypes from "prop-types"

const PostCardSubtitle = ({ text }) => (
  <h4>{text}</h4>
)

PostCardSubtitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default PostCardSubtitle