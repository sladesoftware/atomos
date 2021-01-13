import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 1rem;
  text-align: center;
`

const Title = styled.h2`
  margin: 0;
`

const CardTitle = ({ title }) => (
  <Container>
    <Title>
      {title}
    </Title>
  </Container>
)

CardTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default CardTitle