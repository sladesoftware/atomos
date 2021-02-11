import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.li``

const ListItem = ({ children }) => (
  <Container>
    {children}
  </Container>
)

ListItem.propTypes = {
  children: PropTypes.node
}

export default ListItem