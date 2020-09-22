import React from "react"
import PropTypes from "prop-types"

const PostCard = ({ children }) => (
  <div>
    {children}
  </div>
)

PostCard.propTypes = {
  children: PropTypes.node
}

export default PostCard