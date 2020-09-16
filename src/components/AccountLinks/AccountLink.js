import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: inline-block;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
  font-size: 1.4rem;
`

const StyledLink = styled(Link)`
  color: unset;
  transition: color 0.1s ease-out;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const AccountLink = ({ children, ...props }) => (
  <Container data-sal="slide-up" data-sal-duration="1000">
    <StyledLink {...props}>
      {children}
    </StyledLink>
  </Container>
)

export default AccountLink