import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { IconLink } from "components"

const Container = styled.div`
  display: inline-block;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
  font-size: 1.4rem;
`

const AccountLink = ({ url, children }) => (
  <Container data-sal="slide-up" data-sal-duration="1000">
    <IconLink url={url}>
      {children}
    </IconLink>
  </Container>
)

AccountLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default AccountLink