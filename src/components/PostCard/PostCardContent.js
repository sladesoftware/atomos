import React from "react"
import PropTypes from "prop-types"

const PostCardContent = ({ children }) => (
  <div>
    {children}
  </div>
)

PostCardContent.propTypes = {
  text: PropTypes.string.isRequired
}

export default PostCardContent