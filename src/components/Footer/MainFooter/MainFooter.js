import React from "react"
import styled from "styled-components"
import { media } from "styles"
import CompanyDetails from "./CompanyDetails"
import QuickLinks from "./QuickLinks"

const NavigationFooter = styled.section`
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-wrap: wrap;
  color: #eee;
  justify-content: space-around;

  ${media.tablet`
    justify-content: space-between;
  `}

  ${media.phone`
    justify-content: none;
  `}
`

const NavigationSection = styled.div`
  padding: 1.25rem;
  min-width: 12.5rem;
`

const MainFooter = () => (
  <NavigationFooter>
    <NavigationSection>
      <CompanyDetails />
    </NavigationSection>

    <NavigationSection>
      <QuickLinks />
    </NavigationSection>
  </NavigationFooter>
)

export default MainFooter