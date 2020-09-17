import React from "react"
import styled from "styled-components"
import { media } from "styles"
import CompanyDetails from "./CompanyDetails"
import QuickLinks from "./QuickLinks"

const StyledFooter = styled.footer`
  position: fixed;
  height: ${props => props.theme.footer.height};
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2a2a2a;
  margin-top: 0.5rem;
  width: 100%;
  z-index: -1000;
  color: white;

  ${media.phone`
    height: ${props => props.theme.footer.phoneHeight};
  `}
`

const Content = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;

  ${media.phone`
    display: block;
  `}
`

const Footer = () => (
  <StyledFooter>
    <Content>
      <CompanyDetails />
      <QuickLinks />
    </Content>
  </StyledFooter>
)

export default Footer