import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${props => props.theme.footer.height};
  background-color: #2a2a2a;
  margin-top: 0.5rem;
  width: 100%;
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
      Slade Software Ltd &copy;
    </Content>
  </StyledFooter>
)

export default Footer