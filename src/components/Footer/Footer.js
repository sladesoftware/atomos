import React from "react"
import styled from "styled-components"
import CompanyDetails from "./CompanyDetails"

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${props => props.theme.footer.height};
  background-color: #2a2a2a;
  margin-top: 0.5rem;
  width: 100%;
  z-index: -1000;
`

const Content = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

const Footer = () => (
  <StyledFooter>
    <Content>
      <CompanyDetails />
    </Content>
  </StyledFooter>
)

export default Footer