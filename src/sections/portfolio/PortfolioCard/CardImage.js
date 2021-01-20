import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { ViewIcon } from "icons"

const Container = styled.div`
  position: relative;
  flex: 1 auto;
  text-align: center;
  overflow: hidden;
`

const Image = styled.img`
  margin: 0;
  max-height: 250px;
`

const ViewIconContainer = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`

const TypeBanner = styled.div`
  position: absolute;
  left: 2rem;
  top: 2rem;
  text-align: center;
  background-color: ${props => props.type === "project" ? props.theme.colors.secondary : props.theme.colors.primary};
  color: #fff;
  transform-origin: left;
  transform: rotate(-45deg) translateX(-50%);
  width: 100%;
  padding-left: 1rem;
`

const CardImage = ({ imageUrl, siteUrl, type }) => (
  <Container>
    <Image src={!!imageUrl && imageUrl !== "" ? imageUrl : "https://via.placeholder.com/400x250.png"} />

    {siteUrl && (
      <ViewIconContainer>
        <ViewIcon url={siteUrl} />
      </ViewIconContainer>
    )}

    <TypeBanner type={type}>
      {type}
    </TypeBanner>
  </Container>
)

CardImage.propTypes = {
  imageUrl: PropTypes.string,
  siteUrl: PropTypes.string,
  type: PropTypes.oneOf(["project", "article"])
}

export default CardImage