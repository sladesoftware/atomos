import React from "react"
import styled from "styled-components"

const FixedFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.palette.footer};
  color: ${props => props.theme.palette.footerText};
`

const Footer = () => (
  <FixedFooter>
    Slade Software Ltd &copy;
  </FixedFooter>
)

export default Footer