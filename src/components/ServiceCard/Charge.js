import React from "react"
import PropTypes from "prop-types"

const Charge = ({ charge, type }) => (
  <>
    {charge && (
      <p
        style={{
          color: type === "primary" ? "#000" : "#666"
        }}
      >
        {`${charge.rate}/${charge.unit}`}
      </p>
    )}
  </>
)

Charge.propTypes = {
  charge: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  }),
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired
}

export default Charge