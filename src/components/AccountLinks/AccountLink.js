import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  display: inline-block;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
  font-size: 1.4rem;
`

const StyledLink = styled.a`
  color: unset;
  transition: color 0.1s ease-out;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const AccountLink = ({ url, children }) => (
  <Container data-sal="slide-up" data-sal-duration="1000">
    <StyledLink href={url} target="_blank">
      {children}
    </StyledLink>
  </Container>
)

AccountLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default AccountLink