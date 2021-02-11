import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const NumberedList = styled.ol``
const BulletedList = styled.ul``

const List = ({ children, numbered }) => {
  const Container = numbered ? NumberedList : BulletedList

  return (
    <Container>
      {children}
    </Container>
  )
}

List.defaultProps = {
  numbered: false
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  numbered: PropTypes.bool
}

export default List