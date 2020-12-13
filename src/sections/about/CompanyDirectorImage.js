import React from "react"
import styled from "styled-components"
import { CircularImage } from "components"
import companyLogo from "images/apple-touch-icon.png"
import director from "images/samuelslade.jpg"

const Container = styled.div`
  position: relative;
`

const BackImage = styled.div`
  position: relative;
  top: 0;
  left: 25%;
`

const FrontImage = styled.div`
  position: absolute;
  top: 0;
  left: -25%;
`

const CompanyDirectorImage = () => (
  <Container>
    <BackImage>
      <CircularImage
        size="lg"
        image={companyLogo}
        addBorder
      />
    </BackImage>

    <FrontImage>
      <CircularImage
        size="lg"
        image={director}
      />
    </FrontImage>
  </Container>
)

export default CompanyDirectorImage