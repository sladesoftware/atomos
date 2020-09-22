import React from "react"
import PropTypes from "prop-types"

const PostCardImage = ({ image, altText }) => (
  <img src={image} alt={altText} />
)

PostCardImage.propTypes = {
  image: PropTypes.node.isRequired,
  altText: PropTypes.string
}