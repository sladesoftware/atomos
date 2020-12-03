import React from "react"
import styled from "styled-components"
import { MainFooter } from "./MainFooter"
import SocialFooter from "./SocialFooter"
import LegalFooter from "./LegalFooter"

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #555;
  color: #bbb;
  line-height: 1.5;
  font-size: 0.75rem;
`

const Footer = () => (
  <StyledFooter>
    <MainFooter />
    <SocialFooter />
    <LegalFooter />
  </StyledFooter>
)

export default Footer