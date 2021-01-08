import React from "react"
import PropTypes from "prop-types"

const CardTitle = ({ title }) => (
  <p>{title}</p>
)

CardTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default CardTitle