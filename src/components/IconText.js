import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.25rem;
  color: ${props => props.theme.colors.secondary};
  margin-top: 3px;
`

const DateText = styled.div`
`

const IconText = ({ icon, text }) => (
  <Container>
    <Icon icon={icon} />
    
    <DateText>
      {text}
    </DateText>
  </Container>
)

IconText.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
}

export default IconText