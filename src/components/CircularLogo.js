import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import logo from "images/apple-touch-icon.png"

const LogoContainer = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  overflow: hidden;
  border-radius: 50%;
`

const Logo = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
`

function getLogoSize(size) {
  switch (size) {
    case "sm":
      return 24

    case "lg":
      return 72

    default:
      return 48
  }
}

const CircularLogo = ({ size }) => {
  const value = getLogoSize(size)

  return (
    <LogoContainer width={value} height={value}>
      <Logo alt="Slade Software Ltd" src={logo} />
    </LogoContainer>
  )
}

CircularLogo.defaultPropTypes = {
  size: "md"
}

CircularLogo.propTypes = {
  size: PropTypes.oneOf([
    "sm", "md", "lg"
  ])
}

export default CircularLogo