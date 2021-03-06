import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import CardTitle from "./CardTitle"
import Features from "./Features"
import Charge from "./Charge"
import GetInTouch from "./GetInTouch"
import ViewDetail from "./ViewDetail"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin: 1rem;
  width: 20rem;
`

const ServiceCard = ({ title, features, mainCharge, secondaryCharge, pageUrl }) => (
  <Container>
    <CardTitle title={title} />
    <Features features={features} />
    <Charge
      mainCharge={mainCharge}
      secondaryCharge={secondaryCharge}
    />

    {!mainCharge && !secondaryCharge && (
      <GetInTouch />
    )}

    {pageUrl && <ViewDetail url={pageUrl} />}
  </Container>
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
  }),
  pageUrl: PropTypes.string
}

export default ServiceCard