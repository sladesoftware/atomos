import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  padding: 0.5rem;
  background-color: #333;
`

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const LinkText = styled.h3`
  padding: 0;
  margin: 0;
`

const ViewDetail = ({ url }) => (
  <Container>
    <StyledLink to={url}>
      <LinkText>
        {`read more`}
      </LinkText>
    </StyledLink>
  </Container>
)

ViewDetail.propTypes = {
  url: PropTypes.string.isRequired
}

export default ViewDetail