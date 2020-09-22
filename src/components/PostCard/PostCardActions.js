import React from "react"
import PropTypes from "prop-types"

const PostCardActions = ({ children }) => (
  <div>
    {children}
  </div>
)

PostCardActions.propTypes = {
  children: PropTypes.node.isRequired
}

export default PostCardActions