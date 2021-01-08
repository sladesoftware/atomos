import React from "react"
import PropTypes from "prop-types"
import CardTitle from "./CardTitle"
import Features from "./Features"
import Charge from "./Charge"
import GetInTouch from "./GetInTouch"

const ServiceCard = ({ title, features, mainCharge, secondaryCharge }) => (
  <div>
    <CardTitle title={title} />
    <Features features={features} />
    <Charge charge={mainCharge} type="primary" />
    <Charge charge={secondaryCharge} type="secondary" />

    {!mainCharge && !secondaryCharge && (
      <GetInTouch />
    )}
  </div>
)

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  mainCharge: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  }),
  secondaryCharge: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  })
}

export default ServiceCard