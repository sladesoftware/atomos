import React from "react"
import PropTypes from "prop-types"

const Features = ({ features }) => (
  <ul>
    {features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </ul>
)

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Features