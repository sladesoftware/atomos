import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const LogoContainer = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  overflow: hidden;
  border: ${props => props.addBorder ? `1px dashed ${props.theme.colors.secondary}` : `none`};
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
      return 128

    default:
      return 48
  }
}

const CircularImage = ({ size, addBorder, image }) => {
  const value = getLogoSize(size)

  return (
    <LogoContainer
      width={value}
      height={value}
      addBorder={addBorder}
    >
      <Logo alt="Slade Software Ltd" src={image} />
    </LogoContainer>
  )
}

CircularImage.defaultProps = {
  size: "md",
  addBorder: false
}

CircularImage.propTypes = {
  size: PropTypes.oneOf([
    "sm", "md", "lg"
  ]),
  addBorder: PropTypes.bool,
  image: PropTypes.node.isRequired
}

export default CircularImage