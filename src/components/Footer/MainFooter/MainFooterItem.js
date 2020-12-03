import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  padding: 1rem;
  max-width: 14.5rem;
  text-align: left;
`

const Header = styled.h5`
  margin-bottom: 0.6rem;
  color: #fff;
`

const MainFooterItem = ({ header, children }) => (
  <Container>
    {!!header && (
      <Header>
        {header}
      </Header>
    )}

    {children}
  </Container>
)

MainFooterItem.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node
}

export default MainFooterItem