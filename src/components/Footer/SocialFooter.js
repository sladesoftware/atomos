import React from "react"
import styled from "styled-components"
import { AccountLinks } from "components"

const StyledSocialFooter = styled.section`
  padding: 0 1.875rem 1.25rem;
`

const SocialLinks = styled.div`
  border-top: 1px #777 solid;
  padding-top: 1.25rem;
  color: #fff;
`

const SocialFooter = () => (
  <StyledSocialFooter>
    <SocialLinks>
      <AccountLinks />
    </SocialLinks>
  </StyledSocialFooter>
)

export default SocialFooter