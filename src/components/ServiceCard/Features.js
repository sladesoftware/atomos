import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.ul`
  padding: 1rem;
  margin;
  flex: 1 auto;
`

const Features = ({ features }) => (
  <Container>
    {features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </Container>
)

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Features